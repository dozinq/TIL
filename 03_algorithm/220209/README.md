- ### 알고리즘 : **문제를 해결하기 위한 절차나 방법**, 컴퓨터가 어떠한 일을 수행하기 위한 단계적 방법

  - 알고리즘을 표현하는 방법은 두 가지
    - 의사코드(Pseudocode, 슈도코드)
    - 순서도

  - 알고리즘의 작업량은 **시간복잡도(Time Complexity)**로 표현한다.

    - 빅-오 표기법 : 시간 복잡도 함수 중에서 가장 큰 영향력을 주는 n에 대한 항 표시
    - 계수는 생략하여 표시

    <br>

- **배열** : 일정한 자료형의 변수들을 하나의 이름으로 열거하여 사용하는 자료구조

  - `Arr = [0] * 10` 과 같이 자리수를 미리 설정해 놓는 것이 좋다.

---

<br>

- **정렬** : 2개 이상의 자료를 오름차순(ascending), 내림차순(descending)으로 재배열하는 것

<br>

- **버블 정렬(Bubble Sort)** : 인접한 두 개의 원소를 비교하며 자리를 계속 교환하는 방식

  한 단계가 끝나면 가장 큰 원소가 마지막 자리로 정렬된다. O(n^2)

  [55, 7, 78, 12, 42]를 버블 정렬하는 과정(오름차순)

  첫 번째 패스 : "가장 큰 수를 맨 뒤로"

  ​	55 7 78 12 42

  ​	7  55 78 12 42

  ​	7  55 78 12 42

  ​	7  55 12 78 42

  ​	7  55 12 42 **78**  => 마지막 원소는 정렬된다.

  두 번째 패스 : 같은 방법으로 거치게 된다면,

  ​	7  12 42 **55 78**  => 한 개씩 확실하게 정렬됨을 확인할 수 있다.

   즉, 원소의 개수만큼 패스를 돌려주면 모두 정렬이 된다.

```python
def bubble_sort(a, N):	# 오름차순
	for i in range(N-1, 0, -1) #정렬 구간의 끝
        for j in range(i):
            if a[j] > a[j+1]:
                a[j], a[j+1] = a[j+1], a[j]
    return
                
T = int(input()) # TC 개수
for tc in range(1, T+1):
    N = int(input())
    arr = list(map(int, input().split()))
    bubble_sort(arr, N)
    print(f'#{tc}', end=' ')
    #for x in arr:
    #    print(x, end= ' ')
    #print()
    print(*arr)
```

<br>

- **카운팅 정렬** : 항목들의 순서를 결정하기 위해 집합에 각 항목이 몇 개씩 있는지 세는 작업을 하여, 선형 시간에 정렬하는 효율적인 알고리즘, O(n+k) : n은 리스트 길이, k는 정수의 최대값

  A [0, 4, 1, 3, 1, 2, 4, 1]을 카운팅 정렬하는 과정

  1단계 : DATA에서 각 항목들의 발생 빈도수를 세고, 정수 항목들로 직접 인덱스 되는 카운트 배열 COUNTS에 저장한다.

  DATA는 [0, 4, 1, 3, 1, 2, 4, 1]이므로, 배열 COUNTS는 [0, 0, 0, 0, 0]에서, 발생회수를 세어 [1, 3, 1, 1, 2]가 된다.

  2단계 : 정렬된 집합에서 각 항목의 앞에 위치할 항목의 개수를 반영하기 위해 COUNTS의 원소를 조정한다.

  COUNTS는 [1, 3, 1, 1, 2]에서 전 항목의 값이 누적되어 더해진 값인 COUNTS[1, 4, 5, 6, 8]이 된다.

  3단계 : DATA[i]에 접근하여, COUNTS[1]을 감소시키고 Temp에 1을 삽입한다. (반복)

  4단계 : Temp 업데이트 완료하고, 정렬 작업을 종료한다.

<br>

- **Baby-gin Game** : 0~9 사이의 숫자 카드에서 임의의 카드 6장을 뽑았을 때, 3장의 카드가 연속적인 번호를 갖는 경우를 run이라 하고, 3장의 카드가 동일한 번호를 가지고 있는 경우를 triplet이라고 한다. 그리고, 6장의 카드가 run과 triplet로만 구성된 경우를 baby-gin이라고 부른다.

  (6자리의 숫자를 입력받아 baby-gin 여부를 판단하는 프로그램을 작성하라.)

  '완전 검색 방법'은 문제의 해법으로 생각할 수 있는 모든 경우의 수를 나열해보고 확인하는 기법이다. (= Brute-force, generate-and-test)

  수행 속도는 느리지만, 해답을 찾아낼 확률이 높다.

  1단계 : 고려할 수 있는 모든 경우의 수를 생성한다.

  2단계 : 앞의 3자리와 뒤의 3자리를 잘라, run과 triplet 여부를 테스트하고 최종적으로 baby-gin을 판단한다.

<br>

- **순열(Permutation)** : 서로 다른 것들(n) 중 몇 개(r)를 뽑아서 한 줄로 나열하는 것 = nPr

  nPr = n * (n-1) * (n-2) * ... * (n-r+1)

  nPn =  n!

  ex) {1,2,3}을 포함하는 모든 순열을 생성하는 함수

  :동일한 숫자가 포함되지 않았을 때, 각 자리 수 별로 loop를 이용해 아래와 같이 구현할 수 있다.

  ```python
  for i1 in range(1, 4):
      for i2 in range(1, 4):
          if i2 != i1:
              for i3 in range(1, 4):
                  if i3 != i1 and i3 != i2:
                      print(i1, i2, i3)
  ```

<br>

- **탐욕(Greedy) 알고리즘** : 탐욕 알고리즘은 최적해를 구하는 데 사용되는 근시안적인 방법

  여러 경우 중 하나를 결정해야 할 때마다 그 순간에 최적이라고 생각되는 것을 선택해 나가는 방식으로 진행하여 최종적인 해답에 도달한다.

  1) 해 선택 : 현재 상태에서 부분 문제의 최적 해를 구한 뒤, 이를 부분해 집합(Solution Set)에 추가한다.

  2) 실행 가능성 검사 : 새로운 부분해 집합이 실행 가능한지를 확인한다. 
  3)  해 검사 : 새로운 부분해 집합이 문제의 해가 되는지를 확인한다. 아직 전체 문제의 해가 완성되지 않았다면, 1)의 해 선택부터 다시 시작한다.

  <br>

  ex) 거스름돈 줄이기 : "어떻게 하면 손님에게 거스름돈으로 주는 지폐와 동전의 개수를 최소한으로 줄일 수 있을까?"

  1) 해 선택 : 단위가 큰 동전으로만 거스름돈을 만들면 동전의 개수가 줄어드므로 현재 고를 수 있는 가장 단위가 큰 동전을 하나 골라 거스름돈에 추가한다.
  2) 실행 가능성 검사 : 거스름돈이 내줘야 할 액수를 초과하는지 확인한다. 초과한다면 마지막에 추가한 동전을 거스름돈에서 빼고, 1)로 돌아가서 현재보다 한 단계 작은 단위의 동전을 추가한다.
  3) 해 검사 : 거스름돈을 확인해서 액수에 모자라면 다시 1)로 돌아가서 거스름돈에 추가할 동전을 고른다.

  <br>

  ex) Baby-gin을 완전 검색이 아닌 방법으로, 탐욕 알고리즘을 이용하여, 풀이할 수 있다.

  - 6개의 숫자는 6자리의 정수 값으로 입력된다.

  - counts 배열의 각 원소를 체크하여 run과 triplet 및 baby-gin 여부를 판단한다.

    444345의 경우, counts는 (0,0,1,4,1,0,0,0,0,...)이 된다. # 3이 1개, 4가 4개, 5가 1개

    run 조사 후, run 데이터를 삭제한다.

    triplet 조사 후, triplet 데이터를 삭제한다.

    ```python
    num = 456789			# Baby Gin을 확인할 6자리 수
    c = [0] * 12 			# 6자리 수로부터 각 자리 수를 추출하여 개수를 누적할 리스트
    
    for i in range(6):		# 이 방법을 이용하여 c리스트에 각 자리수를 추출하여 추가한다.
        c[num % 10] += 1
        num //= 10
    ```

    ```python
    i = 0
    tri = run = 0
    while i <10:
        if c[i] >= 3:		# triplete 조사 후 데이터 삭제
            c[i] -= 3
            tri += 1
            continue
        if c[i] >= and c[i+1] >= and c[i+2] >= 1:		# run 조사 후 데이터 삭제
            c[i] -= 1
            c[i+1] -= 1
            c[i+2] -= 2
            run += 1
            continue
        i += 1
        
    if run + tri == 2:
        print("Baby Gin")
    else:
        print("Lose")
    ```
