import { motion } from 'framer-motion';
import {
    Code2,
    Globe,
    Gamepad2,
    Terminal,
    Cpu,
    CheckCircle2,
    Sparkles
} from 'lucide-react';

interface SkillItem {
    name: string;
    tag?: string;
}

interface SkillCategory {
    id: string;
    title: string;
    description: string;
    icon: React.ElementType;
    accentColor: string;
    skills: SkillItem[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
    {
        id: 'languages',
        title: 'Programming Languages',
        description: 'Core languages used across system, web, and game development.',
        icon: Code2,
        accentColor: 'from-purple-500 to-indigo-500',
        skills: [
            { name: 'TypeScript', tag: 'Expert' },
            { name: 'JavaScript', tag: 'ESNext' },
            { name: 'C', tag: '42 School' },
            { name: 'C++', tag: 'OOP & Math' },
            { name: 'C#', tag: 'Unity Engine' },
            { name: 'Python', tag: 'Scripting' },
            { name: 'SQL', tag: 'Databases' },
            { name: 'HTML5 / CSS3', tag: 'Semantic' },
        ]
    },
    {
        id: 'frontend',
        title: 'Frontend & Interactive Web',
        description: 'Building responsive interfaces, animations, and real-time graphics.',
        icon: Globe,
        accentColor: 'from-blue-500 to-cyan-500',
        skills: [
            { name: 'React 19', tag: 'Modern Hooks' },
            { name: 'Tailwind CSS v4', tag: 'Styling' },
            { name: 'HTML5 Canvas API', tag: 'Realtime 2D' },
            { name: 'WebSockets', tag: 'Multiplayer' },
            { name: 'Vite', tag: 'Bundler' },
            { name: 'Framer Motion', tag: 'Animations' },
            { name: 'Responsive Design', tag: 'Mobile-first' },
            { name: 'REST APIs', tag: 'Integration' },
        ]
    },
    {
        id: 'gamedev',
        title: 'Game Development & Engine',
        description: 'Creating 2D & multiplayer games from scratch or with game engines.',
        icon: Gamepad2,
        accentColor: 'from-amber-500 to-orange-500',
        skills: [
            { name: 'Unity Engine', tag: '2D & C#' },
            { name: 'Godot Engine', tag: 'Architecture' },
            { name: 'Game Physics & Math', tag: 'Vectors' },
            { name: 'Multiplayer Sync', tag: 'Client-Server' },
            { name: 'Game Loop Architecture', tag: 'Canvas' },
            { name: 'Collision Detection', tag: 'Hitboxes' },
            { name: 'Pixel Art Pipeline', tag: 'Sprites' },
            { name: 'Game Design', tag: 'Mechanics' },
        ]
    },
    {
        id: 'devops',
        title: 'Backend, DevOps & Tooling',
        description: 'Containerization, Linux environment, deployment, and architecture.',
        icon: Terminal,
        accentColor: 'from-emerald-500 to-teal-500',
        skills: [
            { name: 'Node.js', tag: 'Runtime' },
            { name: 'Docker & Compose', tag: 'Containers' },
            { name: 'Git & GitHub', tag: 'Workflows' },
            { name: 'Linux / Bash', tag: 'Environment' },
            { name: 'Nginx', tag: 'Reverse Proxy' },
            { name: 'Computer Architecture', tag: '42 Lyon' },
            { name: 'CAD & 3D Modeling', tag: 'INSA Lyon' },
            { name: 'Algorithms & Structures', tag: 'Data' },
        ]
    }
];

export default function Skills() {
    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
        >
            {/* Section Header */}
            <div className="mb-14">
                <div className="flex items-center gap-3 mb-3">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/20 inline-flex items-center gap-1.5">
                        <Sparkles size={13} />
                        Technical Stack
                    </span>
                </div>
                <h2 className="text-4xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter flex items-center gap-4">
                    Skills & Toolkit
                    <span className="h-1 flex-1 bg-gradient-to-r from-purple-600 to-transparent rounded-full opacity-25"></span>
                </h2>
                <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                    A versatile skill set combining software architecture rigor, low-level algorithmic mastery, and modern web & game development.
                </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {SKILL_CATEGORIES.map((category) => {
                    const IconComponent = category.icon;

                    return (
                        <div
                            key={category.id}
                            className="bg-white/90 dark:bg-purple-950/25 backdrop-blur-xl p-7 sm:p-8 rounded-3xl border-2 border-neutral-100 dark:border-white/10 shadow-xl shadow-purple-900/5 hover:border-purple-300 dark:hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-1 group"
                        >
                            {/* Category Header */}
                            <div className="flex items-start gap-4 mb-6">
                                <div className={`p-3.5 rounded-2xl bg-gradient-to-tr ${category.accentColor} text-white shadow-md shadow-purple-900/10 group-hover:scale-105 transition-transform duration-300`}>
                                    <IconComponent size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                                        {category.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                                        {category.description}
                                    </p>
                                </div>
                            </div>

                            {/* Skills Pills */}
                            <div className="flex flex-wrap gap-2.5">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="group/pill inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-50 dark:bg-white/5 border border-neutral-200/80 dark:border-white/10 hover:border-purple-400/50 dark:hover:border-purple-400/50 hover:bg-white dark:hover:bg-purple-900/20 transition-all duration-200 shadow-2xs cursor-default"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover/pill:scale-125 transition-transform"></span>
                                        <span className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200">
                                            {skill.name}
                                        </span>
                                        {skill.tag && (
                                            <span className="text-[10px] font-medium text-neutral-400 dark:text-neutral-500 pl-1 border-l border-neutral-200 dark:border-white/10">
                                                {skill.tag}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Bottom Highlight Banner */}
            <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-900/10 via-indigo-900/10 to-purple-900/10 dark:from-purple-950/40 dark:via-indigo-950/30 dark:to-purple-950/40 border border-purple-500/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-center gap-4 text-center sm:text-left">
                    <div className="hidden sm:flex p-3 rounded-2xl bg-purple-600/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 shrink-0">
                        <Cpu size={28} />
                    </div>
                    <div>
                        <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white">
                            Engineering Rigor Meets Creative Craft
                        </h4>
                        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-300 mt-1">
                            From low-level C memory management to real-time WebSockets and modern React frontend architectures.
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-purple-700 dark:text-purple-300 px-4 py-2 rounded-xl bg-purple-500/10 border border-purple-500/20">
                        <CheckCircle2 size={14} /> Full Stack & Game Dev
                    </span>
                </div>
            </div>
        </motion.section>
    );
}
