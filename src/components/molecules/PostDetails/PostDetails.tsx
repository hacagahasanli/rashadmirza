import { preMockBlogData } from "../../../constants/GlobalRelated"
import { BlogAuthor, RelatedPosts, Tags } from "./ExtractedSections"

export const PostDetails = () => {
    return (
        <div className="flex lg:justify-between">
            <div className="min-w-full mt-[8rem] flex flex-col justify-center items-center gap-[2rem]">
                <div className="bg-white px-6 py-8 sm:w-full lg:flex-shrink-0 lg:w-1/2 mx-auto flex flex-col gap-4">
                    <div className="flex-shrink-0">
                        <img src={"https://rashadmirza.com/storage/blog_photos/13.jpg"} alt="" className="h-[25rem] w-full object-cover" />
                    </div>
                    <strong className="text-[3rem]">Git Cheat Sheet</strong>
                    <Tags />
                    <BlogAuthor />
                    <pre className="font-inter">{preMockBlogData}</pre>
                    <RelatedPosts />
                </div>
            </div>
        </div>
    )
}