

let timer;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let running = false;

function startTimer() {
    if (!running) {
        running = true;
        timer = setInterval(updateTimer, 10);
    }
}

function stopTimer() {
    running = false;
    clearInterval(timer);
}

function resetTimer() {
    running = false;
    clearInterval(timer);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    document.getElementById("min").textContent = "00";
    document.getElementById("sec").textContent = "00";
    document.getElementById("msec").textContent = "00";
}

function updateTimer() {
    milliseconds--;
    if (milliseconds < 0) {
        milliseconds = 99;
        seconds--;
        if (seconds < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                clearInterval(timer);
                alert("Timer has reached zero!");
                return;
            }
        }
    }

    document.getElementById("min").textContent = pad(minutes);
    document.getElementById("sec").textContent = pad(seconds);
    document.getElementById("msec").textContent = pad(milliseconds);
}

function pad(value) {
    return value < 10 ? "0" + value : value;
}

function time() {
    minutes = parseInt(document.getElementById("input1").value) || 0;
    seconds = parseInt(document.getElementById("input2").value) || 0;
    milliseconds = parseInt(document.getElementById("input3").value) || 0;
    startTimer();
}
