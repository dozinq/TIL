/**
 * Hoisting
 * 
 * 모든 변수 선언문이 코드의 최상단으로 이동되는 것처럼 느껴지는 현상
 */
console.log('Hello');
console.log('World');

console.log(name);
var name = '진욱';
console.log(name);

console.log(jinUk);
let jinUk = '진욱';
const jinUk2 = '진욱';

