import { Observable } from 'rxjs';
console.log(Observable); // 데이터를 계속 비동기적으로 일련의 스트림을 생성시켜주는 역할을 함

// subscriber를 통해 여러개의 데이터를 
// promise 는 생성과 동시에 실행됨
new Promise((resolve, reject)=>{
    resolve('promise 1');
}).then(console.log)

// 일련의 데이터를 제공하고 subscribe 메서드에서 제공되는 옵저버에서 데이터를 읽을 수 있다. 실행시키려면 subscribe를 해야 실행이 된다. (실제 observer가 됨)
const intervalObsvr = new Observable(observer=>{ // create 메서드를 통해 만들수도있다
    console.log('start subscriber...');
    let i = 0;

    setInterval(()=>{
        observer.next(i++);
        //observer.error(new Error("got error"))
        observer.complete();
    }, 1000);

});

// object가 아닌 함수로 인자를 건네줄수있음, 1번째 next, 3번째가 complete
intervalObsvr.subscribe({
    next(value){
        console.log("2", value)
    },
    complete(){
        console.log("complete")
    },
    error(error){

    }
})