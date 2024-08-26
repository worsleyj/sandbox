const img = document.querySelector("img");

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
    });
}
const newGifBtn = document.querySelector("button");
newGifBtn.addEventListener("click", () => {
  newCatGif("cats");
});
