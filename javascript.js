const img = document.querySelector("img");
const searchBox = document.querySelector("input");
const newGifBtn = document.querySelector("button");

function newCatGif(searchTerm) {
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=6ai0C1nbu2BfXTGjoBtsrH3wUBeiqcqF&s=" +
      searchTerm,
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      console.log(response.data.images.original.url);
      img.src = response.data.images.original.url;
    })
    .catch((error) => {
      console.log(error);
    });
}

newGifBtn.addEventListener("click", () => {
  newCatGif(searchBox.value);
});
