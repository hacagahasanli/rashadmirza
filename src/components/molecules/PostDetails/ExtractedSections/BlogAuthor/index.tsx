import { Link } from "react-router-dom"

export const BlogAuthor = () => {
    return (
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
    )
}