//Promise Chanin
// let five = new Promise((res, rej) => {
//     res(5)
// }).then((value) => console.log(value))


function fetchData(url) {
    return new Promise((resolver, rejecetd) => {
        let xhr  = new XMLHttpRequest()
        xhr.open(`GET`, url);
        xhr.onload = () => setTimeout(() => resolver(JSON.parse(xhr.response)), 2000);
        xhr.onerror = () => setTimeout(() => rejecetd(`Something Went Wrong`),2000);
        xhr.send();
    }
)
}

let data = fetch(`https://api.github.com/users/getify`).then((userInfo) => 
userInfo.followers).then((url) => fetchData(url)).catch(() => console.error(`somrthog went wrong`))