#### *flutter 시작 시 셋팅*

1. analysis_options.yaml 내에 rules를 찾아 다음과 같이 기입한다.

   ```dart
   rules:
       prefer_typing_uninitialized_variables : false
       prefer_const_constructors_in_immutables : false
       prefer_const_constructors : false
       avoid_print : false
       # const lint
       prefer_const_literals_to_create_immutables : false
   ```

2. 최상단에 assets 폴더를 만들고, pubspec.yaml 내에 flutter를 찾아 다음과 같이 기입한다.

   ```dart
   flutter:
     assets:
       - assets/
   ```

3. main.dart 내에 void main() 아래로 다 지우고, 함수를 새로 작성해 준다. 



#### *Widget 4가지*

1. Text('Hi')

2. Icon(Icons.star)

3. Image.asset('assets/img.jpg')

4. ```dart
   home: Center(
     child: Container(width: 50, height: 50, color: Colors.blue)
   )
   ```



#### *Scaffold Widget* : 상중하로 나눠줌

```dart
Scaffold(
    appBar: AppBar(),
    body: Container(),
    bottomNavigationBar: BottomAppBar(),
),
```



#### *Row, Column* : 가로 배치, 세로 배치

```dart
Row(
    children: [
        Icon(Icons.star),
        Icon(Icons.star),
    ]
),
```



#### *mainAxisAlignment, CrossAxisAlignment* : 방향에 따른 축 정렬

```dart
Row(
    mainAxisAlignment: MainAxisAlignment.center,
    crossAxisAlignment: CrossAxisAlignment.center,
    children: [
        Icon(Icons.star),
        Icon(Icons.star),
    ]
),
```



#### *EdgeInsets* : padding, margin 조절

```dart
Container(
          width: 50, height: 50, color: Colors.blue,
          padding: EdgeInsets.all(20),
          margin: EdgeInsets.all(20),
          // 개별 여백 주는 방법
          // margin: EdgeInsets.fromLTRB(left, top, right, bottom)
        ),
```



#### *BoxDecoration* : Box 꾸미기

```dart
Container(
    width: 50, height: 50,
    decoration: BoxDecoration(
        // decoration 사용 시, 꾸미는(색) 건 여기에 정의
        color: Colors.blue,
        border: Border.all(color: Colors.black)
    ),
),
```



#### *Alignment* : Box 정렬

```dart
Align(
    alignment: Alignment.bottomRight,
    child: Container(
        width: 50, height: 50, color: Colors.blue,
    ),
),
```



#### *double.infinity* : 사이즈 부모 요소에 꽉 차게 조절

```dart
width: double.infinity
```



#### *TextStyle* : 글자 꾸미기

```dart
Text('Hello, World!',
    style: TextStyle( color: Colors.red, fontWeight: FontWeight.w700 ),
),
```



#### *Button* : 종류 - TextButton(), IconButton(), ElevatedButton()

```dart
TextButton(
    child: Text('버튼'),
    onPressed: (){}
),
```



#### *AppBar* : 자주 쓰이는 parameter

```markdown
title : 왼쪽에 넣을 제목
leading : 왼쪽에 넣을 아이콘
actions : 오른쪽에 넣을 아이콘
```



< Layout 제작 방법 >

> 1. 예시 디자인 준비
> 2. 네모로 나누어 생각하기
> 3. 바깥 네모부터 하나하나 위젯으로 만들기
> 4. 디자인



#### *Flexible* : Row나 Column 안 에서 비율(%)로 크기 조절

```dart
Row(
    children: [
        Flexible(
            flex: 3,
            child: Container(
                color: Colors.blue
            ),
        ),
        Flexible(
            flex: 5,
            child: Container(
                color: Colors.green
            ),
        ),
    ]
),
```

#### cf)	*Expanded* : 박스 하나 넓게 채울 수 있음



#### *ListView* : 스크롤 바를 생기게 할 수 있는 Column

```dart
ListView(
	children: [
        Text('1'),
        Text('2'),
        Text('3'),
        Text('4'),
        Text('5'),
    ],
),
```



---

docs를 통해 지식을 습득함과 동시에,

위는 유튜브 '코딩애플' 강의를 빠르게 들으면서 정리하였으며,

이외에도 Flutter 지식은 https://velog.io/@qkrtnfks128/series/Flutter-%EC%95%BC%EA%B8%88%EC%95%BC%EA%B8%88-%EB%A8%B9%EA%B8%B0

에서 습득할 수 있었습니다.
