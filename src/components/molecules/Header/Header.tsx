import { Navigations, Logo, Hamburger, MainMenu } from 'components'

export const Header = () => {
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'Blog', href: '/blog' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <header className="bg-gray-900">
            <nav className="mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <Logo />
                <MainMenu />
                <Navigations {...{ navigation }} mobile={false} />
            </nav>
            <Hamburger {...{ navigation }} />
        </header>
    )
}