function wfoScroll(element) {
    document.querySelector(element).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function wfoExpandToggle(toggleElement) {
    toggleElement.parentElement.classList.toggle('border');
    let parent = toggleElement.parentElement;
    parent.querySelector('.wfo.expand.content').classList.toggle('visible')
}