const item = "iterable";

const myIterable = {
    // : ()와 동일
    [Symbol.iterator](){
        let i = 0;
        return {
            next(){
                const value = item[i];
                i ++ ;  
                const done = i > item.length;

                return {
                    value,
                    done
                }
            }
        }
    }
}
// next 자동으로 호출
for(const iterator of myIterable)
{
    console.log(iterator)
}

const newArray = ["!", ...item, "!"];
console.log(newArray);

const test = myIterable[Symbol.iterator]();
console.log(test.next())
console.log(test.next())
console.log(test.next())
console.log(test.next())
console.log(test.next())
console.log(test.next())
console.log(test.next())
console.log(test.next())