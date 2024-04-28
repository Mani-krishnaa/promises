

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//   resolve(`Promise Resolved`)
//   }, 1000)
// })


// promise.then(console.log);


// let promise1 = new Promise((resolve, reject) => {
//     reject(`Rejected Promises of promise 1`)
// })

// promise1.catch(console.log);


// let promise2 = new Promise((resolve, reject) => {
//     reject(`Rejected Promises promise2 `)
// })

// promise2.catch(console.log).finally(() => console.log(`Promises Settled promise2`))



// function wait(cb) {
//    return new Promise((res, rej) => {
//      setTimeout(() => {
//     res(`resloved`)
//      },cb)
//    })
// }

// wait(1000).then(console.log)

// let promise3 = new Promise((res, rej) => {
//     res(21)
// }).then((value) => value + 10).then((value) => value + 100).then((value) => {
//     if(value > 100){
//         throw new Error(`Some T
//         //hre in above code if we want to see the value we can wrrite like thishing went wrong`)
//     }
// }).catch(console.log)

// //here in above code if we want to see the value we can write like this
// let promise4 = new Promise((res, rej) => {
//     res(21)
// }).then((value) => 
//      {
//        console.log(value);
//        return value + 10}).
//        then((value) => 
//     { 
//         console.log(value);
//           return  value + 100}).
//         then((value) => 
//     {
//     if(value > 100){
//         console.log(value)
//         throw new Error(`Some Thing went wrong`)
//     }
// }).catch(console.log)

// let promise5 = new Promise((res, rej) => {
//     res([`A`])
// })
//    .then((value) => {
//     console.log(value);
//    return value.concat(`B`)
// })
//    .then((value) => {
//     console.log(value);

//     return value.reduce((acc, cv ,i) => {
//         acc[i] + cv;
//       return acc;
//     },{});
//    })
//    .then((value) => console.log(value));

// let first = new Promise((res, rej) => {
//     res(1)
// });
// //Chaining
// first.then((value) => {
//   console.log(value);
//   return 2
// })
// .then((value) => {
//     console.log(value);
//     return 3
//   })
//   .then((value) => {
//     console.log(value);
//     return 4
//   });



let second = new Promise((res,rej) => {
    res(1)
  });
  second.then((value) => {
    console.log(value);
    return 2
  })
  second.then((value) => {
    console.log(value);
    return 3
  })
  second.then((value) => {
    console.log(value);
    return 4
  })


let mk = new Promise((res, rej) => {
    res(`jhon`)
}).then((value) => {
    console.log(value);
   return new Promise((res, rej) => {
        res(`Arya`)
    })
}).then((v) => {
    console.log(v);
    return new Promise((res, rej) => {
        setTimeout(() => {
            res(`Bran`)
        }, 2000);
});
 }).then(console.log)