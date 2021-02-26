# RxJS
- Reactive Extensions
- Using Observables, Reactive Programming
- ReactiveX는 옵저버 패턴, 이터레이터 패턴 그리고 함수형 프로그래밍의 조합이다.
- 비동기(asynchronous)와 연속적인 데이터(Stream)를 처리하는 이벤트 기반(event-based)의 프로그램을 작성하게 도와주는 라이브러리

# Reactive Programming
- 프로그래밍 패러다임
- 비동기 데이터 스트림을 가지고 하는 프로그래밍
- 비동기
- 데이터
- 스트림
- 주로 Observables와 함께 함 

# 함수형 프로그래밍
- 순수 함수(pure function)를 조합하고, 공유 상태(shared state), 변경 가능한 데이터(mutable data) 및 부수효과(side-effects)을 피하여 소프트웨어를 만드는 프로세스
- 순수 함수를 인자로 받는 함수를 고차 함수라고 한다.
- 주요 개념
    - 선언적 프로그래밍(Declarative Programming)
    - 순수 함수(Pure function)
    - 참조투명성(Referential transparency)
    - 불변성(Immutablility)

# 함수형 vs 객체지향
- 객체지향은 객체와 객체간의 관계 초점을 두었으면 함수형은 함수가 수행하는 작업 그 행위에 초점을 둠
||함수형||객체지향|
|조합의 단위||함수||객체 (클래스)|
|프로그래밍 스타일||선언적(Declarative)||명령적(Imperative)|
|컨트롤 플로우||함수의 조합||루프와 컨디션 문장|
|상태 관리||불변으로 처리||메소드를 통한 상태 변경|
|쓰레드 안정성||병렬처리 프로그래밍에 용이||병렬처리에 어려움이 있음|
- 비즈니스 도메인 관련된 것은 객체지향이 유용함
- 적절히 조합하여 사용하는 것이 좋음

# 파이프라인
- 파이프라인이란 한 함수의 출력이 다음 함수의 입력이 되게끔 느슨하게 배열한, 방향성 함수 순차열임
- 파이프라인이 가능하려면 타입과 향수가 호환이 되어야함, 앞의 함수 리턴 타입과 연결할 함수의 인자 형식이 일치 해야하고 연결할 함수의 인자의 갯수(향수)가 맞아야한다.

# 커링
- 다변수 함수가 인수를 전부 받을 때 까지 실행을 보류, 지연시켜 단계별로 나뉜 단항 함수의 순차열로 전환하는 기법

# iterable 
- 문자열이나 배열과 같이 무언가를 담고있는 것의 행위에 대한 규약
- 문자열과 배열은 iterable이다.
- iterable은 for ... of 와 ... spread 연산자 사용이 가능하다.
- Symbol.iterator 라는 메서드를 가짐
- iterator Object를 반환한다.
- for of와 ...spread 연산자는 next 메소드를 호출한다.

# 비동기
- 보통 I/O, 시간과 관련된 일, 서버 요청 일
- 자세한 내용은 promise.js 참조

webpack이 아닌 parcel-bundler로 환경세팅해놓았음

# Observable
- iterable은 대체로 Pull 기반으로 뽑아낸다하면 Observable은 푸시기반으로 여러값을 전달하는 컬렉션이다.
- 어떤 객체의 상태가 변할 때 그와 연관된 객체 들에게 알림을 보내는 디자인 패턴

