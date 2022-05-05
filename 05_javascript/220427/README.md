## < JavaScript 02 >

#### < DOM >

- DOM(Document Object Model)
  - HTML, XML과 같은 문서를 다루기 위한 문서 프로그래밍 인터페이스
- DOM 관련 객체의 상속 구조
  - EventTarget : Event Listener를 가질 수 있는 객체가 구현하는 DOM 인터페이스
  - Node : 여러 가지 DOM 타입들이 상속하는 인터페이스
  - Element : Document 안의 모든 객체가 상속하는 가장 범용적인 인터페이스
  - Document : 브라우저가 불러온 웹 페이지를 나타낸다.
  - HTMLElement : 모든 종류의 HTML 요소

<br>

#### < EVENT >

- 네트워크 활동이나 사용자와의 상호작용 같은 사건의 발생을 알리기 위한 객체
- ex. "클릭하면, 경고창을 띄운다." , "특정 이벤트가 발생하면, 할 일을 등록한다."

`EventTarget.addEventListener()`

: 지정한 이벤트가 대상에 전달될 때마다 호출할 함수를 설정

이벤트를 지원하는 모든 객체(Element, Document, Window 등)를 대상으로 지정가능

`target.addEventListener(type, listener[, options])`

- type : 반응 할 이벤트 유형 (대소문자 구분 문자열)
- listener : 지정된 타입의 이벤트가 발생했을 때 알림을 받는 객체
