function resolver(resolve, reject) {
      setTimeout(() => resolve(),5000);
}
let recipt = new Promise(resolver);

function wait(cb) {
     setTimeout(cb, 2000);
     setTimeout(cb, 2000);
     setTimeout(cb, 2000);
     setTimeout(cb, 2000);
}

wait( (cb) => {
      console.log(`mk`)
})

function waitPro() {
      return new Promise((res, rej) => {
            setTimeout(res, 5000)
            setTimeout(res, 5000)
            setTimeout(res, 5000)
      })
}

let time = waitPro().then(() =>console.log(`Help Promise`))