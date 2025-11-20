import { motion } from 'framer-motion';

export default function Experiences() {
    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="ml-2 mr-2 bg-accent2/10 p-4 rounded-lg border border-accent2/20">
                <p>Je suis développeur web spécialisé en React, TypeScript et interfaces modernes. Voici mon portfolio.</p>
            </div>
        </motion.section>
    );
}