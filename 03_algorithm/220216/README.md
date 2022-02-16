### 3. 문자열(String)

---

- **컴퓨터에서의 문자표현** : 각 문자에 대응되는 숫자를 정해 놓고 메모리에 저장하는 방법이 사용.
  - ASCII(American Standard Code for Information Interchange) : 1967년 미국에서 제안한 문자 인코딩 표준, 7bit 인코딩, 대부분의 컴퓨터가 문자를 읽고 쓰기 위해 사용
  - 유니코드(Unicode) : 다국어 처리를 위한 표준. 파일 인식 시 저장하는 변수의 크기를 인식하고 구분해야만 했기에 문제가 발생하여 인코딩이 필요하게 됨
  - UTF(Unicode Transformation Format) : 유니코드 인코딩 (UTF-8: web, UTF-16:windows,java, UTF-32:unix)
  - Python 인코딩
    - 2.x 버전 - ASCII -> #-\*- coding: utf-8 -\*- (첫 줄에 명시)
    - 3.x 버전 - 유니코드 UTF-8 (생략가능)

<br>

- **문자열의 분류** 
  - 문자열(String)
    - fixed length
    - variable length
      - length controlled (java 언어에서의 문자열)
      - delimited(c 언어에서의 문자열)

```python
def strlen(s):
    i = 0
    while s[i]!='\0':
        i += 1
    return 1

a = ['a', 'b', 'c', '\0']
print(strlen(a))  
```

<br>

- **Python에서의 문자열 처리**
  - char 타입 없음, 텍스트 데이터의 취급방법이 통일되어 있음
  - 문자열은 시퀀스 자료형으로 분류되고, 시퀀스 자료형에서 사용할 수 있는 인덱싱, 슬라이싱 연산들을 사용할 수 있음
  - 문자열 클래스에서 제공되는 메소드
    - replace(), split(), isalpha(), find()
  - 문자열은 튜플과 같이 요소값을 변경할 수 없음(immutable)

<br>

- **브루트 포스(Brute Force, 고지식한 알고리즘)** : 본문 문자열을 처음부터 끝까지 차례대로 순회하면서 패턴 내의 문자들을 일일이 비교하는 방식으로 동작한다.

  ```python
  t = "This is a book"	# 전체 텍스트
  p = "is"	# 찾을 패턴
  N = len(t)	# 전체 텍스트의 길이
  M = len(p)	# 찾을 패턴의 길이
  
  def BruteForce(p, t):
      i = 0	# t의 인덱스
      j = 0	# p의 인덱스
      while i < N and j < M:
          if t[i] != p[j]:
              i -= j
              j = -1
          i += 1
          j += 1
      if j == M:
          return i - M	# 검색 성공
      else:
          return -1		# 검색 실패
  ```

  - 최악의 경우 시간 복잡도는 텍스트의 모든 위치에서 패턴을 비교해야 하므로 O(MN)이 된다.

<br>

- **KMP 알고리즘** : 불일치가 발생한 텍스트 스트링의 앞 부분에 어떤 문자가 있는지를 미리 알고 있으므로, 불일치가 발생한 앞 부분에 대하여 다시 비교하지 않고 매칭을 수행한다. 패턴을 전처리하여 배열 next[M]을 구해서 잘못된 시작을 최소화한다.
  - next[M] : 불일치가 발생했을 경우 이동할 다음 위치
  - 시간 복잡도 : O(M+N)

<br>

- **보이어-무어 알고리즘** : 오른쪽에서 왼쪽으로 비교하는 알고리즘
  - 오른쪽 끝에 있는 문자가 불일치하고 패턴 내에 존재하지 않는 경우, 이동 거리는 무려 패턴의 길이 만큼이 된다.
  - 대부분의 상용 소프트웨어에서 채택하고 있는 알고리즘

