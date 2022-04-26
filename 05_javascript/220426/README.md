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
