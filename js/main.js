
let minData = {}

for( let obj of Object.keys(data).slice(0, 2) ){
    minData[obj] = data[obj];
}


const maxProductRows = 3;
const maxProductsInARow = 3;
const pageTotalProducts = maxProductRows * maxProductsInARow;

function setupBrand(brand, catIndex=0){
    let brandData = minData[brand];
    let catergories = Object.keys(brandData.categories);

    // if products in a catergory over flow pageTotalProducts
    // let page = createPage( brand, catergories[catIndex] );
    let products = brandData.categories[ catergories[catIndex] ];
    console.log( brandData.categories[ catergories[catIndex] ] );
    for( let iter = 0; iter < pageTotalProducts; iter++ ){
        let page;
        if( (iter % pageTotalProducts) == 0 ){
            console.log(products[iter]);
            page = createPage( brand, catergories[catIndex] );
            page.addPage()
        }
    }
    catIndex++


    if( catIndex >= catergories.length ){
        return;
    } else {
        setupBrand(brand, catIndex);
    }
}

function setupCategory(page, category, productIndex=0){

}


for( let brand in minData ){
    setupBrand(brand);
}