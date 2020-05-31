const list = document.getElementById('list');
const posts = [ //Assume this is your server data
    {title: "Post One", body: "This is post one"},
    {title: "Post Two", body: "This is post two"}
];

function getPosts() { // Function to get posts from the server
    setTimeout(() => { //Fetches posts one second after it's called
        let ouput = '';
        posts.forEach((post, index) => {
            ouput += `<li>${post.title}</li>`;
        });
        console.log(list);
        list.innerHTML = ouput;
    }, 1000);
};

/*function createPost(post) { //function that creates a post two seconds after it's called
    setTimeout(() => {
        posts.push(post);
    }, 2000);
};*/
//#3 modify  the createPost function to take in a callback
function createPost(post, callback) { //function that creates a post two seconds after it's called and takes in a callback
    setTimeout(() => {
        posts.push(post);
        callback(); //call the callback function immediately after adding a post
    }, 2000);
};

//#4
createPost({title: "Post Three", body: "This is post three"}, getPosts); //immediately a post is added, the callback is called too

//#1
//getPosts(); //fetched after one second
//#2
//createPost({title: "Post Three", body: "This is post three"}); //created after 2 seconds

//Notice? Third post is not displayed on the screen. Asynchronous programming will help you out there.

