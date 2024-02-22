function createPage(_title, _category=null){
    if( !_category ) _category = '';
    let page = document.createElement('div');
    page.setAttribute('class', 'page');

    let brand = document.createElement('div');
    brand.setAttribute('class', 'brand d-flex flex-column justify-content-center');

    let title = document.createElement('h1');
    title.setAttribute('class', 'text-center fw-bold');

    title.textContent = _title;

    let category = document.createElement('h3');
    category.setAttribute('class', 'fs-5 fw-light px-5');

    category.textContent = _category;

    let products = document.createElement('div');
    products.setAttribute('class', 'products');

    brand.appendChild(title);
    brand.appendChild(category);
    page.append(brand);
    page.append(products);

    return {
        page, 
        addPage: function(target=document.body){
            target.appendChild(page);
        }
    };
}

function createProductRow(){
    // <div class="product-row d-flex justify-content-center"></div>
    let productRow = document.createElement('div');
    productRow.setAttribute('class', 'product-row d-flex justify-content-center');

    return productRow;
}

function createProduct(imageUrl, _name, _price){
    // <div class="product-layout m-1 rounded-2 shadow d-flex flex-column overflow-hidden">
    //     <div class="img-container"></div>
    //     <div class="flex-fill p-2 d-flex flex-column justify-content-evenly border-2 border-top">
    //         <small class="text-center text-dark fs-7">Energade Sports Drink Blueberry 6 x 500ml</small>
    //         <b>Price: <small class="fw-medium">R 100</small></b>
    //     </div>
    // </div>
    let product = document.createElement('div');
    product.setAttribute('class', 'product-layout m-1 rounded-2 shadow d-flex flex-column overflow-hidden');

    let image = document.createElement('div');
    image.setAttribute('class', 'img-container');

    image.style['background-image'] = `url(${imageUrl})`;

    let content = document.createElement('div');
    content.setAttribute('class', 'flex-fill p-2 d-flex flex-column justify-content-evenly border-2 border-top');

    let name = document.createElement('small');
    name.setAttribute('class', 'text-center text-dark fs-7');

    name.textContent = _name;

    let priceTitle = document.createElement('b');

    priceTitle.textContent = "Price: ";

    let price = document.createElement('small');
    price.setAttribute('class', 'fw-medium');

    price.textContent = _price;


    priceTitle.appendChild(price);
    content.appendChild(name);
    content.appendChild(priceTitle);

    product.appendChild(image);
    product.appendChild(content);

    return product;
}