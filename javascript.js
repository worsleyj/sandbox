const myObject = {
    name: "Joseph",
    age: 25,
    stateName: function() {
        console.log("My name is " + this.name);
    }
}

myObject.stateName()

function Player(name, marker) {
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(this.name);
    }
}

const playerOne = new Player("John", "X");
console.log(playerOne.marker);
playerOne.sayName();

function Book(title, author, pages, haveRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveRead = haveRead;
    if (haveRead) {
        this.readStatus = "has been read"
    } else {
        this.readStatus = "not read yet"
    }
    this.info = function() {
        return title + " by " + author + ", " + pages + " pages, " + this.readStatus + ".";
    }
}

const bookOne = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
console.log(bookOne.info());
console.log(bookOne.haveRead);