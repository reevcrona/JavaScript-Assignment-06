// Variables for the DOM elements

  const displayWord = document.querySelector("#word");
  const scoreSpan = document.querySelector("#score");
  const timeSpan = document.querySelector("#time");
  
  

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
const timeInterval = setInterval(updateTime,1000);

// Functions
function addWordToDOM(arr){
    const randomIndex = Math.floor(Math.random() * arr.length);

    const randomWord = arr[randomIndex];

    displayWord.textContent = randomWord
}

function updateTime(){
    timer--;
    timeSpan.textContent = `${timer}s` 
    if (timer <= 0){
      console.log("game over");
      clearInterval(timeInterval)
    }
}

