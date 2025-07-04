import { motion } from 'framer-motion';

export default function Projects() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            <h2 className="text-3xl font-semibold mb-4">Mes projets</h2>
            <ul className="space-y-4">
                <li className="p-4 bg-gray-100 dark:bg-gray-800 rounded shadow">Projet 1 : Jeu en ligne</li>
                <li className="p-4 bg-gray-100 dark:bg-gray-800 rounded shadow">Projet 2 : Site e-commerce</li>
                <li className="p-4 bg-gray-100 dark:bg-gray-800 rounded shadow">Projet 3 : Application mobile</li>
            </ul>
        </motion.section>
    );
}