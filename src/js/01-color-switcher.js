let getEl = selector => document.querySelector(selector);
const start = getEl('[data-start]');
const stop = getEl('[data-stop]');
const body = getEl('body');
let colorId = null;
let def = 0;
stop.style.opacity = 0.5
start.addEventListener('click', () => {
  def += 1;
  if (def === 1) {
    colorId = setInterval(() => {
      start.style.opacity = 0.5
      stop.style.opacity = 1
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
});
stop.addEventListener('click', () => {
  clearInterval(colorId);
  def = 0;
  start.style.opacity = 1
  stop.style.opacity = 0.5
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
