import { Observable, from } from "rxjs";
import { map, filter, tap, scan, reduce } from 'rxjs/operators';

// rxjs는 함수형 프로그래밍을 이용하여 각각 스트림에서 어떻게 변환하는지 초점을 맞춤

const operator = (observable) => new Observable(observer => {
    observable.subscribe({
        next(value) {
            observer.next(value)
        }
    })
});


// 원천 observable을 받고 새로운 observable을 리턴
const myMap = (mapFn) => (observable) => new Observable(observer => {
    observable.subscribe({
        next(value) {
            observer.next(mapFn(value));
        },
        error(error){
            observer.error(error);
        },
        complete(){
            observer.complete();
        }
    })
});


const myObservable = from([1, 2, 3, 4]);

// const newObservable = myMap(v => v + 1)(myObservable);
// newObservable.subscribe(console.log);

// 마지막 nested 되는 곳에서 observer를 리턴하므로..
myMap(v => v + 1)(
    myMap(v => v + 1)(
        myMap(v => v + 1)(myObservable)
    )
).subscribe(console.log)

// 더 쉽게 쓰는 법 (pipe, 여러 operator 조합하여 함수형 프로그래밍 가능), 순수함수들만 전달가능
from([1, 2, 3, 4]).pipe( // stream을 만들 수 있음
    // myMap(v => v + 1),
    // tap(v => console.log(`tap ${v}`)),
    // filter(v => v % 2 === 0), // true 값은 필터되어 종료
    // tap(v => console.log(`filter ${v}`)),
    // scan((x, y) => x + y, 0), // 앞에서 계산한 값과 뒷값이 계속 중첩되어 실행
    reduce((x, y) => x + y, 0) // 중첩된 값을 한번만 실행 함(complete 되는 순간에 전체 데이터를 한번에 계산)
).subscribe(console.log)