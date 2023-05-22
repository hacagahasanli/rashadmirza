import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpenHamburger: false
}

const commonSlice = createSlice({
    name: "CommonSlice",
    initialState,
    reducers: {
        openHamburger: (state, action:{payload:boolean}) => {
            const isOpened = action.payload
            state.isOpenHamburger = isOpened;
        }
    }
})

export const commonReducer = commonSlice.reducer
export const { openHamburger } = commonSlice.actions