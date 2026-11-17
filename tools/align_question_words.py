#!/usr/bin/env python3
"""Align existing HR question clips to their supplied transcripts using local Whisper timestamps."""
import json
import re
import subprocess
from pathlib import Path
from faster_whisper import WhisperModel
import numpy as np
import faster_whisper.transcribe as fw_transcribe

def decode_with_ffmpeg(input_file, sampling_rate=16000):
    """Decode with the installed FFmpeg binary, avoiding PyAV API-version differences."""
    audio = subprocess.check_output([
        "ffmpeg", "-nostdin", "-hide_banner", "-loglevel", "error", "-i", str(input_file),
        "-f", "s16le", "-ac", "1", "-ar", str(sampling_rate), "pipe:1"
    ])
    return np.frombuffer(audio, dtype=np.int16).astype(np.float32) / 32768.0

fw_transcribe.decode_audio = decode_with_ffmpeg

ROOT = Path(__file__).resolve().parents[1]

def tokenize(text):
    return re.findall(r"[A-Za-z0-9]+(?:[’'-][A-Za-z0-9]+)*", text)

def norm(text):
    return re.sub(r"[^a-z0-9]", "", text.lower().replace("’", "'"))

def align(reference, observed):
    """Needleman-Wunsch word alignment; returns observed index for each reference token."""
    n, m = len(reference), len(observed)
    dp = [[0.0] * (m + 1) for _ in range(n + 1)]
    back = [[None] * (m + 1) for _ in range(n + 1)]
    for i in range(1, n + 1): dp[i][0], back[i][0] = i * 0.95, "D"
    for j in range(1, m + 1): dp[0][j], back[0][j] = j * 0.95, "I"
    for i in range(1, n + 1):
        a = norm(reference[i - 1])
        for j in range(1, m + 1):
            b = norm(observed[j - 1][0])
            if a == b: sub = 0.0
            elif a and b and (a.startswith(b) or b.startswith(a)): sub = 0.35
            else: sub = 1.1
            choices = [(dp[i-1][j-1] + sub, "M"), (dp[i-1][j] + 0.95, "D"), (dp[i][j-1] + 0.95, "I")]
            dp[i][j], back[i][j] = min(choices, key=lambda x: x[0])
    result = {}
    i, j = n, m
    while i or j:
        move = back[i][j]
        if move == "M": result[i-1] = j-1; i -= 1; j -= 1
        elif move == "D": i -= 1
        elif move == "I": j -= 1
        else: break
    return result, dp[n][m] / max(n, 1)

def main():
    app = ROOT / "src/content.js"
    # Evaluate only the static question data in a minimal JS context through a generated JSON file.
    import subprocess
    raw = subprocess.check_output(["node", "-e", "const fs=require('fs'),vm=require('vm'),s={window:{}};vm.runInNewContext(fs.readFileSync('src/content.js','utf8'),s);console.log(JSON.stringify(s.window.INTERVIEW_QUESTIONS.map(q=>q.q)))"], cwd=ROOT, text=True)
    questions = json.loads(raw)
    model = WhisperModel("tiny.en", device="cpu", compute_type="int8", cpu_threads=4, num_workers=1)
    output = {}
    for index, text in enumerate(questions, start=1):
        audio = ROOT / "audio" / f"question-{index:02}.mp3"
        segments, _ = model.transcribe(str(audio), language="en", beam_size=1, word_timestamps=True, condition_on_previous_text=False, vad_filter=False)
        observed = []
        for segment in segments:
            for word in segment.words or []:
                observed.append((word.word.strip(), float(word.start), float(word.end)))
        ref = tokenize(text)
        matches, score = align(ref, observed)
        for ri, token in enumerate(ref):
            oi = matches.get(ri)
            if oi is None:
                continue
            heard, start, end = observed[oi]
            if not norm(token) or not norm(heard):
                continue
            output[token.lower()] = {"file": f"/audio/question-{index:02}.mp3", "start": round(max(0, start - 0.015), 3), "end": round(end + 0.02, 3), "heard": heard, "confidence_alignment": round(score, 3)}
        print(f"{index:02}: reference={len(ref)} heard={len(observed)} alignment_cost={score:.3f}", flush=True)
    (ROOT / "tools" / "question_word_segments.json").write_text(json.dumps(output, ensure_ascii=False, separators=(",", ":")) + "\n")
    print(f"Saved {len(output)} aligned question tokens.", flush=True)

if __name__ == "__main__": main()
