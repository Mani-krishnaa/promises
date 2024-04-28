const userName = [
   `getify`,
   `gaearon`,
   `AArnott`, 
   `subtleGradient`,
   `piranha`,
   `sophiebits`
]
// userName.forEach((user) => {
//   fetch(`https://api.github.com/users/${user}`).then((res) => res.json()).then((info) => console.log(info))
// })


//Promise.all

const userNamePromises = Promise.all(userName.map((user) => {
    fetch(`https://api.github.com/users/${user}`).then((res) => res.json())
})).then((info) => console.log(info))