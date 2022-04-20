## < REST API >

- **HTTP** : 웹 상에서 컨텐츠를 전송하기 위한 약속

  - **URI (Uniform Resource Identifier)**

    - 통합 자원 식별자
    - 인터넷의 자원을 식별하는 유일한 주소 (정보의 자원을 표현)
    - 인터넷에서 자원을 식별하거나 이름을 지정하는데 사용되는 간단한 문자열
    - URI는 크게 URL과 URN으로 나눌 수 있지만, URN을 사용하는 비중이 매우 적어, URL은 URI와 같은 의미처럼 사용한다.

  - **URL (Uniform Resource Locator)**

    - 통합 자원 위치
    - 네트워크 상에 자원이 어디 있는지 알려주기 위한 약속
    - 과거에는 실제 자원의 위치를 나타냈지만 현재는 추상화된 의미론적인 구성
    - 웹 주소, 링크라고도 불림

  - **URN (Uniform Resource Name)**

    - 통합 자원 이름
    - URL과 달리 자원의 위치에 영향을 받지 않는 유일한 이름 역할을 한다.

  - URI의 구조

    > - Scheme(protocol)
    >   - 브라우저가 사용해야 하는 프로토콜
    >     - http(s), data, file, ftp, mailto
    >     - ex) **https://** www.example.com:80/path/to/myfile.html/?key=value#quick-start
    > - Host(Domain name)
    >   - 요청을 받는 웹 서버의 이름
    >   - IP address를 직접 사용할 수도 있지만, 실 사용시 불편하므로 웹에서 자주 사용되지 않음
    >   - ex) https://**www.example.com**:80/path/to/myfile.html/?key=value#quick-start
    > - Port
    >   - 웹 서버 상의 리소스에 접근하는데 사용되는 기술적인 문
    >   - HTTP 프로토콜의 표준 포트
    >     - HTTP 80
    >     - HTTPS 443
    >   - ex) https://www.example.com**:80**/path/to/myfile.html/?key=value#quick-start
    > - Path
    >   - 웹 서버 상의 리소스 경로
    >   - ex) https://www.example.com:80**/path/to/myfile.html**/?key=value#quick-start
    > - Query(Identifier)
    >   - 웹 서버에 제공되는 추가적인 매개 변수
    >   - &로 구분되는 key-value 목록
    >   - ex) https://www.example.com:80/path/to/myfile.html/**?key=value**#quick-start
    > - Fragment
    >   - Anchor
    >   - 자원 안에서의 북마크의 한 종류를 나타낸다.
    >   - 브라우저에게 알려주는 요소이므로 fragment idenfifier(부분 식별자)라고 부르며, '#' 뒤의 부분은 요청이 서버에 보내지지 않는다.
    >   - ex) https://www.example.com:80/path/to/myfile.html/?key=value**#quick-start**

<br>

- **Restful API**
  - API
    - Application Programming Interface
    - 프로그래밍 언어가 제공하는 기능을 수행할 수 있게 만든 인터페이스
    - 애플리케이션과 프로그래밍으로 소통하는 방법이다.
    - 응답 데이터 타입 : HTML, XML, JSON 등
  - REST
    - REpresentational State Transfer
    - API Server를 개발하기 위한 일종의 소프트웨어 설계 방법론
    - 네트워크 구조(Network Architecture) 원리의 모음
    - 자원을 정의하고 자원에 대한 주소를 지정하는 전반적인 방법
    - REST원리를 따르는 시스템을 RESTful이라는 용어로 지칭한다.
  - REST의 자원과 주소의 지정 방법
    1. 자원 : URI
    2. 행위 : HTTP Method
    3. 표현 : 자원과 행위를 통해 궁극적으로 표현되는 추상화된 결과물, JSON으로 제공
- **JSON**
  - JavaScript Object Notation
    - JSON is lightweight data-interchange format
    - JavaScript의 표기법을 따른 단순 문자열
    - 사람이 읽거나 쓰기 쉽고 기계가 파싱(해석)하고 만들어내기 쉽다.
    - 파이썬의 dictionary, 자바스크립트의 object처럼 C 계열의 언어가 가지고 있는 자료구조로 쉽게 변화할 수 있는 key-value 형태의 구조를 가지고 있다.
- **REST**
  - REST의 핵심 규칙
    1. 정보는 URI로 표현
    2. 자원에 대한 '행위'는 HTTP Method로 표현(GET, POST, PUT, DELETE)

- **RESTful API**
  - REST 원리를 따라 설계한 API
  - 프로그래밍을 통해 클라이언트의 요청에 JSON을 응답하는 서버를 구성한다.



