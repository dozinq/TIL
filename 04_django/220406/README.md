### < Django Form Class >

**Django's Form**

- Form은 Django의 유효성 검사 도구 중 하나로 중요한 방어 수단
- Django는 Form과 관련한 유효성 검사를 단순화하고 자동화 할 수 있는 기능을 제공하여, 개발자로 하여금 직접 작성하는 코드보다 더 안전하고 빠르게 수행하는 코드를 작성할 수 있게 한다.
- Django는 form에 관련된 작업의 아래 세 부분을 처리해 준다.
  1. 렌더링을 위한 데이터 준비 및 재구성
  2. 데이터에 대한 HTML forms 생성
  3. 클라이언트로부터 받은 데이터 수신 및 처리

**The Django 'Form Class'**

- Form 내 field, field배치, 디스플레이 widget, label, 초기값, 유효하지 않는 field에 관련된 에러 메세지를 결정.
- Django는 사용자의 데이터를 받을 때 해야 할 과중한 작업(데이터 유효성 검증, 필요 시 입력된 데이터 검증 결과 재출력, 유효한 데이터에 대해 요구되는 동작 수행 등)과 반복 코드를 줄여준다.

**Form rendering options**

- <label> & <input> 쌍에 대한 3가지 출력옵션
  1. as_p()
     - 각 필드가 단락(<p> 태그)으로 감싸져서 렌더링 된다.
  2. as_ul()
     - 각 필드가 목록 항목(<li> 태그)으로 감싸져서 렌더링 된다.
     - ''<ul>'' 태그는 직접 작성해야 한다.
  3. as_table()
     - 각 필드가 테이블(<tr> 태그) 행으로 감싸져서 렌더링 된다.
     - "<table>" 태그는 직접 작성해야 한다.

**Django의 HTML input 요소 표현 방법 2가지**

1. Form fields
   - input에 대한 유효성 검사 로직을 처리하며 템플릿에서 직접 사용된다.
2. Widgets
   - 웹 페이지의 HTML input 요소 렌더링
   - GET/POST 딕셔너리에서 데이터 추출
   - widgets은 반드시 Form fields에 할당된다.

---

### < Model Form >

**ModelForm Class**

- Model을 통해  Form Class를 만들 수 있는 Helper
- 일반 Form Class와 완전히 같은 방식(객체 생성)으로 view에서 사용 가능
- 모델 폼이 쉽게 해주는 것!
  - 모델 필드 속성에 맞는 html element를 만들어 준다.
  - 이를 통해 받은 데이터를 view 함수에서 유효성 검사를 할 수 있도록 한다.

