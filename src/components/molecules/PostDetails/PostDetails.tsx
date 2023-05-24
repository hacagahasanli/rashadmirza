import { Link } from "react-router-dom"
import { randomBadgeGenerator } from "utils"

export const PostDetails = () => {
    const tags = [
        '#Git Cheat Sheet',
        '#Git Commands',
        '#Git Commit',
        '#Git rebase ',
        '#Git merge ',
        '#Git Pull Request',
        '#Git for beginners'
    ]

    const posts = [
        {
            title: 'Boost your conversion rate',
            href: '#',
            description:
                'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
            date: 'Mar 16, 2020',
            datetime: '2020-03-16',
        },
        {
            title: 'How to use search engine optimization to drive sales',
            href: '#',
            description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
            date: 'Mar 10, 2020',
            datetime: '2020-03-10',
        },
        {
            title: 'Improve your customer experience',
            href: '#',
            description:
                'Cupiditate maiores ullam eveniet adipisci in doloribus nulla minus. Voluptas iusto libero adipisci rem et corporis.',
            date: 'Feb 12, 2020',
            datetime: '2020-02-12',
        },
        {
            title: 'Writing effective landing page copy',
            href: '#',
            description:
                'Ipsum voluptates quia doloremque culpa qui eius. Id qui id officia molestias quaerat deleniti. Qui facere numquam autem libero quae cupiditate asperiores vitae cupiditate. Cumque id deleniti explicabo.',
            date: 'Jan 29, 2020',
            datetime: '2020-01-29',
        },
    ]

    return (
        <div className="flex lg:justify-between">
            <div className="min-w-full mt-[8rem] flex flex-col justify-center items-center gap-[2rem]">
                <div className="bg-white px-6 py-8 sm:w-full lg:flex-shrink-0 lg:w-1/2 mx-auto flex flex-col gap-4">
                    <div className="flex-shrink-0">
                        <img src={"https://rashadmirza.com/storage/blog_photos/13.jpg"} alt="" className="h-[25rem] w-full object-cover" />
                    </div>
                    <strong className="text-[3rem]">Git Cheat Sheet</strong>
                    <div className="flex gap-2 flex-wrap ">
                        {tags.map((tag: string, index: number) => {
                            return <span key={tag + index} className={`inline-flex font-semibold rounded-md px-2 py-1 text-md ring-1 ring-inset ${randomBadgeGenerator()}`}>
                                {tag}
                            </span>
                        })}
                    </div>
                    <div className="mt-6 flex items-center">
                        <div className="flex-shrink-0">
                            <Link to={"/"}>
                                <span className="sr-only">{"Rashad Mirza"}</span>
                                <img className="h-10 w-10 rounded-full" src={'https://rashadmirza.com/images/user/1.png'} alt="" />
                            </Link>
                        </div>
                        <div className="ml-3">
                            <p className="text-md font-medium text-gray-900">
                                <Link to={'/'} className="hover:underline">
                                    {"Rashad Mirza"}
                                </Link>
                            </p>
                            <div className="flex space-x-1 text-md text-gray-500">
                                <time dateTime={"2022-11-03"}>{"Nov 3, 2022"}</time>
                                <span aria-hidden="true">&middot;</span>
                                <span>{"2 hours"} read</span>
                            </div>
                        </div>
                    </div>
                    <pre className="font-inter">{"Blog content loading...."}</pre>
                    <div className="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12 mx-auto max-w-[1080px]">
                        {posts.map((post) => (
                            <div key={post.title} className="relative">
                                <p className="text-sm text-gray-500">
                                    <time dateTime={post.datetime}>{post.date}</time>
                                </p>
                                <a href="#" className="mt-2 block">
                                    <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                    <p className="mt-3 pb-8 text-base text-gray-500">{post.description.substring(0,100)}</p>
                                </a>
                                <div className="absolute bottom-0 mx-auto">
                                    <Link to={post.href} className="text-base font-semibold text-indigo-600 hover:text-indigo-500">
                                        Read full blog
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}