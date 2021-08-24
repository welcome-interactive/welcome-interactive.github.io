(function() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    const blastConfetti = () => {
        var duration = 30 * 1000;
        var end = Date.now() + duration;

        (function frame() {
            // launch a few confetti from the left edge
            confetti({
                particleCount: 7,
                angle: 60,
                spread: 55,
                origin: { x: 0, y: 0.7 }
            });
            // and launch a few from the right edge
            confetti({
                particleCount: 7,
                angle: 120,
                spread: 55,
                origin: { x: 1, y: 0.7 }
            });

            // keep going until we are out of time
            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }

    let date = "Sep 02, 2021 15:30:00",
        // let date = "Aug 24, 2021 17:40:00",
        countDown = new Date(date).getTime(),
        x = setInterval(function() {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("days").innerText = Math.floor(distance / (day)),
                document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

            if (distance < 0) {
                document.getElementById("days").innerText = 0
                document.getElementById("hours").innerText = 0
                document.getElementById("minutes").innerText = 0
                document.getElementById("seconds").innerText = 0
                countdown = document.getElementById("countdown");
                var message = document.getElementById("message");
                // countdown.style.display = "none";
                message.style.display = "flex"
                clearInterval(x);
                blastConfetti();
            }
        }, 0)

    var myCanvas = document.createElement('canvas');
    var ticker = true;

    myCanvas.addEventListener('click', () => {
        var config = {
            particleCount: 25,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.7 }
        }
        if (ticker) {
            config.origin.x = 1;
            config.angle = 120;
        }
        ticker = !ticker;
        myConfetti(config);

    })
    document.body.appendChild(myCanvas);
    var myConfetti = confetti.create(myCanvas, {
        resize: true,
        useWorker: true
    });
}());