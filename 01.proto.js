// 예제 - 고차함수를 받는 프로토타입 메서드 구현 (map)
function myMap(action){
    const array = [...this]; // deep copy

    for(var i = 0; i < array.length; i++) 
    {
        array[i] = action(array[i]);
    }

    return array;
}

Array.prototype.myMap = myMap;
const array = ["high", "higher", "order"];
const newArray = array.myMap(v=>`my ${v}`);
console.log(newArray, array);