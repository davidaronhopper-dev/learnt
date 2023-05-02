$(function() {
    const startButton = document.querySelector('.start');
    const settingsButton = document.querySelector('.settings');
    const minutes = document.querySelector('.minutes > input[type=text]');
    const seconds = document.querySelector('.seconds > input[type=text]');
    const ring = document.querySelector('.ring');

    let startTime = 0;
    let timer = null;
    let running = false;
    let settings = false;
    let originalMinutes = 0;
    let originalSeconds = 0;
    let totalSeconds = 0;

    startButton.addEventListener('click', ()=> {
        if(!running){
            startTimer();
        }else if(running) {
            pauseTimer();
        }
    });

    settingsButton.addEventListener('click', () => {
        if(!settings){
            startSettings();
        }else if(settings) {
            stopSettings();
        }
    });



    const startTimer = () => {
        stopSettings();
        running = true;
        startButton.innerText = 'pause';
        startTime = Date.now(); //measurement in milliseconds
        const secondsValue = parseInt(seconds.value);
        const minutesValue = parseInt(minutes.value);
        totalSeconds = secondsValue + minutesValue * 60;
        timer = setInterval(() => {
            const currentTime = Date.now();
            const diff = currentTime - startTime;
            const secondsLeft = totalSeconds - Math.floor(diff/1000);
            const minutesLeft = Math.floor(secondsLeft/60);
            seconds.value = padNum(secondsLeft);
            minutes.value = padNum( minutesLeft);
            if(secondsLeft == 0 && minutesLeft == 0){
                finishTimer();
            }
        }, 1000);
    }

    const pauseTimer = () => {
        running = false;
        startButton.innerText = 'start';
        clearInterval(timer);
    }

    const finishTimer = () => {
        clearInterval(timer);
        ring.classList.add('ending');
        setTimeout(() => {
            alert("Time's Up");
            resetTimer();
        }, 1);
    };

    const resetTimer = () => {
        clearInterval(timer);
        seconds.value = originalSeconds;
        minutes.value = originalMinutes;
        startButton.innerText = 'start';
        ring.classList.remove('ending');
        running = false;
    }

    const startSettings = () => {
        pauseTimer();
        settings = true;
        setOriginal();
        seconds.disabled = false;
        minutes.disabled = false;
    }

    const stopSettings = () => {
        settings = false;
        seconds.disabled = true;
        minutes.disabled = true;
        setOriginal();
    }

    const padNum = (number) => {
        if(number < 10) {
            return '0' + number;
        } else {
            return number;
        }
    }

    const setOriginal = () => {
        originalSeconds = padNum(parseInt(seconds.value));
        originalMinutes = padNum(parseInt(minutes.value));
    }

    const validateSecondsInput = (e) => {
        const validInput = e.target.value.replace(/[^0-9]/g, '');
        if(e.target.value > 60){
            alert('Values must be below 60 minutes and 60 seconds');
            e.target.value = originalSeconds;
        } else {
            e.target.value = validInput;
        }
    }

    const validateMinutesInput = (e) => {
        const validInput = e.target.value.replace(/[^0-9]/g, '');
        if(e.target.value > 60){
            alert('Values must be below 60 minutes and 60 seconds');
            e.target.value = originalMinutes;
        } else {
            e.target.value = validInput;
        }
    }

    seconds.addEventListener('keyup', validateSecondsInput);
    minutes.addEventListener('keyup', validateMinutesInput);


    setOriginal();
    resetTimer();
});
