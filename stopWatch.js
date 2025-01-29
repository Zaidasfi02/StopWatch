const timerDisplay = document.querySelector(".timer");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");

let hours = 0;
let mins = 0;
let secs = 0;
let msecs = 0;

let interval = null;

startBtn.addEventListener("click", () => {
  if (interval !== null) {
    clearInterval(interval);
  }
  interval = setInterval(startTimer, 10);
});
stopBtn.addEventListener("click", () => {
  clearInterval(interval);
});
resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  timerDisplay.innerHTML = `00:00:00:00`;
  hours=mins=secs=msecs=0;
});

function startTimer() {
  msecs++;
  if (msecs == 100) {
    msecs = 0;
    secs++;
    if (secs == 60) {
      secs = 0;
      mins++;
      if (mins == 60) {
        mins = 0;
        hours++;
      }
    }
  }

 let msecDis = msecs < 10 ? `0${msecs}` : msecs;
 let secsDis = secs < 10 ? `0${secs}` : secs;
 let minsDis = mins < 10 ? `0${mins}` : mins;
 let hourDis=hours <10 ? `0${hours}`: hours;

 timerDisplay.innerHTML = `${hourDis}:${minsDis}:${secsDis}:${msecDis}`;
};
