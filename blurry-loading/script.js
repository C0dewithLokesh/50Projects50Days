const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
    load++;

    if(load > 99) {
        clearInterval(int);
    }

    /*A template literal is a way to create a string in JavaScript by embedding expressions inside backtick ( ) characters. This allows for dynamic creation of strings that can include variables, functions, or expressions within them.
    e.g - instead of (load + '%')  ---> we can use `${load}%`
    */

    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}