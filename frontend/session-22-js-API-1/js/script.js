
let productData = null;

async function getData() {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    return data;
}

productData = getData();

if (productData != null) {
    console.table(productData)
}
