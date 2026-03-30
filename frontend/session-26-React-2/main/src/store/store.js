import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./splice/counter.slice"

export default configureStore({
    reducer: {
        counter: counterReducer,
    }
})