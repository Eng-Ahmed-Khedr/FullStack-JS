import { Link } from "react-router-dom"
import "./box.css"

export default function Box(props) {
    return (
        <div className="box">
            <div className="card">
                <div className="img">
                    <img src={props.image} className="card-img-top" alt="product image" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.description}</p>
                    <span className="d-block">Price : {props.price}</span>
                    <Link href="#" className="btn btn-primary" to={`/product/${props.id}`}>Details</Link>
                </div>
            </div>
        </div>
    )
}