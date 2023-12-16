/**
 * 산술 연산자
 * 
 * 1) 덧셈
 * 2) 뺄셈
 * 3) 곱셈
 * 4) 나눗셈
 * 5) 나머지
 */

console.log(10 + 20);
console.log(10 - 20);
console.log(10 * 10);
console.log(10 / 3);
console.log(10 % 10);
console.log(10 % 3);

console.log('----------');

/**
 * 증가와 감소
 */
let number = 1;

number ++;
console.log(number);

number --;
console.log(number);

/**
 * 연산자의 위치
 */
let result = 1;
console.log(result);

result = number ++;
console.log(result, number);

result = number --;
console.log(result, number);

/**
 * 숫자 타입이 아닌 타입에 +, - 사용하면 숫자 타입이 된다.
 */
let sample = '99';

console.log(+sample);
console.log(typeof +sample);

sample = '진욱';
// NaN -> Not a Number
console.log(+sample);
console.log(typeof +sample);

/**
 * 할당 연산자 (assignment operator)
 */

number = 100;
console.log(number);

number += 100;
console.log(number);

/**
 * 비교 연산자
 * 
 * 1) 값의 비교
 * 2) 값과 타입의 비교
 */

console.log(5 == 5);
console.log(5 == '5');
console.log(0 == '');
console.log(true == 1);
console.log(true == '1');

console.log(5 === '5');

console.log(5 != '5');
console.log(5 !== '5');

console.log('----------');

/**
 * 대소 관계 비교 연산자
 */

console.log(100 > 1);
console.log(100 < 1);
console.log(100 >= 1);

/**
 * 삼항 조건 연산자 (ternary operator)
 */
console.log(10 > 0 ? '10이 0보다 크다' : '10이 0보다 작다');

/**
 * 논리 연산자
 * 
 * 1) &&
 * 2) ||
 */

// && 조건은 모두 true여야 true를 반환한다.
console.log(true && true);
console.log(true && false);
console.log(true || false);

console.log('----------');

/**
 * 단축평가 (short circuit evaluation)
 * 
 * &&를 사용했을때 좌측이 true면 우측 값 반환
 * &&를 사용했을때 좌측이 false면 좌측 값 반환
 * ||를 사용했을때 좌측이 true면 좌측 값 반환
 * ||를 사용했을때 좌측이 false면 우측 값 반환
 */

console.log(true || '아이브');
console.log(false || '아이브');
console.log(false && '아이브');
console.log(true && '아이브');

/**
 * 지수 연산자
 */

console.log(2 ** 2);
console.log(10 ** 3);

/**
 * null 연산자
 */

let name;
console.log(name);

name = name ?? '코드팩토리';
console.log(name);

name = name ?? '아이브';
console.log(name);
