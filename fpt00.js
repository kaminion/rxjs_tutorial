/* 함수형 프로그래밍
자바스크립트에서 함수는 일급 객체이다(first class Object)
리터럴로 생성되고 변수나 데이터 구조에 할당 될 수 있음
함수의 인자로 전달 할 수 있다.
반환값으로 사용할 수 있다.
런타임에 생성 될 수 있다.
*/

const array = [0, 1, 2, 3, 4, 5];
// for(let index = 0; index < array.length; index++){
//     const item = array[index];
//     array[index] = item + 1;
// }

// 선언적 프로그래밍 방법 - 행위가 중요, 선언과 행위를 분리
// 제어의 흐름과 상태변화보다는 표현에 중점
const newArray = array.map(v => v + 1); 
console.log(newArray, array);

// 전역 객체나 외부 객체를 변화하지 않고 파라미터를 계산하여 동일한 결과값을 반환하는 것을 순수함수라고 함
// 외부 그 어디에도 접근 하지 않음
let counter = 0;

function add(a, b){
    // counter ++;
    return a + b;
}

console.log(add(1, 2));
console.log(add(1, 2));
console.log(add(1, 2));
