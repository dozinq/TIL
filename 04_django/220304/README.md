## < Django 01 >

---

- **namespace** : 이름공간
  - Django에서는 서로 다른 app의 같은 이름을 가진 url name은 이름공간을 설정해서 구분한다.
  - templates, static 등 django는 정해진 경로 하나로 모아서 보기 때문에, 중간에 폴더를 임의로 만들어 줌으로써 이름공간을 설정한다.


---

- **Static files**
  - 웹 서버와 정적 파일
    - 웹 서버는 특정 위치(URL)에 있는 자원(resource)을 요청(HTTP request)받아서 제공하는 응답(HTTP response)을 처리하는 것을 기본 동작으로 함
    - 이는 자원과 접근 가능한 주소가 정적으로 연결된 관계(예를 들어, 사진 파일은 자원이고 파일 경로는 웹 주소라 함)
    - 즉, 웹 서버는 요청받은 URL로 서버에 존재하는 정적 자원(Static files)을 제공
