import flatpickr from "flatpickr";
console.log(flatpickr)
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
console.log(Notiflix)
// Notiflix.Notify.init({
//   clickToClose: true,
// })
const falsee=()=>{
  Notiflix.Notify.failure(
    'Choose the correct date',
    function cb() {
      // callback
      
    },
  );
}
const falseeDate=()=>{
  Notiflix.Notify.failure(
    'Choose youre date',
    function cb() {
      // callback
      
    },
  );
}
const truee=()=>{
  Notiflix.Notify.success(
    'Youre date is valid',
    function cb() {
      // callback
    },
  );
}




const chooseDate = document.getElementById('datetime-picker')
const startBtn = document.querySelector('[data-start]')
const timerHtml = document.querySelectorAll('.value')
console.log(timerHtml)


// for (const text of myValue.textContent) {
//   console.log(text)
// }


console.log(startBtn)
let stopTimer = 0 
startBtn.addEventListener('click', (event)=>{

  stopTimer+=1
  if (stopTimer === 1){
    event.target= timer.start()
  }
 
})
let timerDays = document.querySelector('[data-days]')

let timerHours = document.querySelector('[data-hours]')

let timerMinutes = document.querySelector('[data-minutes]')

let timerSeconds = document.querySelector('[data-seconds]')

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onChange (selectedDates){
    const dateValid= selectedDates[0]-new Date()
    if (dateValid<0){
          // console.log('choose valid date')
          // console.log(dateValid)
          falsee()
          localStorage.setItem('userDate', 1000)
          
        }
        if(dateValid>0){
              console.log('youre date valid')

          truee()
            }
  },
  onClose(selectedDates) {
    let dateValid= selectedDates[0]-new Date()
    if (dateValid<0){

      Notiflix.Notify.failure(
        'Choose the correct date',
        function cb() {
          // callback
        },
      );
      return
    }
    localStorage.setItem('userDate', Date.parse(selectedDates[0]))
    // console.log(selectedDates[0]);
  
  },
  
};

flatpickr(chooseDate, options)

// const userDate = localStorage.getItem('userDate')- Date.now()

// console.log(userDate)



let result 



function pad(value){
  return String(value).padStart(2, '0')
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

  return result={days, hours, minutes, seconds};
}
convertMs()

// console.log(result.map(num=>num.textContent))


// function setTimerTime({ days, hours, minutes, seconds }){

//   console.log(myValue.map(num => {num.textContent=`${days}`}))
// }
// setTimerTime()
// for (const val of result) {
//   console.log(val)
// }
// const ararrarrr=[]
// console.log(result)
// for (const value in result) {
// console.log(value)
// ararrarrr.push(value)
    
//   }
//   console.log(ararrarrr)


const timer = {
  start(){
    startBtn.textContent = 'Stop'
    const startTime = localStorage.getItem('userDate') 
    const currentTime= Date.now()
    if(startTime<currentTime){
      console.log('4')
      // clearInterval(tiimerId)
      stopTimer=0
      startBtn.textContent = 'Start'
      falseeDate()
      return
     }
    const tiimerId = setInterval(() =>{
      const currrentTime= Date.now()
      
      const arar =currrentTime - startTime
   
    console.log(convertMs(+-arar))
        timerDays.textContent = result.days
        timerHours.textContent = result.hours
        timerMinutes.textContent= result.minutes
        timerSeconds.textContent= result.seconds
        console.log(arar)
    // for (let index = 0; index < timerHtml.length; index++) {
    //   const element = timerHtml[index];
    //   console.log(element.textContent=result.map(num=>num))
      
      
    // }
    
  

    if(arar>-1000){
      console.log('1')
      console.log(arar)
      clearInterval(tiimerId)
      stopTimer=0
      startBtn.textContent = 'Start'
    }
    if(stopTimer>1){
      if(arar<-1000){
        console.log('2')
        startBtn.textContent = 'Resume'
        clearInterval(tiimerId)
        stopTimer=0
        return
      }
      console.log('3')
      clearInterval(tiimerId)
      stopTimer=0
      startBtn.textContent = 'Start'
    }
  // console.log(result)

    }, 1000)
   
  }
}
console.log(Date.now())

