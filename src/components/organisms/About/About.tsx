import { Footer, Header } from "components"
import { Stats, AnimatedImg, AnimatedText } from "./ExtractedSections"

export const About = () => (
    <>
        <Header />
        <div className="w-full min-h-screen bg-gray-900 pb-12 font-bold ">
            <div className="px-6  lg:px-8 ">
                <AnimatedText />
            </div>
            <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <AnimatedImg />
                    <Stats />
                </div>
            </div>
        </div>
        <Footer />
    </>
)