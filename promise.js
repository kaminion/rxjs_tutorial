function asyncFunc(param){
    return new Promise((resolve, reject)=>{
        // 비동기
        setTimeout(()=>{
            if(param) resolve({data : 'resolved'});
            else reject(new Error("rejected!"));
        }, 1000); 
    });
}

console.log('Try....');
// Promise 객체가 반환 됨 then 이용가능
asyncFunc(true)
    .then(v => {
        console.log(v.data)
        // return v.data.length;
        return asyncFunc(v.data.length > 14); // 또 Promise 호출 가능
    }) // then은 또 promise 리턴하므로 메서드 체이닝시 then 사용
    .then(({data})=> console.log(data))
    .catch(err => {
        console.log(err.message)
    })
    // .then(length => console.log(length));

// 배열로 여러개의 Promise 전달가능, 모두 resolve 됐을때만 then
Promise.all([
    asyncFunc(true),
    asyncFunc(true),
    asyncFunc(true)
]).then( v => {
    console.log(v); // 순서가 맞는 배열로 리턴됨
})
console.log('End....');