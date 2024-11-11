// Variables for the DOM elements

  const displayWord = document.querySelector("#word");
  const scoreSpan = document.querySelector("#score");
  const timeSpan = document.querySelector("#time");
  const typingInput = document.querySelector("input");
  const settingsButton = document.querySelector("#settings-btn");
  const settingsDiv = document.querySelector("#settings");
  const settingsForm = document.querySelector("#settings-form");
  
  
// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

// Variables

let timer = 10;
let score = 0;
const timeInterval = setInterval(updateTime,1000);

// Functions
function addWordToDOM(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);

    const randomWord = arr[randomIndex];

    displayWord.textContent = randomWord;
}

function updateScore(){
  score++;
  scoreSpan.textContent = score;
}

function updateTime(){
    timer--;
    timeSpan.textContent = `${timer}s` 
    if (timer <= 0){
      clearInterval(timeInterval)
    }
}

typingInput.addEventListener("input", (e) => {
  if(e.target.value === displayWord.textContent){
    updateScore()
    addWordToDOM(words)
    timer += 5;
    e.target.value = "";
  }
})


settingsButton.addEventListener("click", () => {
  if(!settingsDiv.classList.contains("hide")){
    settingsDiv.classList.add("hide");
  }else{
    settingsDiv.classList.remove("hide");
  }
  
})


settingsForm.addEventListener("change",(e) => {
  if(e.target.name = "difficulty"){
    switch(e.target.value){
      case "hard":
        timer = 4;
        break;
      case "medium":
        timer = 6;
        break;
      case "easy":
        timer = 10;
        break;
      default:
        
    }
  }
})
addWordToDOM(words)
