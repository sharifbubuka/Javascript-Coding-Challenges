const alarm = document.getElementById('alarm');
const stop = document.getElementById('stop');
const countdownEl = document.getElementById('countdown');
const startingMinutes = 0.1;
let time = startingMinutes * 60;

let stopped = stop.addEventListener('click', () => {
    console.log('stop button clicked');
    counter(3);
});

let counter = function(code) {
    if (code === 1) {
       interval; 
    } else if (code === 2) {
        alarm.load(); //necessary!! Without it, audio plays only in developer mode apparently
        alarm.play();
        stop.style.visibility = 'visible';
        if (stopped === true) {
            counter(3);
        }
    } else if (code === 3) {
        alarm.pause();
        clearInterval(interval);
    }
}

var interval = setInterval(() => {
    const minutes = Math.floor(time / 60); //bug: Alarm rings at 0:1 instead of 0:0 
    let seconds = time % 60;
    if (minutes === 0 && seconds === 0) {
        counter(2);
    } else {
        countdownEl.innerHTML = `${minutes}: ${seconds}`;
        time--;
    }
}, 1000);







