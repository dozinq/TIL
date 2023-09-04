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

      