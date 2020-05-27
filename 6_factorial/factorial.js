const test = document.getElementById('test');
const output = document.getElementById('factorial');
const normal = document.getElementById('normal');
const recursion = document.getElementById('recursion');

const submitButtons = [normal,recursion];

for(element of submitButtons){
    element.addEventListener('click', function(e){
        if(test.value === ''){
            displayError('Insert number to factorialize here');
        } else if (e.target === normal) {
            output.value = factorialize(test.value);
        } else if (e.target === recursion) {
            output.value = recursive(test.value);
        }
    });
}

function displayError(error) {
    test.value = error;
    setTimeout(removeError, 2000);
    output.value = '';
}

function removeError() {
    test.value = '';
}

function factorialize(input){
    let answer = 1;
    for(input; input >= 1; input--) {
        answer *= input;
    }
    return answer;

}

function recursive(input) {
    let answer = input;
    if(input === 0) {
        return 1;
    } 
    return input * recursive(input - 1);
}


/*
    Probable use-case:
        -Finding the factorial of large numbers
        is a good fit for using web workers.

        -Typing effect to display the error could
        be a good challenge. What do you think?
*/