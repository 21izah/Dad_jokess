const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
btnEl.addEventListener("click", fetchDadJOkes);

const apiKey = "cfyplITy9T6ozfe9uWCDqA==hjLOZf0ofSL80XME";
const url = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

const headers = {
  "X-Api-Key": apiKey
};
async function fetchDadJOkes() {
  try {
    jokeEl.innerText = "Loading....";
    btnEl.disabled = true;
    btnEl.innerText = "Loading....";
    const response = await fetch(url, {
      method: "GET",
      headers: headers
    });
    if (!response) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.log(data[0]["joke"]);
    jokeEl.innerText = data[0].joke;
  } catch (error) {
    jokeEl.innerText = error;
    btnEl.disabled = false;
    btnEl.innerText = "Tell me a joke";
    console.error("Error", error);
  }
}
