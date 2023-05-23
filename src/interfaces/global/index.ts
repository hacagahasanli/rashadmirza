export interface INavigation {
    name:string;
    href:string;
}

export interface IBlogPosts {
    id?: string;
    title: string;
    description: string;
}

export interface IHamburgerState {
    common: {
        isOpenHamburger: boolean
    }
}
