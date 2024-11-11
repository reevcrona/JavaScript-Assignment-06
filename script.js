// Variables for the DOM elements

  const displayWord = document.querySelector("#word");
  const scoreSpan = document.querySelector("#score");
  const timeSpan = document.querySelector("#time");
  const typingInput = document.querySelector("input");
  const settingsButton = document.querySelector("#settings-btn");
  const settingsDiv = document.querySelector("#settings");
  const settingsForm = document.querySelector("#settings-form");
  const gameContainer = document.querySelector(".container");
  const gameOverContainer = document.querySelector(".end-game-container");
  
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
let previousWord = "";
let timeInterval;

// Functions
function addWordToDOM(arr){
    
    let randomWord;

    do{
      const randomIndex = Math.floor(Math.random() * arr.length);
      randomWord = arr[randomIndex];
    }while(randomWord === previousWord)

      displayWord.textContent = randomWord;
      previousWord = randomWord;
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
      gameOver();
    }
}

function gameOver(){
    const gameOverText = document.createElement("h2");
    const gameOverButton = document.createElement("button");
    const gameOverScore = document.createElement("h4");
    gameOverButton.classList.add("game-over-button");
    gameOverScore.textContent = `Final score: ${score}`;
    gameOverButton.textContent ="Play again";
    gameOverText.textContent ="GAME OVER!";
    gameOverContainer.appendChild(gameOverText);
    gameOverContainer.appendChild(gameOverScore);
    gameOverContainer.appendChild(gameOverButton);
    
    gameOverContainer.style.display ="flex";

    gameOverButton.addEventListener("click", () => {
      location.reload();
    })
}
// Event listeners
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
        timeSpan.textContent ="4s"
        break;
      case "medium":
        timer = 6;
        timeSpan.textContent ="6s"
        break;
      case "easy":
        timer = 10;
        timeSpan.textContent ="10s"
        break;
      default:
        
    }
  }
})

const startButton = document.createElement("button");
startButton.textContent = "Start game";
startButton.classList.add("start-button");
gameContainer.appendChild(startButton);



startButton.addEventListener("click", () => {
  addWordToDOM(words)
  timeInterval = setInterval(updateTime,1000);
  startButton.style.display ="none";
})

