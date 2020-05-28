    const input = document.getElementById('string');
    const button = document.getElementById('submit');
    const waitIcon = document.getElementById('wait');
    const correctIcon = document.getElementById('correct');
    const wrongIcon = document.getElementById('wrong');

button.addEventListener('click', function(){
    checkPalindrome(input.innerText);
});

function checkPalindrome(input){
    if(input === '') {
        
        displayAlert('No value was inserted');
    } else {
        let reverseString = [...input].reverse().join('');
        
        // bug: can't seem to vanish and let images reappear accordingly
        //my program flow seems disorganized so far too.
        //check for string properties as defined in question
        //implement this using regex. Check regexone.com for some clarity on regex patterns


        if(reverseString === input) {
            waitIcon.style.animationName = 'vanish';
            console.log('wait icon vanished');
            setTimeout(() => {
                //correctIcon.style.animationName = 'appear';
                correctIcon.style.setProperty('opacity', '0', 'visibility', 'visible', 'animation-name', 'appear');
                console.log('correct icon appeared');
            }, 2000);
            setTimeout(() => {
                correctIcon.style.animation = 'heart-beat .25s infinite alternate;';
                console.log('correct icon heart beat started');
            }, 4000);
        } else {
            waitIcon.style.animationName = 'vanish';
            setTimeout(() => {
                wrongIcon.style.animationName = 'appear';
            }, 2000);
            setTimeout(() => {
                wrongIcon.style.animation = 'heart-beat .25s infinite alternate;';
            }, 4000);
        }
    }
}

function displayAlert(alert) {
    input.value = alert;
    setTimeout(removeError, 2000);
    output.value = '';
}

function removeError() {
    input.value = '';
}

/*
    Probable use case:
        This could be that white board interview question
        between you and your dream job. 
        And am just being frank on that.
*/
