## < Django 02 >

---

### Django Model

- **Model**
  - 단일한 데이터에 대한 정보를 가진다.
    - 사용자에 대한 정보 포함
- **Database(DB)** : 체계적으로 데이터를 저장한다.
  - 구조 : 스키마(Schema), 테이블(Table)
    - Schema : 자료의 구조, 표현방법, 관계 등을 정의한 구조(structure)
    - Table
      - column : 필드 or 속성
      - row : 레코드 or 값
- **Query** : 데이터를 조회하기 위한 명령어
  - 조건에 맞는 데이터를 추출하거나 조작한다. (Create, Read, Update, Delete)
  - "Query를 날린다." -> DB를 조작한다.
  - SQL(Structured Query Language)
- **ORM (Object-Relational-Mapping)**
  - DB를 객체로 조작하기 위해 ORM을 사용한다.
  - *장점 :* *SQL을 잘 알지 못해도 DB조작이 가능하다.*
  - ~~단점 : ORM 만으로 완전한 서비스를 구현하기 어려운 경우가 있음.~~
- **Migrations** : (python manage.py ~ 로 명령한다.)
  - makemigrations : 마이그레이션(설계도)을 만드는 역할을 수행하는 명령어
  - migrate : 마이그레이션을 실제 DB에 반영하는 과정
  - sqlmigrate : sql 명령어
  - showmigrations : DB반영여부 확인
- 순서
  1) models.py 테이블/속성 정의
  2) makemigrations : 설계도 만들기 (DB반영 안 된 상태)
  3) migrate : DB반영시키기
  4) 1. sqlmigrate : sql 명령어
     2. showmigrations : DB반영여부 확인

---

### Database API

- **DB API** : DB를 조작하기 위한 도구

- **Django shell** : 

- 실행 순서

  1) **pip install ipython django-extensions** : More powerful interactive shell을 위한 2가지 라이브러리 설치

  2) settings.py에 **'django_extensions'** 기입

  3) **python manage.py shell_plus** 명령
