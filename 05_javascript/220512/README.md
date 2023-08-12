## < JavaScript 02 >

#### 기본 인자

- 인자 작성시 '=' 문자 뒤에 기본 인자 선언 가능

  ```js
  const greeting = function (name = 'woong') {
      console.log(`hi ${name}`)
  }
  greeting()
  ```

#### 매개변수와 인자의 개수 불일치 허용

```js
const noArgs = function () {
    return 0
}

noArgs(1, 2, 3) // 0

const threeArgs = function (arg1, arg2, arg3) {
    return [arg1, arg2, arg3]
}

threeArgs() // [undefined, undefined, undefined]
threeArgs(1) // [1, undefined, undefined]
threeArgs(1, 2) // [1, 2, undefined]
```

#### Rest Parameter & Spread Operator (...)

- Rest Parameter

  - Rest Parameter(...)를 사용하면 함수가 정해지지 않은 수의 매개변수를 배열로 받는다. (python의 *args와 유사하다.)
  - 만약 rest parameter로 처리한 매개변수에 인자가 넘어오지 않을 경우에는, 빈 배열로 처리한다.

  ```js
  const restOpr = function (arg1, arg2, ...restArgs) {
      return [arg1, arg2, restArgs]
  }
  restOpr(1, 2, 3, 4, 5) // [1, 2, [3, 4, 5]]
  restOpr(1, 2) // [1, 2, []]
  ```

- Spread Operator

  - Spread Operator(...)를 사용하면 배열 인자를 전개하여 전달 가능하다.
  - 연산자의 대상 배열 또는 이터러블(iterable)을 '개별'요소로 분리.

  ```js
  const spreadOpr = function (arg1, arg2, arg3) {
      return arg1 + arg2 + arg3
  }
  
  const numbers = [1, 2, 3, 4, 5] // 1, 2, 3 만 전달한다.
  
  console.log(spreadOpr(...numbers)); // 6
  ```

  
