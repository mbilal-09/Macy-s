let cartItemArray = localStorage.getItem('cartItemArray')
let cartItemObj = JSON.parse(cartItemArray);
let cartContainer = document.getElementById('cart-item-container')

for (let i = 0; i < cartItemObj.length; i++) {

    let itmes = cartItemObj[i]
    const imageSrc = itmes.imageSrc;
    const title = itmes.productName;
    const price = itmes.price;

    let cartItems = `<div class="d-flex align-items-center row">
<img class="col-1 mb-3" src= ${imageSrc} height="100px" alt="">
<h6 class="col-5">${title}</h6>
<h6 class="col-5">${price}</h6>
<button onclick="cartItemDelete(this)" value=${i} style="border: none;" class="col-1 bg-transparent"><i class="fa-solid fa-xmark"></i></button>
<hr>
</div>`
    cartContainer.innerHTML += cartItems
}

function cartItemDelete(btn) {

    for (let i = 0; i < cartItemObj.length; i++) {
        let deleteItem = btn.parentNode.children[1].innerText

        if (cartItemObj[i].productName === deleteItem) {
            cartItemObj.splice(i, 1)
        }
    }

    localStorage.removeItem('cartItemArray')
    localStorage.removeItem('cartItems')
    localStorage.setItem('cartItemArray', JSON.stringify(cartItemObj))
    localStorage.setItem('cartItems', JSON.stringify(cartItemObj))
    let noOfProducts = JSON.parse(localStorage.getItem('cartItemArray'))
    localStorage.setItem('cartNo', noOfProducts.length)
    let container = btn.parentNode.innerHTML = '';

    let cartNo = localStorage.getItem('cartNo')

    if (cartNo) {
        cartNo = cartNo;
    } else {
        cartNo = 0;
    }
    document.querySelector('.cart-no').innerText = ' ' + cartNo;
}

function clearCart() {
    localStorage.clear();
    document.getElementById('cart-item-container').innerHTML ='';
    document.querySelector('.cart-no').innerText = ' ' + 0;
}
