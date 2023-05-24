import { createSlice } from "@reduxjs/toolkit";
import { IBlogPosts } from "interfaces";

interface IInitialState {
    posts: IBlogPosts[]
}

const initialState: IInitialState = {
    posts: []
}

const postsSlice = createSlice({
    name: "PostsSlice",
    initialState,
    reducers: {
        setPosts: (state, action: { payload: IBlogPosts[] }) => {
            const data = action.payload
            state.posts = [...data];
        }
    }
})

export const postReducer = postsSlice.reducer
export const { setPosts } = postsSlice.actions