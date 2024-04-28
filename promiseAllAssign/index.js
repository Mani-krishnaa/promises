let times = [1, 2, 3, 4];

let timesPromise = times.map(
    (second) => {
    new Promise((res) => {
        setTimeout(() => res(Math.random()), second * 1000)
    })
})

Promise.all(timesPromise).then((val) => console.log(val));

let users = [`getify`, `prank7`, `suraj122`, `ravi110`, `kumaarsachin`]


let userPromises = users.map((user) => {
    return fetch(`https://api.github.com/users/${user}`).then((res) => res.json())
})

Promise.all(userPromises).then((user) => {
    user.forEach((user) => {
        console.log(user.followers);
    })
})