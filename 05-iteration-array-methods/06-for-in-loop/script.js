const colorObject = {
    color1: "red",
    color2: "blue",
    color3: "orange",
    color4: "green",
};

for (let key in colorObject) {
    console.log(key, colorObject[key]);
}

const colorArr = ["red", "green", "blue", "yellow"];

for (let index in colorArr) {
    console.log(colorArr[index]);
}