import { Blog, Home, Contact, About, Post } from "components";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "",
        Component: Home
    },
    {
        path: "/blog",
        Component: Blog
    },
    {
        path: "/contact",
        Component: Contact
    },
    {
        path: "/about",
        Component: About
    },
    // {
    //     path: "/posts/:postId",
    //     Component: Post,
    //     loader: getPostLoader
    // },
    {
        path: "/post",
        Component: Post,
    },
])