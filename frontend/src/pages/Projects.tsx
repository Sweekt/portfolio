import { motion } from 'framer-motion';
import { NavLink } from "react-router-dom";
import { Gamepad2 } from 'lucide-react';
import { useState, useEffect } from 'react';
import pongIcon from '../assets/pongIcon.png';
import tdIcon from '../assets/tdIcon.png';
import smIcon from '../assets/smIcon.png';

interface ProjectStatus {
    [key: string]: boolean;
}

export default function Projects() {
    const [status, setStatus] = useState<ProjectStatus>({
        'Pong': false,
        'Tower Defense': false,
        'JRPG': false
    });

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

    const projects = [
        {
            id: 'Pong',
            title: 'Pong Game',
            description: 'Classic pong game with local play',
            icon: pongIcon,
            lucide: <Gamepad2 size={20} />,
            tech: ['TypeScript', 'Canvas API', 'WebSocket'],
            content: 'Use your paddle to send back the ball and score points. First to 6 wins!',
            content2: 'Built for the 42 Common Core.',
            path: '/projects/Pong'
        },
        {
            id: 'Tower Defense',
            title: 'Slime Defender',
            description: '1vs1 tower defense',
            icon: tdIcon,
            lucide: <Gamepad2 size={20} />,
            tech: ['TypeScript', 'Canvas API', 'WebSocket'],
            content: 'Defeat slimes using magical towers and outlast your opponent!',
            content2: 'A competitive multiplayer challenge.',
            path: '/projects/TowerDefense'
        },
        {
            id: 'JRPG',
            title: 'Silver Moon',
            description: 'Classic JRPG featuring charming pixel-art',
            icon: smIcon,
            lucide: <Gamepad2 size={20} />,
            tech: ['Unity', 'C#'],
            content: 'Meet new people, collect powerful spells and accomplish quests to unveil mysteries of Hyward.',
            content2: 'Work-in-project.',
            path: ''
        }
    ];

    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mx-32 py-20 px-6 lg:px-16"
        >
            <div className="mb-16">
                <h2 className="text-4xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter flex items-center gap-4">
                    <span className="h-1 flex-1 bg-gradient-to-r from-transparent to-purple-600 rounded-full opacity-20"></span>
                    Projects
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mx-auto max-w-7xl">
                {projects.map((project) => {
                    const isOnline = status[project.id as keyof typeof status];

                    return (
                        <NavLink to={isOnline ? project.path : "#"} key={project.id} className={`group ${!isOnline ? 'cursor-default' : ''}`} onClick={(e) => !isOnline && e.preventDefault()}>
                            <div className={`h-full bg-white dark:bg-purple-950/30 backdrop-blur-xl border-2 border-neutral-100 dark:border-white/10 rounded-3xl overflow-hidden shadow-xl shadow-purple-900/5 transition-all duration-300 group-hover:border-purple-500/50 group-hover:-tranneutral-y-2`}>
                                <div className="relative h-48 overflow-hidden bg-neutral-900">
                                    <img src={project.icon} alt={project.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500" />
                                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10">
                                        <span className={`h-2 w-2 rounded-full animate-pulse ${isOnline ? 'bg-green-500 shadow-[0_0_8px_#22c55e]' : 'bg-red-500 shadow-[0_0_8px_#ef4444]'}`}></span>
                                        <span className="text-[10px] font-bold text-white uppercase">{isOnline ? 'Online' : 'Offline'}</span>
                                    </div>
                                    <div className="absolute bottom-4 left-6 flex items-center gap-2 text-white font-black uppercase tracking-widest text-sm">
                                        {project.lucide} {project.id}
                                    </div>
                                </div>
                                <div className="p-8 space-y-2">
                                    <div className="flex justify-between items-start">
                                        <h3 className="text-2xl font-black text-neutral-950 dark:text-white">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm font-semibold italic text-neutral-500 -mt-2 mb-2">
                                        {project.description}
                                    </p>
                                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                                        {project.content}
                                    </p>
                                    <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                                        {project.content2}
                                    </p>
                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {project.tech.map((t) => (
                                            <span key={t} className="px-3 py-1 bg-purple-50 dark:bg-white/5 border border-purple-100 dark:border-white/10 rounded-full text-[10px] font-black uppercase tracking-tighter text-purple-700 dark:text-purple-400">
                                            {t}
                                        </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </NavLink>
                    );
                })}
            </div>
        </motion.section>
    );
}