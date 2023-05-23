import { INavigation } from "interfaces"
import { memo } from "react"
import { Link } from "react-router-dom"

interface IMainNavsProps{
    main:INavigation[]
}

export const MainNavs = memo(({ main }:IMainNavsProps) => {
    return (
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
            {main.map(({ name, href }: INavigation) => (
                <div key={name} className="pb-6 ">
                    <Link to={href} className="text-md flex font-semibold justify-center leading-6 text-gray-600 text-center hover:text-gray-900">
                        {name}
                    </Link>
                </div>
            ))}
        </nav>
    )
})