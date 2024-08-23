const dropdown = document.querySelector(".dropdown");
const dropdownItems = document.querySelector(".dropdown-items");
dropdown.addEventListener("mouseover", () => {
  dropdownItems.style.display = "block";
});
dropdown.addEventListener("mouseout", () => {
  dropdownItems.style.display = "none";
});
