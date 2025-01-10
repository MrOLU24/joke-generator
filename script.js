// script.js

const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

async function getJoke(){
    try{
        const response = await fetch('https://api.chucknorris.io/jokes/random')
        const data = await response.json ()
        jokeElement.innerHTML = data.value
    }catch(e)
}