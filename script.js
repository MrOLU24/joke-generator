// Grabbing the joke display area (aka the laugh zone) and the joke button (our comedy trigger)
const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

// This is where the magic happens: an async function to fetch a joke from the internet
async function getJoke() {
  try {
    // Step 1: Dial up the joke API for a fresh giggle
    const response = await fetch(
      "https://official-joke-api.appspot.com/random_joke"
    );

    // Step 2: Transform that sweet, sweet joke data into usable content
    const data = await response.json();

    // Step 3: Update the joke element with the joke setup and punchline
    jokeElement.innerHTML = `${data.setup} - ${data.punchline}`;
  } catch (error) {
    // Uh oh, no jokes today! Blame the internet.
    jokeElement.innerHTML = "Oops! Couldn't fetch a joke. Try again.";
    console.log(error); // Log the error so we know what went wrong
  }
}

// Listen for the "Get Joke" button click. Comedy is just one click away!
jokeBtn.addEventListener("click", getJoke);

// Fetch a joke when the page loads, because who doesn't want instant laughter?
getJoke();