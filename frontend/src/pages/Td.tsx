import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { tdGame, tdStop } from "../scripts/td.ts";
import mana from "../assets/tower-defense/mana.png";
import addTower from "../assets/tower-defense/addTower.png";
import slime from "../assets/tower-defense/poop0.png"
import {Gamepad2, Zap} from "lucide-react";

export default function TowerDefense() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (canvasRef.current) {
            tdGame(canvasRef.current);
        }
        return () => {
           tdStop();
        };
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="w-full flex flex-col items-center pt-6 pb-12 px-4"
        >
            <div className="w-full grid grid-cols-1 2xl:grid-cols-[1fr_auto_1fr] gap-6 items-start">
                <div className="hidden 2xl:block"></div>
                <div className="flex justify-center items-center">
                    <canvas
                        className="shadow-2xl shadow-purple-900/20 dark:shadow-purple-800/50 max-w-full h-auto bg-neutral-950 rounded-xl border-4 border-neutral-200 dark:border-purple-500/20"
                        ref={canvasRef}
                        width="1200"
                        height="800"
                    ></canvas>
                </div>
                <div className="mx-auto 2xl:mx-0 w-full max-w-4xl 2xl:max-w-sm
                    bg-white dark:bg-purple-950/40 backdrop-blur-xl
                    p-8 rounded-3xl border-2 border-neutral-100 dark:border-white/10
                    shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-none">
                    <h2 className="text-center font-black text-3xl tracking-tighter uppercase mb-10
                        text-purple-800 dark:text-white">
                        How to play ?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-1 gap-10">
                        <div className="space-y-6">
                            <h3 className="text-sm font-black text-purple-800 dark:text-purple-400 flex items-center gap-2 uppercase tracking-widest">
                                <Gamepad2 size={20} strokeWidth={2.5} />
                                About the Game
                            </h3>
                            <span className="text-neutral-950 dark:text-neutral-200 text-sm font-bold">Use mana to create towers, defeat slimes and survive longer than your opponent!</span>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-sm font-black text-purple-800 dark:text-purple-400 flex items-center gap-2 uppercase tracking-widest">
                                <Zap size={20} strokeWidth={2.5} />
                                More details
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { img: mana, text: "Available mana, you gain it with time or by killing slimes"},
                                    { img: addTower, text: "Spawn a random tower, cost goes up everytime"},
                                    { img: slime, text: "Defeating a slime will spawn one for your opponent"}
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="p-2 shrink-0 bg-neutral-50 dark:bg-white/5 rounded-xl transition-transform group-hover:scale-110 border border-neutral-100 dark:border-transparent">
                                            <img src={item.img} alt="power-up icon" className="w-8 h-8 object-contain" />
                                        </div>
                                        <span className="text-neutral-950 dark:text-neutral-200 text-sm font-bold leading-tight">
                                            {item.text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}