// task 1

/* for(let i = 1; i<=20; i++){
    
    setTimeout((() => console.log(i)), i * 100)
} */



// task 3 
/*
console.log('start');

const promise = new Promise((resolve, reject) => {
    console.log(1)
})

console.log('end');
*/

// виводить 
// start
// 1
// end


// task 4 
/*
console.log('start');
const promise1 = new Promise((resolve, reject) => {
    console.log(1)
    resolve(2)
})
promise1.then(res => {
    console.log(res)
})
console.log('end');
*/

// виводить 
// start
// 1
// end
// 2