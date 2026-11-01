let p = document.querySelector("#description");
let typingarea = document.querySelector(".typing-area");
let time = document.getElementById("time");
let wpm = document.getElementById("wpm");
let accuracy = document.getElementById("accuracy");
const sentences = [
  "The sun rises in the east every morning, bringing light and warmth to the world. Birds begin singing, people wake up, and nature slowly becomes active. Every sunrise reminds us that life gives us another opportunity to learn something new, correct our mistakes, work toward our goals, and make meaningful progress in everything we do.",

  "Programming is an interesting skill that teaches people how to solve problems using logic, creativity, and patience. A programmer writes instructions that computers can understand and execute. Learning programming takes time and consistent practice, but every error provides an opportunity to improve. Building projects helps developers understand concepts and develop practical problem-solving abilities.",

  "Learning something new every day helps us develop knowledge, confidence, and better thinking abilities. Sometimes understanding a difficult concept requires patience and repeated practice. Instead of giving up when something feels challenging, we should divide the problem into smaller parts. Gradually, these small improvements create strong foundations for future learning and personal development.",

  "Success does not happen overnight because meaningful achievements require consistent effort, patience, and dedication. People often face unexpected challenges while working toward their goals. However, learning from mistakes and maintaining discipline can help them move forward. Instead of comparing our progress with others, we should focus on improving ourselves and becoming better every single day.",

  "Technology has transformed the modern world by changing how people communicate, study, work, and share information. Computers and smartphones allow individuals to connect with others across different countries within seconds. Businesses use technology to improve productivity, while students use digital resources to explore knowledge. Understanding technology has become an important skill in today's society.",

  "Every small step brings us closer to achieving our biggest dreams, even when progress seems slow. Developing a new skill, completing a difficult assignment, or solving a challenging problem can create valuable experience. Consistency matters more than temporary motivation because regular effort builds habits. Over time, these habits help us accomplish goals that once seemed impossible.",

  "Reading books is an excellent habit because it introduces us to different ideas, experiences, and perspectives. Books can improve vocabulary, strengthen communication skills, and develop imagination. Reading also encourages critical thinking and helps us understand complicated subjects. Spending some time reading every day can gradually increase our knowledge and make learning more enjoyable.",

  "A good programmer writes code that other developers can understand, maintain, and improve without unnecessary confusion. Writing working code is important, but organizing it properly also matters. Meaningful variable names, clear functions, and consistent formatting make projects easier to manage. Clean code helps teams collaborate effectively and reduces problems during future development.",

  "Hard work and dedication can transform difficult challenges into valuable learning opportunities. Whenever we encounter something unfamiliar, we have a chance to develop new abilities and improve our understanding. Mistakes are a natural part of learning, and patience helps us overcome them. Staying focused on our objectives allows us to make steady progress toward success.",

  "The future belongs to people who continue learning, adapting, and exploring new possibilities. The world changes constantly, and new technologies create different opportunities every year. Developing curiosity and practical skills helps individuals prepare for unexpected challenges. Instead of depending entirely on what we already know, we should remain open to discovering better ways of doing things.",
];

let initialvalue = 0;
let stoppingvalue = 60;
function oneminutetimer() {
  const Timer = setInterval(() => {
    const current = initialvalue + 1;
    initialvalue = current;
    time.textContent = initialvalue;
    if (initialvalue === stoppingvalue) {
      clearInterval(Timer);
    }
    if (initialvalue === 60) {
      typingarea.disabled = true;
      typingarea.value = "Time is up!!!";
    }
  }, 1000);
}

const button = document.getElementById("button");
button.addEventListener("click", () => {
  button.disabled = true;
  let randomNumber = Math.random();
  let randomIndex = Math.floor(randomNumber * sentences.length);
  p.textContent = sentences[randomIndex];
  const sourcesText = sentences[randomIndex];
  calculationError(sourcesText);
  oneminutetimer();
  calculatewpm();
});

function calculatewpm() {
  typingarea.addEventListener("input", (e) => {
    usertype = e.value;
    let oneword = 5;
    const totalcharacter = typingarea.value.length;
    const totalword = Math.floor(totalcharacter / oneword);
    const totalTime = initialvalue;
    const wordperminute = Math.floor((totalword * 60) / totalTime);
    wpm.textContent = wordperminute;
  });
}

function calculationError(sourcesText) {
  typingarea.addEventListener("input", (e) => {
    const userType = e.target.value;
    console.log(sourcesText);
    console.log(userType);
  });
}
