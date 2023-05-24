import { motion } from 'framer-motion';
import { IImages } from '../IExtractedSection';


export const AnimatedImg = () => {
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
    
    return (
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
    )
}