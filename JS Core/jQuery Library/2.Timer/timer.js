function timer() {
    let seconds = $('#seconds');
    let minutes = $('#minutes');
    let hours = $('#hours');
    let startTimer = $('#start-timer');
    let stopTimer = $('#stop-timer');
    let timer=null;
    startTimer.on('click', step);

    stopTimer.on('click', function () {
        clearInterval(timer);
        timer=null;
    });

    function pad(str, max) {
        str = str.toString();
        return str.length < max ? pad("0" + str, max) : str;
    }

    function step() {
        if (timer != null) {
            return;
        }

        timer=setInterval(function () {
            seconds.text(pad(Number(seconds.text()) + 1, 2));
            if (seconds.text() >= 60) {
                seconds.text('00');
                minutes.text(pad(Number(minutes.text()) + 1, 2));
            }

            if (minutes.text() >= 60) {
                minutes.text('00');
                hours.text(pad(Number(hours.text()) + 1, 2));
            }
        }, 1000);
    }
}
