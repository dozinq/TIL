## < JavaScript 01 >

#### JavaScript의 필요성

- 브라우저 화면을 '동적'으로 만들기 위함.
- 브라우저를 조작할 수 있는 유일한 언어이다.

#### 브라우저에서 할 수 있는 일

- DOM(Document Object Model) 조작
  - 문서(HTML) 조작
- BOM(Browser Object Model) 조작
  - navigator, screen, location, frames, history, XHR
- JavaScript Core (ECMAScript)
  - Data Structure(Object, Array), Conditional Expression, Iteration

<br>

#### Introduction

-  변수 선언 키워드 (let, const)
  - **let**
    - **재할당 가능**
    - 변수 재선언 불가능
  - **const**
    - **재할당 불가능**
    - 변수 재선언 불가능
- 블록 스코프
  - if, for, 함수 등의 중괄호 내부를 가리킨다.
  - 블록 스코프를 가지는 변수는 블록 바깥에서 접근 불가능하다.

#### 데이터 타입

- 자바스크립트의 모든 값은 특정한 데이터 타입을 가진다.

- 크게 Primitive type과 Reference type으로 분류된다.

  - Primitive type : 객체가 아닌 기본 타입
  - Reference type : 객체 타입의 자료형

  > Primitive type(원시 타입)
  >
  > 1. Number
  >    - 정수, 실수 구분 없는 하나의 숫자 타입
  >    - 부동소수점 형식을 따른다.
  >    - NaN : 계산 불가능한 경우 반환되는 값
  > 2. String
  >    - 텍스트 데이터를 나타내는 타입
  >    - 템플릿 리터럴 : 따옴표 대신 ( ` ) 으로 표현, ${ expression } 형태로 표현식 삽입 가능
  > 3. undefined
  >    - 변수의 값이 없음을 나타내는 데이터 타입
  > 4. null
  >    - 변수의 값이 없음을 의도적으로 표현할 때 사용한다.
  > 5. Boolean

#### 연산자

- and 연산은 && 연산자를 이용

- or 연산은 || 연산자를 이용

- not 연산은 ! 연산자를 이용

- 삼항 연산자

  ```javascript
  console.log(true ? 1 : 2) // 1
  console.log(false ? 1 : 2) // 2
  
  // 가장 왼쪽의 조건식이 참이면 콜론 앞의 값을 사용, 아니라면 콜론 뒤의 값을 사용한다.
  ```

<br>

#### 조건문

- 'if' statement

  - 조건 표현식의 결과값을 Boolean 타입으로 변환 후 참/거짓을 판단

  ```javascript
  const nations = 'Korea'
  if (nation === 'Korea') {
      console.log('안녕하세요!')
  } else if (nation === 'France') {
      console.log('Bonjour!')
  } else {
      console.log('Hello!')
  }
  ```

- 'switch' statement

  - 조건 표현식의 결과값이 어느 값(case)에 해당하는지 판별
  - 주로 특정 변수의 값에 따라 조건을 분기할 때 활용

  ```javascript
  const nation = 'Korea'
  
  switch(nation) {
      case 'Korea': {
          console.log('안녕하세요!')
          break
      }
      case 'France': {
          console.log('Bonjour!')
          break
      }
      default: {
          console.log('Hello!')
      }
  }
  ```

<br>

#### 반복문

- while

  ```javascript
  let i = 0
  
  while (i < 6) {
  	console.log(i)
      i += 1
  }
  ```

- for

  - 세미콜론으로 구분되는 세 부분으로 구성

    ```javascript
    for (initialization; condition; expression){
        // do something
    }
    ```

    - initialization : 최초 반복문 진입 시 1회만 실행되는 부분
    - condition : 매 반복 시행 전 평가되는 부분
    - expression : 매 반복 시행 이후 평가되는 부분

- for .. in

  - 객체 순회 적합 : 객체의 속성들을 순회할 때 사용

    ```javascript
    for (variable in object) {
        // do something
    }
    ```

- for .. of

  - 배열 순회 적합 : 반복 가능한 객체를 순회하며 값을 꺼낼 때 사용

    ```javascript
    for (variable of iterables) {
        // do something
    }
    ```

<br>

