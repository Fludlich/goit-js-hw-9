import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form')
const btn = document.querySelector('button')


let storage ={}


btn.addEventListener('click', onSubmit)

function onSubmit (event){
 event.preventDefault()

 quantity()
setTimeout(()=>{
  storage={}
  form.reset()
},1000)

}

form.addEventListener('input', (event)=>{
  storage[event.target.name]=event.target.value
})

function quantity (){
  for (let index = 1; index <= storage.amount; index++) {

    createPromise(index, storage.step)
  }
}



function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  const promise = new Promise((resolve, reject) => {
 setTimeout(()=>{
  if (shouldResolve) {
    resolve({position: position, delay: delay})

  } else {

    reject({position: position, delay: delay})
  }
 }, (Number(storage.delay)+Number(delay)*Number(position)))
})

promise
.then(({ position, delay }) => {
Notify.success(`✅ Fulfilled promise ${position} in ${Number(delay)*Number(position)}ms`);
})

.catch(({ position, delay }) => {
Notify.failure(`❌ Rejected promise ${position} in ${Number(delay)*Number(position)}ms`);
});
}


