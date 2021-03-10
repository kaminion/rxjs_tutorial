import { Observable, from } from "rxjs";


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

const newObservable = myMap(v => v + 1)(myObservable);
newObservable.subscribe(console.log);