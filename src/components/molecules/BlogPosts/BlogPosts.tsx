import { BlogPost } from "components"
import { IBlogPosts } from 'interfaces';

export const BlogPosts = () => {
    const posts: IBlogPosts[] = [
        {
            id: "blog1",
            title: "Git Cheat Sheet",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        },
        {
            id: "blog2",
            title: "Git Cheat Sheet",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        },
        {
            id: "blog3",
            title: "Git Cheat Sheet",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        },
        {
            id: "blog4",
            title: "Git Cheat Sheet",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        },
        {
            id: "blog5",
            title: "Git Cheat Sheet",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        },
        {
            id: "blog6",
            title: "Git Cheat Sheet",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
        },
    ]
    return (
        <div className="lg:w-[1280px] flex flex-wrap p-4 mx-auto items-center gap-4">
            {posts.map((post) => <BlogPost key={post.id} {...{ post }} />)}
        </div>
    )
}