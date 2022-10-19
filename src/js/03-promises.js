import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form')
const btn = document.querySelector('button')


let storage ={}
const inputAmount = storage.amount

btn.addEventListener('click', (event)=>{
 event.preventDefault()

 quantity()


})

form.addEventListener('input', (event)=>{
  storage[event.target.name]=event.target.value
  console.log(storage)


})

function quantity (){
console.log(storage.amount)
console.log(storage.delay)
  for (let index = 1; index <= storage.amount; index++) {

    createPromise(index, storage.step)
  }
}



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
 setTimeout(()=>{
  if (shouldResolve) {
   
     Notify.success(`Rejected promise ${position} in ${Number(position)*Number(delay)}ms`);
   
  

  } else {
  
   
     Notify.failure(`Rejected promise ${position} in ${Number(position)*Number(delay)}ms`);
    

  }
 }, (Number(storage.delay)+Number(delay)*Number(position)))
}
