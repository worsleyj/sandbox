const myObject = {
    name: "Joseph",
    age: 25,
    stateName: function() {
        console.log("My name is " + this.name);
    }
}

const User = function (name) {
    this.name = name;
    this.discordName = "@" + name;
}
const newUser = new User("AParkedTruck");

console.log(newUser);

function createUser(name) {
    const discordName = "@" + name;

    let reputation = 0;
    const getReputation = () => reputation;
    const giveReputation = () => reputation++;
    return {name, discordName, getReputation, giveReputation};
}

const newUserTwo = createUser("AParkedChopper");
newUserTwo.giveReputation();
newUserTwo.giveReputation();
console.log(newUserTwo.getReputation());

const calculator = (function () {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    return {add, sub, mul, div}
})();

console.log(calculator.add(3, 5));