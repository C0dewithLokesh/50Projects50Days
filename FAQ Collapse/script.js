// for complete faq
/*
const faq = document.querySelectorAll(".faq");

faq.forEach((element) => {
    element.addEventListener('click', () => {
        element.classList.toggle("active")
    })
})
*/

// for buttons only
const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((element) => {
    element.addEventListener('click', () => {
        element.parentNode.classList.toggle("active")
    })
})