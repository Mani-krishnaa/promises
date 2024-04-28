const button = document.querySelector(`button`);

function buyNow(cb) {

    setTimeout(cb, 3000)
}
button.addEventListener(`click`, () => {
function afterPayment(params) {
    console.log(`PaymentDone`);
}

//BuyNow -present
//afterPayMent - future


buyNow(afterPayment)
})