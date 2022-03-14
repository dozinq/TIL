## < DB 01 >

---

- **데이터베이스(DB, Database)** : 체계화된 데이터의 모임
  - 몇 개의 자료 파일을 조직적으로 통합하여 자료 항목의 중복을 없애고, 자료를 구조화하여 기억시켜 놓은 자료의 집합체
  - 데이터 중복을 최소화한다.
- **관계형 데이터베이스(RDB, Relational Database)**
  - 키(key)와 값(value)들의 간단한 관계를 표(table) 형태로 정리한 데이터베이스
  - 관계형 모델에 기반

<br>

- **SQLite** : 서버 형태가 아닌 파일 형식으로 응용 프로그램에 넣어서 사용하는 비교적 가벼운 데이터베이스
  - Data type: 
    - NULL
    - Integer
    - Real : 8바이트 부동 소수점 숫자로 저장된 부동 소수점 값
    - Text
    - Blob : 입력된 그대로 정확히 저장된 데이터, 타입X

<br>

- **SQL(Structured Query Language)**
  - 관계형 데이터베이스 관리시스템의 데이터 관리를 위해 특수 목적으로 설계된 프로그래밍 언어
  - 데이터베이스 스키마 생성 및 수정
  - 자료의 검색 및 관리
  - 데이터베이스 객체 접근 조정 관리
  - 분류
    - DDL(Data Definition Language, 데이터 정의 언어)
    - DML(Data Manipulation Language, 데이터 조작 언어)
    - DCL(Data Control Language, 데이터 제어 언어)

<br>

- 데이터 베이스 생성하기

  ```bash
  $ sqlite3 tutorial.sqlite3
  sqlite> .database
  ```

  : ' . '은 sqlite 프로그램의 기능을 실행하는 것이다.

- csv 파일을 table로 만들기

  ```sqlite
  sqlite> .mode csv
  sqlite> .import hellodb.csv examples
  sqlite> .tables
  examples
  ```

- SELECT

  ```sqlite
  sqlite> SELECT * FROM examples;
  ```

  : ' ; '까지 하나의 명령(SQL Query)로 간주된다!

- (Optional) 터미널 view 변경하기

  ```sqlite
  sqlite> .headers on
  sqlite> .mode column
  ```

- 특정 테이블의 schema 조회

  ```sqlite
  sqlite> .schema classmates
  ```

  : classmates 라는 이름의 schema 조회

- DROP

  ```sqlite
  DROP TABLE classmates;
  ```

- 테이블 생성 실습

  ```sql
  CREATE TABLE classmates(
  name TEXT,
  age INT,
  address TEXT
  );
  ```

<br>

- **CREATE**

  ```sqlite
  INSERT INTO 테이블이름 (컬럼1, 컬럼2, ...) VALUES (값1, 값2, ...);
  ```

  : INSERT는 특정 테이블에 레코드(행)를 삽입(생성)한다.

  - SQLite는 따로 PRIMARY KEY 속성의 컬럼을 작성하지 않으면, 값이 자동으로 증가하는 PK 옵션을 가진 rowid 컬럼을 정의한다.

- **READ**

  - SELECT statement : 테이블에서 데이터를 조회, SELECT 문은 다양한 절(clause)과 함께 사용
    - ORDER BY
    - DISTINCT : 조회 결과에서 중복 행을 제거한다. SELECT 키워드 바로 뒤에 작성해야 한다.
    - WHERE : 쿼리에서 반환된 행에 대한 특정 검색 조건을 지정한다.
    - LIMIT : 쿼리에서 반환되는 행 수를 제한한다. 특정 행부터 시작해서 조회하기 위해 OFFSET 키워드와 함께 사용하기도 한다.
    - GROUP BY
    - ex) SELECT 컬럼1, 컬럼 2, ... FROM 테이블이름;

- **UPDATE**

  ```sqlite
  UPDATE 테이블이름 SET 컬럼1=값1, 컬럼2=값2, ... WHERE 조건;
  ```

  - 기존 행의 데이터를 수정한다.
  - SET clause에서 테이블의 각 열에 대해 새로운 값을 설정한다.

- **DELETE**

  ```sqlite
  DELETE FROM 테이블이름 WHERE 조건;
  ```

- **WHERE**

  ```sqlite
  SELECT * FROM users WHERE age >= 30;
  SELECT first_name FROM users WHERE age >= 30;
  SELECT age, last_name FROM users WHERE age >= 30 AND last_name='김';
  ```

<br>

---

### < SQLite Aggregate Functions >

- **Aggregate function** : 값 집합에 대한 계산을 수행하고 단일 값을 반환

  - SELECT 구문에서만 사용됨
  - 테이블 전체 행 수를 구하는 **COUNT(*)**
  - age컬럼 전체 평균 값을 구하는 **AVG(age)**
  - **MAX** : 그룹에 있는 모든 값의 최대값을 가져옴
  - **MIN** : 그룹에 있는 모든 값의 최소값을 가져옴
  - **SUM** : 모든 값의 합을 계산

- *COUNT*

  ```sqlite
  SELECT COUNT(컬럼) FROM 테이블이름;
  ```

  : 레코드의 개수 조회하기

- *AVG, SUM, MIN, MAX*

  ```sqlite
  30살 이상인 사람들의 평균 나이는?
  SELECT AVG(age) FROM users WHERE age>=30;
  
  계좌 잔액(balance)이 가장 높은 사람과 그 액수를 조회하려면?
  SELECT first_name, MAX(balance) FROM users;
  
  30살 이상인 사람들의 계좌 평균 잔액을 조회하려면?
  SELECT AVG(balance) FROM users WHERE age>=30;
  ```

<br>

---

### < LIKE >

- **LIKE operator**

  - 패턴 일치를 기반으로 데이터를 조회하는 방법
  - SQLite는 패턴 구성을 위한 2개의 wildcards를 제공
    - % (percent sign) : 0개 이상의 문자, 이 자리에 문자열이 있을 수도 없을 수도 있다.
    - _ (underscore) : 임의의 단일 문자, 반드시 이 자리에 한 개의 문자가 존재해야 한다.

  ```sqlite
  SELECT * FROM 테이블 WHERE 컬럼 LIKE '와일드카드패턴';
  ```

<br>

---

### < ORDER-BY >

- **ORDER-BY** : 조회 결과 집합을 정렬, SELECT문에 추가하여 사용

  - 정렬 순서를 위한 키워드 : ASC-오름차순(default), DESC-내림차순

  ```sqlite
  SELECT * FROM 테이블 ORDER BY 컬럼 ASC;
  SELECT * FROM 테이블 ORDER BY 컬럼1, 컬럼2 DESC;
  ```

  : 특정 컬럼을 기준으로 데이터를 정렬해서 조회하기

  ```sqlite
  users에서 나이 순으로 오름차순 정렬하여 상위 10개만 조회한다면?
  SELECT * FROM users ORDER BY age ASC LIMIT 10;
  
  나이 순, 성 순으로 오름차순 정렬하여 상위 10개만 조회한다면?
  SELECT * FROM users ORDER BY age, last_name ASC LIMIT 10;
  
  계좌 잔액 순으로 내림차순 정렬하여 해당 유저의 성과 이름을 10개만 조회한다면?
  SELECT last_name, first_name FROM users ORDER BY balance DESC LIMIT 10;
  ```

- **GROUP BY clause**

  - 행 집합에서 요약 행 집합을 만든다.
  - SELECT문의 option절이다.
  - 선택된 행 그룹을 하나 이상의 열 값으로 요약 행으로 만든다.
  - *문장에 WHERE 절이 포함된 경우 반드시 WHERE 절 뒤에 작성해야 한다.*

  ```sqlite
  SELECT 컬럼1, aggregate_function(컬럼2) FROM 테이블 GROUP BY 컬럼1, 컬럼2;
  ```

  : 지정된 기준에 따라 행 세트를 그룹으로 결합하며, 이는 데이터를 요약하는 상황에 주로 사용된다. 또한, aggregation 함수란, COUNT, SUM, MAX, MIN 등을 뜻한다.

  ```sqlite
  users에서 각 성씨가 몇 명씩 있는지 조회한다면?
  SELECT last_name, COUNT(*) AS name_count FROM users GROUP BY last_name;
  ```

<br>

---

<복습>

```sqlite
title과 content라는 컬럼을 가진 articles라는 이름의 table을 새롭게 만들어보자.(두 컬럼 모두 비어 있으면 안되며, rowid를 사용한다.)
CREATE TABLE articles (
title TEXT NOT NULL,
content TEXT NOT NULL
);

articles 테이블에 값을 추가해보자.(title은 '1번제목', content는 '1번내용')
INSERT INTO articles
VALUES ('1번제목', '1번내용');
```

---

### < ALTER TABLE >

- ALTER TABLE의 3가지 기능

  - table 이름 변경
  - 테이블에 새로운 column 추가
  - column 이름 수정

  ```sqlite
  방금 만든 테이블의 이름을 변경해보자
  ALTER TABLE 기존테이블이름 RENAME TO 새로운테이블이름;
  
  방금 만든 테이블에 새로운 컬럼을 추가해보자
  ALTER TABLE 테이블이름 ADD COLUMN 컬럼이름 데이터타입 설정
  ```

  

