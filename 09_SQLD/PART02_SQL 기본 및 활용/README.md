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

   

#### 8. ORDER BY 절

1. ORDER BY 정렬

   - SQL 문장으로 조회된 데이터들을 목적에 맞게 특정 칼럼을 기준으로 정렬하여 출력

2. SELECT 문장의 실행 순서

   > 5. SELECT 칼럼명 [ALIAS명]
   >
   > 1. FROM 테이블명
   >
   > 2. WHERE 조건식
   >
   > 3. GROUP BY 칼럼이나 표현식
   > 4. HAVING 그룹조건식
   >
   > 6. ORDER BY 칼럼이나 표현식;

3. TOP N 쿼리
   1. ROWNUM
      - Oracle에서 순위가 높은 N개의 로우를 추출하기 위해 ORDER BY 절과 WHERE 절의 ROWNUM 조건을 같이 사용하는 경우, 이 두 조건으로는 원하는 결과를 얻을 수 없다.
   2. TOP()
      - SQL Server는 TOP 조건을 사용하게 되면 별도 처리 없이 관련 ORDER BY 절의 데이터 정렬 후 원하는 일부 데이터만 쉽게 출력



#### 9. 조인(JOIN)

1. JOIN - 두 개 이상의 테이블들을 연결 / 결합하여 데이터를 출력

   - JOIN은 관계형 데이터베이스의 가장 큰 장점이면서 대표적인 핵심 기능
   - 일반적인 경우, 행들은 PK나 FK 값의 연관에 의해 JOIN이 성립된다.
   - 어떤 경우에는 PK, FK 관계가 없어도 논리적인 값들의 연관만으로 JOIN 성립이 가능

   - 하나의 SQL 문장에서 여러 테이블을 조인해서 사용할 수도 있다.
   - FROM 절에 여러 테이블이 나열되더라도 SQL에서 데이터를 처리할 때는 두 개의 집합 간에만 JOIN이 일어난다.
   - FROM 절에 A, B, C 3개의 테이블이 나열되었더라도 특정 2개의 테이블만 먼저 조인되고, 그 조인된 새로운 결과 집합과 남은 한 개의 테이블이 다음 차례로 조인

2. EQUI JOIN (등가 조인)

   - 두 테이블의 칼럼 값이 정확하게 일치하는 경우, 대부분 PK ↔ FK 관계 기반
   - JOIN 조건은 WHERE 절에 기술한다.

   ```sql
   SELECT table1.칼럼명, table2.칼럼명
   FROM table1, table2
   WHERE table1.칼럼명1 = table2.칼럼명2
   
   SELECT PLAYER.NAME, TEAM.TEAMNAME
   FROM PLAYER, TEAM
   WHERE PLAYER.TEAM_ID = TEAM.TEAM_ID;
   
   SELECT PLAYER.NAME, TEAM.TEAMNAME
   FROM PLAYER INNER JOIN TEAM ON PLAYER.TEAM_ID = TEAM.TEAM_ID;
   ```

- 조인 시 주의사항

  : 조건 절에 테이블에 대한 ALIAS명을 적용하였을 경우, WHERE 절과 SELECT 절에는 테이블 명이 아닌 ALIAS를 사용

3. Non EQUI JOIN (비등가 조인)

   - **두 테이블의 칼럼 값이 일치하지 않는 경우**
   - Non EQUI JOIN의 경우에는 "=" 연산자가 아닌 다른 연산자들(Between, >, < 등)을 사용하여 JOIN 수행

   ```sql
   SELECT table1.칼럼명, table2.칼럼명
   FROM table1, table2
   WHERE table1.칼럼명1 BETWEEN table2.칼럼명1 AND table2.칼럼명2;
   
   SELECT P.PLAYER_NAME, P.POSITION, T.REGION_NAME, T.TEAM_NAME, S.STADIUM_NAME
   FROM PLAYER P, TEAM T, STADIUM S
   WHERE P.TEAM_ID = T.TEAM_ID AND T.STADIUM_ID = S.STADIUM_ID
   ORDER BY 선수명
   ```

---



## 제 2장 SQL 활용

#### 1. 표준 조인

1. STANDAR SQL 개요

   1. 표준 SQL의 기능
      - STANDARD JOIN 기능 추가 (CROSS, OUTER JOIN 등 새로운 FROM 절 JOIN 기능들)

   2. 일반 집합 연산자 -> 현재 SQL
      - UNION 연산 -> UNION 기능 : 합집합
      - INTERSECTION 연산 -> INTERSECT 기능 : 교집합
      - DIFERENCE 연산 -> EXCEPT 기능 : 차집합
      - PRODUCT 연산 -> CROSS JOIN 기능 : 곱집합(생길 수 있는 모든 데이터 조합)
   3. 순수 관계 연산자 -> 현재 SQL
      - SELECT 연산 -> WHERE 절 : 조건에 맞는 행 조회
      - PROJECT 연산 -> SELECT 절 : 조건에 맞는 칼럼 조회
      - JOIN 연산 -> 다양한 JOIN 기능 : 여러 조인 존재
      - DIVIDE 연산은 현재 사용되지 않는다.

2. FROM 절의 JOIN 형태

   - ANSI/ISO SQL에서 표시하는 FROM 절의 JOIN 형태 : INNER JOIN / NATURAL JOIN / USING 조건절 / ON 조건절 / CROSS JOIN / OUTER JOIN
   - 기존 WHERE 절 그대로 사용 가능
   - FROM 절에서 JOIN 조건을 명시적으로 정의 가능

3. INNER JOIN - 내부 JOIN

   - JOIN 조건에서 동일한 값이 있는 행만 반환
   - DEFAULT 옵션이므로 생략이 가능하지만, CROSS JOIN / OUTER JOIN 과는 같이 사용 X
   - USING 조건절이나 ON 조건절을 필수적으로 사용
   - 중복 테이블의 경우 별개의 칼럼으로 표시

4. NATURAL JOIN

   - 두 테이블간 동일한 이름을 갖는 모든 칼럼에 대해 EQUI JOIN을 수행
   - USING, ON, WHERE에서 JOIN을 정의할 수 없다.
   - JOIN에 사용된 컬럼은 같은 데이터 타입이어야 함
   - ALIAS나 접두사 붙일 수 없다.

5. USING 조건절

   - FROM 절에 USING 조건절을 이용해서 같은 이름을 가진 칼럼들 중에서 원하는 칼럼에 대해서만 선택적으로 EQUI JOIN을 할 수 있다.
   - SQL Server에서는 지원하지 않는다.
   - JOIN 칼럼에 대해서는 ALIAS나 테이블 이름과 같은 접두사를 붙일 수 없다.
   - JOIN에 사용되는 칼럼은 1개만 표시한다.

6. ON 조건절

   - 칼럼명이 달라도 JOIN 사용 가능
   - WHERE 검색 조건은 충돌 없이 사용할 수 있다.
   - ON 조건절에서 사용된 괄호는 옵션사항이다.
   - **ALIAS 및 테이블명과 같은 접두사를 반드시 사용**

7. CROSS JOIN (= CARTESIAN PRODUCT, CROSS PRODUCT)

   - JOIN 조건이 없는 경우 생길 수 있는 모든 데이터의 조합
   - JOIN 할 때 적절한 JOIN 조건 칼럼이 없는 경우 사용
   - 생길 수 있는 모든 데이터 조합을 출력
   - 결과는 양쪽 집합의 M*N 건의 데이터 조합 발생

8. OUTER JOIN

   - JOIN 조건에서 동일한 값이 없는 행(NULL)도 출력
   - USING 조건절이나 ON 조건절을 필수로 사용
   - IN / ON 연산자 사용 시 에러
   - 표시가 누락된 칼럼이 있을 경우, OUTER JOIN 오류 발생



#### 2. 집합 연산자

1. 집합 연산자

   - 두 개 이상의 테이블에서 JOIN을 사용하지 않고, 연관된 데이터를 조회하는 방법
   - 집합 연산자는 2개 이상의 질의 결과를 하나의 결과로 만든다.
   - SELECT 절의 컬럼 수가 동일해야 하고, 동일 위치 데이터 타입이 상호 호환 가능해야 함

2. 집합 연산자 종류

   | 집합 연산자 | 연산자의 의미                                                |
   | ----------- | ------------------------------------------------------------ |
   | UNION       | 여러 개의 SQL 문의 결과에 대한 합집합으로 결과에서 모든 중복된 행은 하나의 행으로 만든다. |
   | UNION ALL   | 여러 개의 SQL 문의 결과에 대한 합집합으로, 중복된 행도 그대로 결과로 표시된다. 즉, 단순히 결과만 합쳐놓은 것이다. 일반적으로 여러 질의 결과가 상호 배타적일 때 많이 사용한다. 개별 SQL문의 결과가 서로 중복되지 않는 경우, UNION과 결과가 동일하다. (결과의 정렬 순서에는 차이가 있을 수 있음) |
   | INTERSECT   | 여러 개의 SQL문의 결과에 대한 교집합이다. 중복된 행은 하나의 행으로 만든다. |
   | EXCEPT      | 앞의 SQL 문의 결과에서 뒤의 SQL 문의 결과에 대한 차집합니다. 중복된 행은 하나의 행으로 만든다. (= MINUS) |



#### 3. 계층형 질의와 셀프 조인

1. 계층형 질의

   - 계층형 데이터 : 동일 테이블에 계층적으로 상/하위 데이터가 포함된 데이터
   - 테이블에 계층형 데이터가 존재하는 경우 데이터를 조회하기 위해 사용
   - 엔터티를 순환관계 데이터 모델로 설계할 경우 계층형 데이터 발생 (조직, 사원, 메뉴 등)

   1. Oracle 계층형 질의

      ```sql
      SELECT ...
      FROM table
      WHERE condition AND condition ...
      START WITH condition
      CONNECT BY [NOCYCLE] condition AND condition ...
      [ORDER SIBLINGS BY column, column, ...]
      ```

      - START WITH 절 : 레벨의 시작
      - CONNECT BY 절 : 그 다음에 자식 레벨 지정 (이때 CONNECT BY 절의 조건 만족해야 함)
      - PRIOR : CONNECT BY 절에 사용되며, 현재 읽은 칼럼을 지정
      - PRIOR 자식 = 부모 : [부모 -> 자식] 으로 순방향 전개, 리프 = 1
      - PRIOR 부모 = 자식 : [자식 -> 부모] 로 역방향 전개, 루트 = 1
      - ORDER SIBLINGS BY : 형제 NODE 위치를 바꿈
      - NOCYCLE : 이미 나타난 동일한 데이터가 전개 중에 다시 나타나면 이것을 CYCLE 형성이라고 한다. 사이클 발생한 데이터는 런타임 오류 발생 -> NOCYCLE 추가 -> CYCLE 발생 이후 데이터는 전개 X

   2. SQL Server 계층형 질의

      - CTE(Common Table Expression)로 재귀 호출하여 상위부터 하위 방향으로 전개

      ```sql
      WITH 테이블명_ANCHOR AS
      ( SELECT 하위칼럼명, 칼럼명, 상위칼럼명, 0 AS LEVEL
       FROM 테이블명
       WHERE 상위칼럼명 IS NULL
       UNION ALL
       SELECT R.칼럼명, R.칼럼명, R.계층칼럼명, A.LEVEL + 1
       FROM 테이블명_ANCHOR A, 테이블명 R
       WHERE A.하위칼럼 = R.상위칼럼 )
      ```

   3. 셀프 조인

      - 동일 테이블 사이의 조인. 반드시 ALIAS를 사용해야 한다.

      ```sql
      SELECT ALIAS명1.칼럼명1, ALIAS명2.칼럼명1, ...
      FROM 테이블명 ALIAS명1, 테이블명 ALIAS명2
      WHERE ALIAS명1.칼럼명2 = ALIAS명2.칼럼명1
      ```



#### 4. 서브쿼리

1. 서브쿼리
   - 하나의 SQL문 안의 SQL문
   - 단일행 또는 복수행 비교 연산자와 함께 사용 가능
   - 서브쿼리에선 ORDER BY 사용 불가 (메인쿼리의 마지막 부분에만 위치 가능)
   - 서브쿼리는 메인쿼리의 테이블의 칼럼 사용 가능 (메인쿼리에선 서브쿼리의 칼럼 사용 불가)

- SQL 문 안에서 서브쿼리가 사용 가능한 지점
  - SELECT, FROM, WHERE, HAVING, ORDER BY 절
  - INSERT 문의 VALUES 절
  - UPDATE 문의 SET 절
  - DELETE문 사용 불가

2. 동작방식에 따른 분류

   | 서브쿼리 종류          | 설명                                                         |
   | ---------------------- | ------------------------------------------------------------ |
   | Un-Correlated 서브쿼리 | 서브쿼리가 메인쿼리 칼럼을 가지고 있지 않는 형태의 서브쿼리이다. 메인쿼리에 값(서브쿼리가 실행된 결과)을 제공하기 위한 목적으로 주로 사용한다. |
   | Correlated 서브쿼리    | 서브쿼리가 메인쿼리 칼럼을 가지고 있는 형태의 서브쿼리이다. 일반적으로 메인쿼리가 먼저 수행되어 읽혀진 데이터를 서브쿼리에서 조건이 맞는지 확인하고자 할 때 주로 사용한다. |

3. 반환되는 데이터 형태에 따른 분류

   | 서브쿼리 종류         | 설명                                                         |
   | --------------------- | ------------------------------------------------------------ |
   | Single Row 서브쿼리   | 서브쿼리의 실행 결과가 항상 1건 이하인 서브쿼리를 의미한다. 단일 행 서브쿼리는 단일 행 비교 연산자와 함께 사용된다. 단일 행 비교 연산자에는 =, >, < 등이 있다. |
   | Multi Row 서브쿼리    | 서브쿼리의 실행 결과가 여러 건인 서브쿼리를 의미한다. 다중 행 서브쿼리는 다중 행 비교 연산자와 함께 사용된다. 다중 행 비교 연산자에는 IN, ALL, ANY, SOME, EXISTS(EXIST는 결과를 만족하는 값이 존재하는지 여부를 반환)가 있다. |
   | Multi Column 서브쿼리 | 서브쿼리의 실행 결과로 여러 칼럼을 반환한다. 메인쿼리의 조건절에 여러 칼럼을 동시에 비교할 수 있다. 서브쿼리와 메인쿼리에서 비교하고자 하는 칼럼 개수와 칼럼의 위치가 동일해야 한다. |



#### 5. 그룹함수

1. 데이터분석 개요
   - ANSI/ISO SQL 표준은 데이터 분석을 위해서 다음 세 가지 함수를 정의
   - 집계, 그룹, 윈도우 함수
2. ROLLUP 함수
   - ROLLUP에 지정된 Grouping Columns의 List는 Subtotal을 생성하기 위해 사용한다.
   - Grouping Columns의 수를 N이라고 했을 때 N+1 level의 Subtotal이 생성
   - GROUP BY로 묶인 칼럼의 소계 계산, 계층 구조
   - GROUP BY 칼럼 순서가 바뀌면 결과 값 바뀜
   - GROUP BY의 확장된 형태
3. CUBE 함수
   - 결합 가능한 모든 값에 대한 다차원 집계
   - GROUP BY CUBE(A) : 전체 합계, 칼럼 A 소계
   - GROUP BY CUBE(A, B) : 전체 합계, 칼럼 A소계, 칼럼 B소계, 칼럼 (A, B) 조합 소계
4. GROUPING SETS 함수
   - 특정 항목에 대한 소계 계산, GROUP BY 칼럼 순서와 무관하게 개별적으로 처리
   - 내가 보고싶은 것만 소계를 생성



#### 6. 윈도우 함수

1. 윈도우 함수
   - 여러 행 간의 관계 정의 함수, 중첩 불가
2. 윈도우 함수의 종류
   1. 순위 함수
      - RANK : 중복 순위 포함
      - DENSE_RANK : 중복 순위 무시 (중간 순위를 비우지 않음)
      - ROW_NUMBER : 단순히 행 번호 표시, 값에 무관하게 고유한 순위 부여
   2. 윈도우 일반 집계 함수
      - SUM, MAX, MIN, AVG 등
   3. 행 순서 함수
      - FIRST_VALUE / LAST_VALUE 함수 : 첫 값 / 끝 값
      - LAG / LEAD : 이전 값 / 이후 값
   4. 비율 함수
      - RATIO_TO_REPORT : 전체 SUM(칼럼)값에 대한 행별 칼럼 값의 백분율을 소수점 반환
      - PERCENT_RANK : 제일 먼저 나오는 것 0, 제일 늦게 나오는 것 1, 행의 순서별 백분율
      - CUME_DIST : 전체 건 수에서 현재 행보다 작거나 같은 건 수에 대한 누적 백분율
      - NTILE : 전체 건수를 ARGUMENT 값으로 N 등분한 결과



#### 7. DCL

1. DCL
   - 유저를 생성하거나 권한을 제어하는 명령어, 보안을 위해 필요
   - GRANT : 권한 부여 (SQL -> GRANT 권한 ON 오브젝트 TO 유저명;)
   - REVOKE : 권한 제거 (SQL -> REVOKE 권한 ON 오브젝트 TO 유저명;)
2. 권한
   - SELECT, INSERT, UPDATE, DELETE, ALTER, ALL : DML 관련 권한
   - REFERENCES : 지정된 테이블을 참조하는 제약조건을 생성하는 권한
   - INDEX : 지정된 테이블에서 인덱스를 생성하는 권한

3. ROLE을 이용한 권한 부여

   - 많은 데이터베이스에서 유저들과 권한들 사이에서 중개 역할을 하는 ROLE을 제공
   - 권한의 집합, 권한을 일일이 부여하지 않고 ROLE로 편리하게 여러 권한을 부여
   - 시스템 권한, 오브젝트 권한 모두 부여 가능
   - ROLE은 유저에게 직접 부여하거나 다른 ROLE에 포함되어 유저에게 부여될 수 있다.

4. Oracle에서 제공하는 ROLE 종류

   - CONNECT : CREATE SESSION과 같은 로그인 권한
   - RESOURCE : CREATE TABLE과 같은 오브젝트(= 리소스) 생성 권한

5. 유저 삭제 명령어와 권한

   - CASCADE 옵션은 해당 유저가 생성한 오브젝트를 먼저 삭제 후 유저를 삭제한다.

6. SQL Server에서 데이터베이스 수준 역할명

   | 서버 수준 역할명 | 설명                                                         |
   | ---------------- | ------------------------------------------------------------ |
   | public           | 모든 SQL Server 로그인은 PUBLIC 서버 역할에 속한다. 서버 보안 주체에게 보안 객체에 대한 특정 사용 권한이 부여되지 않았거나 거부된 경우 사용자는 해당 개체에 대해 PUBLIC으로 부여된 사용 권한을 상속 받는다. 모든 사용자가 개체를 사용할 수 있도록 하려는 경우에만 개체에 PUBLIC 권한을 할당해야 한다. |
   | bulkadmin        | BULK INSERT문을 수행할 수 있다.                              |
   | dbcreator        | 데이터베이스를 생성, 변경, 삭제 및 복원할 수 있다.           |
   | diskadmin        | 디스크 파일을 관리하는데 사용된다.                           |
   | processadmin     | SQL Server의 인스턴스에서 실행중인 프로세스를 종료할 수 있다. |
   | securityadmin    | 로그인 및 해당 속성을 관리한다. 서버 및 데이터베이스 수준의 사용 권한을 부여, 거부, 취소할 수 있다. 또한, 로그인의 암호를 다시 설정할 수 있다. |
   | serveradmin      | 서버 차원의 구성 옵션을 변경하고 서버를 종료할 수 있다.      |
   | setupadmin       | 연결된 서버를 추가하거나 제거할 수 있다.                     |
   | sysadmin         | 서버에서 모든 작업을 수행할 수 있다.                         |



#### 8. 절차형 SQL

1. 절차형 SQL

   - 일반적인 개발 언어처럼 절차 지향적인 프로그램을 작성할 수 있도록 DBMS 벤더별로 절차별 SQL 제공
   - SQL문의 연속적인 실행이나 조건에 따른 분기처리를 이용하여 특정 기능을 수행하는 저장 모듈을 생성

2. PL/SQL (Oracle)

   - Oracle의 PL/SQL은 Block 구조로 되어있고 Block 내에는 DML 문장과 QUERY 문장, 그리고 절차형 언어(IF, LOOP) 등을 사용할 수 있음
   - 절차적 프로그래밍을 가능하게 하는 트랜잭션 언어

   ```sql
   CREATE OR REPLACE Procedure 프로시저명 (argument1 mode data_type1, ...) IS AS ...
   BEGIN ...
   EXCEPTION ...
   END;
   ```

3. T-SQL (SQL Server)

   - T-SQL은 근본적으로 SQL Server를 제어하기 위한 언어
   - MS 사에서 ANSI/ISO 표준의 SQL에 약간의 기능을 더 추가해 보완

   - 변수 선언 기능 : @@ - 전역 변수, @ - 지역변수

   ```sql
   CREATE Procedure 스키마명.프로시저명 @parameter1 data_type1 mode, ...
   WITH AS ...
   BEGIN ...
   ERROR 처리 ...
   END;
   ```

4. 프로시저(Procedure)
   - 주로 DML을 사용해 주기적으로 진행해야 되는 작업을 저장
   - 별도의 호출을 통해 실행
   - CREATE OR REPLACE PROCEDURE 문으로 프로시저를 생성
5. 사용자 정의 함수(User Defined Function)
   - 절차형 SQL을 로직과 함께 DB 내에 저장해 놓은 명령문 집합
   - RETURN을 통해 반드시 하나의 값 반환 (프로시저는 DB에 저장)
6. 트리거 (Trigger)
   - DML 문이 수행되었을 때 자동으로 동작하는 프로그램(프로시저는 EXCUTE로 실행)
   - DCL과 TCL 사용불가(프로시저는 사용 가능)
   - 데이터의 무결성과 일관성을 위해서 사용
   - Trigger는 데이터베이스 보안의 적용, 유효하지 않은 트랜잭션의 예방, 업무 규칙 자동 적용 등에 사용

7. 프로시저와 트리거의 차이
   - 프로시저는 BEGIN ~ END절 내에 COMMIT, ROLLBACK 과 같은 트랜잭션 종료 명령어 사용
   - 데이터베이스 트리거는 BEGIN ~ END 절 내에 사용할 수 없다.

---







> ## 제 3장 SQL 최적화 기본 원리
>
> #### 1. 옵티마이저와 실행계획
>
> 1. 옵티마이저
>    - SQL 문에 대한 최적의 실행방법을 결정하여 실행 계획 도출
>    - 최적의 실행방법, 실행계획을 짠다.
>
> - SQL문 실행 순서
>   1. 파싱(Parsing) : SQL 문법 검사 및 구문 분석 작업
>   2. 실행(Execution) : 옵티마이저의 실행 계획 진행
>   3. 인출(Fetch) : 데이터를 읽어서 전송
>
> 2. 규칙기반 옵티마이저 - 규칙(우선순위)를 가지고 실행계획 생성
>
>    - 인덱스를 이용한 액세스 방식이 전체 테이블 액세스 방식보다 우선 순위가 높다.
>
>      : 이용 가능한 인덱스가 존재하면 전체 테이블 액세스 방식보다 항상 인덱스를 사용하는 실행계획을 생성
>
>    - 조인 칼럼에 대한 인덱스가 양쪽에 존재 : 우선순위가 높은 테이블이 선행된다.
>    - 한쪽에만 인덱스 존재 : 인덱스가 없는 테이블이 선행된다. (NL join 사용)
>    - 모두 인덱스 존재 X : FROM 절의 뒤에 나열된 테이블이 선행 (Sort Merge Join 사용)
>    - 우선순위가 동일 : FROM 절에 나열된 테이블의 역순으로 선행 테이블 선택
>
> 3. 비용기반 옵티마이저 - SQL 문을 처리하는데 필요한 비용이 가장 적은 실행계획을 선택
>
>    1. 특징 : 처리 비용이 가장 적은 실행계획을 선택, 데이터 딕셔너리의 통계정보나 DBMS의 차이로 같은 쿼리도 다른 실행계획이 생성될 수 있다, 실행계획의 예측 및 제어가 어려움
>    2. 옵티마이저 엔진
>       - 질의 변환기(Query Transformer) : 작성된 SQL 문을 처리하기 용이한 형태로 변환하는 모듈
>       - 비용 예측기(Estimator) : 생성된 계획의 비용을 예측하는 모듈
>       - 대안 계획 생성기(Plan Generator) : 동일한 결과를 생성하는 다양한 대안 계획 생성 모듈
>
> 4. 옵티마이저 실행계획
>
>    1. SQL에서 요구한 사항을 처리하기 위한 절차와 방법
>    2. 다양한 실행계획마다 성능은 서로 다를 수 있다.

#### 



























