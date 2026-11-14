/* Question copy is intentionally English: this is an English-language interview practice studio. */
window.INTERVIEW_CATEGORIES = [
  { id: "competencies", label: "أسئلة الكفاءات", en: "Competency questions", icon: "✳" },
  { id: "personal", label: "الأسئلة الشخصية", en: "About you", icon: "◉" },
  { id: "scenarios", label: "المواقف العملية", en: "Practical scenarios", icon: "↗" },
  { id: "experience", label: "الخبرة المهنية", en: "Your experience", icon: "⌘" },
  { id: "closing", label: "الأسئلة الختامية", en: "Closing questions", icon: "→" }
];

window.INTERVIEW_QUESTIONS = [
  { id:"decisions-route", category:"competencies", title:"Making Effective Decisions", q:"How would you deal with a situation where your usual route is heavily congested and could cause you to arrive late for an important appointment?", answer:[
    "First, I would assess the situation calmly and check the traffic conditions and the time available.",
    "I would use my knowledge of the roads, together with reliable traffic information or GPS, to identify suitable alternatives.",
    "I would choose the route that offers the best balance between safety and time, rather than simply taking the shortest route. If a delay were likely, I would inform the relevant person as early as possible and give an estimated arrival time."
  ], tip:"Show calm judgement, a safe decision and early communication.", tags:["route","traffic","decision"] },
  { id:"quality-vehicle", category:"competencies", title:"Managing a Quality Service", q:"How do you ensure that a vehicle is safe, clean and ready before you begin your working day?", answer:[
    "I treat vehicle readiness as a daily responsibility, not just a formality.",
    "I check the vehicle inside and out, including the tyres, lights, mirrors, windows, dashboard warnings, fuel and essential equipment. I also look for visible damage, leaks or anything unusual and make sure the vehicle is clean.",
    "If I find a defect that could affect safety or operation, I report it before the journey and follow the proper procedure. I do not put passengers at risk by ignoring a problem."
  ], tip:"Describe a consistent routine and what you do when you find a fault.", tags:["inspection","safety","vehicle"] },
  { id:"pace-schedule", category:"competencies", title:"Delivering at Pace", q:"How do you manage a busy day with several journeys when the schedule changes unexpectedly?", answer:[
    "I review the schedule, locations, distances and estimated journey times, and make sure the vehicle is ready in advance.",
    "If plans change, I confirm the new instructions, reprioritise in coordination with the relevant staff and keep the people affected informed.",
    "I stay calm and focused. A busy schedule is never a reason to compromise safe driving or the quality of service. I developed this approach while supporting official transportation assignments, including work connected with COP27 in Sharm El Sheikh."
  ], tip:"Make clear what you personally do, then explain the outcome.", tags:["schedule","COP27","priorities"] },
  { id:"working-together", category:"competencies", title:"Working Together", q:"Tell us about your experience of working as part of a team. How do you contribute to its success?", answer:[
    "I believe reliable transport depends on good coordination between drivers, supervisors and the staff arranging journeys.",
    "At the U.S. Embassy, I worked within a driving team supporting staff and official delegations, including assignments connected with COP27 and President Biden's visit to Egypt. My role was to follow instructions and timings, communicate professionally and cooperate when plans changed.",
    "My three years as a Driver Supervisor at Al Jazeera Academy also taught me the value of clear responsibilities, follow-up and respectful communication."
  ], tip:"Use STAR: situation, task, action, result. Focus on your own contribution.", tags:["teamwork","supervision","delegation"] },
  { id:"tell-us", category:"personal", title:"Tell us about yourself", q:"Tell us about yourself and the experience you would bring to this role.", answer:[
    "I am a professional driver with 28 years of driving experience, and I hold an Egyptian First-Degree Driving Licence.",
    "I worked at the U.S. Embassy in Cairo from April 2020 to August 2025, driving official and armoured vehicles and supporting transport for staff and delegations. I also supported transport assignments connected with COP27 and President Biden's visit to Egypt.",
    "My background also includes vehicle monitoring using GPS, driver supervision, and my current driving role at Hassan Allam. Safety, punctuality, confidentiality and professional service are central to the way I work."
  ], tip:"Aim for a concise introduction that connects experience to this job.", tags:["28 years","licence","introduction"] },
  { id:"why-embassy", category:"personal", title:"Why do you want to work for the British Embassy?", q:"Why do you want to work for the British Embassy?", answer:[
    "I value the standards of a diplomatic working environment, and my previous experience at the U.S. Embassy helped me understand the importance of reliability, discretion and professional service.",
    "I understand that this role is about more than driving. It requires safe judgement, punctuality, respect for people from different backgrounds and careful handling of confidential information.",
    "I would welcome the opportunity to bring my experience to the British Embassy and contribute as a dependable member of its transport team."
  ], tip:"Connect your motivation to the responsibilities of this specific role.", tags:["motivation","British Embassy"] },
  { id:"leaving-embassy", category:"personal", title:"Why did you leave the U.S. Embassy?", q:"Why did your employment at the U.S. Embassy end?", answer:[
    "My employment ended in August 2025 as a result of workforce reductions and operational restructuring. It was not related to a performance or disciplinary issue.",
    "I received a recommendation letter from an embassy administrative official, and I had previously received the Safe Driver Award. I value the experience I gained there and am ready to use it in my next role."
  ], tip:"Keep the answer factual, brief and forward-looking.", tags:["employment","restructuring"] },
  { id:"strengths", category:"personal", title:"Your strengths", q:"What are your greatest strengths?", answer:[
    "My main strengths are extensive driving experience, a strong commitment to safety and punctuality, and the ability to stay calm when plans change.",
    "I pay attention to detail, respect confidentiality and treat passengers and colleagues professionally. My experience in a diplomatic environment has also taught me to follow instructions carefully and communicate discreetly."
  ], tip:"Support your strengths with a relevant example if the panel asks.", tags:["strengths","safety","confidentiality"] },
  { id:"weakness", category:"personal", title:"A development area", q:"What is one area you are working to improve?", answer:[
    "I can sometimes spend extra time checking details because I want everything to be correct before a task begins.",
    "I have learned to balance thoroughness with efficiency by focusing first on the checks that matter most for safety and the task deadline."
  ], tip:"Choose a genuine, manageable development area and explain what you do about it.", tags:["development","self-awareness"] },
  { id:"hire", category:"personal", title:"Why should we hire you?", q:"Why should we select you for this driver role?", answer:[
    "I bring 28 years of driving experience, including more than five years in a diplomatic environment at the U.S. Embassy. I have driven official and armoured vehicles and supported transport for staff and visiting delegations.",
    "I hold a First-Degree Driving Licence and take safety, confidentiality and punctuality seriously. My record includes a Safe Driver Award and a recommendation letter.",
    "I would bring that experience, a professional attitude and a dependable approach to your transport team."
  ], tip:"Summarise the strongest evidence that matches the job requirements.", tags:["selection","award","experience"] },
  { id:"breakdown", category:"scenarios", title:"Vehicle breakdown", q:"What would you do if the vehicle developed a mechanical problem during a journey?", answer:[
    "My first priority would be the safety of the passengers and other road users.",
    "If the problem required me to stop, I would move to a safe location away from traffic if possible, secure the vehicle and check that everyone was safe.",
    "I would contact the responsible supervisor, explain the issue and our location, and follow instructions about technical assistance or a replacement vehicle. I would not continue driving if it could be unsafe or attempt repairs beyond my training or authority."
  ], tip:"Put people’s safety first, then explain communication and procedure.", tags:["breakdown","mechanical","safety"] },
  { id:"rule-pressure", category:"scenarios", title:"A request to break a traffic rule", q:"What would you do if a passenger asked you to break a traffic rule to save time?", answer:[
    "I would respond respectfully and calmly, and explain that I am responsible for following traffic laws and keeping everyone safe.",
    "I would look for a lawful alternative, such as another safe route, and inform the relevant person if the change could affect the arrival time. I would not put passengers or other road users at risk to save a few minutes."
  ], tip:"Be courteous, but make your safety boundary clear.", tags:["traffic rules","pressure","safety"] },
  { id:"confidentiality", category:"scenarios", title:"Confidential information", q:"How do you handle confidential information you may come across at work?", answer:[
    "I treat information I learn through work as confidential and share it only with people who are authorised to receive it.",
    "I do not discuss officials' movements, schedules or conversations with others, and I do not share photographs or work details without permission. I follow the organisation's policies and instructions at all times."
  ], tip:"Give practical examples and avoid repeating sensitive details.", tags:["privacy","confidentiality","discretion"] },
  { id:"road-incident", category:"scenarios", title:"A road traffic incident", q:"How would you respond if you were involved in a road traffic incident while on duty?", answer:[
    "I would stop in a safe place if possible and check whether passengers or anyone else needed immediate help.",
    "I would contact emergency services if required, follow the law and the organisation's procedures, and inform my supervisor as soon as possible.",
    "I would record the details as instructed. I would not leave the scene or make assumptions about legal responsibility."
  ], tip:"This is a hypothetical answer; explain the steps, not an invented personal story.", tags:["incident","accident","procedure"] },
  { id:"difficult-passenger", category:"scenarios", title:"A dissatisfied passenger", q:"How would you deal with a difficult or unhappy passenger?", answer:[
    "I would remain calm, listen carefully and avoid arguing. I would try to understand the concern and offer appropriate help within my responsibilities and the organisation's procedures.",
    "If the matter needed a manager's decision, I would contact the relevant person. I would remain respectful, discreet and professional throughout."
  ], tip:"Show patience and professional boundaries.", tags:["passenger","service","conflict"] },
  { id:"fatigue", category:"scenarios", title:"Fatigue while driving", q:"What would you do if you began to feel tired during a long duty?", answer:[
    "I would take any signs of fatigue seriously because they can affect safe driving.",
    "I would follow the organisation's procedures, inform the responsible supervisor and request an appropriate safe break or other arrangement. I would not try to hide fatigue or continue if I could not drive safely."
  ], tip:"Safety is more important than keeping to a schedule at any cost.", tags:["fatigue","rest","long journey"] },
  { id:"damage", category:"scenarios", title:"Damage found before a journey", q:"What would you do if you noticed damage to the vehicle before taking it out?", answer:[
    "I would record the damage and report it to the responsible person before starting the journey.",
    "I would follow the vehicle inspection and reporting procedure, and I would not assume that the damage had already been reported. If it could affect safety, I would wait for guidance before using the vehicle."
  ], tip:"Report clearly before the vehicle enters service.", tags:["damage","reporting","inspection"] },
  { id:"unknown-route", category:"scenarios", title:"An unfamiliar destination", q:"What would you do if you were not sure of the route to a destination?", answer:[
    "I would confirm the destination and any access instructions with the relevant person, then check the route using GPS and a reliable source.",
    "If something remained unclear, I would ask for clarification rather than guess. I would allow suitable time for the journey and update the team if there were a likely delay."
  ], tip:"Confirm, check and communicate rather than guessing.", tags:["GPS","route","destination"] },
  { id:"late-passenger", category:"scenarios", title:"A passenger is late", q:"What would you do if the person you were waiting for was late?", answer:[
    "I would follow the instructions for the assignment and remain at the agreed location unless I received authorisation to do otherwise.",
    "I would contact the responsible person, explain the situation and ask for guidance. I would not decide to leave on my own."
  ], tip:"Respect the assignment instructions and keep the right person informed.", tags:["waiting","communication","instructions"] },
  { id:"last-minute", category:"scenarios", title:"A last-minute change of destination", q:"How would you respond if your destination changed at the last minute?", answer:[
    "I would confirm the new destination and make sure the change came through the proper channel.",
    "I would assess the time and route, check any relevant instructions, and coordinate with the people affected. If the change created a delay or safety concern, I would communicate that promptly."
  ], tip:"Verify the instruction before acting on a change.", tags:["change","destination","coordination"] },
  { id:"types-vehicles", category:"experience", title:"Types of vehicles", q:"What types of vehicles have you driven professionally?", answer:[
    "I have 28 years of driving experience and have driven a range of vehicles in professional settings, including official and armoured vehicles during my service at the U.S. Embassy.",
    "I hold an Egyptian First-Degree Driving Licence. I am careful to follow the vehicle-specific procedures and checks required for each assignment."
  ], tip:"Name only vehicle types you have actually driven and can discuss.", tags:["vehicle types","licence","armoured"] },
  { id:"armoured", category:"experience", title:"Armoured vehicle experience", q:"Do you have experience driving armoured vehicles?", answer:[
    "Yes. I drove armoured vehicles during my service at the U.S. Embassy, where I worked for more than five years, from April 2020 to August 2025.",
    "I followed the procedures and instructions for the assigned vehicle and remained focused on safe, professional transport."
  ], tip:"Describe your own responsibilities; do not disclose sensitive operating details.", tags:["armoured","U.S. Embassy","five years"] },
  { id:"snow", category:"experience", title:"Driving in difficult weather", q:"What did you learn from driving in snowy conditions in the United States?", answer:[
    "Driving in snowy conditions reinforced the importance of reducing speed, allowing more stopping distance and avoiding sudden manoeuvres.",
    "I learned to adjust my driving to the conditions, stay alert and follow local safety advice. If conditions made a journey unsafe, I would raise the concern and follow the supervisor's instructions."
  ], tip:"Keep the example accurate to your own experience and avoid adding details you cannot verify.", tags:["weather","snow","safe driving"] },
  { id:"biden-role", category:"experience", title:"Your role during President Biden's visit", q:"What was your role during President Biden's visit to Egypt?", answer:[
    "I was part of the driver team supporting the U.S. delegation's official movements during the visit.",
    "I carried out the transport duties assigned to me, following the schedule and instructions and working as part of the team. I was not President Biden's personal driver."
  ], tip:"Be precise about your assigned role; do not overstate it.", tags:["President Biden","delegation","official visit"] },
  { id:"cop27", category:"experience", title:"Your role at COP27", q:"What was your role in the transportation operations connected with COP27?", answer:[
    "I supported transportation services for visiting delegations during COP27 in Sharm El Sheikh.",
    "I followed the assigned schedule, transport requirements and instructions for my duties, and coordinated professionally with the team when plans needed to change."
  ], tip:"Describe the transport support you personally provided.", tags:["COP27","Sharm El Sheikh","delegation"] },
  { id:"rimo", category:"experience", title:"Your responsibilities at Rimo", q:"What were your responsibilities at Rimo?", answer:[
    "At Rimo, my role involved monitoring vehicle locations and movements through GPS tracking and Car Control systems.",
    "I also followed up on vehicle use, maintenance and operational observations. That position was a vehicle-monitoring role, not a driving role."
  ], tip:"Clearly distinguish monitoring work from driving duties.", tags:["Rimo","GPS","Car Control"] },
  { id:"supervision", category:"experience", title:"Driver supervision", q:"What did you learn from supervising drivers at Al Jazeera Academy?", answer:[
    "My experience at Al Jazeera Academy included five years of work, with three years supervising drivers.",
    "It taught me the importance of clear responsibilities, regular follow-up and respectful communication. I also learned to raise issues promptly and help the team maintain reliable service."
  ], tip:"Keep the five-year total and three supervisory years distinct.", tags:["Al Jazeera Academy","supervision","team"] },
  { id:"award", category:"experience", title:"Safe Driver Award", q:"What does receiving the Safe Driver Award mean to you?", answer:[
    "I received the Safe Driver Award in January 2022 after completing a year of service without an accident.",
    "I value it as recognition of consistent attention to safe driving. I see safety as a daily responsibility, not just an award or a target."
  ], tip:"Explain what the recognition says about your habits, not only that you received it.", tags:["award","January 2022","safety"] },
  { id:"current-role", category:"experience", title:"Your current role", q:"What are you doing in your current role at Hassan Allam?", answer:[
    "I have been working with Hassan Allam since 10 September 2026 in a driving role.",
    "I focus on carrying out assigned journeys safely and professionally. I also received an excellent assessment from the consultant, with a score of five out of five across ten criteria."
  ], tip:"Use the facts that match the experience you can verify.", tags:["Hassan Allam","current role","assessment"] },
  { id:"extra-hours", category:"experience", title:"Flexibility and working hours", q:"Would you be willing to work outside normal hours when the job requires it?", answer:[
    "I understand that transport work in a diplomatic environment may sometimes require flexibility.",
    "I am willing to support operational needs in line with the role, the organisation's policies and the arrangements agreed with my manager."
  ], tip:"Show flexibility while recognising the organisation's policies and arrangements.", tags:["flexibility","hours","availability"] },
  { id:"colleague-disagreement", category:"experience", title:"A disagreement with a colleague", q:"How would you handle a disagreement with a colleague about how to organise a journey?", answer:[
    "I would discuss the issue calmly and professionally, listen to the colleague's point of view and focus on what is safest and best for the work.",
    "If we could not resolve it or instructions were unclear, I would ask the responsible supervisor for guidance rather than allow a disagreement to affect the service."
  ], tip:"Focus on professionalism, shared goals and appropriate escalation.", tags:["colleague","communication","conflict"] },
  { id:"questions-for-us", category:"closing", title:"Questions for the panel", q:"Do you have any questions for us?", answer:[
    "Yes, thank you. Could you please tell me more about the main responsibilities and daily expectations of the driver in this role?"
  ], tip:"Prepare one concise, job-related question for the panel.", tags:["closing","panel","expectations"] },
  { id:"repeat-question", category:"closing", title:"Asking for clarification", q:"What would you say if you did not understand a question in English?", answer:[
    "Could you please repeat the question, or rephrase it?"
  ], tip:"A calm request for clarification is better than guessing.", tags:["English","clarification","communication"] }
];
