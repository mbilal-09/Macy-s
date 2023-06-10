const itmesInfo = [
    {
        src: "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/9067501_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
        company: "Caravelle Designed",
        title: "Women's Black Stainless Steel Bracelet Watch 38mm",
        oldPrice: "PKR 47,750.15",
        salePrice: "Sale PKR 38,677.62",
        noOfSales: "Sales (17)",
        link: "caravelle-women38mm.html"
    },
    {
        src: "https://slimages.macysassets.com/is/image/MCY/products/9/optimized/18519229_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
        company: "Michael Kors",
        title: "Access Gen 5e Darci Two-Tone Smartwatch 43mm",
        oldPrice: "PKR 95,500.30",
        salePrice: "Sale PKR 57,300.18",
        noOfSales: "Sales (24)",
        link: "michael-access5e43mm.html"
    },
    {
        src: "https://slimages.macysassets.com/is/image/MCY/products/4/optimized/18841564_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
        company: "Charter Club",
        title: "Women's Silver-Tone Crystal Bracelet Watch 28mm",
        oldPrice: "PKR 10,777.89",
        salePrice: "Sale PKR 7,274.39",
        noOfSales: "Sales (65)",
        link: "charter-silverTone28mm.html"
    },
    {
        src: "https://slimages.macysassets.com/is/image/MCY/products/5/optimized/18519215_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
        company: "Michael Kors",
        title: "Access Gen 5e MKGO Black Rubber Smartwatch 43mm",
        oldPrice: "PKR 68,214.50",
        salePrice: "Sale PKR 40,928.70",
        noOfSales: "Sales (71)",
        link: "michael-accessMkgo43mm.html"
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