const itmesInfo = [
    {
      src: "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/13440522_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
      company: "T-Fal",
      title: "Culinaire 16-Pc. Nonstick Aluminum Cookware Set, Created for Macy's",
      oldPrice: "PKR 72,762.84",
      salePrice: "Sale PKR 25,195.74",
      noOfSales: "Sales (306)",
      link: "tfal-culinaire16pc-nonstickAluminum-cookware.html"
    },
    {
      src: "https://slimages.macysassets.com/is/image/MCY/products/6/optimized/23472996_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
      company: "Tzumi",
      title: "ionvac ZipVac, Corded Handheld Floor and Carpet Vacuum Cleaner",
      oldPrice: "PKR 18,053.94",
      salePrice: "Sale PKR 11,154.69",
      noOfSales: "Sales (314)",
      link: "tzumi-cordedHandheld-vacuum.html"
    },
    {
      src: "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/8640767_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
      company: "Tools Of The Trade",
      title: "Nonstick 13-Pc. Aluminum Cookware Set, Created for Macy's",
      oldPrice: "PKR 32,337.54",
      salePrice: "Sale PKR 13,741.91",
      noOfSales: "Sales (1869)",
      link: "toolstrade-nonstick13pc-cookware.html"
    },
    {
      src: "https://slimages.macysassets.com/is/image/MCY/products/5/optimized/3962585_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
      company: "Hotel Collection",
      title: "European White Goose Down Medium Density Standard Pillow",
      oldPrice: "PKR 91,630.68",
      salePrice: "Sale PKR 31,151.74",
      noOfSales: "Sales (450)",
      link: "hotelcollection-european-whitepillow.html"
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