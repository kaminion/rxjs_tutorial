import { from, fromEvent } from 'rxjs';
import {ajax} from 'rxjs/ajax';
import { flatMap, map, mergeMap, pluck } from 'rxjs/operators';

const products = [
    { id: "1", name: "note", price: 2000, reviews: 10},
    { id: "2", name: "clothes", price: 3000, reviews: 10},
    { id: "3", name: "shoes", price: 4000, reviews: 0}
];


// 1대1일 혹은 1대다로 변환시켜주는 operator
// from(products)
//     .pipe(
//         // 맵의 확장판
//         pluck("price"),// 특정한 속성 빼올수있게함
//         map(v => `${v}원`),
//     )
// .subscribe(console.log)

fromEvent(document.getElementById('click-me'), 'click')
    .pipe(
        // event -> event.target -> event.target.innerText (nested 된 object 안 속성 접근 가능)
        pluck("target", "innerText"),
        mergeMap(v => {
            // promise와는 다르게 rxjs의 ajax는 subscribe를 해야만 요청이 감
            return ajax.getJSON("/data/products.json"); // observerble 전달
        }) // flatmap은 observable 결과를 다음맵에 전달하고싶으면 사용함
    )
.subscribe(console.log);

// [[1, 2, 3], [4, 5]]