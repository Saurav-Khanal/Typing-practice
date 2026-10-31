let p=document.querySelector("#description");
let typingarea=document.querySelector(".typing-area");
let time=document.getElementById("time");
let wpm=document.getElementById("wpm");
let accuracy=document.getElementById("accuracy");
 const sentences = [
  "The sun rises in the east and sets in the west every single day.",
  "Programming teaches us how to solve problems using logical thinking and creativity.",
  "Learning something new every day makes us stronger and more confident.",
  "Success comes from consistent effort, patience, and the willingness to improve.",
  "Technology has changed the way people communicate, learn, and work together.",
  "Every small step brings us closer to achieving our biggest dreams.",
  "Reading books helps us develop knowledge, imagination, and better communication skills.",
  "A good programmer writes code that other developers can easily understand.",
  "Hard work and dedication can turn difficult challenges into valuable opportunities.",
  "The future belongs to people who continue learning and adapting to change."
];

let initialvalue=0;
let stoppingvalue=60;
function oneminutetimer(){
const Timer=setInterval(()=>{
    const current=initialvalue+1;
    initialvalue=current;
    time.textContent=initialvalue;
    if(initialvalue===stoppingvalue){
        clearInterval(Timer);
    }
},1000);

}

const button=document.getElementById("button");
button.addEventListener("click",()=>{
    let randomNumber=Math.random();
    let randomIndex=Math.floor(randomNumber*sentences.length);
    p.textContent=sentences[randomIndex];
    oneminutetimer();
})


