import { motion } from 'framer-motion';
import mePic from '../assets/meResize.jpeg';

export default function Home() {
    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex w-screen h-screen">
                <div className="flex-1 mb-4 Px-100">
                    <h2 className="text-3xl font-semibold">Bienvenue !</h2>
                    TEST
                </div>
                <div className="flex-2">
                    <img src={mePic} alt={'mePic'} className=" h-full w-full object-cover -mask-linear-70 mask-linear-from-60% mask-linear-to-80%" />
                </div>
            </div>
        </motion.section>
    );
}