function wfoScroll(element) {
    document.querySelector(element).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function wfoExpandToggle(element) {
    element.parentElement.classList.toggle('border');
    let parent = element.parentElement;
    parent.querySelector('.wfo.expand.content').classList.toggle('visible')
}