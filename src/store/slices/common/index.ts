import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    hamburgerOpen: false
}

const commonSlice = createSlice({
    name: "CommonSlice",
    initialState,
    reducers: {
        openHamburger: (state, action) => {
            const isOpened = action.payload
            state.hamburgerOpen = isOpened;
        }
    }
})

export const commonReducer = commonSlice.reducer

export const {openHamburger}  = commonSlice.actions