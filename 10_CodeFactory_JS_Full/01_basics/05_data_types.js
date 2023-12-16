/**
 * dataTypes
 * 
 * 6개의 Primitive type과 1개의 Object type이 있다.
 * 
 * 1) Number (숫자)
 * 2) String (문자열)
 * 3) Boolean (불리언)
 * 4) undefined
 * 5) null
 * 6) Symbol (심볼)
 * 
 * 7) Object (객체)
 *    Function
 *    Array
 *    Object
 */

const age = 32;
const pi = 3.14;
const temperature = -10;

console.log(typeof temperature);

const infinity = Infinity;
const ninfinity = -Infinity;

console.log(typeof infinity);
console.log('----------');

const codeFactory = '코드팩토리';
console.log(typeof codeFactory);

const ive = "아이브";
console.log(ive);

/**
 * Template Literal
 * 
 * Escaping Character
 * 1) newLine - \n
 * 2) tab - \t
 * 3) 백슬래시를 스트링으로 표현하고 싶다면 두 번 입력하면 된다.
 * 4) `` 백틱 내에 스트링을 입력한다면 그대로 출력된다.
 */
const iveJinuk = '아이브진욱';
console.log(iveJinuk);

const groupName = '프로미스';
console.log(`${groupName} + 진욱`);

console.log('----------');

/**
 * Boolean 타입
 */

const isTrue = true;
console.log(typeof isTrue);

/**
 * Undefined
 * 
 * 사용자가 직접 값을 초기화하지 않았을때
 * 지정되는 값
 */

let noInit;
console.log(noInit);

/**
 * null
 * 
 * null은 명시적으로 없는 값으로 초기화할 때 사용
 * (JS에서는 null을 object 타입으로 인식한다.)
 */

let init = null;
console.log(init);
console.log(typeof init);

/**
 * Symbol 타입
 * 
 * 유일무이한 값을 생성할 때 사용한다.
 * 다른 Primitive 값들과 다르게 Symbol 함수를 호출하여 사용
 */

const test1 = '1';
const test2 = '1';

console.log(test1 === test2);

const symbol1 = Symbol('1');
const symbol2 = Symbol('1');

console.log(symbol1 === symbol2);

/**
 * Object 타입
 * 
 * Map
 * key: value의 쌍으로 이루어져있다.
 */

const dictionary = {
    red: '빨간색',
    orange: '주황색',
    yellow: '노란색',
};

console.log(dictionary);
console.log(dictionary['red']);
console.log(typeof dictionary);

/**
 * Array 타입
 * 
 * 값을 리스트로 나열할 수 있다.
 */

const numberArray = [
    1,
    2,
    3,
    4,
    5,
];
console.log(numberArray[3]);

/**
 * static typing -> 변수를 선언할 때 어떤 타입의 변수를 선언할지 명시한다.
 * C
 * dynamic typing -> 변수의 타입을 명시적으로 선언하지 않고 값에 의해 타입을 "추론"한다.
 * JS
 */