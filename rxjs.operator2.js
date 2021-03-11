import { from, interval, of } from 'rxjs';
import { count, single, find, first, tap, filter, skip, skipWhile, take, takeWhile, takeLast, reduce, distinct } from 'rxjs/operators';

const products = [
    {
        id: "1", name: "note", price: 2000, reviews: 10
    },
    {
        id: "2", name: "clothes", price: 3000, reviews: 10
    },
    {
        id: "3", name: "shoes", price: 4000, reviews: 0
    },
    {
        id: "4", name: "notebook", price: 3000, reviews: 0
    },
    {
        id: "4", name: "notebook", price: 3000, reviews: 2
    }
];

/*from(products) // observables 로 바꿈
    .pipe(
        count(v => v.reviews === 0) // reduce보다 더 쉬움, predicate 사용가능, 빈 인자값 전달가능
        // single( v => v.reviews === 2 ) // 딱 하나의 값을 찾지만 전체에서 만족하는 하나를 찾음, 못찾으면 undefined, 여러개 찾으면 에러 리턴
        // find(v => v.price > 3000) // 값이 처음으로 true인 것
        // first(v => v.price > 2000), // predicate가 필수가 아님. 조건을 만족하는 첫번째 값 리턴
        // reduce((a, c) => a + c.price, 0) // a는 누산기, c는 value(object), 0
        // distinct(v => v.id) // 중복 제거
        // skipWhile(v => v.price < 4000), // condition function 의 결과값이 false가 될 때까지 단 한번만 조건 맞으면 그 다음부턴 체크X
        // take(2) // 처음 포함 두개의 값을 가져와라
        // takeLast(2) // 뒤에서 2개
        // takeWhile( v => v.price < 4000 ) // skipWhile 처럼 false가 나올때까지 출력
        // filter( p => p.price > 2500 )
    ).subscribe(console.log)
*/

interval(1000)
    .pipe(
        tap(console.log),
        take(3),
        count() // 인터벌과 같은 메서드에선 사용하기 힘듬, 앞에 complete되는 operator가 있어야함
    ).subscribe(console.log)
        
