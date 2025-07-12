import { motion } from 'framer-motion';

export default function Experiences() {
    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <h2 className="text-3xl font-semibold mb-4">Bienvenue !</h2>
            <p>Je suis développeur web spécialisé en React, TypeScript et interfaces modernes. Voici mon portfolio.</p>
        </motion.section>
    );
}