/**
 * Created by DELL on 2017/5/6.
 */
class Student {
    constructor(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "Jane",
    lastName: "User"
};
document.body.innerHTML = greeter(user);
//# sourceMappingURL=greeter.js.map