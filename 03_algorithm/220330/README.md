### < 분할정복 >

---

- 문제를 분할해서 해결하는 기법(Divide and Conquer)

- 거듭제곱을 분할 정복 알고리즘으로 풀기

  ```python
  Recursive_Power(x, n)
  	if n == 1:
          return x
      if n % 2 == 0:
          y = Recursive_Power(x, n/2)
          return y*y
      else:
          y = Recursive_Power(x, (n-1)/2)
          return y*y*x
  ```

<br>

### 병합 정렬(Merge Sort)

---

- 여러 개의 정렬된 자료의 집합을 병합하여 한 개의 정렬된 집합으로 만드는 방식

- 자료를 최소 단위의 문제까지 나눈 후에 차례대로 정렬하여 최종 결과를 얻어 낸다.

- 알고리즘: 분할 과정

  ```python
  merge_sort(m)	# m: list
  	if len(m) == 1:
          return m
      left = []
      right = []
      for x in range(len(m)//2):
          left.append(x)
      for x in range(len(m)//2, len(m)+1):
          right.append(x)
          
      merge_sort(left)
      merge_sort(right)
      
      return merge(left, right)
  ```

<br>

### 퀵 정렬

---

- 주어진 배열을 두 개의 분할하고, 각각을 정렬한다.

- 병합 정렬은 그냥 두 부분으로 나누는 반면에, 퀵 정렬은 분할할 때, 기준 아이템(pivot item)을 중심으로, 이보다 작은 것은 왼편, 큰 것은 오른편에 위치시킨다.

- 각 부분 정렬이 끝난 후, 병합 정렬은 '병합'이라는 후처리 작업이 필요하나, 퀵 정렬은 필요로 하지 않는다.

- pivot 값보다 큰 값은 오른쪽, 작은 값들은 왼쪽 집합에 위치하도록 한다. 그 후, 피봇을 두 집합의 가운데에 위치시킨다.(pivot 선택: 왼쪽 끝, 오른쪽 끝, 임의의 세개 값 중에 중간 값 중 선택)

  ```python
  quickSort(A, l, r)	# A: list
  	if l < r:
          s = partition(a, l, r)
          quickSort(A, l, s-1)
          quickSort(A, s+1, r)
  ```

  ```python
  """
  Hoare-Partition 알고리즘
  """
  partition(A, l, r)	# A: list
  	p = A[l]		# p: pivot value
      i = l
      j = r
      while i <= j
      	while i < j and A[i] <= p:
              i += 1
          while i < j and A[j] >= p:
              j -= 1
          if i < j:
              swap(A[i], A[j])
      
      swqp(A[l], A[j])
      return j
  ```

<br>

