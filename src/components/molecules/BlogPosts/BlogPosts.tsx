import { BlogPost } from "components"
import { motion } from 'framer-motion';
import { postAnimation } from "utils";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setPosts } from "store";
import { IPostState } from "./IBlogPosts";
import axios from "axios";
import { v4 } from "uuid"

export const BlogPosts = () => {
    const { posts } = useSelector((state: IPostState) => state.post)
    const dispatch = useDispatch()

    useEffect(() => {
        try {
            if (posts.length === 0) {
                const fetchPosts = async () => {
                    const result = await axios.get("http://localhost:3000/posts")
                    const { data } = result
                    dispatch(setPosts(data))
                }
                fetchPosts()
            }
        } catch (err) {
            console.log(err)
        }
    }, [dispatch])

    return (
        <div className="lg:w-[1280px] flex flex-wrap p-4 mx-auto items-center gap-4">
            {posts?.map((post, index) => (
                <motion.div key={v4()} className="bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl lg:flex-grow lg:w-1/4 mx-auto" initial={{ opacity: 0, y: 30 }} animate={postAnimation(index)}>
                    <BlogPost key={post.id} {...{ post }} />
                </motion.div>
            ))}
        </div>

    )
}