import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import {
    Gamepad2,
    Zap
} from 'lucide-react';
import { pongGame, pongStop } from "../scripts/pong.ts";
import barUp from "../assets/pong/barup.png";
import barDown from "../assets/pong/bardown.png";
import ballUp from "../assets/pong/ballup.png";

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
            className="w-full flex flex-col items-center pt-6 pb-12 px-4"
        >
            <div className="w-full grid grid-cols-1 2xl:grid-cols-[1fr_auto_1fr] gap-10 items-start">
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
                                Controls
                            </h3>
                            <div className="space-y-5">
                                <div className="flex items-center justify-between bg-neutral-50 dark:bg-white/5 p-3 rounded-2xl border border-neutral-100 dark:border-transparent">
                                    <div className="flex gap-1">
                                        <kbd className="px-3 py-1.5 bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl text-sm font-bold text-neutral-950 dark:text-white shadow-sm">W</kbd>
                                        <kbd className="px-3 py-1.5 bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl text-sm font-bold text-neutral-950 dark:text-white shadow-sm">S</kbd>
                                    </div>
                                    <span className="text-neutral-950 dark:text-neutral-200 text-sm font-bold">Left Player</span>
                                </div>
                                <div className="flex items-center justify-between bg-neutral-50 dark:bg-white/5 p-3 rounded-2xl border border-neutral-100 dark:border-transparent">
                                    <div className="flex gap-1">
                                        <kbd className="px-3 py-1.5 bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl text-sm font-bold text-neutral-950 dark:text-white shadow-sm">▲</kbd>
                                        <kbd className="px-3 py-1.5 bg-white dark:bg-neutral-800 border-2 border-neutral-200 dark:border-neutral-700 rounded-xl text-sm font-bold text-neutral-950 dark:text-white shadow-sm">▼</kbd>
                                    </div>
                                    <span className="text-neutral-950 dark:text-neutral-200 text-sm font-bold">Right Player</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <h3 className="text-sm font-black text-purple-800 dark:text-purple-400 flex items-center gap-2 uppercase tracking-widest">
                                <Zap size={20} strokeWidth={2.5} />
                                Power-Ups
                            </h3>
                            <div className="space-y-4">
                                {[
                                    { img: barUp, text: "Increase paddle size"},
                                    { img: barDown, text: "Reduce paddle size"},
                                    { img: ballUp, text: "Increase ball speed"}
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