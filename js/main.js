/*   AOS initialization   */


AOS.init({
    duration: 1000,
    once: true,
});

const message = document.querySelector('#omid-message').innerHTML


document.querySelector('#omid-message').textContent = ""
document.querySelector('#omid-message').innerHTML = ''


var _ = new Typed('#omid-message', {
    strings: [message],
    startDelay: 1000,
    typeSpeed: 50,
    loop: false
})

// Header fixed to top on scroll
const header = document.querySelector('#header')
let headerOffset = header.offsetTop
let nextElement = header.nextElementSibling

function fixHeader() {


    if ((headerOffset - window.scrollY) <= 0) {
        header.classList.add('fixed-top')
        nextElement.classList.add('scrolled-offset')
    } else {
        header.classList.remove('fixed-top')
        nextElement.classList.remove('scrolled-offset')
    }
}
document.addEventListener('scroll', fixHeader)
window.onload = fixHeader