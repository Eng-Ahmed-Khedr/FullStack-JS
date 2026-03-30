

import { useState } from "react";
import Box from "../components/box/box"
import Navbar from "../components/navbar/navbar"
import { useEffect } from "react";

export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
    }, []);

    return (
        <>
            <section className="container">
                <h1>Products</h1>
                <div className="boxes row g-3">
                    {
                        products.map((product) => {
                            console.log(product);
                            return (
                                <div className="col-md-4 col-lg-3">
                                    < Box id={product.id} title={product.title} description={product.description.split(" ").slice(0, 8).join(" ") + "..."} image={product.image} price={product.price} />
                                </div>
                            )
                        })
                    }

                </div>
            </section>
        </>
    )
}