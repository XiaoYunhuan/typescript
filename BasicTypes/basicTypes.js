/**
 * Created by DELL on 2017/5/6.
 */
//boolean
let isDone = false;
//number
let decLiteral = 6;
let hexLiteral = 0xf00d;
let binaryLiteral = 0b1010;
let octalLiteral = 0o744;
//string
let name1 = "bob";
name1 = "smith";
//模板字符串
let name2 = `Gene`;
let age = 37;
let sentence = `Hello, my name is ${name2}.

I'll be ${age + 1} years old next month.`;
let sentence1 = "Hello, my name is " + name + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
console.log(sentence);
console.log(sentence1);
//数组
let list = [1, 2, 3];
let list1 = [1, 2, 3];
//元祖 Tuple
// Declare a tuple type
let x;
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error
console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1));
//枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
;
let c = Color.Green;
let colorName = Color[2];
alert(colorName);
//空值
function warnUser() {
    alert("This is my warning message");
}
let unusable = undefined;
//Null和Undefined
let u = undefined;
let n = null;
//Never
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) {
    }
}
//类型断言
//1
// let someValue: any = "this is a string";
//
// let strLength: number = (<string>someValue).length;
//2
let someValue = "this is a string";
let strLength = someValue.length;
//# sourceMappingURL=basicTypes.js.map