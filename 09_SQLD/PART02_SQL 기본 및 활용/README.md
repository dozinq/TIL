# SQLD 2과목

## 제 1장 SQL 기본

#### 1. 관계형 데이터베이스 개요

1. 데이터베이스 : 데이터를 일정한 형태로 저장해 놓은 것
   - 계층형 DB : 트리 형태의 자료구조에 데이터 저장 (1:N)
   - 네트워크형 DB : 오너와 멤버 형태로 데이터 저장 (M:N)
   - 관계형 DB : 집합 연산과 관계 연산 가능
2. 관계형 데이터베이스 (RDB : Relational Database)
   - 파일 시스템 단점 : 동시에 삽입/수정/삭제 불가능하여 데이터 관리가 어렵고, 복사본 파일을 만들어 사용할 경우 데이터의 불일치성이 발생
   - RDB 장점 : 정규화를 통해 이상 현상과 중복 제거, 데이터 무결성 보장, 데이터 회복/복구 가능, 병행 제어, 동시성 관리를 통해 데이터 공유, 데이터 표현 방법 등 체계화
3. SQL 문장들의 종류
   - SQL : 관계형 데이터베이스에서 데이터 정의/조작/제어를 위해 사용하는 언어
     - DML(Data Manipulation Language, 데이터 조작어)
       - SELECT (=RETRIEVE) : 데이터베이스에 들어 있는 데이터를 조회하거나 검색하기 위한 명령어
       - INSERT, UPDATE, DELETE : 데이터베이스의 테이블에 들어 있는 데이터에 변형을 가하는 종류의 명령어들을 말한다. 예를 들어 데이터를 테이블에 새로운 행을 집어넣거나, 원하지 않는 데이터를 삭제하거나 수정하는 것들의 명령어들을 DML이라고 부른다.
     - DDL(Data Definition Language, 데이터 정의어)
       - CREATE, ALTER, DROP, RENAME : 테이블과 같은 데이터 구조를 정의하는데 사용되는 명령어들로 그러한 구조를 생성하거나 변경하거나 삭제하거나 이름을 바꾸는 데이터 구조와 관련된 명령어들을 DDL이라고 부른다.
     - DCL(Data Control Language, 데이터 제어어)
       - GRANT, REVOKE : 데이터베이스에 접근하고 객체들을 사용하도록 권한을 주고 회수하는 명령어를 DCL이라고 부른다.
     - TCL(Transaction Control Language, 트랜잭션 제어어)
       - COMMIT, ROLLBACK : 논리적인 작업의 단위를 묶어서 DML에 의해 조작된 결과를 작업단위(트랜잭션) 별로 제어하는 명령어를 말한다.

4. 테이블 : RDB의 기본 단위, 데이터를 저장하는 객체, 칼럼과 행의 2차원 구조
   1. 테이블(Table) : 행과 칼럼의 2차원 구조를 가진 데이터의 저장 장소이며, 데이터 베이스의 가장 기본적인 개념
   2. 열(Column) : 2차원 구조를 가진 테이블에서 세로 방향으로 이루어진 하나하나의 특정 속성(더이상 나눌 수 없는 특성)
   3. 행(Row) : 2차원 구조를 가진 테이블에서 가로 방향으로 이루어진 연결된 데이터
5. ERD(Entity Relationship Diagram)
   - 관계의 의미를 직관적으로 표현할 수 있는 수단
   - 구성요소 : 엔터티(Entity), 관계(Relationship), 속성(Attribute)
   - 표기법 : IE(Information Engineering) 표기법, Barker(Case Method) 표기법



#### 2. DDL (CREATE, ALTER, DROP, RENAME)

1. 데이터의 유형

   	1. 숫자 타입

       - ANSI / ISO 기준 : Numeric, Decimal, Dec, Small Int, Integer, Int, Big int , Float, Real, Double Precision

       - SQL Server / Sybase : 작은 정수, 정수, 큰 정수, 실수 등 + Money, Small Money

       - Oracle : 숫자형 타입에 대해서 Number 한 가지 타입만 지원

       - 벤더에서 ANSI/ISO 표준을 사용할 땐 기능을 중심으로 구현, 표준과 다른 용어 사용 허용

   	2. 문자열 유형

       - CHAR(고정길이) 과 VARCHAR(가변길이)의 차이
       - CHAR에서 문자열 비교 : 공백을 채워서 비교
       - VARCHAR에서 문자열 비교 : 맨 처음부터 한 문자씩 비교 (공백도 하나의 문자로 취급)

   	3. 테이블의 칼럼이 가지고 있는 대표적인 4가지 유형

       	1. CHARACTER(s)
           - 고정 길이 문자열 정보 (Oracle, SQL Server 모두 CHAR로 표현)
           - s는 기본 길이 1바이트, 최대 길이 Oracle 2000qkdlxm, SQL Server 8000바이트
           - s만큼 최대 길이를 갖고 고정 길이를 가지고 있으므로, 할당된 변수 값의 길이가 s보다 작을 경우에는 그 차이 길이만큼 공간으로 채워진다.
       	2. VARCHAR(s)
           - CHARACTER VARYING의 약자로 가변 길이 문자열 정보 (Oracle은 VARCHAR2로 표현, SQL Server는 VARCHAR로 표현)
           - s는 최소 길이 1바이트, 최대 길이 Oracle 4000바이트, SQL Server 8000바이트
           - s만큼의 최대 길이를 갖지만 가변 길이로 조정이 되기 때문에 할당된 변수 값의 바이트만 적용된다. (Limit 개념)
       	3. NUMERIC
           - 정수, 실수 등 숫자 정보 (Oracle은 NUMBER로, SQL Server는 10가지 이상의 숫자 타입을 가지고 있음)
           - Oracle은 처음에 전체 자리 수를 지정하고, 그 다음 소수 부분의 자리 수를 지정한다. 예를 들어, 정수 부분이 6자리이고 소수점 부분이 2자리인 경우에는 'NUMBER(8,2)'와 같이 된다.
       	4. DATETIME
           - 날짜와 시각 정보 (Oracle은 DATE로 표현, SQL Server는 DATETIME으로 표현)
           - Oracle은 1초 단위, SQL Server는 3.33ms(millisecond) 단위 관리

2. CREATE TABLE

   ```sql
   CREATE TABLE 테이블 이름
   (칼럼명 DATATYPE [DEFAULT 형식],
   칼럼명 DATATYPE [DEFAULT 형식],
   칼럼명 DATATYPE [DEFAULT 형식] );
   ```

   - 명명 규칙 : 알파벳 -> 숫자 -> _(언더바) -> $ -> #
   - 테이블 생성시 대/소문자 구분 X
   - DATETIME 데이터 유형에는 크기 지정 X
   - 문자 데이터 유형은 반드시 가질 수 있는 최대 길이를 표시
   - 칼럼과 칼럼의 구분은 콤마로 하되, 마지막 칼럼은 콤마 X
   - 칼럼에 대한 제약조건이 있으면 CONSTRAINT를 이용하여 추가

3. 제약조건 (CONSTRAINT) - 데이터 무결성 유지 방법, 사용자가 원하는 조건의 데이터만 유지

   - PK (Primary Key) : 한 테이블에 하나만 지정 가능 -> 자동으로 unique 인덱스 생성, null 입력 불가 (기본키 제약 = 고유키 & not null 제약)
   - UNIQUE : NULL 가능, 행을 고유하게 식별하기 위한 고유키
   - NOT NULL : NULL 값 입력 금지
   - CHECK : 데이터 무결성을 유지하기 위한 테이블의 특정 칼럼에 설정하는 제약, 입력할 수 있는 값의 범위 등을 제한, TRUE or FALSE 논리식을 지정
   - FK (Foreign Key) : 참조 무결성 옵션 선택 가능, 여러개 가능
   - NULL : 아직 정의되지 않은 값, 데이터 입력하지 못하는 경우, 0과 공백은 NULL이 아님

4. 생성된 테이블 구조 확인

   ```sql
   /* Oracle */
   DESCRIBE 테이블명;
   DESC 테이블명;
   /* SQL Server */
   sp_help 'dbo.테이블명'
   ```

5. SELECT 문장을 통한 테이블 생성 사례

   1. CREATE TABLE AS (CTAS)

      ```sql
      /* ORACLE */
      CREATE TABLE 테이블명B AS SELECT * FROM 테이블명A;
      ```

      - CREATE TABLE AS 문장을 사용하는 경우 테이블의 구조를 복사하므로 따로 작성 X
      - 기존 테이블 제약조건 중 **NOT NULL 제약 조건만 새로운 테이블에 복제됨**
      - 다른 제약조건(기본키, 고유키, 외래키, CHECK 등)은 복사가 되지 않아서 다시 적용해야 한다.
      - 계약 조건 추가하기 위해 ALTER TABLE 기능 사용

   2. SQL Server에서는 Select ~ into ~ 를 활용하여 같은 결과

      ```sql
      /* SQL Server */
      SELECT * INTO 테이블명B FROM 테이블명A;
      ```

6. ALTER TABLE - 칼럼을 추가/삭제하거나 제약조건을 추가/삭제

   ```sql
   /* 추가 */
   ALTER TABLE 테이블이름 ADD 속성_이름 데이터타입 [DEFAULT];
   ALTER TABLE PLAYER ADD ADDRESS VARCHAR(80);
   /* 속성명 변경 */
   ALTER TABLE 테이블이름 ALTER 속성_이름 [SET DEFAULT];
   ALTER TABLE TEAM_TEMP ALTER COLUMN ORIG_YYYY VARCHAR(8) NOT NULL;
   /* 속성 삭제 */
   ALTER TABLE 테이블이름 DROP 속성_이름 [CASCADE | RESTRICT];
   ALTER TABLE PLAYER DROP COLUMN ADDRESS;
   ```

   1. ALTER TABLE + ADD COLUMN : 칼럼 추가
   2. ALTER TABLE + DROP COLUMN : 칼럼 삭제
   3. ALTER TABLE + MODIFY : 칼럼 속성 변경
   4. ALTER TABLE + RENAME COLUMN A TO B : 컬럼명 변경
   5. ALTER TABLE + ADD CONSTRAINT : 제약조건 추가
   6. ALTER TABLE + DROP CONSTRAINT : 제약조건 삭제

   - ALTER TABLE 칼럼 변경 시 주의사항

     - 칼럼의 크기를 늘릴 수는 있지만 줄이는 건 X
     - null만 있거나 행이 없는 경우에만 칼럼 폭 줄이기 가능
     - null이 있을때는 데이터 유형(숫자, 문자) 변경 가능
     - null이 없으면 not null 제약조건 추가 가능
     - 기본값(DEFAULT) 변경 작업 이후 발생하는 행 삽입에 대해서만 기본값 변경

   - PK 제약조건 생성하는 DDL

     ```sql
     /* 1 */
     CREATE TABLE 테이블명
     (칼럼1 VARCHAR2(10) PRIMARY KEY, 칼럼2 VARCHAR2(200) NOT NULL);
     /* 2 */
     CREATE TABLE 테이블명
     (칼럼1 VARCHAR2(10) NOT NULL, 칼럼2 VARCHAR2(200) NOT NULL, CONSTRAINT constraint_name PRIMARY KEY (칼럼1));
     /* 3 */
     ALTER TABLE
     테이블명 ADD CONSTRAINT constraint_name PRIMARY KEY (col_1, col_2, ...)
     ```

   - 외래키(FK) 참고사항
     - 테이블 생성 시 설정할 수 있다.
     - 외래키는 NULL 값 가질 수 있다.
     - 한 테이블에 여러 개 존재 가능하다.
     - 참조 무결성 제약을 받는다.

7. DROP TABLE - 테이블 제거

   ```sql
   ALTER TABLE 테이블명 DROP COLUMN 삭제할 컬럼명;
   /* 테이블 전부 삭제, 회복 불가 */
   DROP TABLE PLAYER;
   /* 테이블의 일부 칼럼 삭제, 회복 불가 */
   ALTER TABLE PLAYER DROP COLUMN ADDRESS;
   ```

   - DROP 명령어를 사용하면 테이블의 모든 데이터 및 구조를 삭제
   - CASCADE CONSTRAINT 옵션은 해당 테이블과 관계가 있었던 참조되는 제약조건에 대해서도 삭제한다는 것을 의미
   - SQL Server에서는 CASCADE 옵션이 존재하지 않으며, 테이블을 삭제하기 전에 참조하는 FK 제약 조건 또는 참조하는 테이블을 먼저 삭제

8. TRUNCATE TABLE - 테이블 비우기

   ```sql
   TRUNCATE TABLE 테이블명 DROP COLUMN 삭제할 컬럼명;
   ```

   - 테이블 삭제가 아닌 해당 테이블의 모든 행 제거 후 저장공간을 재사용하도록 한다.

9. DDL과 DML의 삭제

   - DDL은 반드시 AUTO COMMIT이 일어남 -> DROP, TRUNCATE 원상복구 불가
   - DML은 사용자가 COMMIT 해야함 -> DELETE 테이블 삭제해도 ROLLBACK으로 복구 가능

10. 참조 동작

    - Automatic : 자식 삽입 시 부모 테이블에 pk가 없으면 부모 pk 생성 후 자식에 삽입
    - Dependent : 자식 삽입 시 부모 테이블에 pk가 존재할 때만 자식 삽입 허용
    - Cascade : 부모 삭제 시 자식 같이 삭제
    - Restrict : 부모 삭제 시 자식 테이블에 pk가 없는 경우에만 부모 삭제 허용



#### 3. DML (SELECT, INSERT, UPDATE, DELETE)

1. DML (Data Manipulation Language) : 입력 / 수정 / 삭제/ 조회

   - 호스트 프로그램 속에 삽입되어 사용, 데이터 부속어라고도 함
   - Procedural DML(절차적 데이터 조작어) : 초급언어, 사용자가 무슨 데이터를 원하고 어떻게 접근해 처리할 것인지 명세해야 한다.
   - Nonprocedural DML(비절차적 데이터 조작어) : 고급언어, 사용자가 무슨 데이터를 원하는지만 명세하고 어떻게 접근할 것인지는 하지 않는다. 선언적 언어라고도 한다.

2. INSERT - 데이터 입력 방법

   ```sql
   INSERT INTO 테이블명 (COLUMN_LIST) VALUES (COLUMN_LIST에 넣을 VALUE_LIST);
   INSERT INTO 테이블명 VALUES (전체 COLUMN에 넣을 VALUE_LIST);
   
   PLAYER INSERT INTO PLAYER
   (PLAYER_ID, PLAYER_NAME, TEAM_ID, POSITION, HEIGHT, WEIGHT, BACK_NO)
   VALUES ('200207', '박지성', 'K07', 'MF', 178, 73, 7);
   ```

   - INSERT INTO 테이블명 (칼럼리스트 / 생략 = 전체칼럼)

     VALUES (컬럼명 순서에 맞춰 입력할 값 매핑해서 작성);

   - 데이터가 문자형일 경우 ''로 묶어서 입력

3. UPDATE - 정보 수정

   ```sql
   UPDATE 테이블명 SET 수정되어야 할 칼럼명 = 수정되기를 원하는 새로운 값;
   UPDATE PLAYER SET BACK_NO = 99;
   UPDATE PLAYER SET POSITION = 'MF';
   ```

   - UPDATE 테이블명 SET 칼럼명 = 값 WHERE 조건;

4. DELETE - 삭제

   ```sql
   DELETE FROM 삭제를 원하는 정보가 들어있는 테이블명 WHERE 조건절;
   DELETE FROM PLAYER;
   ```

   - DELETE FROM 테이블명 WHERE 조건;
   - FROM 문구는 생략이 가능
   - WHERE 절을 사용하지 않는다면 테이블의 전체 데이터 삭제

5. SELECT - 데이터 조회

   ```sql
   SELECT 칼럼명 FROM 테이블;
   SELECT PLAYER_ID, PLAYER_NAME, TEAM_ID, POSITION FROM PLAYER;
   SELECT DISTINCT POSITION FROM PLAYER;
   SELECT * FROM PLAYER;
   SELECT PLAYER_NAME AS 선수명 FROM PLAYER
   ```

   - SELECT [ALL | DISTINCT] 칼럼1, 칼럼2, ... FROM 테이블명;
   - ALL : DEFAULT 옵션 (중복 데이터 모두 출력)
   - DISTINCT : 중복 제거하여 1건으로 출력

6. 산술 연산자

   - NUMBER와 DATE 자료형에 적용, 수학 사칙연산과 동일

7. 합성 연산자 - 문자와 문자를 연결하는 합성 (CONCATENATION) 연산자

   [Oracle] -> ||

   [SQL Server] -> +



#### 4. TCL (COMMIT, ROLLBACK)

1. TCL
   - 논리적 작업단위를 묶어 DML에 의해 조작된 결과를 작업단위 별로 제어
   - DCL로 분류하기도 한다.
2. 트랜잭션
   - **데이터베이스의 논리적인 연산 단위**
   - 트랜잭션에는 하나 이상의 SQL 문장이 포함된다.
   - 트랜잭션은 밀접히 관련되어 분리될 수 없는 한 개 이상의 DB 조작을 가리킨다.
   - 분할할 수 없는 최소단위, 전부 적용하거나 전부 취소해야 한다.
3. 트랜잭션의 특성 (**일원고지**)
   1. 일관성 : 트랜잭션이 실행되기 전의 데이터베이스 내용이 잘못 되어 있지 않다면, 트랜잭션이 실행된 이후에도 데이터베이스의 내용에 잘못이 있으면 안 된다.
   2. 원자성 : 트랜잭션에서 정의된 연산들은 모두 성공적으로 실행되던지 아니면 전혀 실행되지 않은 상태로 남아 있어야 한다.
   3. 고립성 : 트랜잭션이 실행되는 도중에 다른 트랜잭션의 영향을 받아 잘못된 결과를 만들어서는 안된다.
   4. 지속성 : 트랜잭션이 성공적으로 수행되면 그 트랜잭션이 갱신한 데이터베이스의 내용은 영구적으로 저장된다.
4. TCL(TRANSACTION CONTROL LANGUAGE)
   - 커밋 (COMMIT) : 올바르게 반영된 데이터를 데이터베이스에 반영시키는 것
   - 롤백 (ROLLBACK) : 트랜잭션 시작 이전의 상태로 되돌리는 것
   - 저장점(SAVEPOINT) : 저장점 기능
   - 잠금(LOCKING) : 다른 트랜잭션이 동시에 접근하지 못하도록 제한

- 트랜잭션 대상이 되는 SQL
  1. UPDATE, INSERT, DELETE 등 데이터를 수정하는 DML 문
  2. SELECT FOR UPDATE 등 배타적 LOCK을 요구하는 SELECT 문

5. COMMIT - 입력/수정/삭제한 자료가 문제가 없을 경우 변경 사항 적용

   ```sql
   /* Oracle SQL */
   UPDATE PLAYER SET HEIGHT = 100;
   COMMIT;
   /* SQL */
   UPDATE PLAYER SET HEIGHT = 100;
   ```

   1. COMMIT 이전 상태
      - 단지 Memory Buffer에만 영향을 주고, 이전 상태로 복구 가능
      - 현재 사용자는 SELECT 문으로 변경 결과를 확인 가능
      - 다른 사용자는 현재 사용자가 수행한 결과의 확인 불가능
      - 변경된 행은 아직 잠금(Locking) 설정되어 다른 사용자가 변경 불가능
   2. COMMIT 이후 상태
      - 데이터에 대한 변경사항을 데이터베이스에 영구반영
      - 이전 데이터는 영원히 잃어버림
      - 모든 사용자가 결과 조회 가능
      - 변경된 행은 잠금이 해제되어 다른 사용자가 변경 가능

   - Auto COMMIT
     - [Oracle] 임의로 COMMIT 혹은 ROLLBACK을 수행해 주어야 트랜잭션이 종료
     - [SQL Server] 기본적으로 Auto COMMIT 모드, DML 구문이 성공이면 자동으로 COMMIT이 되고 오류가 발생할 경우 자동으로 ROLLBACK 처리

6. ROLLBACK - COMMIT 이전으로 되돌림

   ```sql
   /* Oracle SQL */
   UPDATE PLAYER SET HEIGHT = 100;
   ROLLBACK;
   /* SQL */
   BEGIN TRAN UPDATE PLAYER SET HEIGHT = 100;
   ROLLBACK;
   ```

   - 테이블에 입력/수정/삭제한 데이터에 대해 COMMIT 이전의 변경사항을 취소
   - 이전 데이터가 다시 재저장됨
   - 관련 행에 대한 잠금이 풀리고, 다른 사용자들이 데이터 변경 가능

7. COMMIT과 ROLLBACK을 사용함으로써 얻을 수 있는 효과

   - 데이터 무결성 보장
   - 영구적인 변경을 하기 전에, 데이터의 변경 사항을 확인 가능
   - 논리적으로 연관된 작업을 그룹핑하여 처리 가능

8. SAVEPOINT - 저장점, 데이터 변경을 사전에 지정한 저장점까지만 롤백

   ```sql
   /* Oracle */
   SAVEPOINT 포인트이름;
   -> ROLLBACK TO 포인트이름;
   /* SQL Server */
   SAVE TRANSACTION 포인트이름;
   -> ROLLBACK TRANSACTION 포인트이름;
   ```

   - 저장점을 정의하면 롤백을 할 경우 전체 롤백이 아닌 저장점까지의 일부만 롤백
   - SAVEPOINT는 여러 개 지정할 수 있음
   - 동일 이름으로 저장점 지정 시 가장 나중에 정의한 저장점이 유효
   - point1으로 되돌리고 나면 그보다 미래 시점인 point2로는 되돌릴 수 없다.
   - 저장점 없이 롤백하면 모든 변경사항을 취소



#### 5. WHERE 절

1. WHERE

   - 자신이 원하는 자료만을 검색하기 위해 이용
   - WHERE 절에 조건이 없는 FTS(Full Table Scan) 문장은 SQL 튜닝 1차 검토 대상

   ```sql
   SELECT [DISTINCT/ALL] 컬럼명 [ALIAS명] FROM 테이블명 WHERE 조건식;
   SELECT PLAYER_NAME FROM PLAYER WHERE TEAM_ID = 'K02';
   SELECT PLAYER_NAME, POSITION, BACK_NO, HEIGHT FROM PLAYER WHERE HEIGHT >= 170;
   ```

2. WHERE 연산자의 종류
   - 처리 순서 : 부정 연산자 -> 비교 연산자 -> 논리 연산자

3. IS NULL / IS NOT NULL
   - IS NOT NULL : NULL이 아닌 경우를 찾기 위해 사용
     - NULL과 모든 사칙연산의 결과는 NULL이다.

4. ROWNUM / TOP - 행의 개수를 제한

   1. ROWNUM (Oracle)

      - Oracle의 ROWNUM은 칼럼과 비슷한 성격의 Pseudo Column
      - SQL 처리 결과 집합의 각 행에 대해 임시로 부여되는 일련번호
      - 테이블/집합에서 원하는 만큼의 행만 가져올 때, WHERE 절에서 행의 개수를 제한
      - 2건 이상부터는 = 사용 불가

      ```sql
      /* "MY TABLE"이라는 테이블의 첫번째 칼럼을 "고유한 키값" 혹은 "인덱스 값"으로 설정하라. */
      UPDATE MY_TABLE SET COLUMN1 = ROWNUM;
      /* "PLAYER"테이블에서 PLAYER_NAME 번호가 3 이하인 선수 이름을 출력하라. */
      SELECT PLAYER_NAME FROM PLAYER WHERE ROWNUM <= 3;
      ```

   2. TOP (SQL Server)

      - SQL Server는 TOP 절을 사용하여 결과 집합으로 출력되는 행의 수를 제한
      - TOP (Expression) [PERCENT] [WITH TIES];
        - Expression : 반환할 행의 수를 지정
        - PERCENT : 쿼리 결과 집합에서 처음 Expression%의 행만 반환됨을 나타냄
        - WITH TIES : ORDER BY 절이 지정된 경우만 사용 가능

      ```sql
      /* "PLAYER" 테이블에서 1~5행까지의 PLAYER_NAME을 출력하라. */
      SELECT TOP(5) PLAYER_NAME FROM PLAYER;
      ```



#### 6. 함수

1. 내장함수 - SQL을 더욱 강력하게 해주고 데이터 값을 간편 조작하는데 사용

   - 벤더에서 제공하는 함수인 내장 함수 (Built-in Function)
   - 사용자가 정의할 수 있는 함수 (User Defined Function)
   - SQL을 더욱 강력하게 해주고 데이터 값을 간편하게 조작하는데 사용
   - 핵심적인 기능들은 이름/표기법이 달라도 대부분의 데이터베이스가 공통적으로 제공
   - 내장함수는 다시 함수의 입력 값에 따라 단일행 함수 / 다중행 함수
     - **단일행 함수** : 단일 행 내에 있는 하나의 값 또는 여러 값이 입력 인수로 사용
     - **다중행 함수** : 여러 레코드의 값들을 입력 인수로 사용
   - 함수는 **입력값이 아무리 많아도 출력값은 하나라는 M:1 관계**라는 중요한 특징을 가짐

   ```markdown
   *낯선 함수들 정리*
   1. CONCAT(str1, str2) : str1과 str2를 연결
   2. SIGN(num1) : num1이 양수(return : 1)인지, 음수(return : -1)인지, 0(return : 0)인지 구별한다.
   3. CEIL/CEILing(num1) : num1보다 크거나 같은 최소 정수를 return
   4. FLOOR(num1) : num1보다 작거나 같은 최대 정수를 return
   5. SYSDATE/GETDATE() : 현재 날짜와 시각 출력
   6. EXTRACT('YEAR'|'MONTH'|'DAY' from d) / DATEPART('YEAR'|'MONTH'|'DAY', d) : 날짜 데이터에서 년/월/일 데이터를 출력 (시간/분/초도 가능)
   7. NULLIF(str1, str2) : str1과 str2가 같으면 NULL 출력, 다르면 str1 출력
   ```

   ```sql
   /* CASE 표현 */
   SELECT ENAME,
   CASE WHEN SAL >= 3000 THEN 'HIGH' WHEN SAL >= 1000 THEN 'MID' ELSE 'LOW' END
   AS SALARY_GRADE FROM EMP;
   ```

   ```sql
   /* COALESCE(str1, str2, str3, ... )
   : 인자들을 순서대로 탐색하여 최초의 NULL이 아닌 값을 리턴, 모든 인자가 NULL이라면 NULL을 리턴 */
   SELECT ENAME, NAME, COALESCE(COMM, SAL) FROM EMP;
   ```



#### 7. GROUP BY, HAVING 절

1. 집계함수
   - 여러 행들의 그룹이 모여서 그룹 당 단 하나의 결과를 돌려주는 다중행 함수
   - GROUP BY 절은 행들을 소그룹화 한다.

2. GROUP BY 절

   ```sql
   SELECT [DISTINCT] 칼럼명 [ALIAS명] FROM 테이블명 [WHERE 조건식]
   [GROUP BY 칼럼이나 표현식] [HAVING 그룹조건식];
   
   /* ex) K-리그 선수들의 포지션별 평균 키는 어떻게 되는가? */
   SELECT ROUND(AVG(HEIGHT),2) FROM PLAYER GROUP BY POSITION;
   ```

3. HAVING 절

   - WHERE 절과 비슷한 역할을 수행하며, 그룹을 나타내는 결과 집합의 행에 조건이 적용
   - WHERE 절에는 집계 함수를 사용할 수 없다.

   

   















