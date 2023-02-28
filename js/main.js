import Sound from "./sounds.js"
import { 
  play,
  stop,
  add,
  remove,
  minuteDisplay,
  secondDisplay,
  forest,
  rain,
  shop,
  fire } from "./elements.js"
import sounds from "./sounds.js"


const sound = Sound()

let minutes = Number(minuteDisplay.textContent)
let seconds = Number(secondDisplay.textContent)
let isRunning = false
let newMinutes
let timerTimeOut

play.addEventListener("click", () => run())
stop.addEventListener("click", () => stopAll())
add.addEventListener("click", () => addMinutes())
remove.addEventListener("click", () => removeMinutes())
forest.addEventListener("click", () => playForest())
rain.addEventListener("click", () => playRain())
shop.addEventListener("click", () => playShop())
fire.addEventListener("click", () => playFire())

function playFire() {
  if (fire.classList.contains("selected")) {
    fire.classList.remove("selected")
    sound.bgFireAudio.pause()
  } else {
    fire.classList.add("selected")
    sound.bgFireAudio.play()
  }
}

function playShop() {
  if (shop.classList.contains("selected")) {
    shop.classList.remove("selected")
    sound.bgShopAudio.pause()
  } else {
    shop.classList.add("selected")
    sound.bgShopAudio.play()
  }
}

function playRain() {
  if (rain.classList.contains("selected")) {
    rain.classList.remove("selected")
    sound.bgRainAudio.pause()
  } else {
    rain.classList.add("selected")
    sound.bgRainAudio.play()
  }
}

function playForest() {
  if (forest.classList.contains("selected")) {
    forest.classList.remove("selected")
    sound.bgTreeAudio.pause()
  } else {
    forest.classList.add("selected")
    sound.bgTreeAudio.play()
  }
}

function addMinutes() {
  minutes += 5
  
 minuteDisplay.textContent = String(minutes).padStart(2,"0")
 sound.pressButton()

}

function stopAll() {
  clearTimeout(timerTimeOut)
  isRunning = false
  minuteDisplay.textContent = String(minutes).padStart(2,"0")
  secondDisplay.textContent = String(seconds).padStart(2,"0")
  sound.pressButton()
}

function removeMinutes() {
  if (minutes <= 5){
    alert("não há como remover minutos")
  } else {
    minutes -= 5
    minuteDisplay.textContent = String(minutes).padStart(2,"0")
    sound.pressButton()
  }

}

function run() {
  if (isRunning == true) {
    return
  } else {
    countDown()
  }
  sound.pressButton()
}



function countDown() {
  timerTimeOut = setTimeout(function() {

  let newMinutes = Number(minuteDisplay.textContent)
  let newSeconds = Number(secondDisplay.textContent)
  let isFinished = newMinutes == 0 && newSeconds == 0
  isRunning = true
  
  
  if (isFinished) {
    sound.timeUp()
    minuteDisplay.textContent = String(minutes).padStart(2,"0")
    secondDisplay.textContent = String(seconds).padStart(2,"0")
    isRunning = false
    //resetar os controles
    return
  }

  if (newSeconds == 0){
    newSeconds = 2
    newMinutes --
  } else {
    newSeconds --
  }


  minuteDisplay.textContent = String(newMinutes).padStart(2,"0")
  secondDisplay.textContent = String(newSeconds).padStart(2,"0")
  
  countDown()
}, 1000)
}

function updateTimer(minutes, seconds){
  minuteDisplay.textContent = String(newMinutes).padStart(2,"0")
  secondDisplay.textContent = String(newSeconds).padStart(2,"0")
}
