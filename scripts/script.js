class Clock {

    constructor(){
        this.currentSeconds = 0;
        this.currentMinutes = 0;
        this.currentHours = 0;
        this.time = 0;
        this.timer;
        this.timerDisplay = document.getElementById("time");
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
        clearInterval(this.interval)
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
}

let stopwatch = new Clock();

let startBtn = document.getElementById("start");
startBtn.addEventListener('click', () => {
    stopwatch.startTimer();
    startBtn.disabled = true;
});

let stopBtn = document.getElementById("stop");
stopBtn.addEventListener('click', () => {
    stopwatch.stopTimer();
    startBtn.disabled = false;
});

let resetBtn = document.getElementById("reset");
resetBtn.addEventListener('click', () => {
    stopwatch.resetTimer();
    startBtn.disabled = false;
});
