let url = `https://api.spaceflightnewsapi.net/v3/articles?_limit=30`;
let newsel = document.querySelector(`.news`)
let select = document.querySelector(`select`)
let allNews = [];

function renderNews(news) {
    newsel .innerHTML = ``;
    news.forEach((news) => {
       let li = document.createElement(`li`)
       let img = document.createElement (`img`)
       img.src = news.imageUrl;
       img.alt = news.title;
       let div = document.createElement(`div`)
       let span = document.createElement(`span`) 
       span.innerText = news.newsSite;
       let h3 = document.createElement(`h3`) 
       h3.innerText = news.title
       let a = document.createElement(`a`)
       a.href = news.url;
       let button = document.createElement(`button`)
       a.append(button)
       button.innerText = `Read More`
       div.append(span, h3, a)
       li.append(img, div)
       newsel.append(li)
    })
}
function displayOptions(souces) {
    souces.forEach((source) => {
        let option = document.createElement(`option`);
        option.innerText = source;
        option.value = source;
        select.append(option);
    })
}
 

fetch(url).then((res) => res.json()).then((news) => {
    renderNews(news)
    console.log(news);
    allNews = news;
   let allsources = Array.from(new Set(news.map((v) => v.newsSite)))
   console.log(allsources);
   displayOptions(allsources);
})

select.addEventListener(`change`, (event) => {
let source = event.target.value;
let filteredNews = allNews.filter((news) => news.newsSite === source)
 renderNews(filteredNews)
})