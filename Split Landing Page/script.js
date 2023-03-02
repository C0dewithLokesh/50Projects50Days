const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

// for left side
left.addEventListener("mouseenter", () => container.classList.add("hover-left"))
left.addEventListener("mouseleave", () => container.classList.remove("hover-left"))

// for right side
right.addEventListener("mouseenter", () => container.classList.add("hover-right"))
right.addEventListener("mouseleave", () => container.classList.remove("hover-right"))