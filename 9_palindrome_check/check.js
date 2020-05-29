const input = document.getElementById('string');
const button = document.getElementById('submit');
const waitIcon = document.getElementById('wait');
const correctIcon = document.getElementById('correct');
const wrongIcon = document.getElementById('wrong');

button.addEventListener('click', function(){
    checkPalindrome(input.value);
});

function checkPalindrome(test){ 
    if(test === '') {
        displayAlert('No value was inserted');
    } else { 
        let reverseString = [...test].reverse().join('');
        console.log(reverseString + '      ' + test);
        
        // bug: can't seem to vanish and let images reappear accordingly
        //my program flow seems disorganized so far too.
        //check for string properties as defined in question
        //implement this using regex. Check regexone.com for some clarity on regex patterns


        if(reverseString === test) { 
            if((waitIcon.style.visibiity === 'visible') || (wrongIcon.style.visibiity === 'visible')) { 
                deactivate([waitIcon,wrongIcon]);
                setTimeout(activate(correctIcon),500);
            } else {
                return;
            }
        } else {
            if((waitIcon.style.visibiity === 'visible') || (correctIcon.style.visibiity === 'visible')) {
                deactivate([waitIcon,wrongIcon]);
                setTimeout(activate(wrongIcon),500);
            } else {
                return;
            }
        } 
    } 
} 

function displayAlert(alert) {
    input.value = alert;
    setTimeout(() => {
        input.value = '';
    }, 2000);
}

function deactivate(elements) {
    elements.forEach(element => {
        element.style.visibiity = 'hidden !important';
    });
}

function activate(element) {
    element.style.visibiity = 'visible !important';
}
/*
    Probable use case:
        This could be that white board interview question
        between you and your dream job. 
        And am just being frank on that.
*/
