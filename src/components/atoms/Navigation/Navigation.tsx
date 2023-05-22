import { INavigation } from "interfaces"
import { memo } from "react"
import { Link } from "react-router-dom"

export const Navigations = memo(({ navigation }: { navigation: INavigation[] }) => {
    return (
        <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map(({ name, href }) => (
                <Link key={name} to={href} className="text-sm font-semibold leading-6 text-gray-900">
                    {name}
                </Link>
            ))}
        </div>
    )
})