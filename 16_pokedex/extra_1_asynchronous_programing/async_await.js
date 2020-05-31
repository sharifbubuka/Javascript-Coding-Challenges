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

//#1 Async / Await
//async function init() {
    //await createPost({title: "Post Three", body: "This is post three"});
    //getPosts(); //waits for createPost to be done before it is called
//}
//init();

//#2 Async / Await with fetch()
async function fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);
};

fetchUser();