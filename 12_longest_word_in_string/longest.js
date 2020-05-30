    const input = document.getElementById('string');
    const output = document.getElementById('longest');
    const button = document.getElementById('find');

button.addEventListener('click', function(){
    findLongestString(input.value);
});

function findLongestString(test){
    console.log('Test string is: ' + test);
    if(test === '') {
        input.value = 'Insert string above please';
        setTimeout(() => input.value = '', 2000);
    } else {
        //#using for...of loop
        //let words = test.split(' ');
        //console.log(words);
        //let longest = '';
        //for(let word of words) {
            //word.length > longest.length ? longest = word : longest = longest; 
        //}
        //output.value = '';
        //output.value = `The longest word is ${longest} at a length of ${longest.length} words.`;

        //#using sort();
        output.value = `The longest word is ${test.split(' ').sort((a,b) => {return b.length - a.length})[0]} at a length of ${test.split(' ').sort((a,b) => {return b.length - a.length})[0].length} words.`;
        //Note: Over condensing code is bad practice!!!!!!!!!!
    }
}

/*
    Probable use case:
        Getting the longest string. This is as 
        straight forward as it seems.      
*/
