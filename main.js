let selectedItem = [];
var flatArray;

getItems()

function getItems() {
    let items = localStorage.getItem('cartItems')
    if (items) {
        selectedItem.push(JSON.parse(items));
    }
    
}

function addToCart(btn) {
    if (btn) {
        var itemDetails = document.body.children[1]
        const imageSrc = itemDetails.firstElementChild.firstElementChild.src;
        const companyName = itemDetails.children[1].children[0].innerText
        const productName = itemDetails.children[1].children[1].innerText
        const productPrice = itemDetails.children[1].children[10].innerText
        const price = productPrice.slice(4)
        let itmObj = {
            imageSrc,
            companyName,
            productName,
            price
        }
        selectedItem.push(itmObj)

        flatArray = selectedItem.flat(100)
        localStorage.setItem('cartItemArray', JSON.stringify(flatArray))
        localStorage.setItem('cartItems', JSON.stringify(selectedItem))
        let noOfProducts = JSON.parse(localStorage.getItem('cartItemArray'))
        localStorage.setItem('cartNo', noOfProducts.length)
        
        itemDetails.children[1].children[14].className += ' addToCartBtn';
        itemDetails.children[1].children[15].className += ' addedBtn';
    }
}




console.log(flatArray)