async function jokes() {
  const response = await fetch(
    "https://api.humorapi.com/jokes/search?api-key=44b5431c2bff477898c6300e6cb2b37a"
  );
  if (response.ok) {
    const joke = await response.json();
    console.log(joke.jokes[0]);
  }
}
let forJoke = document.getElementById("click-for-joke");
forJoke.addEventListener("click", () => {
  jokes();
});
