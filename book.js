const params = new URLSearchParams(window.location.search)
const asin = params.get("asin")
console.table({ asin })

const bookSection = document.querySelector("#booksSection")

fetch(`https://striveschool-api.herokuapp.com/books/${asin}`)
.then(r => r.json())
.then(results => {
  const arrayResult = results
  bookSection.innerHTML =
 `<div class="item d-flex justify-content-center mt-5" style="max-width: 500px">
    <div>
      <img src="${arrayResult.img}" alt="" style="max-width: 200px" class="">
    </div>
    <div class="bookDescription m-4">
        <h3>${arrayResult.title}</h3>
        <p> <span>Category:</span> ${arrayResult.category.toUpperCase()}</p>
        <p><span>Asin:</span> ${arrayResult.asin}</p>
        <p><span>Price:</span> ${arrayResult.price} $</p>
        <button class="btn btn-warning" onclick="buy(this)">buy</button>
    </div>
</div>` 
}
)
.catch(error => console.log('error', error))
