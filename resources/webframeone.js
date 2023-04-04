function wfoScroll(element) {
    document.querySelector(element).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
}

function wfoBorderExpandToggle(toggleElement) {
    toggleElement.parentElement.classList.toggle('active');
    let parent = toggleElement.parentElement;
    parent.querySelector('.wfo.border-expand.content').classList.toggle('active')
}

function wfoNavActiveToggle(element) {
    parent = element.parentElement;
    parent.classList.toggle('active');
}
function wfoNavDropdownToggleOpen(element) {
    parent = element.parentElement;
    parent.querySelector('div').classList.toggle('active');
}
function wfoNavDropdownToggleClose(element) {
    element.parentElement.classList.toggle('active');
}

function wfoCheckboxChecked(checkbox) {
    return document.querySelector(checkbox).checked;
}

function wfoColorModeToggle() {
    document.querySelectorAll(".wfo").forEach(function(element) {
        if((element.classList.contains('black') || element.classList.contains('white')) && !element.classList.contains('no-color-mode-toggle')) {
            element.classList.toggle("black");
            element.classList.toggle("white");
        }
        if((element.classList.contains('blacker') || element.classList.contains('whiter')) && !element.classList.contains('no-color-mode-toggle')) {
            element.classList.toggle("blacker");
            element.classList.toggle("whiter");
        }
    });
}