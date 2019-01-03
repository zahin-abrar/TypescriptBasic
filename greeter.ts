class Student {
    fullName: String;
    constructor(public firstName: String, public middleInitial: String, public lastName: String) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: String;
    lastName: String;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M", "User");

document.body.innerHTML = greeter(user);