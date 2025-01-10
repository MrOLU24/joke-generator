const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

async function getJoke() {
  try {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    jokeElement.innerHTML = data.value;
  } catch (error) {
    jokeElement.innerHTML = "Oops! Couldn't fetch a joke. Try again.";
    console.log(error);
  }
}
jokeBtn.addEventListener("click", getJoke);

getJoke();
