const itmesInfo = [
    {
      src: "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/8666462_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
      company: "Franco Sarto",
      title: "Carolynn Lug Sole Loafers, Created for Macy's",
      oldPrice: "PKR 27,626.35",
      salePrice: "Sale PKR 22,310.37",
      noOfSales: "Sales (544)",
      link: "franco-sole-loafer.html"
    },
    {
      src: "https://slimages.macysassets.com/is/image/MCY/products/5/optimized/9293105_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
      company: "Michael Kors",
      title: "Women's Sutton Moccasin Flat Loafers",
      oldPrice: "PKR 34,881.75",
      salePrice: "Sale PKR 32,091.21",
      noOfSales: "Sales (215)",
      link: "michael-women-flatloafer.html"
    },
    {
      src: "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/22327656_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
      company: "Michael Kors",
      title: "Women's Jilly Dress Ankle Block Heel Dress Booties",
      oldPrice: "PKR 54,415.53",
      salePrice: "Sale PKR 22,868.48",
      noOfSales: "Sales (12)",
      link: "micheal-women-ankleblockheel.html"
    },
    {
      src: "https://slimages.macysassets.com/is/image/MCY/products/5/optimized/8798945_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
      company: "INC International Concepts",
      title: "Fawne Riding Leather Boots",
      oldPrice: "PKR 50,090.19",
      salePrice: "Sale PKR 19,514.25",
      noOfSales: "Sales (932)",
      link: "inc-riding-leather-boots.html"
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