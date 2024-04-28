//Example 1
document.addEventListener(`click` ,  function (event) {
 console.log(event.target);
})

//Example 2

let xhr = new XMLHttpRequest();
xhr.open(`GET` , `https://api.github.com/users/getfy`);
xhr.onload = function () {
    console.log(xhr.response);
}
xhr.send();
//Example 3 
const array = [1, 4, 5, 6, 7, 8];

array.map((num) =>{
    console.log(num);
})

//Example 4
setTimeout(() => {
    console.log(`Logging from setTimeout`);
}, 2000);