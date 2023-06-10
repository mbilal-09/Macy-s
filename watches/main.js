var cartNo = 0;

let addToCartBtn = document.querySelector('.cartBtn')
addToCartBtn.addEventListener('click', () => {
    cartNo = localStorage.getItem('cartNo')

    if (cartNo) {
        cartNo = cartNo;
    } else {
        cartNo = 0;
    }
    document.querySelector('.cart-no').innerText = cartNo
})

cartNo = localStorage.getItem('cartNo')

if (cartNo) {
    cartNo = cartNo;
} else {
    cartNo = 0;
}

let navbar = `<nav class="navbar">
<div class="container-fluid">
    <a class="navbar-brand" href="../index.html"> <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Macy%27s_Logo_2019.png" height="50px"
            width="200px" alt=""> </a>
    <div class="d-flex">
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        </form>
        <a href="../signup.html"><button type="button" class="btn btn-danger">Sign up</button></a>
    </div>
</div>
</nav>

<nav class="navbar navbar-expand-lg bg-danger">
<div class="container-fluid">
<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
        <a class="nav-link text-light" href="../index.html">Home</a>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Categories </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="../men/index.html">Men</a></li>
              <li><a class="dropdown-item" href="../kid/index.html">Kids & Baby</a></li>
              <li><a class="dropdown-item" href="../shoes/index.html">Shoes</a></li>
              <li><a class="dropdown-item" href="../handbag/index.html">Handbags & Accessories</a></li>
              <li><a class="dropdown-item" href="../jewelry/index.html">Jewelry</a></li>
              <li><a class="dropdown-item" href="index.html">Watches</a></li>
              <li><a class="dropdown-item" href="../home/index.html">Home Accessories</a></li>
            </ul>
          </li>
        <a class="nav-link text-light" href="../index.html">About</a>
        <a class="nav-link text-light" href="../index.html">Contact</a>
    </div>
    <div class="navbar-nav">
        <a class="nav-link text-light" href="#"><i class="fa-solid fa-heart"></i></a>
        <a class="nav-link text-light" href="../cart.html"><i class="fa-solid fa-cart-shopping"></i> <span class="cart-no"> 0</span></a>
        <a class="nav-link text-light" href="#"><i class="fa-solid fa-user"></i></a>
    </div>
</div>
</div>
</nav>`

document.querySelector('.navbar-container').innerHTML = navbar;
document.querySelector('.cart-no').innerText = cartNo;