import { memo } from "react"
import { IBlogPostProp } from './IBlogPost';

export const BlogPost = ({ post }:IBlogPostProp) => {
    const { title, description } = post
    return (
        <div className="bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl lg:flex-grow lg:w-1/4 mx-auto">
            <div>
                <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                    <img src={"https://rashadmirza.com/storage/blog_photos/13.jpg"} alt="" />
                </span>
            </div>
            <h3 className="text-slate-900  text-base font-medium tracking-tight mt-4">{title}</h3>
            <p className="text-slate-500  mt-2 text-sm">{description}</p>
        </div>
    )
}