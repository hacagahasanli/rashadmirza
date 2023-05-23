import { DESKTOP_NAV_CLASSES, MOBILE_NAV_CLASSES } from "../../../constants"
import { memo } from "react"
import { Link } from "react-router-dom"
import { INavigationsProp } from './INavigation';
import { openHamburger } from "store";
import { useDispatch, useSelector } from "react-redux";
import { IHamburgerState } from "interfaces";

export const Navigations = memo(({ navigation, mobile }: INavigationsProp) => {
    const { parentClass, linkClass } = mobile ? MOBILE_NAV_CLASSES : DESKTOP_NAV_CLASSES
    const { isOpenHamburger } = useSelector((state: IHamburgerState) => state.common)
    const dispatch = useDispatch()

    const hamburgerHandler = () => {
        if(mobile && isOpenHamburger)
            dispatch(openHamburger(false))
    }   

    return (
        <div className={parentClass}>
            {navigation?.map(({ name, href }) => (
                <Link key={name} to={href} className={linkClass} onClick={hamburgerHandler}>
                    {name}
                </Link>
            ))}
        </div>
    )
})