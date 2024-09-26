document.addEventListener('DOMContentLoaded', function () {

    const scrollContainer = document.querySelector('.scroll-container');
    const scrollPercent = document.getElementById('scroll-percent');
    const scrollToTop = document.getElementById('scroll-to-top');

    // Disable right click context menu
    document.addEventListener('contextmenu', e => e.preventDefault());

    // Change cursor on mouse click
    document.addEventListener('mousedown', function() {
        document.body.style.cursor = 'url("static/click-cursor.png") 19 2, auto';
    });

    document.addEventListener('mouseup', function() {
        document.body.style.cursor = 'url("static/default-cursor.png") 19 2, auto';
    });

    scrollToTop.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = scrollToTop.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
        return false;
    });

    document.addEventListener('scroll', function () {

        // Credit: https://stackoverflow.com/a/8028584
        var h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';

        var percent = Math.round((h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100);

        if (percent == 0) {
            scrollContainer.style.visibility = 'hidden';
        } else {
            scrollContainer.style.visibility = 'visible';
            scrollPercent.innerHTML = ' ' + percent + '%';
        }
    })
});
