import { configureStore } from "@reduxjs/toolkit"
import { commonReducer } from './slices';

export const store = configureStore({
    reducer:{
        common:commonReducer
    }
})
