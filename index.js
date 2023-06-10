let cartNo = localStorage.getItem('cartNo')

if (cartNo) {
    cartNo = cartNo;
} else {
    cartNo = 0;
}

document.querySelector('.cart-no').innerText = ' ' + cartNo;