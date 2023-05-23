import { Footer, Header } from "components"
import { motion } from "framer-motion"
import { IImages } from "./IAbout"
import { sentence, textAnimation } from "utils"

export const About = () => {
    const stats = [
        { label: 'I love coding more than money, I write code because I love', value: '' },
        { label: 'Project completed in 6 countries', value: '170+' },
        { label: 'Students from all over the world', value: '5,000+' },
        { label: 'Achieved Daily Organic traffic', value: '300,000' },
    ]

    const images: IImages[] = [
        {
            id: "image2",
            icon: 'https://rashadmirza.com/images/languages/laravel.svg',
            delay: 3
        },
        {
            id: "image1",
            icon: 'https://rashadmirza.com/images/languages/react.svg',
            delay: 4
        },
        {
            id: "image4",
            icon: 'https://rashadmirza.com/images/languages/javascript.svg',
            delay: 6,
        },
        {
            id: "image3",
            icon: 'https://rashadmirza.com/images/languages/vuejs.svg',
            delay: 5
        },
    ]

    const titles = {
        line_one: 'Rashad Mirza',
        line_two: 'Lead senior developer, who spends his day by developing, tutoring and learning new languages',
        line_three: 'Developing since 2004'
    }

    const { line_one, line_two, line_three } = titles

    return (
        <div className="">
            <Header />
            <div className="w-full min-h-screen bg-gray-900 pb-12 font-bold ">
                <div className="px-6  lg:px-8 ">
                    <motion.div variants={sentence} initial="hidden" animate="visible" className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
                        <h2 className="text-4xl font-bold tracking-tight text-[#f88400] sm:text-6xl">
                            {textAnimation(line_one)}
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-white">{textAnimation(line_two)}</p>
                        <p className="mt-2 text-lg leading-8 text-white">{textAnimation(line_three)}</p>
                    </motion.div>
                </div>
                <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                        <div className="flex mx-auto flex-wrap justify-center items-center gap-16">
                            {images.map(({ id, icon }: IImages) => (
                                <motion.div
                                    key={id}
                                    className="w-[120px] h-[120px] flex flex-wrap items-center justify-center object-cover"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.3,
                                        ease: [0, 0.71, 0.2, 1.01],
                                        scale: {
                                            type: "spring",
                                            damping: 5,
                                            stiffness: 100,
                                            restDelta: 0.001
                                        }
                                    }}
                                >
                                    <img src={icon} alt="svg" className="w-full h-full" />
                                </motion.div>
                            ))}
                        </div>

                        <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
                            {stats.map((stat, statIdx) => (
                                <div key={statIdx} className="flex flex-col-reverse gap-y-3 border-l border-gray-300/20 pl-6">
                                    <dt className="text-base leading-7 text-gray-300">{stat.label}</dt>
                                    <dd className="text-3xl font-semibold tracking-tight text-gray-300">{stat.value}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}