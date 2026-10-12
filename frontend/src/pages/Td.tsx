import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    Gamepad2,
    ArrowLeft,
    RotateCcw,
    Shield,
    Sparkles,
    Coins,
    MousePointerClick
} from 'lucide-react';
import { tdGame, tdStop } from "../scripts/td.ts";
import mana from "../assets/tower-defense/mana.png";
import addTower from "../assets/tower-defense/addTower.png";
import slime from "../assets/tower-defense/poop0.png";

export default function TowerDefense() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [restartKey, setRestartKey] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (canvasRef.current) {
            tdGame(canvasRef.current);
        }
        return () => {
            tdStop();
        };
    }, [restartKey]);

    const handleRestart = () => {
        tdStop();
        setRestartKey(prev => prev + 1);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8 space-y-8"
        >
            {/* Top Navigation & Breadcrumb */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-neutral-200 dark:border-white/10">
                <div className="flex items-center gap-3">
                    <NavLink
                        to="/#projects"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all shadow-sm hover:scale-102 active:scale-98"
                    >
                        <ArrowLeft size={16} />
                        <span>Back to Projects</span>
                    </NavLink>

                    <span className="hidden sm:inline-block text-neutral-300 dark:text-neutral-700">•</span>

                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/20 inline-flex items-center gap-1.5">
                        <Gamepad2 size={14} />
                        Tactical Strategy • Canvas 2D
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-700 dark:text-purple-400 text-xs font-bold">
                        <span className="h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7] animate-pulse"></span>
                        <span>1v1 Arena Ready</span>
                    </div>

                    <button
                        onClick={handleRestart}
                        title="Restart the match"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold bg-purple-600 hover:bg-purple-500 text-white shadow-md shadow-purple-600/20 transition-all hover:scale-102 active:scale-98 cursor-pointer"
                    >
                        <RotateCcw size={15} />
                        <span>Restart Arena</span>
                    </button>
                </div>
            </div>

            {/* Game Arena Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left/Center: Canvas Screen Cabinet (7 cols on lg, 8 on xl) */}
                <div className="lg:col-span-7 xl:col-span-8 space-y-4">
                    {/* Screen Cabinet Frame */}
                    <div className="relative group">
                        {/* Ambient Neon Glow */}
                        <div className="absolute -inset-1.5 bg-gradient-to-r from-purple-600/30 via-pink-600/20 to-purple-600/30 rounded-3xl blur-2xl opacity-40 dark:opacity-60 pointer-events-none -z-10 group-hover:opacity-75 transition-opacity duration-500" />

                        <div className="bg-neutral-900 border-2 border-neutral-300 dark:border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-purple-950/20">
                            {/* Arcade Bezel Header */}
                            <div className="flex items-center justify-between px-5 py-3 bg-neutral-950 border-b border-neutral-800 text-neutral-400 text-xs font-mono">
                                <div className="flex items-center gap-2">
                                    <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block"></span>
                                    <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block"></span>
                                    <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block"></span>
                                    <span className="ml-2 font-bold text-neutral-300 uppercase tracking-wider text-[11px]">
                                        SLIME_DEFENDER_ARENA
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 text-[11px] font-semibold">
                                    <span className="hidden sm:inline-block text-neutral-500">1200 × 800 CANVAS 2D</span>
                                    <span className="px-2 py-0.5 rounded bg-purple-500/20 text-purple-300 font-bold">1v1 MULTIPLAYER</span>
                                </div>
                            </div>

                            {/* Canvas Container */}
                            <div className="relative bg-[#0d0d0d] flex items-center justify-center p-2 sm:p-4">
                                <canvas
                                    ref={canvasRef}
                                    width="1200"
                                    height="800"
                                    className="w-full h-auto aspect-[3/2] object-contain rounded-xl shadow-inner border border-white/5 bg-[#0d0d0d] cursor-pointer"
                                />
                            </div>

                            {/* Arcade Bottom Footer */}
                            <div className="flex items-center justify-between px-5 py-2.5 bg-neutral-950 border-t border-neutral-800/80 text-[11px] text-neutral-400 font-medium">
                                <span className="flex items-center gap-1.5 text-neutral-300">
                                    <MousePointerClick size={13} className="text-purple-400" />
                                    <span>Click towers on canvas to select & draft your deck</span>
                                </span>
                                <span className="hidden sm:inline-block text-neutral-500">
                                    A* pathfinding • Dynamic wave pressure
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Start Tip Box */}
                    <div className="p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 text-neutral-700 dark:text-neutral-300 text-xs flex items-center gap-3">
                        <MousePointerClick size={18} className="shrink-0 text-purple-600 dark:text-purple-400" />
                        <p className="leading-relaxed">
                            <strong>Comment démarrer :</strong> Clique directement sur l'écran de jeu pour choisir <strong>5 rochers</strong> pour composer ton deck (ou clique sur le dé pour un choix aléatoire), puis clique sur <strong>« Click to start »</strong> en bas au centre !
                        </p>
                    </div>
                </div>

                {/* Right: Tactical Guide Deck (5 cols on lg, 4 on xl) */}
                <div className="lg:col-span-5 xl:col-span-4 space-y-5">
                    {/* Strategy Guide Card */}
                    <div className="bg-white dark:bg-purple-950/25 backdrop-blur-xl border-2 border-neutral-100 dark:border-white/10 rounded-3xl p-6 sm:p-7 shadow-xl shadow-purple-900/5 space-y-5">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-black text-neutral-900 dark:text-white uppercase tracking-tight flex items-center gap-2.5">
                                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                                    <Shield size={18} />
                                </div>
                                Tactical Rules
                            </h3>
                            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-300">
                                Strategy
                            </span>
                        </div>

                        {/* Rules Steps */}
                        <div className="space-y-3 text-xs leading-relaxed">
                            <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/5 space-y-1">
                                <div className="flex items-center gap-2 font-bold text-neutral-900 dark:text-white">
                                    <span className="h-5 w-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px]">1</span>
                                    Deck Building Phase
                                </div>
                                <p className="text-neutral-500 dark:text-neutral-400 text-[11px] pl-7">
                                    Compose your hand with 5 unique towers. Balance single-target burst, splash AoE, and slow debuffs.
                                </p>
                            </div>

                            <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/5 space-y-1">
                                <div className="flex items-center gap-2 font-bold text-neutral-900 dark:text-white">
                                    <span className="h-5 w-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px]">2</span>
                                    Mana Economy & Summoning
                                </div>
                                <p className="text-neutral-500 dark:text-neutral-400 text-[11px] pl-7">
                                    Spend mana to place defensive towers on your grid or upgrade existing ranks. Summoning costs increase incrementally.
                                </p>
                            </div>

                            <div className="p-3.5 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/5 space-y-1">
                                <div className="flex items-center gap-2 font-bold text-neutral-900 dark:text-white">
                                    <span className="h-5 w-5 rounded-full bg-purple-600 text-white flex items-center justify-center text-[10px]">3</span>
                                    Competitive Retaliation
                                </div>
                                <p className="text-neutral-500 dark:text-neutral-400 text-[11px] pl-7">
                                    Every slime slain on your board spawns a slime on your opponent's lane! Outlast your rival before your 3 hearts deplete.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Resources & Items Card */}
                    <div className="bg-white dark:bg-purple-950/25 backdrop-blur-xl border-2 border-neutral-100 dark:border-white/10 rounded-3xl p-6 sm:p-7 shadow-xl shadow-purple-900/5 space-y-4">
                        <h3 className="text-lg font-black text-neutral-900 dark:text-white uppercase tracking-tight flex items-center gap-2.5">
                            <div className="p-2 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                                <Coins size={18} />
                            </div>
                            Core Elements
                        </h3>

                        <div className="space-y-3 pt-1">
                            {[
                                {
                                    img: mana,
                                    title: "Mana Pool",
                                    desc: "Replenishes continuously over time and awards bonus mana for every slime destroyed."
                                },
                                {
                                    img: addTower,
                                    title: "Tower Summoner",
                                    desc: "Deploys a randomized tower from your chosen 5-rock deck onto an open tile."
                                },
                                {
                                    img: slime,
                                    title: "Slime Hostiles",
                                    desc: "Fast marching creeps. Eliminating them exerts pressure on the rival lane."
                                }
                            ].map((item, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-3.5 p-3 rounded-2xl bg-neutral-50 dark:bg-white/5 border border-neutral-100 dark:border-white/5 hover:border-purple-200 dark:hover:border-purple-500/30 transition-all group"
                                >
                                    <div className="p-2 shrink-0 bg-white dark:bg-neutral-900 rounded-xl shadow-sm border border-neutral-200 dark:border-white/10 group-hover:scale-110 transition-transform">
                                        <img src={item.img} alt={item.title} className="w-7 h-7 object-contain" />
                                    </div>
                                    <div className="min-w-0">
                                        <h4 className="text-xs font-bold text-neutral-900 dark:text-white">
                                            {item.title}
                                        </h4>
                                        <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-snug">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Engineering & Physics Spec Card */}
                    <div className="p-5 rounded-3xl bg-neutral-100/80 dark:bg-white/5 border border-neutral-200 dark:border-white/10 space-y-2.5 text-xs text-neutral-600 dark:text-neutral-400">
                        <div className="flex items-center gap-2 font-bold text-neutral-900 dark:text-white text-xs uppercase tracking-wider">
                            <Sparkles size={14} className="text-purple-600" />
                            Multiplayer & Mechanics
                        </div>
                        <p className="leading-relaxed text-[11px]">
                            Engineered in TypeScript with pure Canvas rendering, synchronized state machines, animated sprite matrices, and WebSocket matchmaking.
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}