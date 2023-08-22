class wfo {
    static Scroll(element) {
        document.querySelector(element).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    static ExpandToggle(element) {
        element.parentElement.querySelector(".wfo.expand.content").classList.toggle("active");
    }

    static BorderExpandToggle(toggleElement) {
        toggleElement.parentElement.classList.toggle('active');
        let parent = toggleElement.parentElement;
        parent.querySelector('.wfo.border-expand.content').classList.toggle('active')
    }

    static NavActiveToggle(element) {
        parent = element.parentElement;
        parent.classList.toggle('active');
    }
    static NavDropdownToggleOpen(element) {
        parent = element.parentElement;
        parent.querySelector('div').classList.toggle('active');
    }
    static NavDropdownToggleClose(element) {
        element.parentElement.classList.toggle('active');
    }

    static CheckboxChecked(checkbox) {
        return document.querySelector(checkbox).checked;
    }

    static ColorModeToggle() {
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
}