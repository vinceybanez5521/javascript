const socials = ["twitter", "linkedin", "facebook", "instagram"];

// console.log(socials.__proto__);

// socials.forEach(function (social) {
//     console.log(social);
// });

// socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

function logSocials(social, index) {
    console.log(index, social);
}

// socials.forEach(logSocials);

const socialObjs = [
    { name: "Twitter", url: "https://twitter.com" },
    { name: "Facebook", url: "https://facebook.com" },
    { name: "Linkedin", url: "https://linkedin.com" },
    { name: "Instagram", url: "https://instagram.com" }
];

socialObjs.forEach(item => console.log(item.name));