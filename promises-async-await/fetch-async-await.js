const fetch = require('node-fetch');

const verifiedFetch = async (url) => {
    if(url === 'https://api.chucknorris.io/jokes/random?category=dev'){
      return fetch(url)
      .then(r => r.json())
      .then(r => (r.value))
    } 
    throw new Error('Problemas com endpoint');
};

const sendToFriend = async (nome) => {
  const piada = await verifiedFetch('https://api.chucknorris.io/jokes/random?category=dev')
  .then((r) => `Oi ${nome}, olha só essa piada: "${r}."`)
  .catch((err) => err)
  console.log(piada)
}

sendToFriend('Jorge')