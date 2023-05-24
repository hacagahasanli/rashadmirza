
import { Footer, Header, PostDetails } from "components";
import { useScrollToTop } from "hooks";

export const Post = () => {
    useScrollToTop()
    return (
        <>
            <Header />
            <PostDetails />
            <Footer />
        </>
    )
}
