var img1 = document.querySelector('.img-1');

img1.addEventListener('load', function () {
    // woo yey image loaded
});

img1.addEventListener('error', function () {
    // argh everything's broken
});
var img1 = document.querySelector('.img-1');

function loaded() {
    // woo yey image loaded
}

if (img1.complete) {
    loaded();
}
else {
    img1.addEventListener('load', loaded);
}

img1.addEventListener('error', function () {
    // argh everything's broken
});