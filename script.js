const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

async function getJoke() {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    jokeElement.innerHTML = data.value;
    console.log(data)
    // document.getElementById('joke').innerHTML = `${data.setup}- ${data.punchline}`
  } catch (error) {
    jokeElement.innerHTML = "Oops! Couldn't fetch a joke. Try again.";
    console.log(error);
  }
}
jokeBtn.addEventListener("click", getJoke);

getJoke();
