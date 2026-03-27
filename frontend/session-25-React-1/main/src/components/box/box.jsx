import { useState } from "react";
import "./box.css"

export default function Box(props) {
    const [count, setCount] = useState(0);
    return (
        <div className="box">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <button onClick={() => {
                setCount(count - 1);
            }}>-</button>
            <p>{count}</p>
            <button onClick={() => {
                setCount(count + 1);
            }}>+</button>
        </div>
    )
}