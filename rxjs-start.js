import { Observable, create, range, of, interval, timer, from, fromEvent } from 'rxjs';
import axios from 'axios';

console.log(Observable); // 데이터를 계속 비동기적으로 일련의 스트림을 생성시켜주는 역할을 함

// subscriber를 통해 여러개의 데이터를 
// promise 는 생성과 동시에 실행됨
const promise1 = new Promise((resolve, reject)=>{
    resolve('promise 1');
}).then(console.log)

// 일련의 데이터를 제공하고 subscribe 메서드에서 제공되는 옵저버에서 데이터를 읽을 수 있다. 실행시키려면 subscribe를 해야 실행이 된다. (실제 observer가 됨)
const intervalObsvr = new Observable(observer=>{ // create 메서드를 통해 만들수도있으며, 일반 함수로 만들수도 있다
    console.log('start subscriber...');
    let i = 0;

    setInterval(()=>{
        observer.next(i++);
        //observer.error(new Error("got error"))
        observer.complete();
    }, 1000);

});

// object가 아닌 함수로 인자를 건네줄수있음, 1번째 next, 2번째는 error 3번째가 complete
// intervalObsvr.subscribe({
//     next(value){
//         console.log("2", value)
//     },
//     complete(){
//         console.log("complete")
//     },
//     error(error){

//     }
// })

// 시작과 끝을 정해서 연속적인 수를 생성하는 Observable 생성가능
// range(0, 4).subscribe(console.log);

// 인자를 전달하면 하나하나 만들어줌
// of(...[1, 2, 3], 4, 5, 6).subscribe(console.log);

// 1초마다 값을 만들어 전달
// interval(1000).subscribe(console.log);

// timeout, timeinterval
// timer(1000, 500).subscribe(console.log)

// 배열 요소 next로 전달 observer에게
// from([4, 3, 2, 1]).subscribe(console.log, ()=>{}, ()=>{console.log('complete')}) // 1 next, 2 error, 3 complete

// from(new Map([
//     [{key: 1}, {name: "xxx01"}],
//     [{key: 2}, {name: "xxx02"}]
// ])).subscribe(console.log);

// promise를 observable로 변경하여 처리 가능, 특히 ajax
//from(promise1).subscribe(console.log);

// promise 기반 
// from(axios.get('/data/products.json'))
//     .subscribe(console.log);

// element event 기반
fromEvent(document.getElementById("click-me"), "click")
    .subscribe((data)=>console.log(data.target))