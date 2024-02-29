const loadData = async () => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/categories`)
    const data = await res.json()
    const news = data.data.news_category
    // console.log(news)

        const categoryContainer = document.getElementById('category-container')

    news.forEach((item)=>{
        console.log(item)
       const div = document.createElement('div')
       div.innerHTML = `<button onclick="loadByCategory(${item.category_id})" class="btn">${item.category_name}</button>`
       categoryContainer.appendChild(div)
    })
}


const loadByCategory =async (id) => {
    console.log(typeof id)
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/0${id}`)
    const datas =await res.json()
    const data = datas.data
    // console.log(data)

    const newsContainer = document.getElementById('news-container')
    newsContainer.innerHTML =''
    
    data.forEach((item) => {
        console.log(item)

        const newsDiv = document.createElement('div')
        newsDiv.classList = 'card card-side bg-base-100 shadow-xl p-5'

        newsDiv.innerHTML = ` 

        <img src="${item.image_url}" alt="Movie"/>
        <div class="card-body">
          <h2 class="card-title">${item.title}</h2>
          <p>${item.details.slice(0,200)}</p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">details</button>
          </div>
        </div>

        `;
        
        newsContainer.appendChild(newsDiv)
    })

}
 

// const showNewsByCategory = (id) => {
//     const str = String(id)
//     console.log(str)
//     loadByCategory(str)
// }

loadData()
loadByCategory('1')