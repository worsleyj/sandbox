let menu = {
    width: 200,
    height: 300,
    title: "My menu"
}

function mutliplyNumeric(menu) {
    for(let key in menu) {
        menu[key] = menu[key] *2;
    }
}

mutliplyNumeric(menu)
mutliplyNumeric(menu)
mutliplyNumeric(menu)
console.log(menu);