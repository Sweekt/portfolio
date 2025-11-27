import { motion } from 'framer-motion';
import mePic from '../assets/meRound.png';
import {GitHubLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons";

export default function Home() {
    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="flex h-screen">
                <div className="flex-2 mb-4 flex flex-col justify-center pl-30">
                    <h2 className="text-6xl font-semibold">Benjamin <span className="text-purple-600 font-bold">"Sweek"</span> Roy</h2><br/>
                    <h1 className="text-2xl font-medium">Student at 42 Lyon.
                    <span className="text-2xl font-light"> Software developper with a creative touch.</span>
                    </h1>
                    <h1 className="flex -ml-4 pt-6">
                        <a href="https://www.linkedin.com/in/benjamin-roy22" target="_blank" rel="noopener noreferrer" className="ml-4 hover:text-yellow-500 dark:hover:text-yellow-400"><LinkedInLogoIcon width={30} height={30}/></a>
                        <a href="https://github.com/Sweekt" target="_blank" rel="noopener noreferrer" className="ml-4 hover:text-yellow-500 dark:hover:text-yellow-400"><GitHubLogoIcon width={30} height={30}/></a>
                    </h1>
                </div>
                <div className="flex-1 h-full flex items-center">
                    <img src={mePic} alt={'mePic'} className="border-rounded h-2/5 object-cover rounded-full shadow-2xl shadow-neutral-950 dark:shadow-neutral-950" />
                </div>
            </div>
        </motion.section>
    );
}