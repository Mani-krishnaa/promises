// function fetchdata(url){
//     let xhr = new XMLHttpRequest();
//     xhr.open(`GET`, url);

//     xhr.onload = function() {
//         console.log(JSON.parse(xhr.response));
//     }
//     xhr.send();
// }

// fetchdata(`https://api.github.com/users/getify`)


function fetch(url){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(`GET`, url)
        xhr.onload =  () => {
           setTimeout(() => resolve(JSON.parse(xhr.response)), 5000)
        }
        xhr.onerror = () => {
           setTimeout(() => reject(`SomeThing Went Wrong`),3000)
        }
        xhr.send();
    });
}

let data = fetch(`https://api.github.com/users/getify`).then((data) => console.log(data.name)).catch((error) => alert(`Check Your Internet Connection`))