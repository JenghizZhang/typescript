// 声明一个变量a，同时指定它的类型为number
var a;
// a 的类型设置为了number，在以后的使用过程中a的值只能是数字
a = 10;
a = 33;
// a = null;
// a = 'hello'; // 此行代码会报错，因为变量a的类型是number，不能赋值字符串
var b;
b = 'hello';
// b = 123;
// 声明完变量直接进行赋值
// let c: boolean = false;
// 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
var c = false;
c = true;
// c=123;
// JS中的函数是不考虑参数的类型和个数的
// function sum(a, b){
//     return a + b;
// }
// console.log(sum(123, 456)); // 579
// console.log(sum(123, "456")); // "123456"
function sum(a, b) {
    if (a === void 0) { a = 123; }
    return a + b;
}
var result = sum(undefined, 456);
// let result2 = sum(123, "456");