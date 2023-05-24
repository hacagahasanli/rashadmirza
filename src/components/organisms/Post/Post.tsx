import { useParams, Await, useLoaderData, defer, Link } from "react-router-dom"
import { Suspense } from "react"
import axios from 'axios';
import { IBlogPosts } from 'interfaces';
import { Footer, Header } from "components";

export const Post = () => {

    // const { date, detailedInformation, description, title, id }: any = useLoaderData()

    return (
        <div>
            <Header />
            <div className="min-w-[780px]">
                {/* <Suspense>
                <Await resolve={detailedInformation}> */}
                <div className="bg-white rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl lg:flex-grow lg:w-1/4 mx-auto">
                    <img src={"https://rashadmirza.com/storage/blog_photos/13.jpg"} alt="" className="w-full" />
                </div>
                {/* </Await>
            </Suspense> */}
            </div>
            <Footer />
        </div>
    )
}

// const getSelectedPost = async (postId: string) => {
//     const post = await axios.get(`${postId}`)
//     return post;
// }

// export const getPostLoader = async ({ params }: any) => {
//     const { postId } = params;
//     console.log(postId, "POST ID")

//     return defer({ post: getSelectedPost(postId), postId })
// }