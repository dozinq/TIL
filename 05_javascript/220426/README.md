#### 함수

- 함수 선언식 : 함수의 이름과 함께 정의하는 방식 - hoisting이 되므로 사용 X

  ```javascript
  function name(args) {
      // do something
  }
  
  function add(num1, num2) {
      return num1 + num2
  }
  
  console.log(add(1, 2))
  ```

- **함수 표현식** : 함수를 표현식 내에서 정의하는 방식

  ```javascript
  const name = function (args) {
      // do something
  }
  
  const add = function (num1, num2) {
      return num1 + num2
  }
  
  console.log(add(1, 2))
  ```

#### Arrow Function

- 함수를 비교적 간결하게 정의할 수 있는 문법
- function 키워드 생략 가능
- 함수의 매개변수가 단 하나 뿐이라면, () 도 생략 가능
- 함수 몸통이 표현식 하나라면 {}, return 생략 가능

```javascript
const arrow1 = function (name) {
    return 'hello, ${name}'
}

// 1. function 키워드 삭제
const arrow2 = (name) => { return 'hello, ${name}'}

// 2. 매개변수가 1개일 경우에만 () 생략 가능
const arrow3 = name => {return 'hello, ${name}'}

// 3. 함수 바디가 return을 포함한 표현식 1개일 경우에 { } & return 삭제 가능
const arrow4 = name => 'hello, ${name}'
```

<br>

#### String

| 메서드   | 설명                                      | 비고 |
| -------- | :---------------------------------------: | :--: |
| includes | 특정 문자열의 존재여부를 참/거짓으로 반환 |      |
| split | 문자열을 토큰 기준으로 나눈 배열 반환 | 인자가 없으면 기존 문자열을 배열에 담아 반환 |
| replace | 해당 문자열을 대상 문자열로 교체하여 반환 | replaceAll |
| trim | 문자열의 좌우 공백 제거하여 반환 | trimStart, trimEnd |

- string.includes(value) : 문자열에 value가 존재하는지 판별 후 참 또는 거짓 반환

  ```js
  const str = 'a santa at nasa'
  
  str.includes('santa') // true
  str.includes('asan') // false
  ```

- string.split(value)

  - value가 없을 경우, 기존 문자열을 배열에 담아 반환
  - value가 빈 문자열일 경우 각 문자로 나눈 배열을 반환
  - value가 기타 문자열일 경우, 해당 문자열로 나눈 배열을 반환

  ```js
  const str = 'a cup'
  str.split() 	// ['a cup']
  str.split('')	// ['a', ' ', 'c', 'u', 'p']
  str.split(' ')	// ['a', 'cup']
  ```

- string.replace(from, to) : 문자열에 from 값이 존재할 경우, 1개만 to 값으로 교체하여 반환

  ```js
  const str = 'a b c d'
  
  str.replace(' ', '-')		// 'a-b c d'
  str.replaceAll(' ', '-') 	// 'a-b-c-d'
  ```

- string.trim() : 문자열 시작과 끝의 모든 공백문자(스페이스, 탭, 엔터 등)를 제거한 문자열 반환

  ```js
  const str = '	hello	'
  
  str.trim() 		// 'hello'
  str.trimStart()	// 'hello	'
  str.trimEnd()	// '	hello'
  ```

<br>

#### Array

- 키와 속성들을 담고 있는 참조 타입의 객체
- 순서 보장
- 주로 대괄호를 이용하여 생성

```js
const numbers = [1, 2, 3, 4, 5]

console.log(numbers[0])		// 1
console.log(numbers[-1])	// undefined
console.log(numbers.length)	// 5

console.log(numbers[numbers.length - 1])	// 5
```

| 메서드          | 설명                                             | 비고                     |
| --------------- | ------------------------------------------------ | ------------------------ |
| reverse         | 원본 배열의 요소들의 순서를 반대로 정렬          |                          |
| push & pop      | 배열의 가장 뒤에 요소를 추가 또는 제거           |                          |
| unshift & shift | 배열의 가장 앞에 요소를 추가 또는 제거           |                          |
| includes        | 배열에 특정 값이 존재하는지 판별 후 참/거짓 반환 |                          |
| index0f         | 배열에 특정 값이 존재하는지 판별 후 인덱스 반환  | 요소가 없을 경우 -1 반환 |
| join            | 배열의 모든 요소를 구분자를 이용하여 연결        |                          |

- array.reverse() : 원본 배열의 요소들의 순서를 반대로 정렬

  ```js
  const numbers = [1, 2, 3, 4, 5]
  numbers.reverse()
  console.log(numbers)	// [5, 4, 3, 2, 1]
  ```

- array.push(), array.pop()

  ```js
  const numbers = [1, 2, 3, 4, 5]
  
  numbers.push(100)
  console.log(numbers)	// [1, 2, 3, 4, 5, 100]
  
  numbers.pop()
  console.log(numbers)	// [1, 2, 3, 4, 5]
  ```

- array.unshift(), array.shift()

  ```js
  const numbers = [1, 2, 3, 4, 5]
  
  numbers.unshift(100)
  console.log(numbers)	// [100, 1, 2, 3, 4, 5]
  
  numbers.shift()
  console.log(numbers)	// [1, 2, 3, 4, 5]
  ```

- array.includes(value)

  ```js
  const numbers = [1, 2, 3, 4, 5]
  
  console.log(numbers.includes(1))	// true
  console.log(numbers.includes(100))	// false
  ```

- array.index0f(value) : 배열 안에서 value와 같은 값의 인덱스를 반환, 없을 경우 -1 반환

  ```js
  const numbers = [1, 2, 3, 4, 5]
  let result
  
  result = numbers.index0f(3)		// 2
  console.log(result)
  
  result = numbers.index0f(100)	// -1
  console.log(result)
  ```

- array.join([separator]) : 배열의 모든 요소를 연결하여 반환, seprerator 생략시 쉼표가 기본 값

  ```js
  const numbers = [1, 2, 3, 4, 5]
  let result
  
  console.log(numbers.join())		// 1,2,3,4,5
  
  console.log(numbers.join(''))	// 12345
  
  console.log(numbers.join(' '))	// 1 2 3 4 5
  
  console.log(numbers.join('-'))	// 1-2-3-4-5
  ```

- Spread operator : 배열 내부에서 배열 전개 가능, 얕은 복사에 활용

  ```js
  const array = [1, 2, 3]
  const newArray = [0, ...array, 4]
  
  console.log(newArray)	// [0, 1, 2, 3, 4]
  ```

<br>

#### Array 심화

- 배열을 순회하며 특정 로직을 수행하는 메서드
- 메서드 호출 시 인자로 callback 함수를 받는 것이 특징
- callback 함수란, 어떤 함수의 내부에서 실행될 목적으로 인자로 넘겨받는 함수

| 메서드  | 설명                                                         | 비고         |
| ------- | ------------------------------------------------------------ | ------------ |
| forEach | 배열의 각 요소에 대해 콜백 함수를 한 번씩 실행               | 반환 값 없음 |
| map     | 콜백 함수의 반환 값을 요소로 하는 새로운 배열 반환           |              |
| filter  | 콜백 함수의 반환 값이 참인 요소들만 모아서 새로운 배열을 반환 |              |
| reduce  | 콜백 함수의 반환 값들을 하나의 값(acc)에 누적 후 반환        |              |
| find    | 콜백 함수의 반환 값이 참이면 해당 요소를 반환                |              |
| some    | 배열의 요소 중 하나라도 판별 함수를 통과하면 참을 반환       |              |
| every   | 배열의 모든 요소가 판별 함수를 통과하면 참을 반환            |              |

- array.forEach(callback(element[, index[,array]]))

  - 배열의 각 요소에 대해 콜백 함수를 한 번씩 실행
  - 반환 값이 없는 메서드

  ```js
  const fruits = ['딸기', '수박', '사과', '체리']
  
  fruits.forEach((fruit, index) => {
      console.log(fruit, index)
      // 딸기 0
      // 수박 1
      // 사과 2
      // 체리 3
  })
  ```

- array.map(callback(element[, index[, array]]))

  - 배열의 각 요소에 대해 콜백 함수를 한 번씩 실행
  - 콜백 함수의 반환 값을 요소로 하는 새로운 배열 반환
  - 기존 배열 전체를 다른 형태로 바꿀 때 유용하다.

  ```js
  const numbers = [1, 2, 3, 4, 5]
  
  const doubleNums = numbers.map((num) =>{
      return num * 2
  })
  
  console.log(doubleNums)	// [2, 4, 6, 8, 10]
  ```

- array.filter(callback(element[, index[, array]]))

  - 배열의 각 요소에 대해 콜백 함수를  한 번씩 실행
  - 콜백 함수의 반환 값이 참인 요소들만 모아서 새로운 배열을 반환
  - 기존 배열의 요소들을 필터링할 때 유용하다.

  ```js
  const numbers = [1, 2, 3, 4, 5]
  
  const oddNums = numbers.filter((num, index) =>{
      return num % 2
  })
  
  console.log(oddNums)	// 1, 3, 5
  ```

- array.reduce(callback(acc, element, [index[, array]])[, initialvalue])

  - 배열의 각 요소에 대해 콜백 함수를 한 번씩 실행
  - 콜백 함수의 반환 값들을 하나의 값(acc)에 누적 후 반환

  - reduce 메서드의 주요 매개변수
    - acc : 이전 callback 함수의 반환 값이 누적되는 변수
    - initialValue(optional) : 최초 callback 함수 호출 시 acc에 할당되는 값
  - 빈 배열의 경우 initialValue를 제공하지 않으면 에러 발생

  ```js
  const numbers = [1, 2, 3]
  
  const result = numbers.reduce((acc, num) => {
      return acc + num
  }, 0)
  
  console.log(result) // 6
  ```

- array.find(callback(element[, index[, array]]))

  - 배열의 각 요소에 대해 콜백 함수를 한 번씩 실행
  - 콜백 함수의 반환 값이 참이면, 조건을 만족하는 첫번째 요소를 반환
  - 찾는 값이 배열에 없으면 undefined 반환

  ```js
  const avengers = [
      { name: 'Tony Stark', age: 45 },
      { name: 'Steve Rogers', age: 32 },
      { name: 'Thor', age: 40},
  ]
  
  const result = avengers.find((avenger) => {
      return avenger.name === 'Tony Stark'
  })
  
  console.log(result)	// {name: "Tony Stark", age: 45}
  ```

- array.some(callback(element[, index[, array]]))

  - 배열의 요소 중 하나라도 주어진 판별 함수를 통과하면 참을 반환
  - 모든 요소가 통과하지 못하면 거짓 반환
  - 빈 배열은 항상 거짓 반환

  ```js
  const numbers = [1, 3, 5, 7, 9]
  
  const hasEvenNumber = numbers.some((num) => {
      return num % 2 === 0
  })
  console.log(hasEvenNumber)	// false
  
  const hasOddNumber = numbers.some((num) => {
      return num % 2
  })
  console.log(hasOddNumber)	// true
  ```

- array.every(callback(element[, index[, array]]))

  - 배열의 모든 요소가 주어진 판별 함수를 통과하면 참을 반환
  - 하나의 요소라도 통과하지 못하면 거짓 반환
  - 빈 배열은 항상 참 반환

  ```js
  const numbers = [2, 4, 6, 8, 10]
  
  const isEveryNumberEven = numbers.every((num) => {
      return num % 2 === 0
  })
  console.log(isEveryNumberEven)	// true
  
  const isEveryNumberOdd = numbers.every((num) => {
      return num % 2
  })
  console.log(isEveryNumberOdd)	// false
  ```

<br>

#### Objects

- 객체는 속성(property)의 집합이며, 중괄호 내부에  key와 value의 쌍으로 표현한다.
- key는 문자열 타입만 가능
- value는 모든 타입(함수포함) 가능
- 객체 요소 접근은 점 또는 대괄호로 가능
- 메소드는 어떤 객체의 속성이 참조하는 함수
- *객체.메서드명()* 으로 호출 가능
- 메서드 내부에서는 this 키워드가 객체를 의미한다.

```js
const me = {
    firstName: 'John',
    lastName: 'Doe',
    
    fullName: this.firstName + this.lastName,
    
    getFullName: function () {
        return this.firstName + this.lastNmae
    }
}
```

<br>

#### this

- this는 실행 문맥에 따라 다른 대상을 가리킨다.
- class 내부의 생성자 함수
- 메서드
- 위의 두가지 경우를 제외하면 모두 최상위 객체를 가리킨다.

```js
function getFullName() {
    return this.firstName + this.lastName
}

const me = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: getFullName,
}

const you = {
    firstName: 'Jack',
    lastName: 'Lee',
    getFullName: getFullName,
}

me.getFullName()	// JohnDoe (this === me)
you.getFullName()	// JackLee (this === you)
getFullName()		// NaN (this === window)
```

<br>

#### lodash

- 모듈성, 성능 및 추가 기능을 제공하는 JS 유틸리티 라이브러리
- array, object등 자료구조를 다룰 때 사용하는 유용하고 간편한 유틸리티 함수들을 제공
- reverse, sortBy, range, random, clondDeep
