import { Footer, Header } from "components"
import { SectionWrapper } from "./ExtractedSections"
import { useScrollToTop } from "hooks"

export const About = () => {
    useScrollToTop()
    return (
        <>
            <Header />
            <SectionWrapper />
            <Footer />
        </>
    )
}