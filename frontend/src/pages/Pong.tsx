import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { pongGame, pongStop } from "../scripts/pong.ts";
import barUp from "../assets/pong/barup.png";
import barDown from "../assets/pong/bardown.png";
import ballUp from "..//assets/pong/ballup.png";

export default function Pong() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (canvasRef.current) {
            pongGame(canvasRef.current, 'local');
        }
        return () => {
            pongStop();
        };
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="pb-16">
                <div className="flex py-16 justify-center items-center w-full">
                    <canvas className="shadow-game shadow-purple-800/50" ref={canvasRef} width="1200" height="800"></canvas>
                </div>
                <div className="flex flex-col mx-50 bg-purple-800/50 dark:bg-purple-800/30 p-4 rounded-lg border-3 border-purple-800/50 dark:border-purple-800/30">
                    <h2 className="text-center font-semibold text-3xl">How to play ?</h2>
                    <div className="flex flex-line">
                        <div className="flex-1">
                            <p className="text-center font-normal text-xl">Moving the paddle</p>
                        </div>
                        <div className="flex-1 items-center justify-center">
                            <p className="text-center font-normal text-xl">Power-Up Cheatsheet</p>
                            <img src={barUp} alt="Bar Up" />Increase the paddle size of the player who striked this power-up
                            <img src={barDown} alt="Bar Down" />Reduce the paddle size of the player who striked this power-up
                            <img src={ballUp} alt="Ball Up" />Increase ball speed
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}