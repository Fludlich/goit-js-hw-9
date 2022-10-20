let getEl = selector => document.querySelector(selector);
const start = getEl('[data-start]');
const stop = getEl('[data-stop]');
const body = getEl('body');
let colorId = null;
let def = 0;

start.addEventListener('click', () => {
  def += 1;
  if (def === 1) {
    colorId = setInterval(() => {
      body.style.backgroundColor = getRandomHexColor();
    }, 1000);
  }
});
stop.addEventListener('click', () => {
  clearInterval(colorId);
  def = 0;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
