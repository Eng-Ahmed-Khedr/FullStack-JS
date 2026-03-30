import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom"

export default function Product() {

    const params = useParams();
    // console.log(params);


    const [product, setProducts] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, []);
    return (
        <>
            <section className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={product.image} alt="product image" />
                    </div>
                    <div className="col-md-6">
                        <h2>{product.title}</h2>
                        <p>{product.description}</p>
                        <span className="d-block">Price : {product.price}</span>
                        <button className="btn btn-primary" >Add to Cart</button>
                    </div>
                </div>
            </section>
        </>
    )
}