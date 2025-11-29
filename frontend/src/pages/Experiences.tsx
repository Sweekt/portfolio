import { motion } from 'framer-motion';

export default function Experiences() {
    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        ><div className="flex flex-col py-32 px-16 gap-12">
            <div className="pl-16 text-left text-4xl font-semibold">
                Experiences
            </div>
            <div className="flex flex-line gap-12">
                <div className="flex-1 bg-purple-800/50 dark:bg-purple-800/30 p-4 rounded-lg border-3 border-purple-800/50 dark:border-purple-800/30">
                    <p className="text-center font-medium text-3xl">School</p>
                </div>
                <div className="flex-1 bg-purple-800/50 dark:bg-purple-800/30 p-4 rounded-lg border-3 border-purple-800/50 dark:border-purple-800/30">
                    <p className="text-center font-medium text-3xl">Professional</p>
                </div>
            </div>
        </div>
        </motion.section>
    );
}