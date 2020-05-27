function playSound(e) {
    //console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //console.log(audio);
    if(!audio) return; //stop the function from running all together
    audio.currentTime = 0;
    audio.play();
    //console.log(key);
    key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip if it's not a transform
    //console.log(e.propertyName);
    this.classList.remove('playing');
}

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', playSound);

/*
    Probable use-case: 
        An application called Aria that listens
        synthetic or natural music and plays it back
        in various defined variations eg. piano, hum etc.
        --Machine Learning could come in handy on this.
*/