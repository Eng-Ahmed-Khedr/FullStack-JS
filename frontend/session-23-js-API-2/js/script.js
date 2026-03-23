// localStorage.setItem("name", "Ahmed");
// localStorage.setItem("age", "24");

// let userName = localStorage.getItem("name");
// let userAge = localStorage.getItem("age");


// console.log(userName);
// console.log(userAge);

// const addProductForm = document.getElementById("productForm");

// async function getData(fd) {
//     let res = await fetch("https://fakestoreapi.com/products", {
//         method: "POST",
//         body: fd
//     })
//     return;
// }

// addProductForm.addEventListener("submit", (element) => {
//     element.preventDefault();
//     const fd = new FormData(addProductForm);
//     fd.append("id", "22");
//     getData(fd);
//     return;
// })


const productsContainer = document.getElementById("productsContainer")

async function getData() {
    let res = await fetch("https://fakestoreapi.com/products");
    let data = await res.json();
    readProducts(data);
    return data;
}

console.log(getData());


function readProducts(data) {
    productsContainer.innerHTML = "";


    data.forEach((element) => {
        productsContainer.innerHTML += `
            <div class="col-lg-3 col-md-6">
                <div class="card">
                    <img src="${element.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of
                            the card’s
                            content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
        `;
    });
    return;
}
