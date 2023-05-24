import { Link } from "react-router-dom"

export const RelatedPosts = () => {
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
            title: 'How to use search engine optimization',
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
        <div className="mx-auto flex flex-col items-center">
            <h3 className="font-semibold text-[2rem] mt-8">Related Posts</h3>
            <div className="mt-6 grid gap-16 pt-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12 mx-auto max-w-[1080px]">
                {posts.map((post) => (
                    <div key={post.title} className="relative">
                        <p className="text-sm text-gray-500">
                            <time dateTime={post.datetime}>{post.date}</time>
                        </p>
                        <a href="#" className="mt-2 block">
                            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                            <p className="mt-3 pb-8 text-base text-gray-500">{post.description.substring(0, 100)}</p>
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
    )
}