/**
 * Created by DELL on 2017/5/6.
 */
var Student = (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: "Jane",
    lastName: "User"
};
document.body.innerHTML = greeter(user);
//# sourceMappingURL=greeter.js.map