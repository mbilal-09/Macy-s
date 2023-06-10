const itmesInfo = [
    {
      src: "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/23058246_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
      company: "Carter's",
      title: "Baby Boys Love Tractor T-shirt and Joggers, 2 Piece Set",
      oldPrice: "PKR 7,423.18",
      salePrice: "Sale PKR 3,711.59",
      noOfSales: "Sales (2)",
      link: 'carter-love-shirt.html'
    },
    {
      src: "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/23525446_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
      company: "Epic Theards",
      title: "Little Girls Love T-Shirt, Created for Macy's",
      oldPrice: "PKR 4,568.11",
      salePrice: "Sale PKR 2,284.06",
      noOfSales: "Sales (1)",
      link: 'epic-love-shirt.html'
    },
    {
      src: "https://slimages.macysassets.com/is/image/MCY/products/5/optimized/23423755_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
      company: "Carter's",
      title: "Baby Boys Long and Short Sleeve Bodysuits and Pants",
      oldPrice: "PKR 7,423.18",
      salePrice: "Sale PKR 4,453.91",
      noOfSales: "Sales (4)",
      link: 'carter-bodysuit.html'
    },
    {
      src: "https://slimages.macysassets.com/is/image/MCY/products/0/optimized/9326550_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
      company: "Adidas",
      title: "Baby Boys Three-Stripe Track Suit, 2 Piece Set",
      oldPrice: "PKR 12,562.31",
      salePrice: "Sale PKR 9,421.73",
      noOfSales: "Sales (62)",
      link: 'adidas-kid-boy-shirt.html'
    }
  ];
  
let cardsContainer = document.getElementById('cards-container')

function cards() {
    for (let i = 0; i < itmesInfo.length; i++) {
        let itemObj = itmesInfo[i]
        let itmes = `<div class="card col-12 col-md-6 col-lg-3 mb-3 shadow-lg" style="width: 18rem;">
        <img src= ${itemObj.src}
            class="card-img-top" alt="...">
        <div class="card-body">
            <span class="card-text"><a href=${itemObj.link}
                    class="text-link text-decoration-none text-dark m-0 fw-bold">${itemObj.company}</span></a>
            <br>
            <span class="card-text"><a href=${itemObj.link}
                    class="text-link text-decoration-none text-dark fw-bold">${itemObj.title}</span></a>
            <br><br>
            <span class="card-text text-decoration-line-through fw-bold">${itemObj.oldPrice}</span>
            <br>
            <span class="card-text text-danger fw-bold">${itemObj.salePrice}</span>
            <br><br>
            <span><b>${itemObj.noOfSales}</b></span>
        </div>
    </div>`

    cardsContainer.innerHTML += itmes;
    }
}

cards()