import { IBlogPostProp } from './IBlogPost';

export const BlogPost = ({ post }:IBlogPostProp) => {
    const { title, description } = post
    return (
        <>
            <div>
                <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                    <img src={"https://rashadmirza.com/storage/blog_photos/13.jpg"} alt="" />
                </span>
            </div>
            <h3 className="text-slate-900  text-base font-semibold tracking-tight mt-4">{title}</h3>
            <p className="text-slate-500  mt-2 text-sm">{description}</p>
        </>
    )
}