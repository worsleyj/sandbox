const container = document.querySelector("#container");

const display = document.querySelector(".display");

const div = document.createElement("div");
const div2 = document.createElement("div2");

div.textContent = "DIV"
div2.textContent = "DIV2"

display.appendChild(div);
display.appendChild(div2);

div2.style.color = "red";
div.style.cssText= "color: blue; background: grey;";

const buttonTwo = document.querySelector("#two");
buttonTwo.onclick = () => alert("hello World 2");

const buttonThree = document.querySelector("#three");
buttonThree.addEventListener("click", () => {
    alert("hello WORLD 3");
})