class Clock {

    constructor(){
        this.currentSeconds = 0;
        this.currentMinutes = 0;
        this.currentHours = 0;
        this.time = 0;
        this.timer;
        this.timerDisplay = document.getElementById("time");
        this.log = document.getElementById('stopwatch-logs');
        this.logs = 0;
    }

    displayTimer() {
        let seconds = (this.currentSeconds < 10) ? '0' + this.currentSeconds : this.currentSeconds;
        let minutes = (this.currentMinutes < 10) ? '0' + this.currentMinutes : this.currentMinutes;
        let hours = (this.currentHours < 10) ? '0' + this.currentHours : this.currentHours;
        this.timerDisplay.innerHTML = hours + ":" + minutes + ":" + seconds;
    }

    increaseByOneSecond(){
        this.currentSeconds++;
        if (this.currentseconds === 60){
            this.currentMinutes++;
            this.currentseconds = 0;
        }

        if (this.currentMinutes === 60){
            this.currentHours++;
            this.currentMinutes = 0;
        }
        this.displayTimer();
    }

    resetTimer(){
        this.currentMilliseconds = 0;
        this.currentSeconds = 0;
        this.currentMinutes = 0;
        this.currenthours = 0;
        this.displayTimer();
    }

    startTimer(){
        this.interval = setInterval(() => this.increaseByOneSecond(), 1000);
    }

    stopTimer(){
        clearInterval(this.interval);
    }

    trackTime(){
        let time = this.timerDisplay.innerHTML;
        this.logs++;
        let newLog = document.createElement('div');
        newLog.className = "log";
        let newLogLabel = document.createElement('p');
        newLogLabel.className = "log-label";
        newLogLabel.innerHTML = "Timestamp " + this.logs;
        newLog.appendChild(newLogLabel);
        let newLogTime = document.createElement("p");
        newLogTime.className = "log-timestamp";
        newLogTime.innerHTML = time;
        newLog.appendChild(newLogTime);
        this.log.appendChild(newLog);
    }

    clearLog(){
        while (this.log.firstChild) {
            this.log.removeChild(this.log.firstChild);
        }
        this.logs = 0;
    }
}

let stopwatch = new Clock();

let controlBtn = document.getElementById("control");
controlBtn.addEventListener('click', () => {
    if (controlBtn.innerHTML === "Start"){
        stopwatch.startTimer();
        controlBtn.innerHTML = "Stop";
    } else {
        stopwatch.stopTimer();
        controlBtn.innerHTML = "Start";
    }
});

let resetBtn = document.getElementById("reset");
resetBtn.addEventListener('click', () => {
    stopwatch.resetTimer();
});

let trackBtn = document.getElementById("track");
trackBtn.addEventListener('click', () => {
    stopwatch.trackTime();
});

let clearBtn = document.getElementById("clear");
clearBtn.addEventListener('click', () => {
    stopwatch.clearLog();
})