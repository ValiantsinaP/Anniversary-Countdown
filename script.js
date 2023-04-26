function anniversaryCountdown() {
    const anniversaryDate = new Date("April 26, 2023 00:00");
    const now = new Date();
    const diff = anniversaryDate - now;

    const msInSecond = 1000;
    const msInMinute = 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInDay = 24 * 60 * 60 * 1000;

    const displayDay = Math.floor(diff / msInDay);
    document.querySelector(".days").textContent = displayDay;
    const displayHour = Math.floor((diff%msInDay) / msInHour);
    document.querySelector(".hours").textContent = displayHour;
    const displayMinute = Math.floor((diff%msInHour) / msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;
    const displaySecond = Math.floor((diff%msInMinute) / msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff <= 0){
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        happyAnniversary();
        }
}

let timerID = setInterval(anniversaryCountdown, 1000);

function happyAnniversary() {
    const heading = document.querySelector("h1");
    heading.textContent = "HAPPY ANNIVERSARY!!!"
    heading.classList.add("happy");
    const one = document.querySelector(".one");
    one.textContent = "I"
    one.classList.add("pic1");
    const two = document.querySelector(".two");
    two.textContent = "LO";
    two.classList.add("pic2");
    const three = document.querySelector(".three");
    three.textContent = "VE";
    three.classList.add("pic3");
    const four = document.querySelector(".four");
    four.textContent = "YOU";
    four.classList.add("pic4");
}
    const audio = document.querySelector("#myAudio");
    const button = document.querySelector("#myButton");
    button.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        }
        else {
            audio.pause();
        }
    })

