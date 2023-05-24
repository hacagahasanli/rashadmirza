import { BlogPosts, Footer, Header, Title } from "components"
import { useScrollToTop } from "hooks"

export const Blog = () => {
    useScrollToTop()
    return <>
        <Header />
        <Title />
        <BlogPosts />
        <Footer />
    </>

}