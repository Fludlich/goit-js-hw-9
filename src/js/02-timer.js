import flatpickr from 'flatpickr';

import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notiflix.Notify.init({
  showOnlyTheLastOne: true,
  timeout: 1,
});
//
const falsee = () => {
  Notify.failure('Qui timide rogat docet negare');
  // Notiflix.Notify.failure(
  //   'Choose the correct date',
  //   function cb() {
  //     // callback

  //   },
  // );
};
const falseeDate = () => {
  Notiflix.Notify.failure('Choose youre date', function cb() {
    // callback
  });
};
const truee = () => {
  Notiflix.Notify.success('Youre date is valid', function cb() {
    // callback
  });
};

const chooseDate = document.getElementById('datetime-picker');
const startBtn = document.querySelector('[data-start]');
let timerDays = document.querySelector('[data-days]');
let timerHours = document.querySelector('[data-hours]');
let timerMinutes = document.querySelector('[data-minutes]');
let timerSeconds = document.querySelector('[data-seconds]');
let arar;
let result;
let stopTimer = 0;

startBtn.addEventListener('click', event => {
  stopTimer += 1;
  if (stopTimer === 1) {
    timer.start();
  }
});

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onChange(selectedDates) {
    const dateValid = selectedDates[0] - new Date();
    if (dateValid < 0) {
      falsee();
      localStorage.setItem('userDate', 1000);
      timerDays.textContent = '00';
      timerHours.textContent = '00';
      timerMinutes.textContent = '00';
      timerSeconds.textContent = '00';
    }
    if (dateValid > 0) {
      truee();
    }
  },
  onClose(selectedDates) {
    let dateValid = selectedDates[0] - new Date();
    if (dateValid < 0) {
      Notiflix.Notify.failure('Choose the correct date', function cb() {});
      return;
    }
    localStorage.setItem('userDate', Date.parse(selectedDates[0]));
    const currrentTime = Date.now();

    arar = currrentTime - selectedDates[0];
    convertMs(+-arar);

    timerDays.textContent = result.days;
    timerHours.textContent = result.hours;
    timerMinutes.textContent = result.minutes;
    timerSeconds.textContent = result.seconds;
  },
};

flatpickr(chooseDate, options);

function pad(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = pad(Math.floor(ms / day));
  // Remaining hours
  const hours = pad(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = pad(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = pad(Math.floor((((ms % day) % hour) % minute) / second));

  return (result = { days, hours, minutes, seconds });
}

const timer = {
  start() {
    startBtn.textContent = 'Stop';
    const startTime = localStorage.getItem('userDate');
    const currentTime = Date.now();
    if (startTime < currentTime) {
      stopTimer = 0;
      startBtn.textContent = 'Start';
      falseeDate();
      return;
    }
    const tiimerId = setInterval(() => {
      const currrentTime = Date.now();

      arar = currrentTime - startTime;

      convertMs(+-arar);

      timerDays.textContent = result.days;
      timerHours.textContent = result.hours;
      timerMinutes.textContent = result.minutes;
      timerSeconds.textContent = result.seconds;

      if (arar > -1000) {
        clearInterval(tiimerId);
        stopTimer = 0;
        startBtn.textContent = 'Start';
      }
      if (stopTimer > 1) {
        if (arar < -1000) {
          startBtn.textContent = 'Resume';
          clearInterval(tiimerId);
          stopTimer = 0;
          return;
        }
        clearInterval(tiimerId);
        stopTimer = 0;
        startBtn.textContent = 'Start';
      }
    }, 1000);
  },
};
