import { BlogPost } from "components"
import { posts } from "mocks";

export const BlogPosts = () => {
    return (
        <div className="lg:w-[1280px] flex flex-wrap p-4 mx-auto items-center gap-4">
            {posts.map((post) => <BlogPost key={post.id} {...{ post }} />)}
        </div>
    )
}