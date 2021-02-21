// 각각의 고차함수에 순수함수 전달

function greaterThen(n){
    // 클로저 구성
    return function(m){
        return m > n;
    }
}

const greaterThen10 = greaterThen(10);
const result = greaterThen10(9);
console.log(result);

function forEach(array, action){
    for(var i = 0; i < array.length; i++) action(array[i]);
}
forEach(["high", "higher", "order"], console.log);

const array = [0, 1, 2, 3, 4, 5];
const newArray = array.map(v=>v*2)
const filteredArray = array.filter(v => v % 2 === 0);
const sum = array.reduce((prev, curr) => {
    console.log(`in sum : ${prev} ${curr}`);
    return prev + curr;
}, 0);
console.log(newArray);
console.log(filteredArray);
console.log(sum);