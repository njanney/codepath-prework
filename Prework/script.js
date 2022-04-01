/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

console.log("Hello, world!");

// Global Constants
const clueHoldTime = 333; //how long to hold each clue's light/sound
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 500; //how long to wait before starting playback of the clue sequence

// Global Variables
var pattern = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.1;
var guessCounter = 0;


function startGame() {
  // initalize the game variables
  progress = 0;
  gamePlaying = true;
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  
  // Startup animation
  for (let i=1;i<=4;i++){
    setTimeout(lightButton,100*(i-1),i);
    setTimeout(clearButton,100*(i),i);
  }
  
  // Assign new random pattern
  for (let i=0;i<10;i++){
    pattern[i] = (Math.floor(Math.random() * 3) + 1); // Generate a random number between 1 and 4
  }
  
  playClueSequence();
}

function stopGame() {
  // initalize the game variables
  gamePlaying = false;
  // swap the Start and Stop buttons
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  
  // Shutdown animation
  for (let i=4;i>=1;i--){
    setTimeout(lightButton,100*(i-1),i);
    setTimeout(clearButton,100*(i),i);
  }
  
  // Reset patten
  for (let i=0;i<10;i++){
    pattern[i] = 0;
  }
}

function loseGame(){
  alert("Game Over. You lost.");
  stopGame();
}
function winGame(){
  alert("Game Over. You won!");
  stopGame();
}

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit");
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit");
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  // add game logic here
  if (btn != pattern[guessCounter]){ // did the user guess wrong?
    loseGame(); // Wrong guess... call loseGame
  }
  else if (guessCounter != progress){ // User got it right, is this the last in sequence?
    guessCounter++; // Not the last, increment guessCounter
    return; // exit function to wait for next guess
  }
  else if (progress != pattern.length - 1){ // Last in sequence, last in total pattern?
    progress++; // Make the clue sequence longer
    playClueSequence(); // Call playClueSequence 
  }
  else {
    winGame(); // User finished the pattern
  }
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 329.6,
  3: 392,
  4: 440
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  context.resume()
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    context.resume()
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    context.resume()
    tonePlaying = true
  }
}
function stopTone(){
  g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
  tonePlaying = false
}

// Page Initialization
// Init Sound Synthesizer
var AudioContext = window.AudioContext || window.webkitAudioContext 
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)