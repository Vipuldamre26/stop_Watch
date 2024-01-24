
let section = document.querySelector(".timer");


let hour = 0;
let minute = 0;
let second = 0;
let timer;


// when window is loaded it will show the 00 : 00 : 00 
window.onload = display();


function display() {
    section.innerHTML = `0${hour} : 0${minute} : 0${second}`;
}




// when we click on the start button 
let start = document.querySelector(".start");

start.addEventListener("click", startTimer)


function startTimer() {
        timer = setInterval(timeUpadate, 1000);
}

function timeUpadate() {
    second++;
    if (second === 60) {
        second = 0;
        minute++;
        if (minute === 60) {
            minute = 0;
            hour++;
        }
    }

    upadateTime();
}




// when we click on the stop button 

let stop = document.querySelector(".stop");

stop.addEventListener('click', () => {
    clearInterval(timer);
})



function upadateTime() {
    section.innerHTML = timeCheck(hour) + ' : ' + timeCheck(minute) + ' : ' + timeCheck(second)
}

function timeCheck(time) {
    return time = (time < 10) ? '0' + time : time;
}



// reset the timer 

let reset = document.querySelector('.reset');

reset.addEventListener('click', () => {
    hour = 0;
    minute = 0;
    second = 0;
    timer;
    check = false;

    display();
    clearInterval(timer);
})