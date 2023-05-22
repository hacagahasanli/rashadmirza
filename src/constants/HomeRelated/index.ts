export const MOBILE_NAV_CLASSES = {
    parentClass: "space-y-2 py-6",
    linkClass: "-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800"
}

export const DESKTOP_NAV_CLASSES = {
    parentClass: "hidden lg:flex lg:gap-x-12",
    linkClass: "text-sm font-semibold leading-6 text-white"
}

export const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
]