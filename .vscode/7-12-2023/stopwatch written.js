let timer; // Variable to hold the interval

let hours = 0;
let minutes = 0;
let seconds = 0;

function startStop() {
  if (!timer) {
    // Start the stopwatch
    timer = setInterval(runStopwatch, 1000);
    document.getElementById("startStopButton").textContent = "Stop";
  } else {
    // Stop the stopwatch
    clearInterval(timer);
    timer = null;
    document.getElementById("startStopButton").textContent = "Start";
  }
}

function runStopwatch() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  let displayHours = hours < 10 ? "0" + hours : hours;
  let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  let displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("display").textContent = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

function reset() {
  clearInterval(timer);
  timer = null;
  hours = 0;
  minutes = 0;
  seconds = 0;
  document.getElementById("display").textContent = "00:00:00";
  document.getElementById("startStopButton").textContent = "Start";
}
