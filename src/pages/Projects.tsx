import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <canvas id="gameCanvas" width="1200" height="800"></canvas>
            { import('../scripts/test.ts') && true }
        </motion.section>
    );
}