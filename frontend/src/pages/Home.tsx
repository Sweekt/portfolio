import { motion } from 'framer-motion';
import mePic from '../assets/meRound.webp';
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { ArrowRight, Code2, Gamepad2, Mail, Terminal } from 'lucide-react';

export default function Home() {
    const scrollTo = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            window.history.pushState(null, '', `#${id}`);
            window.dispatchEvent(new Event('hashchange'));
        }
    };

    return (
        <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-12 lg:py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 -left-32 w-72 sm:w-96 h-72 sm:h-96 bg-purple-600/10 dark:bg-purple-600/20 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="absolute bottom-1/4 -right-32 w-72 sm:w-96 h-72 sm:h-96 bg-indigo-500/10 dark:bg-indigo-500/15 rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                {/* Left Column: Hero Information */}
                <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
                    {/* Status Pill Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 dark:bg-purple-500/15 border border-purple-500/20 text-purple-700 dark:text-purple-300 text-xs sm:text-sm font-semibold mb-6 shadow-sm backdrop-blur-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                        </span>
                        <span>Full Stack Developer @ Connexia</span>
                        <span className="text-purple-300 dark:text-purple-600">•</span>
                        <span>Creative Coder</span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-neutral-900 dark:text-white leading-[1.15]"
                    >
                        Benjamin{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-400 dark:from-purple-400 dark:via-indigo-300 dark:to-purple-200">
                            "Sweek"
                        </span>{' '}
                        Roy
                    </motion.h1>

                    {/* Subtitle / Bio */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-5 text-base sm:text-lg lg:text-xl text-neutral-600 dark:text-neutral-300 font-normal max-w-2xl leading-relaxed"
                    >
                        Full Stack Developer crafting robust web applications and interactive game experiences.
                        Alumni of <span className="font-semibold text-neutral-900 dark:text-white">42 Lyon</span> & engineer from <span className="font-semibold text-neutral-900 dark:text-white">INSA Lyon</span>, driven by clean architecture, creative computing, and building software that solves real-world needs.
                    </motion.p>

                    {/* CTAs and Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4"
                    >
                        <a
                            href="#projects"
                            onClick={scrollTo('projects')}
                            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-sm tracking-wide shadow-lg shadow-purple-600/25 hover:shadow-purple-600/40 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                        >
                            <Gamepad2 size={18} />
                            <span>Explore Projects</span>
                            <ArrowRight size={16} />
                        </a>

                        <a
                            href="#contact"
                            onClick={scrollTo('contact')}
                            className="inline-flex items-center gap-2 px-5 py-3.5 rounded-2xl bg-white/80 dark:bg-white/5 hover:bg-neutral-100 dark:hover:bg-white/10 border border-neutral-200 dark:border-white/10 text-neutral-800 dark:text-neutral-200 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 active:scale-95 backdrop-blur-sm shadow-sm cursor-pointer"
                        >
                            <Mail size={16} />
                            <span>Get in Touch</span>
                        </a>

                        <div className="flex items-center gap-2 pl-2">
                            <a
                                href="https://github.com/Sweekt"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub Profile"
                                className="p-3 rounded-xl bg-white/80 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                            >
                                <GitHubLogoIcon width={20} height={20} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/benjamin-roy22"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn Profile"
                                className="p-3 rounded-xl bg-white/80 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-500/40 transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                            >
                                <LinkedInLogoIcon width={20} height={20} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Core Tech Stack Highlights */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mt-10 pt-6 border-t border-neutral-200 dark:border-white/10 flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-2.5 w-full"
                    >
                        <span className="text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mr-2 flex items-center gap-1.5">
                            <Terminal size={14} className="text-purple-600 dark:text-purple-400" /> Core Stack:
                        </span>
                        {['PHP', 'Laravel', 'TypeScript', 'React', 'Next.js', 'Docker'].map((tech) => (
                            <span
                                key={tech}
                                className="px-3 py-1 rounded-lg text-xs font-medium bg-neutral-200/70 dark:bg-white/5 border border-neutral-300/60 dark:border-white/10 text-neutral-800 dark:text-neutral-300 shadow-xs"
                            >
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>

                {/* Right Column: Avatar with Ambient Halo and Floating Badges */}
                <div className="lg:col-span-5 flex justify-center items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative group flex items-center justify-center"
                    >
                        {/* Ambient Back Glow */}
                        <div className="absolute -inset-6 bg-gradient-to-tr from-purple-600/35 via-indigo-500/25 to-purple-400/35 rounded-full blur-3xl opacity-80 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        {/* Orbit Decorative Ring */}
                        <div className="absolute -inset-5 sm:-inset-6 rounded-full border border-purple-500/20 dark:border-purple-400/20 pointer-events-none" />

                        {/* Avatar Image Frame (Generously sized) */}
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] rounded-full p-2.5 bg-gradient-to-b from-purple-500/30 via-white/10 to-indigo-500/20 border-2 border-purple-500/40 dark:border-purple-400/30 shadow-2xl backdrop-blur-sm overflow-hidden">
                            <img
                                src={mePic}
                                alt="Benjamin 'Sweek' Roy"
                                width={420}
                                height={420}
                                fetchPriority="high"
                                className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>

                        {/* Floating Badge 1 - Top Right: Game Dev */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="absolute 0 -right-2 sm:top-4 sm:-right-4 px-4 py-2 rounded-2xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200 dark:border-white/10 shadow-xl flex items-center gap-2.5 text-xs sm:text-sm font-bold text-neutral-800 dark:text-neutral-200 hover:scale-105 transition-transform"
                        >
                            <Gamepad2 className="text-purple-600 dark:text-purple-400" size={18} />
                            <span>Game Dev</span>
                        </motion.div>

                        {/* Floating Badge 2 - Bottom Left: Full Stack */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className="absolute -bottom-2 -left-2 sm:bottom-6 sm:-left-4 px-4 py-2 rounded-2xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200 dark:border-white/10 shadow-xl flex items-center gap-2.5 text-xs sm:text-sm font-bold text-neutral-800 dark:text-neutral-200 hover:scale-105 transition-transform"
                        >
                            <Code2 className="text-indigo-600 dark:text-indigo-400" size={18} />
                            <span>Full Stack Dev</span>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}