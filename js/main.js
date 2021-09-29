/*   AOS initialization   */

window.addEventListener('load', () => {
    AOS.init({
        duration: 1000,
        once: true,
    });
})
document.addEventListener('DOMContentLoaded', function() {
    const message = document.querySelector('#omid-message').innerHTML


    document.querySelector('#omid-message').textContent = ""
    document.querySelector('#omid-message').innerHTML = ''


    var _ = new Typed('#omid-message', {
        strings: [message],
        startDelay: 1000,
        typeSpeed: 50,
        loop: false
    })

})