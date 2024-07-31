const myObject = {
    name: "Joseph",
    age: 25,
    stateName: function() {
        console.log("My name is " + this.name);
    }
}

myObject.stateName()