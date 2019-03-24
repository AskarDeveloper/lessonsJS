// Timer

"use strict";

let deadline = '2019-03-23';

function getTimeReamining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t / 1000) % 60),
        minutes = Math.floor((t / 1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));

    if (hours <= 9) hours = "0" + hours;
    if (minutes <= 9) minutes = "0" + minutes;
    if (seconds <= 9) seconds = "0" + seconds;

    return {
        'total' : t,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}


function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getTimeReamining(endtime);
        hours.textContent = t.hours;
        minutes.textContent = t.minutes;
        seconds.textContent = t.seconds;

    function stopClock() {
        let t = getTimeReamining(endtime);
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