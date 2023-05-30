var images = [
    "./public/images/slider/slide1.jpg",

    "./public/images/slider/slide2.jpg",

    "./public/images/slider/slide3.jpg"
];

var num = 0;
function next() {
    var slider = document.getElementById("slider");
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

setInterval(next,4000);

function prev() {
    var slider = document.getElementById("slider");
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}