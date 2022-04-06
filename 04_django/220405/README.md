## 

**mirations**

- 반드시 기억해야 할 migration 3단계
  1. models.py : model 변경사항 발생 시
  2. $ python manage.py makemigrations : migrations 파일 생성
  3. $ python  manage.py migrate : DB 반영(모델과 DB의 동기화)

<br>

### < Database API >

**DB API**

- DB API 구문 - Making Queries

  : *Article.objects.all()*

  *Class Name. Manager. QuerySet API*

- Manager
  - Django 모델에 데이터베이스 query 작업이 제공되는 인터페이스
  - 기본적으로 모든 Django 모델 클래스에 objects라는 Manager를 추가한다.
- QuerySet
  -  데이터베이스로부터 전달받은 객체 목록
  - queryset 안의 객체는 0개, 1개 혹은 여러 개일 수 있다.
  - 데이터베이스로부터 조회, 필터, 정렬 등을 수행할 수 있다.
