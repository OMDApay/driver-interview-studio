/* Interview questions and sample answers remain in English. */
window.INTERVIEW_CATEGORIES = [
  { id: "competencies", label: "أسئلة الكفاءات", en: "Competency questions", icon: "✳" },
  { id: "personal", label: "الأسئلة الشخصية", en: "About you", icon: "◉" },
  { id: "scenarios", label: "المواقف العملية", en: "Practical scenarios", icon: "↗" },
  { id: "experience", label: "الخبرة المهنية", en: "Your experience", icon: "⌘" },
  { id: "closing", label: "الأسئلة الختامية", en: "Closing questions", icon: "→" },
  { id: "protocol", label: "البروتوكول والسلوك المهني", en: "Diplomatic protocol & professional conduct", icon: "◈" },
  { id: "security", label: "الأمن والسرية", en: "Security & confidentiality", icon: "⬟" },
  { id: "driving", label: "مهارات القيادة وسلامة الطريق", en: "Driving skills & road safety", icon: "↗" },
  { id: "emergency", label: "حالات الطوارئ", en: "Emergency situations", icon: "!" },
  { id: "work-ethic", label: "أخلاقيات العمل والحكم المهني", en: "Work ethic & professional judgment", icon: "✓" }
];

window.INTERVIEW_QUESTIONS = [
  { id:"decisions-route", category:"competencies", title:"Making Effective Decisions", q:"How would you deal with a situation where your usual route is heavily congested and could cause you to arrive late for an important appointment?", answer:[
    "I check traffic and available time, then use GPS and road knowledge to choose a safe alternative. If a delay is likely, I notify the relevant person early."
  ], tip:"Show calm judgement, a safe decision and early communication.", tags:["route","traffic","decision"] },
  { id:"quality-vehicle", category:"competencies", title:"Managing a Quality Service", q:"How do you ensure that a vehicle is safe, clean and ready before you begin your working day?", answer:[
    "Before each shift, I check the tyres, lights, mirrors, dashboard warnings, fuel, equipment, cleanliness and visible damage. I report safety defects and follow procedure before driving."
  ], tip:"Describe a consistent routine and what you do when you find a fault.", tags:["inspection","safety","vehicle"] },
  { id:"pace-schedule", category:"competencies", title:"Delivering at Pace", q:"How do you manage a busy day with several journeys when the schedule changes unexpectedly?", answer:[
    "I review the schedule, prepare the vehicle and confirm changes with staff. During transport support connected with COP27, I confirmed schedule changes and kept the team updated while putting safety first."
  ], tip:"Make clear what you personally do, then explain the outcome.", tags:["schedule","COP27","priorities"] },
  { id:"working-together", category:"competencies", title:"Working Together", q:"Tell us about your experience of working as part of a team. How do you contribute to its success?", answer:[
    "At the U.S. Embassy, I coordinated with drivers and staff during official assignments, including President Biden's visit. I followed instructions, communicated changes and supported the team.",
    "My three years as a Driver Supervisor at Al Jazeera Academy also taught me the value of clear duties and respectful communication."
  ], tip:"Use STAR: situation, task, action, result. Focus on your own contribution.", tags:["teamwork","supervision","delegation"] },
  { id:"tell-us", category:"personal", title:"Tell us about yourself", q:"Tell us about yourself and the experience you would bring to this role.", answer:[
    "I have 28 years of driving experience and an Egyptian First-Degree Driving Licence. I worked at the U.S. Embassy from April 2020 to August 2025, driving official and armoured vehicles.",
    "I also bring experience in diplomatic transport, GPS monitoring and driver supervision. Safety, discretion and punctuality guide my work."
  ], tip:"Aim for a concise introduction that connects experience to this job.", tags:["28 years","licence","introduction"] },
  { id:"why-embassy", category:"personal", title:"Why do you want to work for the British Embassy?", q:"Why do you want to work for the British Embassy?", answer:[
    "My previous diplomatic work showed me how important reliability, discretion and respectful service are. I would bring my driving experience and safe, professional approach to the British Embassy's transport team."
  ], tip:"Connect your motivation to the responsibilities of this specific role.", tags:["motivation","British Embassy"] },
  { id:"leaving-embassy", category:"personal", title:"Why did you leave the U.S. Embassy?", q:"Why did your employment at the U.S. Embassy end?", answer:[
    "My employment ended in August 2025 due to workforce reductions and operational restructuring. I left on professional terms, received a recommendation letter and a Safe Driver Award, and am now looking forward to my next opportunity."
  ], tip:"Keep the answer factual, brief and forward-looking.", tags:["employment","restructuring"] },
  { id:"strengths", category:"personal", title:"Your strengths", q:"What are your greatest strengths?", answer:[
    "My strengths are safe driving, punctuality, confidentiality and calm judgement. I follow instructions carefully and treat passengers and colleagues with respect."
  ], tip:"Support your strengths with a relevant example if the panel asks.", tags:["strengths","safety","confidentiality"] },
  { id:"weakness", category:"personal", title:"A development area", q:"What is one area you are working to improve?", answer:[
    "I can spend extra time checking details. I now prioritise essential safety checks and deadlines so I remain thorough and efficient."
  ], tip:"Choose a genuine, manageable development area and explain what you do about it.", tags:["development","self-awareness"] },
  { id:"hire", category:"personal", title:"Why should we hire you?", q:"Why should we select you for this driver role?", answer:[
    "I bring 28 years of driving experience, more than five years at the U.S. Embassy, a First-Degree Egyptian Driving Licence and armoured-vehicle experience. I also received a Safe Driver Award. I would bring reliability, discretion and sound judgement to your team."
  ], tip:"Summarise the strongest evidence that matches the job requirements.", tags:["selection","award","experience"] },
  { id:"breakdown", category:"scenarios", title:"Vehicle breakdown", q:"What would you do if the vehicle developed a mechanical problem during a journey?", answer:[
    "I would protect passengers and other road users, stop safely if needed, and contact my supervisor with our location. I would follow procedure and not continue if the vehicle were unsafe."
  ], tip:"Put people’s safety first, then explain communication and procedure.", tags:["breakdown","mechanical","safety"] },
  { id:"rule-pressure", category:"scenarios", title:"A request to break a traffic rule", q:"What would you do if a passenger asked you to break a traffic rule to save time?", answer:[
    "I would politely explain that I must obey traffic laws and keep everyone safe. I would suggest a legal alternative and report any expected delay."
  ], tip:"Be courteous, but make your safety boundary clear.", tags:["traffic rules","pressure","safety"] },
  { id:"confidentiality", category:"scenarios", title:"Confidential information", q:"How do you handle confidential information you may come across at work?", answer:[
    "I share work information only with authorised people. I do not disclose schedules, movements, conversations or photographs without permission, and I follow policy."
  ], tip:"Give practical examples and avoid repeating sensitive details.", tags:["privacy","confidentiality","discretion"] },
  { id:"road-incident", category:"scenarios", title:"A road traffic incident", q:"How would you respond if you were involved in a road traffic incident while on duty?", answer:[
    "I would stop safely, check for injuries and call emergency services if needed. I would inform my supervisor, follow procedure and record the facts without speculating about responsibility."
  ], tip:"This is a hypothetical answer; explain the steps, not an invented personal story.", tags:["incident","accident","procedure"] },
  { id:"difficult-passenger", category:"scenarios", title:"A dissatisfied passenger", q:"How would you deal with a difficult or unhappy passenger?", answer:[
    "I would listen calmly, understand the concern and offer help within my role. If a manager's decision were needed, I would contact the right person and remain professional."
  ], tip:"Show patience and professional boundaries.", tags:["passenger","service","conflict"] },
  { id:"fatigue", category:"scenarios", title:"Fatigue while driving", q:"What would you do if you began to feel tired during a long duty?", answer:[
    "I would treat fatigue as a safety risk, inform my supervisor and take an approved safe break. I would not hide it or continue if I could not drive safely."
  ], tip:"Safety is more important than keeping to a schedule at any cost.", tags:["fatigue","rest","long journey"] },
  { id:"damage", category:"scenarios", title:"Damage found before a journey", q:"What would you do if you noticed damage to the vehicle before taking it out?", answer:[
    "I would record and report the damage before departure. If it could affect safety, I would not use the vehicle until the responsible person gave guidance."
  ], tip:"Report clearly before the vehicle enters service.", tags:["damage","reporting","inspection"] },
  { id:"unknown-route", category:"scenarios", title:"An unfamiliar destination", q:"What would you do if you were not sure of the route to a destination?", answer:[
    "I would confirm the address and access instructions, check a reliable GPS route and ask if anything remained unclear. I would allow enough time and report likely delays."
  ], tip:"Confirm, check and communicate rather than guessing.", tags:["GPS","route","destination"] },
  { id:"late-passenger", category:"scenarios", title:"A passenger is late", q:"What would you do if the person you were waiting for was late?", answer:[
    "I would remain at the agreed location until authorised to leave, then contact the responsible person for guidance. I would not decide to leave on my own."
  ], tip:"Respect the assignment instructions and keep the right person informed.", tags:["waiting","communication","instructions"] },
  { id:"last-minute", category:"scenarios", title:"A last-minute change of destination", q:"How would you respond if your destination changed at the last minute?", answer:[
    "I would verify the new destination through the proper channel, check the route and timing, and promptly report any delay or safety concern."
  ], tip:"Verify the instruction before acting on a change.", tags:["change","destination","coordination"] },
  { id:"types-vehicles", category:"experience", title:"Types of vehicles", q:"What types of vehicles have you driven professionally?", answer:[
    "I have driven professional vehicles, including official and armoured vehicles at the U.S. Embassy. I hold an Egyptian First-Degree Driving Licence and follow each vehicle's procedures."
  ], tip:"Name only vehicle types you have actually driven and can discuss.", tags:["vehicle types","licence","armoured"] },
  { id:"armoured", category:"experience", title:"Armoured vehicle experience", q:"Do you have experience driving armoured vehicles?", answer:[
    "Yes. I drove armoured vehicles at the U.S. Embassy from April 2020 to August 2025. I followed the assigned procedures and focused on safe, professional transport."
  ], tip:"Describe your own responsibilities; do not disclose sensitive operating details.", tags:["armoured","U.S. Embassy","five years"] },
  { id:"snow", category:"experience", title:"Driving in difficult weather", q:"What did you learn from driving in snowy conditions in the United States?", answer:[
    "Snow taught me to reduce speed, leave more stopping distance and avoid sudden manoeuvres. I adjust to conditions, follow local advice and raise concerns if a journey is unsafe."
  ], tip:"Keep the example accurate to your own experience and avoid adding details you cannot verify.", tags:["weather","snow","safe driving"] },
  { id:"biden-role", category:"experience", title:"Your role during President Biden's visit", q:"What was your role during President Biden's visit to Egypt?", answer:[
    "I was part of the driver team supporting official transport during the visit. I completed my assigned duties and followed team instructions; I was not President Biden's personal driver."
  ], tip:"Be precise about your assigned role; do not overstate it.", tags:["President Biden","delegation","official visit"] },
  { id:"cop27", category:"experience", title:"Your role at COP27", q:"What was your role in the transportation operations connected with COP27?", answer:[
    "I supported transport for visiting delegations at COP27 in Sharm El Sheikh. I followed my assigned schedule and coordinated with the team as plans changed."
  ], tip:"Describe the transport support you personally provided.", tags:["COP27","Sharm El Sheikh","delegation"] },
  { id:"rimo", category:"experience", title:"Your responsibilities at Rimo", q:"What were your responsibilities at Rimo?", answer:[
    "At Rimo, I monitored vehicle locations and use through GPS and Car Control, and followed up on maintenance observations. It was a monitoring role, not a driving job."
  ], tip:"Clearly distinguish monitoring work from driving duties.", tags:["Rimo","GPS","Car Control"] },
  { id:"supervision", category:"experience", title:"Driver supervision", q:"What did you learn from supervising drivers at Al Jazeera Academy?", answer:[
    "I worked five years at Al Jazeera Academy, including three years supervising drivers. I learned to set clear duties, follow up regularly and communicate respectfully."
  ], tip:"Keep the five-year total and three supervisory years distinct.", tags:["Al Jazeera Academy","supervision","team"] },
  { id:"award", category:"experience", title:"Safe Driver Award", q:"What does receiving the Safe Driver Award mean to you?", answer:[
    "I received the Safe Driver Award in January 2022 after a year of service without an accident. I value it as recognition of consistent safe driving."
  ], tip:"Explain what the recognition says about your habits, not only that you received it.", tags:["award","January 2022","safety"] },
  { id:"current-role", category:"experience", title:"Your current role", q:"What are you doing in your current role at Hassan Allam?", answer:[
    "I have worked at Hassan Allam since 10 September 2026. My assessment recorded a score of 5 out of 5 on each of ten evaluation criteria, and I focus on safe, professional journeys."
  ], tip:"Use the facts that match the experience you can verify.", tags:["Hassan Allam","current role","assessment"] },
  { id:"extra-hours", category:"experience", title:"Flexibility and working hours", q:"Would you be willing to work outside normal hours when the job requires it?", answer:[
    "Yes. I understand diplomatic transport may require flexibility and can support operational needs in line with the role and arrangements agreed with my manager."
  ], tip:"Show flexibility while recognising the organisation's policies and arrangements.", tags:["flexibility","hours","availability"] },
  { id:"colleague-disagreement", category:"experience", title:"A disagreement with a colleague", q:"How would you handle a disagreement with a colleague about how to organise a journey?", answer:[
    "I would listen, discuss what is safest and most practical, and focus on the shared goal. If instructions remained unclear, I would ask the supervisor for guidance."
  ], tip:"Focus on professionalism, shared goals and appropriate escalation.", tags:["colleague","communication","conflict"] },
  { id:"questions-for-us", category:"closing", title:"Questions for the panel", q:"Do you have any questions for us?", answer:[
    "Yes, thank you. Could you tell me the main daily responsibilities and expectations for this driver role?"
  ], tip:"Prepare one concise, job-related question for the panel.", tags:["closing","panel","expectations"] },
  { id:"repeat-question", category:"closing", title:"Asking for clarification", q:"What would you say if you did not understand a question in English?", answer:[
    "Could you please repeat the question? Could you rephrase that, please? Or could you explain what you mean by that?"
  ], tip:"A calm request for clarification is better than guessing.", tags:["English","clarification","communication"] },
  { id:"protocol-welcome", category:"protocol", title:"Welcoming a diplomatic passenger", q:"How would you welcome a diplomatic passenger at the airport?", answer:["I would arrive early, confirm the passenger's details, greet them respectfully, assist with luggage and ensure a smooth journey."], tip:"Be courteous, prepared and attentive to the passenger's needs.", tags:["airport","welcome","protocol"] },
  { id:"professional-appearance", category:"protocol", title:"Professional appearance and attitude", q:"How do you maintain a professional appearance and attitude at work?", answer:["I wear appropriate clothing, arrive on time, communicate respectfully and remain calm and professional throughout my duty."], tip:"Describe consistent, practical standards of conduct.", tags:["appearance","attitude","professionalism"] },
  { id:"quiet-passenger", category:"protocol", title:"A passenger who prefers silence", q:"How would you handle a passenger who prefers not to talk during the journey?", answer:["I would respect their preference, remain discreet and focus on providing a comfortable and professional service."], tip:"Respect the passenger's preference and privacy.", tags:["passenger","discretion","service"] },
  { id:"diplomatic-protocol", category:"protocol", title:"Understanding diplomatic protocol", q:"What does diplomatic protocol mean to you as a driver?", answer:["It means respecting official procedures, passenger privacy, professional behaviour and the instructions of authorised staff."], tip:"Connect protocol with discretion and following authorised instructions.", tags:["protocol","privacy","instructions"] },
  { id:"unauthorised-entry", category:"security", title:"An unauthorised person requests entry", q:"What would you do if an unauthorised person asked to enter your vehicle?", answer:["I would politely refuse, verify authorisation through the proper channel and inform my supervisor if necessary."], tip:"Do not admit anyone until their authorisation is confirmed.", tags:["security","authorisation","vehicle"] },
  { id:"unattended-item", category:"security", title:"An unattended item in the vehicle", q:"What would you do if you found an unattended item inside the vehicle?", answer:["I would avoid touching it, keep others away and report it immediately according to security procedures."], tip:"Follow the organisation's security procedure and avoid handling the item.", tags:["security","item","procedure"] },
  { id:"movement-inquiry", category:"security", title:"A question about passenger movements", q:"How would you respond if someone asked you about a passenger's movements?", answer:["I would not disclose any information about official movements. I would refer the request to an authorised person."], tip:"Protect operational information and refer enquiries appropriately.", tags:["confidentiality","movements","privacy"] },
  { id:"social-media-privacy", category:"security", title:"Passenger privacy on social media", q:"How do you protect your passengers' privacy when using social media?", answer:["I never share passenger details, photographs, locations or work information without official authorisation."], tip:"Treat photographs, locations and work details as confidential unless authorised.", tags:["social media","privacy","authorisation"] },
  { id:"defensive-driving", category:"driving", title:"Defensive driving", q:"What is defensive driving?", answer:["Defensive driving means anticipating hazards, maintaining a safe distance, controlling speed and avoiding unnecessary risks."], tip:"Emphasise anticipation and preventing avoidable risks.", tags:["defensive driving","hazards","safety"] },
  { id:"adverse-weather", category:"driving", title:"Driving in bad weather", q:"How do you adapt your driving to bad weather conditions?", answer:["I reduce speed, increase following distance, use appropriate lights and avoid sudden braking or steering."], tip:"Adjust speed and space to the conditions and vehicle visibility.", tags:["weather","visibility","road safety"] },
  { id:"gps-failure", category:"driving", title:"GPS stops working", q:"What would you do if GPS stopped working during a journey?", answer:["I would remain calm, use my road knowledge or an alternative navigation method and confirm the route when possible."], tip:"Keep driving safely and use a reliable alternative rather than operating a device unsafely.", tags:["GPS","navigation","route"] },
  { id:"passenger-comfort", category:"driving", title:"Passenger comfort on a long journey", q:"How do you ensure passenger comfort during a long journey?", answer:["I drive smoothly, maintain a comfortable vehicle environment and communicate politely when necessary."], tip:"Balance a smooth journey with attentive, respectful service.", tags:["comfort","long journey","service"] },
  { id:"passenger-illness", category:"emergency", title:"A passenger becomes ill", q:"What would you do if a passenger suddenly became ill during a journey?", answer:["I would stop at a safe location if necessary, contact emergency services and inform my supervisor immediately."], tip:"Prioritise immediate safety and seek appropriate help.", tags:["illness","emergency","passenger"] },
  { id:"safe-parking", category:"emergency", title:"No safe parking at the destination", q:"What would you do if you arrived at the destination but could not find a safe parking area?", answer:["I would look for an authorised safe location, contact the relevant person and follow their instructions."], tip:"Do not stop in an unsafe or unauthorised place simply to meet the schedule.", tags:["parking","safety","instructions"] },
  { id:"fuel-shortage", category:"emergency", title:"The vehicle runs out of fuel", q:"What would you do if your vehicle ran out of fuel unexpectedly?", answer:["I would stop safely, protect the passengers and inform my supervisor. I would follow the approved assistance procedure."], tip:"Secure the situation and use the approved assistance process.", tags:["fuel","breakdown","assistance"] },
  { id:"conflicting-instructions", category:"emergency", title:"Conflicting journey instructions", q:"What would you do if you received two conflicting journey instructions?", answer:["I would clarify the instructions with the authorised supervisor before proceeding."], tip:"Resolve conflicting instructions before acting.", tags:["instructions","supervisor","clarification"] },
  { id:"early-assignment", category:"work-ethic", title:"Punctuality for an early assignment", q:"How do you maintain punctuality when you have an early morning assignment?", answer:["I prepare the vehicle and check the route in advance. I allow enough travel time and arrive before the scheduled departure."], tip:"Explain the preparation that helps you arrive on time.", tags:["punctuality","preparation","schedule"] },
  { id:"cultural-awareness", category:"work-ethic", title:"Working with different cultures", q:"Are you comfortable working with people from different cultures?", answer:["Yes. I respect cultural differences, communicate politely and adapt my professional behaviour to the working environment."], tip:"Show respect and willingness to adapt professionally.", tags:["culture","respect","communication"] },
  { id:"constructive-feedback", category:"work-ethic", title:"Receiving constructive criticism", q:"How do you handle constructive criticism from your supervisor?", answer:["I listen carefully, accept feedback professionally and use it to improve my performance."], tip:"Show that you can listen, reflect and apply feedback.", tags:["feedback","supervisor","improvement"] },
  { id:"colleague-conduct", category:"work-ethic", title:"A colleague behaves unprofessionally", q:"What would you do if you noticed a colleague behaving unprofessionally?", answer:["I would remain professional, avoid confrontation and report serious concerns through the proper channels."], tip:"Use appropriate channels, especially for serious concerns.", tags:["colleague","conduct","reporting"] },
  { id:"unfamiliar-assignment", category:"work-ethic", title:"Preparing for an unfamiliar assignment", q:"How do you prepare for an unfamiliar assignment?", answer:["I confirm the instructions, destination and timing, check the vehicle and plan the route before departure."], tip:"Confirm the essentials and plan before setting off.", tags:["preparation","destination","route"] },
  { id:"reliability", category:"work-ethic", title:"Reliability in diplomatic driving", q:"What does reliability mean to you in a diplomatic driving position?", answer:["It means being punctual, trustworthy, discreet and consistent, while following instructions and maintaining safety."], tip:"Relate reliability to consistent conduct, discretion and safety.", tags:["reliability","discretion","safety"] }
];
