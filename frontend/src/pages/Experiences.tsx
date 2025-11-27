import { motion } from 'framer-motion';

export default function Experiences() {
    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        ><div className="flex pt-16">
            <div className="flex-1 mx-4 bg-purple-600/50 p-4 rounded-lg border border-purple-600/70">
                <p>Je suis développeur web spécialisé en React, TypeScript et interfaces modernes. Voici mon portfolio.</p>
            </div>
        </div>
        </motion.section>
    );
}