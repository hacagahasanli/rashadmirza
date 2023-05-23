import { BlogPost } from "components"
import { posts } from "mocks";
import { motion } from 'framer-motion';
import { v4 } from "uuid"
import { postAnimation } from "utils";


export const BlogPosts = () => {
    return (
        <div className="lg:w-[1280px] flex flex-wrap p-4 mx-auto items-center gap-4">
            {posts.map((post, index) => (
                <motion.div key={v4()} className="bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl lg:flex-grow lg:w-1/4 mx-auto" initial={{ opacity: 0,y:30 }} animate={postAnimation(index)}>
                    <BlogPost key={post.id} {...{ post }} />
                </motion.div>
            ))}
        </div>

    )
}