function modal() {
    let more = document.querySelectorAll('.more, .description-btn'),
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close'),
        moreSplash;

    more.forEach((item) => {
        item.addEventListener('click', function () {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
            moreSplash = document.querySelector('.more-splash');
        });
    });

    close.addEventListener('click', () => {
        document.body.style.overflow = '';
        overlay.style.display = '';
        moreSplash.classList.remove('more-splash');
    });
}

module.exports = modal;