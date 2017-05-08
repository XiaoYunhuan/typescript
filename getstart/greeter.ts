/**
 * Created by DELL on 2017/5/6.
 */


class Student{
    fullName: string;
    constructor(public firstName, public middleInitial, public lastName){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}


interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person){
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "Jane",
    lastName: "User"
};
document.body.innerHTML = greeter(user);