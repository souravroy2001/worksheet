function CreatePerson(name) {
    this.name = name;

    this.greeting = function () {
        return `My name is ${this.name}`
    }

}

let first = new CreatePerson("Alice")
console.log(first.greeting())
