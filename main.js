const daysEl = document.querySelector(".days"),
      hoursEl = document.querySelector(".hours"),
      minutesEl = document.querySelector(".minutes"),
      secondsEl = document.querySelector(".seconds");

const newYears = "1 Jan 2022";

function countdown() {
    const newYearsDate = new Date(newYears),
          currentDate = new Date(),
          totalSeconds = (newYearsDate - currentDate) / 1000,
          days = Math.floor(totalSeconds / 60 / 60 / 24),
          hours = Math.floor(totalSeconds / 60 / 60) % 24,
          minutes = Math.floor(totalSeconds / 60) % 60,
          seconds = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);

