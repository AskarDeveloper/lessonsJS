function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personsSum = 0,
        daysSum = 0,
        total = 0;

    totalValue.innerHTML = 0;

    persons.addEventListener('change', function () {
        personsSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });

    restDays.addEventListener('change', function () {
        daysSum = +this.value;
        total = (daysSum + personsSum) * 4000;

        if (persons.value == '' || restDays.value == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = total;
        }
    });


    place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '') {
            totalValue.innerHTML = 0;
        } else {
            let a = total;
            totalValue.innerHTML = a * this.options[this.selectedIndex].value;
        }
    });


    // Allow only digits
    persons.onkeypress = function (e) {
        e = e || event;

        if (e.ctrlKey || e.altKey || e.metaKey) {
            return;
        }

        let chr = getChar(e);

        if (chr == null) {
            return;
        }

        if (chr < '0' || chr > '9') {
            return false;
        }
    };

    restDays.onkeypress = function (e) {
        e = e || event;

        if (e.ctrlKey || e.altKey || e.metaKey) {
            return;
        }

        let chr = getChar(e);

        if (chr == null) {
            return;
        }

        if (chr < '0' || chr > '9') {
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
}

module.exports = calc;