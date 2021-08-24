(function() {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    const blastConfetti = (isConstant) => {
        var duration = 30 * 1000;
        var end = Date.now() + duration;
        (function frame() {
            confetti({
                particleCount: 7,
                angle: 50,
                startVelocity: 70,
                spread: 30,
                origin: { x: 0, y: 0.7 }
            });
            confetti({
                particleCount: 7,
                angle: 130,
                startVelocity: 70,
                spread: 30,
                origin: { x: 1, y: 0.7 }
            });
            if (isConstant) {
                requestAnimationFrame(frame);
            } else {
                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            }
        }());
    }
    const setZero = () => {
        document.getElementById("days").innerText = 0
        document.getElementById("hours").innerText = 0
        document.getElementById("minutes").innerText = 0
        document.getElementById("seconds").innerText = 0
        countdown = document.getElementById("countdown");
    }

    const urlParams = new URLSearchParams(window.location.search);
    const isConstantMode = urlParams.get('c') !== "y";

    if (isConstantMode) {
        // let date = "Sep 02, 2021 15:30:00",
        let date = "Aug 25, 2021 08:26:30",
            countDown = new Date(date).getTime(),
            x = setInterval(function() {
                let now = new Date().getTime(),
                    distance = countDown - now;

                document.getElementById("days").innerText = Math.floor(distance / (day)),
                    document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
                    document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                    document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

                if (distance < 0) {
                    setZero();
                    var message = document.getElementById("message");
                    message.style.display = "flex"
                    clearInterval(x);
                    blastConfetti();
                }
            }, 0)
    } else {
        setZero();
        countdown = document.getElementById("countdown");
        blastConfetti(true);
    }
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