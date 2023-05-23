import { Blog, Home, Contact, About } from "components";
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
    }
])