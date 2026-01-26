import { motion } from 'framer-motion';
import {NavLink} from "react-router-dom";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../components/Card"
import pongIcon from '../assets/pongIcon.png';
import tdIcon from '../assets/tdIcon.png';

export default function Projects() {
    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="py-32 flex justify-center items-stretch gap-12">
                <NavLink to="/projects/Pong">
                    <Card className="flex-1 max-w-sm">
                        <img src={pongIcon}></img>
                        <CardHeader>
                            <CardTitle>Pong</CardTitle>
                            <CardDescription>Classic pong game with local play</CardDescription>
                        </CardHeader>
                        <CardContent className="text-justify">
                            <p className="pb-2">Use your paddle to send back the ball and score points if you opponent miss it. First to 6 wins !</p>
                            <p>Project made for Transcendence from 42 common-core</p>
                        </CardContent>
                    </Card>
                </NavLink>
                <NavLink to="/projects/TowerDefense">
                    <Card className="flex-1 max-w-sm">
                        <img src={tdIcon}></img>
                        <CardHeader>
                            <CardTitle>Slime Defender</CardTitle>
                            <CardDescription>1 versus 1 tower defense game</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="pb-2">Use mana to create towers, defeat slimes and survive longer than your opponent!</p>
                            <p>Project made for Transcendence from 42 common-core</p>
                        </CardContent>
                    </Card>
                </NavLink>
            </div>
        </motion.section>
    );
}