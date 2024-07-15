const ul = document.querySelector("ul")
const input = document.querySelector("input")
const button = document.querySelector("button")

button.addEventListener("click", () => {
    let currInput = input.value;
    // console.log(currInput);

    const li = document.createElement("li")
    const delButton = document.createElement("button")
    const span = document.createElement("span")

    li.appendChild(span)
    li.appendChild(delButton)

    span.textContent = currInput;
    delButton.textContent = "Delete";
    delButton.addEventListener("click", () => {
        li.remove()
        input.focus();
    })

    ul.appendChild(li);
    input.value = "";
    input.focus();
})