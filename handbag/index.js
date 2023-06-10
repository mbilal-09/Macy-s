const itmesInfo = [
    {
        src: "https://slimages.macysassets.com/is/image/MCY/products/7/optimized/22834927_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
        company: "Michael Michael Kors",
        title: "Sienna Leather Messenger, Created for Macy's",
        oldPrice: "PKR 76,141.42",
        salePrice: "Sale 45,684.85",
        noOfSales: "Sales (14)",
        link: "michael-siennaLeather.html"
    },
    {
        src: "https://slimages.macysassets.com/is/image/MCY/products/1/optimized/23024741_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
        company: "Michael Michael Kors",
        title: "Signature Kelsey Shoulder Tote",
        oldPrice: "PKR 109,008.22",
        salePrice: "Sale PKR 54,504.11",
        noOfSales: "Sales (50)",
        link: "michael-signatureTote.html"
    },
    {
        src: "https://slimages.macysassets.com/is/image/MCY/products/2/optimized/23275752_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
        company: "INC International Concepts",
        title: "Soft Small Braided Ajae",
        oldPrice: "PKR 19,035.36",
        salePrice: "Sale PKR 9,517.68",
        noOfSales: "Sales (2)",
        link: "inc-braidedAjae.html"
    },
    {
        src: "https://slimages.macysassets.com/is/image/MCY/products/4/optimized/22583994_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp",
        company: "Michael Michael Kors",
        title: "Pearl Medium Convertible Flap Shoulder Bag",
        oldPrice: "PKR 109,008.22",
        salePrice: "Sale PKR 54,504.11",
        noOfSales: "Sales (48)",
        link: "michael-pearlFlap.html"
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