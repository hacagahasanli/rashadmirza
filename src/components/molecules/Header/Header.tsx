import { Navigations, Logo, Hamburger, MainMenu } from 'components'

export const Header = () => {
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ]
    return (
        <header className="bg-gray-400 fixed top-0 left-0 right-0 z-10">
            <nav className="mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <Logo />
                <MainMenu />
                <Navigations {...{ navigation }} mobile={false} />
            </nav>
            <Hamburger {...{ navigation }} />
        </header>
    )
}