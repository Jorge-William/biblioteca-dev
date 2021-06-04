
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random()*11);

  if(number <= 5){
    return reject(number);
  }
    resolve(number);
})
.then(num => `nossa que sorte ${num}`)
.then(msg => console.log(msg))
.catch(error => console.log(`Um erro aconteceu: ${error}`))
