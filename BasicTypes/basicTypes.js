/**
 * Created by DELL on 2017/5/6.
 */
//boolean
var isDone = false;
//number
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
//string
var name1 = "bob";
name1 = "smith";
//模板字符串
var name2 = "Gene";
var age = 37;
var sentence = "Hello, my name is " + name2 + ".\n\nI'll be " + (age + 1) + " years old next month.";
var sentence1 = "Hello, my name is " + name + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
console.log(sentence);
console.log(sentence1);
//数组
var list = [1, 2, 3];
var list1 = [1, 2, 3];
//元祖 Tuple
// Declare a tuple type
var x;
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
var c = Color.Green;
var colorName = Color[2];
alert(colorName);
//空值
function warnUser() {
    alert("This is my warning message");
}
var unusable = undefined;
//Null和Undefined
var u = undefined;
var n = null;
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
var someValue = "this is a string";
var strLength = someValue.length;
//# sourceMappingURL=basicTypes.js.map