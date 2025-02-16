/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/

const number = 2;

let sum = number + +(String(number)+String(number)) + +(String(number)+String(number)+String(number));

console.log(sum);
