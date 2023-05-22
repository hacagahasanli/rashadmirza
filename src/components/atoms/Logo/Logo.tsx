import { logo_white } from "assets"

export const Logo = () => {
    return (
        <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src={'https://rashadmirza.com/images/logo/logo-white.png'} alt="" />
            </a>
        </div>
    )
}