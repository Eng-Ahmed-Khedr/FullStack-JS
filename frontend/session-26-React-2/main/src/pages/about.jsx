import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../store/splice/counter.slice";

export default function About() {

    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <>
            <h1>About</h1>
            <button onClick={() => {
                dispatch(decrement());
            }}>-</button>
            <p>{count}</p>
            <button onClick={() => {
                dispatch(increment());
            }}>+</button>
        </>
    )
}