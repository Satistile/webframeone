class wfo {
    static Scroll(element) {
        document.querySelector(element).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    static CheckboxChecked(checkbox) {
        return document.querySelector(checkbox).checked;
    }
}