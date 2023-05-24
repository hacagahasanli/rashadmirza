import { ContactSection, Footer, Header } from "components"
import { useScrollToTop } from "hooks"

export const Contact = () => {
    useScrollToTop()
    return (
        <>
            <Header />
            <ContactSection />
            <Footer />
        </>
    )
}