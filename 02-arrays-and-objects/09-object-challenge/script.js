const library = [
    {
        id: 1,
        title: "Head First Java",
        author: "Bert Bates and Kathy Sierra",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        id: 2,
        title: "Head First Android Development",
        author: "David Griffiths and Dawn Griffiths",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
    {
        id: 3,
        title: "Romeo and Juliet",
        author: "William Shakespeare",
        status: {
            own: true,
            reading: false,
            read: false
        }
    },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];

const json = JSON.stringify(library);

console.log(json);