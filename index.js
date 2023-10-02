// problems problems problems
// quando faccio una ricerca con search, i bottoni poi si riferiscono ai risultati della ricerca

let allBooks = []
let allBooksOriginal = []
let shoppingCart = []

let search = () => {
    let inputText = document.querySelector("#searchField").value.toLowerCase();
    let correspondingBooks = allBooksOriginal.filter(book =>
        book.title.toLowerCase().includes(inputText));
    let errorDiv = document.querySelector("#error");
    errorDiv.innerHTML = ''
    if (inputText.length < 4) {
        errorDiv.innerHTML = '<p class="d-flex justify-content-md-center">Insert al least 4 characters</p>';
    } else if (correspondingBooks.length === 0) {
        errorDiv.innerHTML = '<p class="d-flex justify-content-md-center">No result found</p>';
    } else if (correspondingBooks.length > 0) {
        allBooksOriginal = correspondingBooks;
        showAllBooksOriginal();
    } inputText = document.querySelector("#searchField").value = "";
}

let showAllBooksOriginal = () => {
    let cardSection = document.querySelector("#booksSection")
    let booksHTML = allBooksOriginal.map(book =>
        `<div class="card p-0 border" style="width: 18rem; position: realtive">
        <img src="${book.img}" class="card-img-top bookImg">
        <div class="card-body d-flex flex-column justify-content-between">
        <a href="artist.html?asin=${book.asin}" class="btn btn-warning showDetails">Show Details</a>
          <h5 class="bookTitle">${book.title}</h5>
          <p class="card-text fs-6 text-secondary">Category: "${book.category.toUpperCase()}"</p>
          <div class="d-flex justify-content-between align-items-center">
            <button href="" class="btn btn-primary" id="addToCart" onclick="buy(this); moveBalloon(this);">Shop         
<svg id="addToCartBalloon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" 
style="color: rgb(235, 26, 200);" class="bi bi-balloon-heart-fill" 
viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/>
</svg>
              </button>
            <p class="bookPrice text-center mb-0 fw-bold">${book.price} $</p>
            <button href="" class="btn btn-warning" onclick="deleteCard(this)">Delete</button>
          </div>
        </div>
      </div>`).join("")
      cardSection.innerHTML = booksHTML
  }

let showAllBooks = () => {
    let errorDiv = document.querySelector("#error");
    errorDiv.innerHTML = ''
    let cardSection = document.querySelector("#booksSection")
    let booksHTML = allBooks.map(book =>
        `           <div class="card p-0 border" style="width: 18rem; position: realtive">
        <img src="${book.img}" class="card-img-top bookImg">
        <div class="card-body d-flex flex-column justify-content-between">
        <a href="artist.html?asin=${book.asin}" class="btn btn-warning showDetails">Show Details</a>
          <h5 class="bookTitle">${book.title}</h5>
          <p class="card-text fs-6 text-secondary">Category: "${book.category.toUpperCase()}"</p>
          <div class="d-flex justify-content-between align-items-center">
            <button href="" class="btn btn-primary z-3" id="addToCart" onclick="buy(this); moveBalloon(this);">Shop
<svg id="addToCartBalloon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" 
style="color: rgb(235, 26, 200);" class="bi bi-balloon-heart-fill" 
viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/>
</svg>        
              </button>
            <p class="bookPrice text-center mb-0 fw-bold">${book.price} $</p>
            <button href="" class="btn btn-warning" onclick="deleteCard(this)">Delete</button>
          </div>
        </div>
      </div>`).join("")
    cardSection.innerHTML = booksHTML
}

let showRandomBook = () => {
    let errorDiv = document.querySelector("#error");
    errorDiv.innerHTML = ''
    let randomIndex = Math.floor(Math.random() * allBooks.length)
    let randomBook = allBooks[randomIndex]
    let section = document.querySelector("#booksSection");
    let bookHTML =
    `
    <div class="card p-0 border" style="width: 18rem; position: realtive">
    <img src="${randomBook.img}" class="card-img-top bookImg">
    <div class="card-body d-flex flex-column justify-content-between">
    <a href="artist.html?asin=${randomBook.asin}" class="btn btn-warning showDetails">Show Details</a>
      <h5 class="bookTitle">${randomBook.title}</h5>
      <p class="card-text fs-6 text-secondary">Category: "${randomBook.category.toUpperCase()}"</p>
      <div class="d-flex justify-content-between align-items-center">
        <button href="" class="btn btn-primary" id="addToCart" onclick="buy(this); moveBalloon(this);">Shop
<svg id="addToCartBalloon" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" 
style="color: rgb(235, 26, 200);" class="bi bi-balloon-heart-fill" 
viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M8.49 10.92C19.412 3.382 11.28-2.387 8 .986 4.719-2.387-3.413 3.382 7.51 10.92l-.234.468a.25.25 0 1 0 .448.224l.04-.08c.009.17.024.315.051.45.068.344.208.622.448 1.102l.013.028c.212.422.182.85.05 1.246-.135.402-.366.751-.534 1.003a.25.25 0 0 0 .416.278l.004-.007c.166-.248.431-.646.588-1.115.16-.479.212-1.051-.076-1.629-.258-.515-.365-.732-.419-1.004a2.376 2.376 0 0 1-.037-.289l.008.017a.25.25 0 1 0 .448-.224l-.235-.468ZM6.726 1.269c-1.167-.61-2.8-.142-3.454 1.135-.237.463-.36 1.08-.202 1.85.055.27.467.197.527-.071.285-1.256 1.177-2.462 2.989-2.528.234-.008.348-.278.14-.386Z"/>
</svg>
          </button>
        <p class="bookPrice text-center mb-0 fw-bold">${randomBook.price} $</p>
        <button href="" class="btn btn-warning" onclick="deleteCard(this)">Delete</button>
      </div>
    </div>
  </div>`;
    section.innerHTML = bookHTML;
}

let showCheaperBooks = () => {
    allBooks.sort((a, b) => a.price - b.price)
    showAllBooks()
}

let showBooksReverseAlphabetically = () => {
    allBooks.sort((a, b) => {
        if (a.title < b.title) return 1;
        if (a.title > b.title) return -1;
        return 0;
    })
    showAllBooks()
}

let showBooksAlpahabetically = () => {
    allBooks.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    })
    showAllBooks()
}

let deleteCard = (button) => {
    let card = button.closest(".card")
    card.remove()
}

let buy = (button) => {
    let card = button.closest(".card")
    let img = card.querySelector(".bookImg").src
    let title = card.querySelector(".bookTitle").innerText
    let price = card.querySelector(".bookPrice").innerText

    let alreadyExisting = shoppingCart.find(book => book.title === title)
    if (alreadyExisting) {
        /*  alert("") */
    } else {
        shoppingCart.push({
            img: img,
            title: title,
            price: price,
            quantity: 1
        })
    }
    showCart();
    cartTotalPrice();
    totalProductsNumber();
}

let moveBalloon = (clickedButton) => {
    let addToCartBalloon = clickedButton.querySelector('#addToCartBalloon');
    let cartLogo = document.getElementById('cartLogo');
    const startPos = addToCartBalloon.getBoundingClientRect();
    let endPos = cartLogo.getBoundingClientRect();
    let deltaX = endPos.left - startPos.left;
    let deltaY = endPos.top - startPos.top;
    addToCartBalloon.classList.add('move');
    addToCartBalloon.style.transform = 'translate(' + deltaX + 'px, ' + deltaY + 'px) rotate(400deg)';
    addToCartBalloon.addEventListener('transitionend', function () {
        addToCartBalloon.classList.remove('move');
        addToCartBalloon.style.transform = '';
        addToCartBalloon.style.display = 'none';
    })
}

let restoreBalloon = () => {
    let addToCartBalloon = document.querySelector('.bi-balloon-heart-fill');
    addToCartBalloon.style.opacity = '1';
}

let showCart = () => {
    let cartSection = document.querySelector("#shoppingCart");
    cartSection.innerHTML = shoppingCart.map(book => `
    <div class="border rounded border-5 mb-2 d-flex justify-content-between shoppingItem">
    <div
      class="text-black rounded gap-2 p-2 mb-1 flex-column flex-md-row d-flex flex-fill align-items-center justify-content-between flex-basis-auto">
      <img src="${book.img}" class="itemImg" style="height: 100; width: 80px">
      <p class="itemTitle" style="max-width: 300px">${book.title}</p>
      <p class="fw-bold singleItemPrice">${book.price}</p>
      <button type="button" class="btn btn-warning emptyCart " onclick="deleteItem(this); restoreBalloon(this)">Delete</button>
    </div>
  </div>
    `).join("")
}

let emptyCart = () => {
    let cart = document.querySelector("#shoppingCart")
    cart.innerHTML = ''
    let displayTotal = document.querySelector("#totalCartProducts");
    displayTotal.innerHTML = '0'
    let displayTotalPrice = document.querySelector("#totalCartPrice");
    displayTotalPrice.innerHTML = '$ 0'
    shoppingCart = []
}

function deleteItem(button) {
    let card = button.closest(".shoppingItem");
    let itemTitle = card.querySelector(".itemTitle").innerText;
    let itemIndex = shoppingCart.findIndex((item) => item.title === itemTitle);
    if (itemIndex !== -1) {
        shoppingCart.splice(itemIndex, 1);
    }
    card.remove();
    cartTotalPrice();
    totalProductsNumber();
}

let cartTotalPrice = () => {
    const totalPrice = shoppingCart.reduce((total, item) => total + parseFloat(item.price.replace('$', '')), 0);
    let totalPriceSection = document.querySelector("#totalCartPrice");
    totalPriceSection.innerHTML = `$ ${totalPrice.toFixed(2)}`;
}

let totalProductsNumber = () => {
    let displayTotal = document.querySelector("#totalCartProducts");
    displayTotal.innerHTML = shoppingCart.length.toString();
}

fetch("https://striveschool-api.herokuapp.com/books")
    .then(response => response.json())
    .then(result => {
        allBooks = result
        allBooksOriginal = result
    }        
    )
    .catch(error => console.log('error', error));
