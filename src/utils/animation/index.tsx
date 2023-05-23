import { motion } from 'framer-motion';


export const sentence = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.03
        }
    }
}


export const letter = {
    hidden: { opacity: 0, y: 0 },
    visible: {
        opacity: 1,
        y: 0
    }
}

export const textAnimation = (value: string) => {
    return value.split("").map((char: string, index: number) => (
        <motion.span key={char + index} variants={letter}>
            {char}
        </motion.span>
    ))
}


export const postAnimation = (index:number) => {
    return { opacity: 1, y:0, transition: { duration: 1.2, delay: index/8 } }
}