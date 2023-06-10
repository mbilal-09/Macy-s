const itmesInfo = [
    {
      src: 'https://slimages.macysassets.com/is/image/MCY/products/4/optimized/18568864_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp',
      company: 'Adidas',
      title: "Men's Tiro 21 Track Pants Created For Macy's",
      oldPrice: 'PKR 11,887.55',
      salePrice: 'Sale PKR 7,132.53',
      noOfSales: 'Sales (5800)',
      link: 'men-tiro.html'
    },
    {
      src: 'https://slimages.macysassets.com/is/image/MCY/products/7/optimized/17791127_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp',
      company: 'Hawke & Co.',
      title: "Men's Diamond Quilted Jacket Created For Macy's",
      oldPrice: 'PKR 23,775.10',
      salePrice: 'Sale PKR 14,265.06',
      noOfSales: 'Sales (1372)',
      link: 'hawke-jacket.html'
    },
    {
      src: 'https://slimages.macysassets.com/is/image/MCY/products/5/optimized/23359145_fpx.tif?op_sharpen=1&wid=350&hei=428&fit=fit,1&fmt=webp',
      company: 'Hanes',
      title: "Men's Ultimate 6pk. Crewneck T-Shirts",
      oldPrice: 'PKR 9,985.54',
      salePrice: 'Sale PKR 4,992.77',
      noOfSales: 'Sales (244)',
      link: 'hanes-crewneck-shirt.html'
    },
    {
      src: 'https://slimages.macysassets.com/is/image/MCY/products/6/optimized/19218236_fpx.tif?op_sharpen=1&wid=700&hei=855&fit=fit,1&fmt=webp',
      company: 'INC International Concepts',
      title: "Men's Matthew Quarter-Zip Sweater, Created for Macy's",
      oldPrice: 'PKR 16,523.69',
      salePrice: 'Sale PKR 8261.85',
      noOfSales: 'Sales (66)',
      link: 'inc-sweater.html'
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