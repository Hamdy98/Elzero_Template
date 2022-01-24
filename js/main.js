// CountDown Timer
let countDownData = new Date("Dec 1, 2022 10:15:01").getTime();

let counter = setInterval(() => {
  // Get Data Now
  let dataNow = new Date().getTime();
  // console.log(dataNow);

  // Find The Data Difference Between Now And Countdown Data
  let dataDiff = countDownData - dataNow;

  // Get Time Units
  let days = Math.floor(dataDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dataDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dataDiff % (1000 * 60 * 60)) / (1000 * 60));
  let secounds = Math.floor((dataDiff % (1000 * 60 )) / (1000));

  document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
  document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".seconds").innerHTML = secounds < 10 ? `0${secounds}` : secounds;

  if (dataDiff < 0) {
    clearInterval(counter);
  }
}, 1000);


let progressSpans = document.querySelectorAll(".the-progress span");
let skillSection = document.querySelector(".our-skills");

let nums = document.querySelectorAll(".stats .number");
let statsSection = document.querySelector(".stats");
let started = false; //Function Started ? no

window.onscroll = function () {
  // Skills Animation Width
  if (window.scrollY >= skillSection.offsetTop - 250) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // Stats Increase Number
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count)
    }
  }, 2000 / goal);
}
