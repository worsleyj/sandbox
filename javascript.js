function isEmpty(object) {
    for(let key in object) {
        return false;
    }
    return true;
}

let user = {}
console.log(isEmpty(user));