const post = {
    id: 1,
    title: "Post One",
    body: "This is the body"
}

// Convert Object Literal to JSON string
const str = JSON.stringify(post);

// Convert JSON string to Object Literal
const obj = JSON.parse(str);

const posts = [
    {
        id: 1,
        title: "Post One",
        body: "This is the body"
    },
    {
        id: 2,
        title: "Post Two",
        body: "This is the body"
    }
];

const str2 = JSON.stringify(posts);

console.log(str2);