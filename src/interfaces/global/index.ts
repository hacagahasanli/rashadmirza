export interface INavigation {
    name:string;
    href:string;
}

export interface IBlogPosts {
    id?: string;
    title: string;
    description: string;
    img?:string;
    date?:string;
}

export interface IHamburgerState {
    common: {
        isOpenHamburger: boolean
    }
}
