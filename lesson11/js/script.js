window.addEventListener('DOMContentLoaded', function () {

    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', (event) => {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                }
            }
        }
    });

    // Timer

    let deadline = '2019-03-27';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor((t / (1000 * 60 * 60)));

        if (hours <= 9) {
            hours = `0${hours}`;
        }
        if (minutes <= 9) {
            minutes = `0${minutes}`;
        }
        if (seconds <= 9) {
            seconds = `0${seconds}`;
        }

        return {
            'total': t,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }


    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            function stopClock() {
                let t = getTimeRemaining(endtime);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }

            if (t.total <= 0) {
                clearInterval(timeInterval);
                stopClock();
            }
        }
    }

    setClock('timer', deadline);

    // Modal

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

    // Form

    let message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся!',
        failure: 'Что-то пошло не так...'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

    statusMessage.classList.add('status');

    // allow only digits & '+'
    input[0].onkeypress = function (e) {
        e = e || event;

        if (e.ctrlKey || e.altKey || e.metaKey) {
            return;
        }

        let chr = getChar(e);

        if (chr == null) {
            return;
        }

        if (chr >= '0' && chr <= '9' || chr == '+') {} else {
            return false;
        }
    };

    function getChar(event) {
        if (event.which != 0 && event.charCode != 0) {
            if (event.which < 32) {
                return null;
            }
            return String.fromCharCode(event.which);
        }
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form);

        let obj = {};
        formData.forEach(function (value, key) {
            obj[key] = value;
        });
        let json = JSON.stringify(obj);
        request.send(json);

        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.success;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
});