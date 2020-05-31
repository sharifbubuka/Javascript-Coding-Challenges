const list = document.getElementById('list');
const posts = [ //Assume this is your server data
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"}
];

function getPosts() { 
    setTimeout(() => { 
        let ouput = '';
        posts.forEach((post, index) => {
            ouput += `<li>${post.title}</li>`;
        });
        console.log(list);
        list.innerHTML = ouput;
    }, 1000);
};

function createPost(post) {
//#1 return a promise. Takes in a resolve or reject
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            const error = false; //if error = true, promise is rejected and error is  
            if(!error) {        //caught and when error is false, promise is resolved
                resolve();
            } else {
                reject('Something went wrong');
            }
        }, 2000);
    });  
};

//#2 createPost is called, returns a promise. With the <<then>> syntax, 
//if no error, our argument fuction is called.
//createPost({title: "Post Three", body: "This is post three"}).then(getPosts); 
//#3 use the <<catch>> syntax, we can catch the uncaught promise
//createPost({title: "Post Three", body: "This is post three"}).then(getPosts)
                                        //.catch(error => console.log(error));  

//Promise.all
const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye')); 
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()) //change to json
                                                                    .then(json => console.log(json)); //log the json data

Promise.all([promise1,promise2,promise3, promise4]).then(values => console.log(values));

