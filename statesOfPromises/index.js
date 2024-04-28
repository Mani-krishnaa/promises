// let initial = new Promise((resolve, rejectes) =>{} )
// //pending

// let fulfilled = new Promise((resolve, rejectes) => {
//     resolve(100)
// })//fullfilled


// let rejeced = new Promise((resolve, rejectes) => {
//     rejectes(`Spomething went wrong`)
// })//rejected


let five = new Promise((resolve, rejectes) => {
   //rejectes(`SomeThing Went Wrong`)
   resolve(5)
}).then((value) => console.log(value)).catch((error) => console.log(error)).finally(() => console.log(`Finally`))


//then - promises is fulfilled
// catch - promises is rejected
// finally - is called when promises is settled