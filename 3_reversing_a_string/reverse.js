    const input = document.getElementById('string');
    const output = document.getElementById('reversedString');
    const button = document.getElementById('submit');

button.addEventListener('click', function(){
    reverseString(input.value);
});

function reverseString(input){
    //#1--using built in methods
    //let arr = [...input];  //or = input.split("");
    //let reverseStringArr = arr.reverse();
    //console.log(reverseStringArr);
    //let reversedString = reverseStringArr.join("");
    //output.value = reversedString;

    //#2--as a single line of code
    //output.value = [...input].reverse().join("");

    //#3--from scratch
    let reversed = '';
    for(let index = --input.length; index >= 0; index--){
        //note: --input.length === input.length - 1
        reversed += input[index]; 
    }
    output.value = reversed;
}

/*
    Probable use case:
        String reversal could be a component of
        a data encoding algorithm. Try it out!
*/
