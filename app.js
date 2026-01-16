let secondsElapsed = 0;
let interval = null;

let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");

let previousValue = document.querySelector(".prev");
let nextValue = document.querySelector(".next");

function setTimeToClock() {
    const hrs = Math.floor(secondsElapsed / 3600);
    const mins = Math.floor((secondsElapsed % 3600) / 60);
    const secs= Math.floor(secondsElapsed % 60);

    hours.innerHTML =  String(hrs).padStart(2, '0');
    minutes.innerHTML =  String(mins).padStart(2, '0');
    seconds.innerHTML =  String(secs).padStart(2, '0');

    const pre = secs === 0 ? 59:secs - 1;
    const next = secs === 59 ? 1:secs + 1;

    previousValue.innerHTML = String(pre).padStart(2,'0');
    nextValue.innerHTML = String(next).padStart(2,'0');
}

function timer() {
    secondsElapsed ++;
    setTimeToClock();
}

function startStop() {
    if (interval)
    {
        clearInterval(interval);
        interval = null;
        document.querySelector(".start").innerHTML = "Start";
        document.querySelector(".start").style.backgroundColor = "rgb(94, 85, 113)";
    }
    else 
    {
        interval = setInterval(timer,1000);
        document.querySelector(".start").innerHTML = "Pause";
        document.querySelector(".start").style.backgroundColor = "rgb(181, 82, 95)";
    }

}

function resetClock() {
    clearInterval(interval);
    interval = null;
    secondsElapsed = 0;
    setTimeToClock();
}