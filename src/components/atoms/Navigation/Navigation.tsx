import { DESKTOP_NAV_CLASSES, MOBILE_NAV_CLASSES } from "../../../constants"
import { memo } from "react"
import { Link } from "react-router-dom"
import { INavigationsProp } from './INavigation';

export const Navigations = memo(({ navigation, mobile }: INavigationsProp) => {
    const { parentClass, linkClass } = mobile ? MOBILE_NAV_CLASSES : DESKTOP_NAV_CLASSES
    return (
        <div className={parentClass}>
            {navigation.map(({ name, href }) => (
                <Link key={name} to={href} className={linkClass}>
                    {name}
                </Link>
            ))}
        </div>
    )
})