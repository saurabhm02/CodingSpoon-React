// const fs = require('fs');

// fs.readFile('./data.js', {encoding: 'utf-8'}, (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

// const promise = new Promise((res, rej)=> {
//     res("Hi data is here");
// });

// console.log(promise);
// promise.then((data) =>{
//     console.log(data);
// }).catch((err) =>{
//     console.log(err);
// }).finally(() =>{
//     console.log("I am finally");
// })


const getData = async(a, b) =>{
    let data = await a+b;
    return data
}

//  to resolve the fun form await promise
getData(3, 5).then((data) => {
    console.log(data);
});
