import { motion } from 'framer-motion';
import {NavLink} from "react-router-dom";

export default function Projects() {
    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="flex justify-center items-stretch gap-10">
                <div className="flex-1 ml-2 mr-2 bg-accent2/10 p-4 rounded-lg border border-accent2/20">
                    <NavLink to="/projects/Pong" className="text-3xl font-semibold mb-4">Play Pong</NavLink>
                </div>
                <div className="flex-1 ml-2 mr-2 bg-accent2/10 p-4 rounded-lg border border-accent2/20">
                    <NavLink to="/projects/Pong" className="text-3xl font-semibold mb-4">Play Tower Defense</NavLink>
                </div>
            </div>
        </motion.section>
    );
}