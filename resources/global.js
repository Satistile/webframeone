class wfo {
    static Scroll(element) {
        document.querySelector(element).scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }

    static CheckboxChecked(checkbox) {
        return document.querySelector(checkbox).checked;
    }

    static scrollWatcher() {
        const elements = document.querySelectorAll('.fade-in');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const rect = entry.boundingClientRect;
                if (!entry.isIntersecting && (rect.bottom > window.innerHeight) && entry.target.classList.contains('visible')) {
                    // element left the screen
                    entry.target.classList.remove('visible');
                } else if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
                    // element is visible
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.05 // for example 5% of the element must be visible
        });

        elements.forEach(element => {
            observer.observe(element);
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    wfo.scrollWatcher();
});

document.addEventListener('astro:page-load', () => {
    wfo.scrollWatcher();
});