var targetDate = new Date("2020-12-15T16:00:00.000Z");

function start() {
    function printTime() {
        var now = new Date();
        var duration = (targetDate.getTime() - now.getTime()) / 1000;

        var seconds = parseInt((duration) % 60),
            minutes = parseInt((duration / 60) % 60),
            hours = parseInt((duration / 3600) % 24),
            days = parseInt((duration / (3600 * 24)) % 7),
            weeks = parseInt((duration / (3600 * 24 * 7)));

        weeks = (weeks > 0 && weeks < 10) ? "0" + weeks : weeks;
        days = (days > 0 && days < 10) ? "0" + days : days;
        hours = (hours > 0 && hours < 10) ? "0" + hours : hours;
        minutes = (minutes > 0 && minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds > 0 && seconds < 10) ? "0" + seconds : seconds;

        weeks = (weeks === 0) ? "00" : weeks;
        days = (days === 0) ? "00" : days;
        hours = (hours === 0) ? "00" : hours;
        minutes = (minutes === 0) ? "00" : minutes;
        seconds = (seconds === 0) ? "00" : seconds;

        document.getElementById('weeks').innerHTML = weeks;
        document.getElementById('days').innerHTML = days;
        document.getElementById('hours').innerHTML = hours;
        document.getElementById('minutes').innerHTML = minutes;
        document.getElementById('seconds').innerHTML = seconds;
    }

    printTime();
    var interval = setInterval(function () {
        printTime();
    }, 1000);
}
