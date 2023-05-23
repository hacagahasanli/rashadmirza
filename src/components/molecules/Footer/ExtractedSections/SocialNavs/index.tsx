import { memo } from "react"
import { IFooterNav } from "../../IFooter"
import { Link } from "react-router-dom"

export const SocialNavs = memo(({ social }: { social: IFooterNav[] }) => {
    return (
        <div className="mt-10 flex justify-center space-x-10">
            {social.map(({ name, href, icon }) => (
                <Link key={name} to={href} className="text-gray-400 hover:text-gray-900">
                    <span className="sr-only">{name}</span>
                    {icon}
                </Link>
            ))}
        </div>
    )
})