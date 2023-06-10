const itmesInfo = [
    {
      src: "https://slimages.macysassets.com/is/image/MCY/products/5/optimized/18704655_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
      company: "Italian Gold",
      title: "Mesh Bangle Bracelet in 14k Gold over Sterling Silver",
      oldPrice: "PKR 148,948.64",
      salePrice: "Sale 74,474.32",
      noOfSales: "Sales (66)",
      link: "italianGold-mesh-14kgold.html"
    },
    {
      src: "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/22453076_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
      company: "Macy's",
      title: "Sedusa Link Chain Bracelet in 14k Gold",
      oldPrice: "PKR 946,597.10",
      salePrice: "Sale PKR 473,298.55",
      noOfSales: "Sales (390)",
      link: "macy-sedusaChain-14kgold.html"
    },
    {
      src: "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/16383882_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
      company: "Macy's",
      title: "Diamond Pear Halo Engagement Ring in 14k White Gold",
      oldPrice: "PKR 1,394,256.95",
      salePrice: "Sale PKR 697,128.48",
      noOfSales: "Sales (85)",
      link: "macy-diamondPear-14kwhiteGold.html"
    },
    {
      src: "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/15965196_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
      company: "Macy's",
      title: "Emerald & Diamond Statement Necklace in 14k Gold",
      oldPrice: "PKR 1,855,482.25",
      salePrice: "Sale PKR 927,741.13",
      noOfSales: "Sales (78)",
      link: "macy-emeraldDiamond-necklace.html"
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