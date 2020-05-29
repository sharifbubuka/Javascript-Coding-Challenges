const progress = document.querySelector('.progress-done');
const refresh = document.querySelector('img');

refresh.addEventListener('click', function(){
    console.log('clicked');
    updateProgress();
});

function updateProgress() {
    let random = Math.floor(Math.random() * 70) + 25;
    console.log(random);
    heartBeatEffect();
    setWidth(random);
}

function setWidth(width) {
    progress.style.width = width + '%';
    progress.style.opacity = 1;
    progress.innerText = width + '%';
}

function heartBeatEffect() {
    refresh.style.setProperty('animation', 'heart-beat .25s linear');
    setTimeout(() => {
        refresh.style.setProperty('animation', '');
    }, 250);
}

(function(){
    setTimeout(() => {
        setWidth(progress.getAttribute('data-done'));
    }, 500);
}());

//animation: heart-beat .25s infinite alternate;