import { AnimatedImg, AnimatedText, Stats } from "components"


export const SectionWrapper = () => {
    return (
        <div className="w-full min-h-screen bg-gray-900 pb-12 font-bold ">
            <AnimatedText />
            <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <AnimatedImg />
                    <Stats />
                </div>
            </div>
        </div>
    )
}