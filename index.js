const nav = document.querySelector("nav");
const scrollObserver = document.createElement('div');

scrollObserver.setAttribute('data-scroll-observer', '');
nav.before(scrollObserver);

const navObserver = new IntersectionObserver(() => {
    nav.classList.toggle('change-background')
});

navObserver.observe(scrollObserver);

function copy (element) {
    let pElement = element.parentElement;
    let cElement = pElement.querySelector('code');
    navigator.clipboard.writeText(cElement.textContent);

    element.querySelector('.bi.bi-clipboard').classList.toggle('hide');
    element.querySelector('.bi.bi-check-lg').classList.toggle('hide');
    setTimeout(function() {
        element.querySelector('.bi.bi-clipboard').classList.toggle('hide');
        element.querySelector('.bi.bi-check-lg').classList.toggle('hide');
    }, 2500);
}
function themeToggle() {
    wfoColorModeToggle();
    document.querySelector('body').classList.toggle('dark');
}

const theme = window.matchMedia('(prefers-color-scheme: dark)');
if (theme) {
    document.getElementById("theme-switch").click();
}
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',({ matches }) => {
    document.getElementById("theme-switch").click();
});