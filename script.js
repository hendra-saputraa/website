// Existing code
const seconds = document.querySelector(".seconds .number"),
  minutes = document.querySelector(".minutes .number"),
  hours = document.querySelector(".hours .number"),
  days = document.querySelector(".days .number");

// Target end date and time: August 13, 2024, 14:00:00 WITA
const targetEndTime = new Date('June 25, 2024 14:00:00 GMT+0800');

function updateCountdown() {
  const currentTime = new Date();
  const timeDifference = targetEndTime - currentTime;

  if (timeDifference <= 0) {
    clearInterval(timeFunction);
    return;
  }

  const daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeDifference % (1000 * 60)) / 1000);

  days.textContent = daysLeft < 10 ? `0${daysLeft}` : daysLeft;
  hours.textContent = hoursLeft < 10 ? `0${hoursLeft}` : hoursLeft;
  minutes.textContent = minutesLeft < 10 ? `0${minutesLeft}` : minutesLeft;
  seconds.textContent = secondsLeft < 10 ? `0${secondsLeft}` : secondsLeft;
}

updateCountdown(); // Initial call to update countdown

const timeFunction = setInterval(updateCountdown, 1000);
