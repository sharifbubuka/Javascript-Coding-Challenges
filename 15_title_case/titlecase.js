    const input = document.getElementById('string');
    const output = document.getElementById('titlecase');
    const button = document.getElementById('find');

button.addEventListener('click', function(){
    changeToTitleCase(input.value);
});

function changeToTitleCase(test){
    console.log('Test string is: ' + test);
    if(test === '') {
        input.value = 'Insert string above please';
        setTimeout(() => input.value = '', 2000);
    } else {
        //#1-using for loop
        //let words = test.toLowerCase().split(' ');
        //console.log(words);
        //let uppercase = new Array(words.length);
            //for(let index = 0; index < words.length; index++) {
                //let word = [...words[index]];
            //uppercase[index] = word[0].toUpperCase() + word.slice(1).join('');
            //console.log(uppercase[index]);

        //#2-condesed form
        let titleCase = string =>  string.split(' ').map(x => x.charAt(0).toUpperCase().concat(x.substring(1))).join(' ');
        //note however, over condesing code is bad practice!!!
        //}
        //#1 output.value = uppercase.join(" ");
        output.value = titleCase(test);

    }
}

/*
    Probable use case:
             
*/
