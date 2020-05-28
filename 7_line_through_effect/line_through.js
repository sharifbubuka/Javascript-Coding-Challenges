const text = document.getElementById('text');
const textArr = [...text.innerText]; //const textArr = text.innerText.split('');

const newEl = document.createElement('h1');
newEl.innerHTML = `${textArr.map(letter => `<span style="${randomVisibility()}">${letter}</span>`).join('')}`;
newEl.classList.add('overlay');

document.body.appendChild(newEl);

function randomVisibility() {
    let random = Math.random();
    console.log(random);
    return Math.random() < 0.5 ? 'visibility: hidden' : 'visibility: visible';
}

/*
    Bug present: A letter is not hidden randomly
    (or a random letter is not brought on top of
    the line.)
    Check randomVisibility() function and it's 
    target's syntanx

    Probable use-case: 
        Line through text can be used in a quiz
        application or in **game development**.
        Where else do you think this could be
        useful?
        
*/
