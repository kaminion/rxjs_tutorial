import _ from 'lodash';

// 커링, 재사용성을 높일 수 있다.
const add = (a, b, c) => a + b + c;
let curriedAdd = a => b => c => a + b + c;
curriedAdd = _.curry(add); // currsing 해줌

const addResult = add(1, 2, 3);
const currResult = curriedAdd(1)(2)(3);
console.log(addResult, currResult);

const addVAT = (rate, amount) => amount * (1 + rate / 100);
const addVATCurried = _.curry(addVAT);
const addNationVAT = addVATCurried(5);
const addStateVAT = addVATCurried(10);

console.log(addNationVAT(1000));
console.log(addStateVAT(2000));