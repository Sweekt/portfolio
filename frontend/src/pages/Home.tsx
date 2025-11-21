import { motion } from 'framer-motion';
import mePic from '../assets/me.jpeg';

export default function Home() {
    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex h-screen">
                <h2 className="text-3xl font-semibold mb-4">Bienvenue !</h2>
                <img src={mePic} alt={'mePic'} className="h-full w-full object-cover -mask-linear-70 mask-linear-from-60% mask-linear-to-80%" />
            </div>
        </motion.section>
    );
}