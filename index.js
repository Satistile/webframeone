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