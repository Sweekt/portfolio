import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from "react-router-dom";
import {
    Gamepad2,
    Play,
    Sparkles,
    Info,
    X,
    CheckCircle2
} from 'lucide-react';
import { useState, useEffect } from 'react';
import pongIcon from '../assets/pongIcon.png';
import tdIcon from '../assets/tdIcon.png';
import smIcon from '../assets/smIcon.png';

interface ProjectStatus {
    [key: string]: boolean;
}

interface ProjectData {
    id: string;
    title: string;
    subtitle: string;
    category: 'web-game' | 'engine-game';
    categoryLabel: string;
    icon: string;
    tech: string[];
    summary: string;
    details: string;
    highlights: string[];
    path: string;
    isAlwaysPlayable?: boolean;
}

const PROJECTS_DATA: ProjectData[] = [
    {
        id: 'Pong',
        title: 'Pong Game',
        subtitle: 'Classic retro arcade reimagined with Canvas & WebSockets',
        category: 'web-game',
        categoryLabel: 'HTML5 Canvas • Real-time',
        icon: pongIcon,
        tech: ['TypeScript', 'Canvas API', 'WebSocket', 'Tailwind CSS'],
        summary: 'A fast-paced local and multiplayer Pong game with smooth paddle physics and score tracking.',
        details: 'Developed as part of the 42 Common Core curriculum. Features zero-dependency Canvas rendering, local 2-player controls, collision physics with angle reflections, and an optional real-time WebSocket backend for online matches.',
        highlights: [
            'Zero-dependency Canvas 2D engine',
            'Full local 2-player mode directly playable in browser',
            'WebSocket multiplayer protocol',
            'First to 6 points victory condition'
        ],
        path: '/projects/Pong',
        isAlwaysPlayable: true
    },
    {
        id: 'Tower Defense',
        title: 'Slime Defender',
        subtitle: 'Competitive 1vs1 multiplayer Tower Defense',
        category: 'web-game',
        categoryLabel: 'Canvas 2D • Multiplayer',
        icon: tdIcon,
        tech: ['TypeScript', 'Canvas API', 'WebSocket', 'State Machine'],
        summary: 'Defend your base against waves of slimes using tactical towers, manage your mana, and outlast your opponent.',
        details: 'A competitive 1v1 strategic game built with TypeScript. Players manage resource generation (mana), place defensive magical towers with distinct ranges, and try to overwhelm or survive longer than their rival.',
        highlights: [
            'Dynamic pathfinding and slime wave spawning',
            'Mana economy and tower upgrade mechanics',
            'Synchronized 1v1 multiplayer state via WebSockets',
            'Interactive control and custom pixel sprites'
        ],
        path: '/projects/TowerDefense',
        isAlwaysPlayable: true
    },
    {
        id: 'JRPG',
        title: 'Silver Moon',
        subtitle: 'Indie turn-based JRPG crafted in Unity & C#',
        category: 'engine-game',
        categoryLabel: 'Unity • C# • Pixel Art',
        icon: smIcon,
        tech: ['Unity', 'C#', '2D Tilemap', 'Turn-Based Combat'],
        summary: 'Explore the mysteries of Hyward, gather spells, meet allies, and battle foes in charming handcrafted pixel art.',
        details: 'An ambitious indie project created with Unity and C#. Features turn-based combat with spell synergy, dialogue systems, handcrafted 2D pixel environments, and inventory management inspired by classic 90s JRPGs.',
        highlights: [
            'Turn-based tactical combat system',
            'Spell collection and party synergy mechanics',
            'Handcrafted pixel-art tilesets and sprite animations',
            'Story quests, NPC dialogue trees, and exploration'
        ],
        path: '',
        isAlwaysPlayable: false
    }
];

export default function Projects() {
    const [status, setStatus] = useState<ProjectStatus>({
        'Pong': false,
        'Tower Defense': false,
        'JRPG': false
    });
    const [activeFilter, setActiveFilter] = useState<'all' | 'web-game' | 'engine-game'>('all');
    const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

    useEffect(() => {
        const checkHealth = async (id: string, url: string) => {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 3000);

                const response = await fetch(url, { signal: controller.signal });
                clearTimeout(timeoutId);

                setStatus(prev => ({ ...prev, [id]: response.ok }));
            } catch (e) {
                setStatus(prev => ({ ...prev, [id]: false }));
            }
        };

        const fetchAllHealth = () => {
            checkHealth('Pong', '/pong-ws/health');
            checkHealth('Tower Defense', '/tower-ws/health');
        };

        fetchAllHealth();
        const interval = setInterval(fetchAllHealth, 30000);
        return () => clearInterval(interval);
    }, []);

    const filteredProjects = PROJECTS_DATA.filter((project) => {
        if (activeFilter === 'all') return true;
        return project.category === activeFilter;
    });

    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
        >
            {/* Section Header */}
            <div className="mb-12">
                <div className="flex items-center gap-3 mb-3">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/20 inline-flex items-center gap-1.5">
                        <Gamepad2 size={14} />
                        Creative Work
                    </span>
                </div>
                <h2 className="text-4xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter flex items-center gap-4">
                    Featured Projects
                    <span className="h-1 flex-1 bg-gradient-to-r from-purple-600 to-transparent rounded-full opacity-25"></span>
                </h2>
                <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                    Interactive browser games, competitive multiplayer architectures, and indie game prototypes. You can launch and play the web games directly!
                </p>

                {/* Filter Tabs */}
                <div className="mt-8 flex flex-wrap gap-2">
                    <button
                        onClick={() => setActiveFilter('all')}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                            activeFilter === 'all'
                                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                                : 'bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                        }`}
                    >
                        All Projects ({PROJECTS_DATA.length})
                    </button>
                    <button
                        onClick={() => setActiveFilter('web-game')}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                            activeFilter === 'web-game'
                                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                                : 'bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                        }`}
                    >
                        Playable Browser Games (2)
                    </button>
                    <button
                        onClick={() => setActiveFilter('engine-game')}
                        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 ${
                            activeFilter === 'engine-game'
                                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                                : 'bg-neutral-100 dark:bg-white/5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                        }`}
                    >
                        Game Engines / Unity (1)
                    </button>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => {
                    const isOnline = status[project.id as keyof typeof status];

                    return (
                        <div
                            key={project.id}
                            className="group h-full bg-white dark:bg-purple-950/25 backdrop-blur-xl border-2 border-neutral-100 dark:border-white/10 rounded-3xl overflow-hidden shadow-xl shadow-purple-900/5 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-900/10 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
                        >
                            {/* Card Top: Banner Image & Status */}
                            <div>
                                <div className="relative h-52 overflow-hidden bg-neutral-950">
                                    <img
                                        src={project.icon}
                                        alt={project.title}
                                        className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-108 transition-all duration-700"
                                    />
                                    {/* Gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                                    {/* Status Badge */}
                                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/15 shadow-sm">
                                        {project.id === 'Pong' ? (
                                            <>
                                                <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse"></span>
                                                <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                                                    {isOnline ? 'Online Match' : 'Local Playable'}
                                                </span>
                                            </>
                                        ) : project.id === 'Tower Defense' ? (
                                            <>
                                                <span className={`h-2 w-2 rounded-full ${isOnline ? 'bg-green-500 shadow-[0_0_8px_#22c55e] animate-pulse' : 'bg-amber-500 shadow-[0_0_8px_#f59e0b]'}`}></span>
                                                <span className="text-[10px] font-bold text-white uppercase tracking-wider">
                                                    {isOnline ? 'Multiplayer Live' : '1v1 Arena'}
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="h-2 w-2 rounded-full bg-purple-400 shadow-[0_0_8px_#c084fc] animate-pulse"></span>
                                                <span className="text-[10px] font-bold text-white uppercase tracking-wider">In Dev</span>
                                            </>
                                        )}
                                    </div>

                                    {/* Category Pill Tag */}
                                    <div className="absolute bottom-4 left-5 flex items-center gap-2 text-white font-bold text-xs uppercase tracking-wider drop-shadow-sm">
                                        <span className="px-2.5 py-1 rounded-md bg-purple-600/80 backdrop-blur-sm">
                                            {project.categoryLabel}
                                        </span>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="p-6 sm:p-7 space-y-3">
                                    <h3 className="text-2xl font-black text-neutral-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    <p className="text-xs sm:text-sm font-semibold text-purple-700 dark:text-purple-300">
                                        {project.subtitle}
                                    </p>

                                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                                        {project.summary}
                                    </p>

                                    {/* Tech Badges */}
                                    <div className="flex flex-wrap gap-1.5 pt-3">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-2.5 py-1 bg-purple-50 dark:bg-white/5 border border-purple-100 dark:border-white/10 rounded-lg text-[10px] font-bold uppercase tracking-tight text-purple-700 dark:text-purple-300"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Card Footer Actions */}
                            <div className="p-6 sm:p-7 pt-0 border-t border-neutral-100 dark:border-white/5 mt-4 flex items-center gap-3">
                                {project.path ? (
                                    <NavLink
                                        to={project.path}
                                        className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-bold tracking-wide shadow-md shadow-purple-600/20 hover:shadow-purple-600/40 transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 text-center"
                                    >
                                        <Play size={15} fill="currentColor" />
                                        <span>Play in Browser</span>
                                    </NavLink>
                                ) : (
                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="flex-1 py-3 px-4 rounded-xl bg-neutral-200/80 dark:bg-white/10 hover:bg-neutral-300 dark:hover:bg-white/20 text-neutral-900 dark:text-white text-xs sm:text-sm font-bold transition-all duration-200 flex items-center justify-center gap-2 active:scale-95 text-center"
                                    >
                                        <Sparkles size={15} />
                                        <span>In Development</span>
                                    </button>
                                )}

                                <button
                                    onClick={() => setSelectedProject(project)}
                                    title="View game details & highlights"
                                    aria-label="View details"
                                    className="p-3 rounded-xl bg-neutral-100 dark:bg-white/5 hover:bg-neutral-200 dark:hover:bg-white/10 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                >
                                    <Info size={17} />
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Project Details Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.2 }}
                            className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-white/10 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-neutral-100 dark:bg-white/10 text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Modal Header */}
                            <div className="flex items-center gap-4 mb-5">
                                <img
                                    src={selectedProject.icon}
                                    alt={selectedProject.title}
                                    className="w-16 h-16 rounded-2xl object-cover border border-purple-500/30"
                                />
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                                        {selectedProject.categoryLabel}
                                    </span>
                                    <h3 className="text-2xl font-black text-neutral-900 dark:text-white">
                                        {selectedProject.title}
                                    </h3>
                                </div>
                            </div>

                            {/* Full Description */}
                            <div className="space-y-4 text-sm text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                <p>{selectedProject.details}</p>

                                <div>
                                    <h4 className="font-bold text-neutral-900 dark:text-white text-sm mb-2.5 flex items-center gap-2">
                                        <CheckCircle2 size={16} className="text-purple-600" />
                                        Key Highlights & Architecture:
                                    </h4>
                                    <ul className="space-y-2">
                                        {selectedProject.highlights.map((item, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm">
                                                <span className="text-purple-600 dark:text-purple-400 font-bold">•</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="pt-2">
                                    <h4 className="font-bold text-neutral-900 dark:text-white text-sm mb-2">
                                        Technologies:
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-3 py-1 bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800/40 rounded-lg text-xs font-semibold text-purple-700 dark:text-purple-300"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Modal Actions */}
                            <div className="mt-8 pt-5 border-t border-neutral-100 dark:border-white/10 flex items-center justify-end gap-3">
                                {selectedProject.path && (
                                    <NavLink
                                        to={selectedProject.path}
                                        onClick={() => setSelectedProject(null)}
                                        className="py-3 px-6 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-bold shadow-md shadow-purple-600/30 flex items-center gap-2"
                                    >
                                        <Play size={16} fill="currentColor" />
                                        <span>Launch Game</span>
                                    </NavLink>
                                )}
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="py-3 px-5 rounded-xl bg-neutral-100 dark:bg-white/10 text-neutral-700 dark:text-neutral-300 font-semibold text-sm hover:bg-neutral-200 dark:hover:bg-white/20 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </motion.section>
    );
}