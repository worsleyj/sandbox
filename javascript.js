let index = 0;
const images = [
  "https://www.quackit.com/pix/samples/27m.jpg",
  "https://www.quackit.com/pix/samples/30m.jpg",
  "https://www.quackit.com/pix/samples/23m.jpg",
  "https://www.quackit.com/pix/samples/29m.jpg",
  "https://www.quackit.com/pix/samples/28m.jpg",
];
const nextBtn = document.querySelector(".next-image");
const prevBtn = document.querySelector(".prev-image");

function displayImage(index) {
  const slideshowImage = document.querySelector(".slideshow-image");
  slideshowImage.setAttribute("src", images[index]);
}

function nextImage() {
  if (index < images.length - 1) {
    index++;
  } else index = 0;
  displayImage(index);
}

function prevImage() {
  if (index > 0) {
    index--;
  } else index = images.length - 1;
  displayImage(index);
}

function fillNav() {
  fillIndex = 0;
  while (fillIndex < 10 && fillIndex < images.length) {
    const navContainer = document.querySelector(".nav-container");
    const newImage = document.createElement("img");
    newImage.className = "mini-preview";
    newImage.setAttribute("src", images[fillIndex]);
    navContainer.append(newImage);
    fillIndex++;
  }
}

fillNav();
nextBtn.addEventListener("click", nextImage);
prevBtn.addEventListener("click", prevImage);
displayImage(0);
