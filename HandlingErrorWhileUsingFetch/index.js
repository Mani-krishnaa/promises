let ul = document.querySelector(`ul`)


fetch(`https://api.github.com/users/getify/followers`).then((res) =>{    
   if(!res.ok){
    throw new Error(`Error happened ${res.status}`)
   }
     return res.json()})
     .then((users) => {
    if(Array.isArray(users)) {
        users.forEach((user) => {
            let li = document.createElement(`li`)
            li.innerText = user.login;
            ul.append(li)
        })
    }
   
}).catch((error)  => {
   ul.innerText = error;
})
