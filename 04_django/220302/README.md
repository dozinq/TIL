## < Django 01 >

---

### 가상환경 관련 명령어

> - **python -m venv venv** : 가상환경 설정
> - **source venv/Scripts/activate** : 가상환경 활성화
> - **deactivate** : 가상환경 비활성화
> - **pip list** : 설치된 항목들을 보여줌 (venv 환경에서 보여지는 게 다름)
> - **django-admin startproject mypjt . ** : 현재 위치에서 mypjt라는 이름의 프로젝트를 생성해준다.
> - **python manage.py startapp articles** : articles라는 이름의 앱을 생성한다. (생성 후에 settings.py에 앱 등록하기)
> - **python manage.py runserver** : 서버를 켠다.

---

- **Web** : World Wide Web, 인터넷에 연결된 컴퓨터를 통해 정보를 공유할 수 있는 전 세계적인 정보 공간
  - Static web page
    - 서버에 미리 저장된 파일이 사용자에게 그대로 전달되는 웹 페이지
    - 서버가 정적 웹 페이지에 대한 요청을 받은 경우, 서버는 추가적인 처리 과정 없이 클라이언트에게 응답을 보냄
    - 모든 상황에서 모든 사용자에게 동일한 정보를 표시
    - HTML, CSS, JavaScript로 작성됨
    - flat page라고도 함
  - Dynamic web page
    - 웹 페이지에 대한 요청을 받은 경우, 서버는 추가적인 처리 과정 이후 클라이언트에게 응답을 보냄
    - 동적 웹 페이지는 방문자와 상호작용하기 때문에 페이지 내용은 그때그때 다름
    - python, java, c++ 등이 사용되고, 파일을 처리하고 데이터베이스와의 상호작용이 이루어진다.
  
  - Framework
    - 프로그래밍에서 특정 운영 체제를 위한 응용 프로그램 표준 구조를 구현하는 클래스와 라이브러리 모임
    - 재사용할 수 있는 수많은 코드를 프레임워크로 통합함으로써 개발자가 새로운 애플리케이션을 위한 표준 코드를 다시 작성하지 않아도 같이 사용할 수 있도록 돕는다.
    - Application Framework라고도 함
  - Web framework
    - 웹 페이지를 개발하는 과정에서 겪는 어려움을 줄이는 것이 주 목적으로, 데이터베이스 연동, 템플릿 형태의 표준, 세션 관리, 코드 재사용 등의 기능을 포함한다.
  - Framework Architecture
    - MVC Design Pattern(model-view-controller)
    - Django는 MTV Pattern(model-template-view)이라고 함
  - MTV Pattern
    - Model : 응용프로그램의 데이터 구조를 정의하고 데이터베이스의 기록을 관리(추가, 수정, 삭제)
    - Template : 파일의 구조나 레이아웃을 정의, 실제 내용을 보여주는 데 사용
    - View : HTTP 요청을 수신하고 HTTP 응답을 반환, Model을 통해 요청을 충족시키는데 필요한 데이터에 접근, template에게 응답의 서식 설정을 맡김

---

### Django Intro

- **Project & Application**
  - Project : 프로젝트는 앱의 집합
    - 프로젝트에는 여러 앱이 포함될 수 있음
    - 앱은 여러 프로젝트에 있을 수 있음
  - Application
    - 앱은 실제 요청을 처리하고 페이지를 보여주고 하는 등의 역할을 담당
    - 하나의 프로젝트는 여러 앱을 가짐
    - 일반적으로 앱은 하나의 역할 및 기능 단위로 작성함
- 앱 등록
  - 프로젝트에서 앱을 사용하기 위해서는 반드시 INSTALLED_APPS 리스트에 추가해야 한다
  - INSTALLED_APPS : Django installation에 활성화 된 모든 앱을 지정하는 문자열 목록
- 앱 생성시 반드시 *생성 후 등록 !*
  - INSTALLED_APPS에 먼저 작성(등록)하고 생성하려면 앱이 생성되지 않음

---

### Template

- Django Template : 데이터 표현을 제어하는 도구이자 표현에 관련된 로직
  - Python처럼 일부 프로그래밍 구조(if, for 등)를 사용할 수 있지만, 이것은 해당 Python 코드로 실행되는 것이 아님

---

