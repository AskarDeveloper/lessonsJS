function form() {
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
}

module.exports = form;