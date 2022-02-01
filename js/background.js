const images = [
    "flowers-g3ad1dd384_1280.png",
    "sea-g63f81d590_1920.jpg",
    "sea-gdc494dbc8_1920.jpg",
    "squirrel-gc7c42c48b_1920.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
document.body.appendChild(bgImage);

