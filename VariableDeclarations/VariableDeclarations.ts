/**
 * Created by DELL on 2017/5/7.
 */
//var声明变量的怪异之处
function sumMatrix(matrix: number[][]) {
    var sum = 0;
    for (var i = 0; i < matrix.length; i++) {
        console.log(`outer : ${i}`);
        var currentRow = matrix[i];
        for (var i = 0; i < currentRow.length; i++) {
            sum += currentRow[i];
            console.log(`inner : ${i}`);
        }
    }

    return sum;
}
var arr1 = [[1,2,3,4,5],[6,7,8,9,10]]
var result = sumMatrix(arr1);
console.log(result);

for (var i = 0; i < 10; i++) {
    (function(i){
        setTimeout(function() { console.log(i); }, 100 * i);
    }(i));
}

function foo() {
    // okay to capture 'a'
    // return a;
    console.log(a);
}

// 不能在'a'被声明前调用'foo'
// 运行时应该抛出错误
foo();
let a;