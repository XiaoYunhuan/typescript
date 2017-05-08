/**
 * Created by DELL on 2017/5/6.
 */
//boolean
let isDone: boolean = false;
//number
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
//string
let name1: string = "bob";
name1 = "smith";

//模板字符串
let name2: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name2 }.

I'll be ${ age + 1 } years old next month.`;

let sentence1: string = "Hello, my name is " + name + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";

console.log(sentence);
console.log(sentence1);

//数组
let list: number[] = [1, 2, 3];
let list1: Array<number> = [1, 2, 3];

//元祖 Tuple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
// x = [10, 'hello']; // Error

console.log(x[0].substr(1)); // OK
// console.log(x[1].substr(1));

//枚举
enum Color {Red = 1, Green, Blue};
let c: Color = Color.Green;
let colorName: string = Color[2];
alert(colorName);

//空值
function warnUser(): void {
    alert("This is my warning message");
}
let unusable: void = undefined;

//Null和Undefined
let u: undefined = undefined;
let n: null = null;

//Never
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}
//类型断言
//1
// let someValue: any = "this is a string";
//
// let strLength: number = (<string>someValue).length;
//2
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
