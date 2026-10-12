import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { ArrowUp, Gamepad2 } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Footer() {
    const location = useLocation();
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSectionClick = (sectionId: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        if (location.pathname === '/') {
            const el = document.getElementById(sectionId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                window.history.pushState(null, '', `#${sectionId}`);
                window.dispatchEvent(new Event('hashchange'));
            }
        } else {
            navigate(`/#${sectionId}`);
        }
    };

    return (
        <footer className="border-t border-neutral-200/80 dark:border-white/10 bg-white/70 dark:bg-neutral-950/80 backdrop-blur-xl transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
                    {/* Brand Info (5 cols) */}
                    <div className="md:col-span-5 space-y-4">
                        <NavLink
                            to="/#home"
                            onClick={handleSectionClick('home')}
                            className="group inline-flex items-center gap-2.5 text-2xl font-black tracking-tight text-neutral-900 dark:text-white"
                        >
                            <span className="relative flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-600"></span>
                            </span>
                            <span>
                                Sweek<span className="text-purple-600 group-hover:text-indigo-500 transition-colors">.</span>
                            </span>
                        </NavLink>

                        <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">
                            Full Stack Developer @ Connexia & 42 Lyon Alumni. Crafting modern web applications, interactive systems, and creative games.
                        </p>

                        <div className="flex items-center gap-3 pt-2">
                            <a
                                href="https://github.com/Sweekt"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="p-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all shadow-2xs"
                            >
                                <GitHubLogoIcon width={18} height={18} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/benjamin-roy22"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="p-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-500/30 transition-all shadow-2xs"
                            >
                                <LinkedInLogoIcon width={18} height={18} />
                            </a>
                        </div>
                    </div>

                    {/* Navigation Links (3 cols) */}
                    <div className="md:col-span-3 space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white">
                            Navigation
                        </h4>
                        <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                            <li>
                                <button
                                    onClick={handleSectionClick('home')}
                                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                >
                                    Home
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={handleSectionClick('experiences')}
                                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                >
                                    Experiences
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={handleSectionClick('skills')}
                                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                >
                                    Skills & Toolkit
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={handleSectionClick('projects')}
                                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                >
                                    Featured Projects
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={handleSectionClick('contact')}
                                    className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                >
                                    Contact
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Interactive Games & Quick Launch (4 cols) */}
                    <div className="md:col-span-4 space-y-3">
                        <div className="flex items-center justify-between">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-white flex items-center gap-1.5">
                                <Gamepad2 size={14} className="text-purple-600" /> Featured Apps & Games
                            </h4>
                            <button
                                onClick={scrollToTop}
                                className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 dark:text-purple-400 hover:underline cursor-pointer"
                            >
                                <span>Back to top</span>
                                <ArrowUp size={13} />
                            </button>
                        </div>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <a
                                    href="https://loretracker.fr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                    <span>LoreTracker (Lorcana SaaS)</span>
                                </a>
                            </li>
                            <li>
                                <NavLink
                                    to="/projects/Pong"
                                    className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                    <span>Pong Game (Canvas 2D)</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/projects/TowerDefense"
                                    className="inline-flex items-center gap-2 text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                                    <span>Slime Defender (1v1 Tower Defense)</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Tech */}
                <div className="mt-12 pt-8 border-t border-neutral-200/80 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
                    <p>
                        © {new Date().getFullYear()} Benjamin 'Sweek' Roy. All rights reserved.
                    </p>
                    <p className="flex items-center gap-1">
                        Crafted with React 19, TypeScript & Tailwind CSS v4.
                    </p>
                </div>
            </div>
        </footer>
    );
}
