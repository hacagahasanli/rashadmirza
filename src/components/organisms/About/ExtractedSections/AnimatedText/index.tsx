import { motion } from 'framer-motion';
import { sentence, textAnimation } from 'utils';


export const AnimatedText = () => {
    const titles = {
        line_one: 'Rashad Mirza',
        line_two: 'Lead senior developer, who spends his day by developing, tutoring and learning new languages',
        line_three: 'Developing since 2004'
    }

    const { line_one, line_two, line_three } = titles
    
    return (
        <motion.div variants={sentence} initial="hidden" animate="visible" className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
            <h2 className="text-4xl font-bold tracking-tight text-[#f88400] sm:text-6xl">
                {textAnimation(line_one)}
            </h2>
            <p className="mt-6 text-lg leading-8 text-white">{textAnimation(line_two)}</p>
            <p className="mt-2 text-lg leading-8 text-white">{textAnimation(line_three)}</p>
        </motion.div>
    )
}