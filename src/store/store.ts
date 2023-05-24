import { configureStore } from "@reduxjs/toolkit"
import { commonReducer, postReducer } from './slices';

export const store = configureStore({
    reducer: {
        common: commonReducer,
        post: postReducer
    }
})
