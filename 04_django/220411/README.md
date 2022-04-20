## < Authentication System I >

- **The Django Authentication System**

  - Django 인증 시스템은 django.contrib.auth에 Django contrib module로 제공

  - 필수 구성은 settings.py에 이미 포함되어 있으며 INSTALLED_APPS 설정에 나열된 아래 두 항목으로 구성된다.

    1. django.contrib.auth
    2. django.contrib.contenttypes

  - 두번째 앱(accounts) 생성하기

    ```bash
    $ python manage.py startapp accounts
    ```

    : app 이름이 반드시 accounts일 필요는 없지만, auth와 관련해 Django 내부적으로 accounts라는 이름으로 사용되고 있기 때문에 되도록 accounts로 지정하는 것을 권장한다.

<br>

- **쿠키와 세션**

  - HTTP : HTML 문서와 같은 리소스(자원, 데이터)들을 가져올 수 있도록 해주는 프로토콜(규약)

    - 특징 1 - 비연결 지향(connectionless) : 서버는 요청에 대한 응답을 보낸 후 연결을 끊는다.
    - 특징 2 - 무상태(stateless) : 연결을 끊는 순간 클라이언트와 서버 간의 통신이 끝나며 상태 정보가 유지되지 않는다, 클라이언트와 서버가 주고 받는 메시지들은 서로 완전히 독립적이다.
    - *즉, 클라이언트와 서버의 지속적인 관계를 유지하기 위해 쿠키와 세션이 존재한다.*

  - 쿠키

    - 서버가 사용자의 웹 브라우저에 전송하는 작은 데이터 조각

    - 사용자가 웹 사이트를 방문할 경우 해당 웹사이트의 서버를 통해, 사용자의 컴퓨터에 설치되는 작은 기록 정보 파일

    - 브라우저는 쿠키를 로컬에 KEY-VALUE의 데이터 형식으로 저장한다.

    - 동일한 서버에 재요청 시 저장된 쿠키를 함께 전송한다.

    - 사용 목적

      ```markdown
      1. 세션 관리 : 로그인, 아이디 자동 완성, 공지 하루 안보기, 팝업 체크, 장바구니 등의 정보 관리
      2. 개인화 : 사용자 선호, 테마 등의 설정
      3. 트래킹 : 사용자 행동을 기록 및 분석
      ```

  - 세션(Session)
    - 사이트와 특정 브라우저 사이의 '상태'를 유지시키는 것.
    - 클라이언트가 서버에 접속하면 서버가 특정 session id를 발급하고, 클라이언트는 발급받은 session id를 쿠키에 저장한다.
      - 클라이언트가 다시 서버에 접속하면 요청과 함께 쿠키를 서버에 전달
      - 쿠키는 요청 때마다 서버에 함께 전송되므로 서버에서 session id를 확인해 알맞은 로직을 처리
    - ID는 세션을 구별하기 위해 필요하며, 쿠키에는 ID만 저장함
  - 미들 웨어(middleware) : HTTP 요청과 응답 처리 중간에서 작동하는 시스템(hooks)

<br>

- **로그인**

  - 로그인 : session을 Create하는 로직과 같다.

  - Authentication Form : 사용자 로그인을 위한 form, request를 첫번째 인자로 취한다.

    ```python
    from django.shortcuts import render
    from django.contrib.auth import login as auth_login
    from django.contrib.auth.forms import AuthenticationForm
    
    def login(request):
        if request.method == 'POST':
            form = AutenticationForm(request, request.POST)
            if form.is_valid():
                auth_login(request, form.get_user())
                return redirect('articles:index')
        else:
            form = AuthenticationForm()
        context = {
            'form': form
        }
        return render(request, 'accounts/login.html', context)
    ```

    : login(request, user, backend=None)

    - 현재 세션에 연결하려는 인증된 사용자가 있는 경우 login() 함수가 필요하다.
    - 사용자를 로그인하며  view 함수에서 사용된다.
    - HttpRequest 객체와 User 객체가 필요
    - Django의 session framework를 사용하여 세션에 user의 ID를 저장한다.(= 로그인)

<br>

- **로그아웃**

  - 로그아웃 : session을 Delete하는 로직과 같다.

    ```python
    # 위 로그인 함수에서 덧붙여 작성
    from django.contrib.auth import logout as auth_logout
    
    def logout(request):
        auth_logout(request)
        return redirect('articles:index')
    ```
