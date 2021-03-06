### < 트리 >

---

- **트리**
  
  - 비선형구조 : 원소들 간의 관계가 1 대 N의 관계를 갖는다.
  - 원소들 간에 계층관계를 가지는 계층형 자료구조
  
  - 상위 원소에서 하위 원소로 내려가면서 확장되는 트리모양의 구조
  
  - 한 개 이상의 노드로 이루어진 유한 집합이며 다음 조건을 만족한다.
    - 노드 중 최상위 노드를 루트(root)라고 한다.
    - 나머지 노드들은 n(>=0)개의 분리 집합 T1, T2, ..., Tn으로 분리될 수 있다.
    - 이들 T1, T2, ..., Tn은 각각 하나의 트리가 되며(재귀적 정의) 루트의 부트리(subtree)라고 한다.
  
  - 노드(node) : 트리의 원소
  
  - 간선(edge) : 노드를 연결하는 선. 부모 노드와 자식 노드를 연결한다.
  
  - 루트 노드(root node) : 트리의 시작 노드
  
  - 차수(degree)
  
    - 노드의 차수 : 노드에 연결된 자식 노드의 수
    - 트리의 차수 : 트리에 있는 노드의 차수의 최댓값
    - 단말 노드 : 차수가 0인 노드
  
  - 높이
  
    - 노드의 높이 : 루트에서 노드에 이르는 간선의 수. 노드의 레벨
  
    - 트리의 높이 : 트리에 있는 노드의 높이의 최댓값

<br>

### < 이진트리 >

---

- **이진트리**
  - 모든 노드들이 2개의 서브트리를 갖는 특별한 형태의 트리
  - 각 노드가 자식 노드를 최대 2개까지 가질 수 있는 트리 (레벨 n에서의 노드의 최대 개수는 2^n개)
  - 높이가 h인 이진 트리가 가질 수 있는 노드의 최소 개수는 h+1개이며, 최대 개수는 ((2^(h+1))-1)개이다.

- **포화 이진 트리(Full Binary Tree)**
  - 모든 레벨에 노드가 포화상태로 차 있는 이진 트리
  - 높이가 h일 때, 최대 노드 개수인 ((2^(h+1))-1)개의 노드를 가진 이진 트리

- **완전 이진 트리(Complete Binary Tree)**
  - 높이가 h이고 노드 수가 n개일 때, 포화 이진 트리의 노드 번호 1번부터 n번까지 빈 자리가 없는 이진 트리

- **편향 이진 트리(Skewed Binary Tree)**
  - 높이 h에 대한 최소 개수의 노드를 가지면서 한쪽 방향의 자식 노드만을 가진 이진 트리
    - 왼쪽 편향 이진 트리
    - 오른쪽 편향 이진 트리

- **이진 트리 - 순회(traversal)**
  - 순회란 트리의 각 노드를 중복되지 않게 전부 방문하는 것을 말한다.
  - 트리는 비선형구조이기 때문에 선형구조에서와 같이 선후 연결관계를 알 수 없다.
  - 3가지 순회방법
    - **전위순회(preorder traversal) : VLR** : 부모노드 방문 후, 자식 노드를 좌, 우 순서로 방문한다.
    - **중위순회(inorder traversal) : LVR** : 왼쪽 자식노드, 부모노드, 오른쪽 자식노드 순으로 방문한다.
    - **후위순회(postorder traversal) : LRV** : 자식노드를 좌우 순서로 방문한 후, 부모노드로 방문한다.



- **전위순회(preorder traversal)**

  - 수행 방법
    1. 현재 노드 n을 방문하여 처리한다. **V**
    2. 현재 노드 n의 왼쪽 서브트리로 이동한다. **L**
    3. 현재 노드 n의 오른쪽 서브트리로 이동한다. **R**

  ```pseudocode
  def preorder_traverse(T):
  	if T:		# T is not None
  		visit(T)	# print (T.item)
  		preorder_traverse(T.left)
  		preorder_traverse(T.right)
  ```

  

- **중위순회(inorder traversal)**

  - 수행 방법
    1. 현재 노드 n의 왼쪽 서브트리로 이동한다. **L**
    2. 현재 노드 n을 방문하여 처리한다. **V**
    3. 현재 노드 n의 오른쪽 서브트리로 이동한다. **R**

  ```pseudocode
  def inorder_traverse(T):
  	if T:		# T is not None
  		inorder_traverse(T.left)
  		visit(T)	# print (T.item)
  		inorder_traverse(T.right)
  ```

  

- **후위순회(postorder traversal)**
  - 수행 방법
    1. 현재 노드 n의 왼쪽 서브트리로 이동한다. **L**
    2. 현재 노드 n의 오른쪽 서브트리로 이동한다. **R**
    3. 현재 노드 n을 방문하여 처리한다. **V**

```pseudocode
def postorder_traverse(T):
	if T:		# T is not None
		postorder_traverse(T.left)
		postorder_traverse(T.right)
		visit(T)	# print (T.item)
```



- **트리의 표현 - 연결리스트**
  - 이진 트리의 모든 노드는 최대 2개의 자식 노드를 가지므로 일정한 구조의 단순 연결 리스트 노드를 사용하여 구현한다.
- **수식 트리**
  - 수식 이진 트리(=Expression Binary Tree)로, 수식을 표현하는 이진트리이다.
  - 연산자는 루트 노드이거나 가지 노드이다.
  - 피연산자는 모두 잎 노드이다.

---

### < 이진 탐색 트리 >

- **이진 탐색 트리**
  - 탐색작업을 효율적으로 하기 위한 자료구조
  - 모든 원소는 서로 다른 유일한 키를 가진다.
  - key(왼쪽 서브트리) < key(루트 노드) < key(오른쪽 서브트리)
  - 왼쪽 서브트리와 오른쪽 서브트리도 이진 탐색트리이다.
  - 중위 순회하면 오름차순으로 정렬된 값을 얻을 수 있다.
- **연산**
  - 루트에서 시작한다.
  - 탐색할 키 값을 루트 노드의 키 값과 비교한다.
    - (키 값 == 루트노드의 키 값) : 원하는 원소를 찾았으므로 탐색연산 성공
    - (키 값 < 루트노드의 키 값) : 루트노드의 왼쪽 서브트리에 대해서 탐색연산 수행
    - (키 값 > 루트노드의 키 값) : 루트노드의 오른쪽 서브트리에 대해서 탐색연산 수행
- **삽입 연산**
  1. 탐색 연산 수행
  2. 탐색 실패한 위치에 원소 삽입

---

### < 힙 >

- **힙(heap)** : 완전 이진 트리에 있는 노드 중에서 키값이 가장 큰 노드나 키값이 가장 작은 노드를 찾기 위해서 만든 자료구조
- 최대 힙 : 키 값이 가장 큰 노드를 찾기 위한 완전 이진 트리
  - 부모노드의 키값 > 자식노드의 키값
- 최소 힙 : 키 값이 가장 작은 노드를 찾기 위한 완전 이진 트리
  - 부모노드의 키값 < 자식노드의 키값
- 힙에서는 루트노드의 원소만을 삭제할 수 있다.
- 루트 노드의 원소를 삭제하여 반환한다.
- 힙의 종류에 따라 최대값 또는 최소값을 구할 수 있다.