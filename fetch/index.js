
// function fetchData(url) {
//     return new Promise((resolver, rejecetd) => {
//         let xhr  = new XMLHttpRequest()
//         xhr.open(`GET`, url);
//         xhr.onload = () => setTimeout(() => resolver(JSON.parse(xhr.response)), 2000);
//         xhr.onerror = () => setTimeout(() => rejecetd(`Something Went Wrong`),2000);
//         xhr.send();
//     }
// )
// }

let ul = document.querySelector(`ul`)
let datapromise = fetch(`https://api.github.com/users/getify/`).then((res) => res.json()).then((userInfo) => userInfo.followers_url).then((followersUrl) => {
    return fetch(followersUrl)
}).then((res) => res.json()).then((users) => {
    users.forEach((user) => {
        console.log(user.node_id);
        let li = document.createElement(`li`);
        li.innerText = user.login;
        ul.append(li)
    })
})

