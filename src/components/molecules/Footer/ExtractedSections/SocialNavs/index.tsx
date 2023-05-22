import { IFooterNav } from "../../IFooter"

export const SocialNavs = ({ social }: { social: IFooterNav[] }) => {
    return (
        <div className="mt-10 flex justify-center space-x-10">
            {social.map(({ name, href, icon }) => (
                <a key={name} href={href} className="text-gray-400 hover:text-white">
                    <span className="sr-only">{name}</span>
                    {icon}
                </a>
            ))}
        </div>
    )
}