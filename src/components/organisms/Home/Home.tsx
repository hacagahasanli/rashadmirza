import { Header, HomeInfo, BlogPosts, Footer } from "components"
import { useScrollToTop } from "hooks";

export const Home = () => {
    useScrollToTop()

    return <>
        <Header />
        <HomeInfo />
        <BlogPosts />
        <Footer />
    </>
}