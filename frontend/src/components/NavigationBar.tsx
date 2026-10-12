import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Sun, Moon, Menu, X, ChevronDown, Gamepad2, Layers, Briefcase, Mail, Sparkles, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_SECTIONS = [
    { name: 'Experiences', id: 'experiences', icon: Briefcase },
    { name: 'Skills', id: 'skills', icon: Code2 },
    { name: 'Projects', id: 'projects', icon: Layers, isDropdown: true },
    { name: 'Contact', id: 'contact', icon: Mail },
];

export default function NavigationBar() {
    const [dark, setDark] = useState(() => {
        const saved = localStorage.getItem('theme');
        if (saved) return saved === 'dark';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    }, [dark]);

    const location = useLocation();
    const navigate = useNavigate();
    const [activeHash, setActiveHash] = useState(window.location.hash);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [projectsDropdownOpen, setProjectsDropdownOpen] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Track active hash
    useEffect(() => {
        const handleHashChange = () => {
            setActiveHash(window.location.hash);
        };

        window.addEventListener("hashchange", handleHashChange);
        return () => window.removeEventListener("hashchange", handleHashChange);
    }, []);

    // Track scroll progress for subtle header bar
    useEffect(() => {
        const handleScroll = () => {
            const totalScroll = document.documentElement.scrollTop;
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scroll = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
            setScrollProgress(scroll);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setProjectsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const isSectionActive = (sectionId: string) => {
        if (sectionId === 'home' && location.pathname === '/' && (!activeHash || activeHash === '#home')) return true;
        return location.pathname === '/' && activeHash === `#${sectionId}`;
    };

    const handleSectionClick = (sectionId: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        setProjectsDropdownOpen(false);

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
        <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/75 dark:bg-neutral-950/80 border-b border-neutral-200/70 dark:border-white/10 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
                {/* Brand Logo */}
                <NavLink
                    to="/#home"
                    onClick={handleSectionClick('home')}
                    className="group flex items-center gap-2.5 text-2xl font-black tracking-tight text-neutral-950 dark:text-white"
                >
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-600"></span>
                    </span>
                    <span>
                        Sweek<span className="text-purple-600 group-hover:text-indigo-500 transition-colors">.</span>
                    </span>
                </NavLink>

                {/* Desktop Navigation Menu (Floating Island Pill) */}
                <nav className="hidden md:flex items-center gap-1.5 bg-neutral-100/70 dark:bg-white/5 p-1.5 rounded-2xl border border-neutral-200/60 dark:border-white/10 backdrop-blur-md shadow-xs">
                    {NAV_SECTIONS.map((section) => {
                        const active = isSectionActive(section.id);

                        if (section.isDropdown) {
                            return (
                                <div
                                    key={section.id}
                                    ref={dropdownRef}
                                    className="relative"
                                    onMouseEnter={() => setProjectsDropdownOpen(true)}
                                    onMouseLeave={() => setProjectsDropdownOpen(false)}
                                >
                                    <button
                                        onClick={handleSectionClick(section.id)}
                                        className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                                            active
                                                ? 'bg-white dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 shadow-xs border border-neutral-200/80 dark:border-purple-500/30'
                                                : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
                                        }`}
                                    >
                                        <span>{section.name}</span>
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform duration-200 ${projectsDropdownOpen ? 'rotate-180' : ''}`}
                                        />
                                    </button>

                                    {/* Dropdown Menu */}
                                    <AnimatePresence>
                                        {projectsDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 8, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 6, scale: 0.95 }}
                                                transition={{ duration: 0.15 }}
                                                className="absolute left-0 mt-1.5 w-56 rounded-2xl bg-white/95 dark:bg-neutral-900/95 backdrop-blur-xl border border-neutral-200 dark:border-white/10 shadow-xl p-2 z-50"
                                            >
                                                <button
                                                    onClick={handleSectionClick('projects')}
                                                    className="w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                                >
                                                    <Layers size={16} className="text-purple-600 dark:text-purple-400" />
                                                    <span>Overview & All Projects</span>
                                                </button>
                                                <div className="h-px bg-neutral-100 dark:bg-white/10 my-1" />
                                                <NavLink
                                                    to="/projects/Pong"
                                                    onClick={() => setProjectsDropdownOpen(false)}
                                                    className="w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                                >
                                                    <Gamepad2 size={16} className="text-green-500" />
                                                    <div>
                                                        <div>Pong Game</div>
                                                        <span className="text-[10px] text-neutral-400 font-normal">Play directly in browser</span>
                                                    </div>
                                                </NavLink>
                                                <NavLink
                                                    to="/projects/TowerDefense"
                                                    onClick={() => setProjectsDropdownOpen(false)}
                                                    className="w-full text-left flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:bg-purple-50 dark:hover:bg-purple-950/40 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                                                >
                                                    <Gamepad2 size={16} className="text-purple-500" />
                                                    <div>
                                                        <div>Slime Defender</div>
                                                        <span className="text-[10px] text-neutral-400 font-normal">1vs1 Tower defense game</span>
                                                    </div>
                                                </NavLink>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        }

                        return (
                            <button
                                key={section.id}
                                onClick={handleSectionClick(section.id)}
                                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                                    active
                                        ? 'bg-white dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 shadow-xs border border-neutral-200/80 dark:border-purple-500/30'
                                        : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-white/60 dark:hover:bg-white/5'
                                }`}
                            >
                                {section.name}
                            </button>
                        );
                    })}
                </nav>

                {/* Right Controls: Social Links + Theme Switcher + Mobile Hamburger Button */}
                <div className="flex items-center gap-2.5">
                    {/* Desktop Socials */}
                    <div className="hidden sm:flex items-center gap-2 mr-1">
                        <a
                            href="https://github.com/Sweekt"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub Profile"
                            className="p-2.5 rounded-xl text-neutral-600 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-neutral-100 dark:hover:bg-white/5 transition-all"
                        >
                            <GitHubLogoIcon width={20} height={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/benjamin-roy22"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn Profile"
                            className="p-2.5 rounded-xl text-neutral-600 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-neutral-100 dark:hover:bg-white/5 transition-all"
                        >
                            <LinkedInLogoIcon width={20} height={20} />
                        </a>
                    </div>

                    {/* Animated Theme Switcher Button */}
                    <button
                        onClick={() => setDark((d) => !d)}
                        aria-label="Toggle color theme"
                        className="p-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200/80 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 hover:scale-105 active:scale-95 transition-all duration-200 shadow-xs"
                    >
                        {dark ? (
                            <Sun size={19} className="text-yellow-400 transition-transform duration-300 rotate-0 hover:rotate-90" />
                        ) : (
                            <Moon size={19} className="text-purple-600 transition-transform duration-300 -rotate-12 hover:rotate-0" />
                        )}
                    </button>

                    {/* Mobile Menu Hamburger Button */}
                    <button
                        onClick={() => setMobileMenuOpen((o) => !o)}
                        aria-label="Toggle navigation menu"
                        className="md:hidden p-2.5 rounded-xl bg-neutral-100 dark:bg-white/5 border border-neutral-200/80 dark:border-white/10 text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
                    >
                        {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Scroll Progress Indicator Bar */}
            <div
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-purple-600 via-indigo-500 to-purple-400 transition-all duration-150"
                style={{ width: `${scrollProgress}%` }}
            />

            {/* Mobile Navigation Drawer / Dropdown */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden bg-white/95 dark:bg-neutral-950/95 backdrop-blur-2xl border-b border-neutral-200 dark:border-white/10 shadow-2xl overflow-hidden"
                    >
                        <div className="px-6 py-5 space-y-3">
                            <button
                                onClick={handleSectionClick('home')}
                                className="w-full text-left py-2.5 px-3 rounded-xl text-base font-semibold text-neutral-900 dark:text-white hover:bg-purple-50 dark:hover:bg-white/5 flex items-center gap-3"
                            >
                                <Sparkles size={18} className="text-purple-600" />
                                <span>Home</span>
                            </button>

                            <button
                                onClick={handleSectionClick('experiences')}
                                className="w-full text-left py-2.5 px-3 rounded-xl text-base font-semibold text-neutral-900 dark:text-white hover:bg-purple-50 dark:hover:bg-white/5 flex items-center gap-3"
                            >
                                <Briefcase size={18} className="text-purple-600" />
                                <span>Experiences</span>
                            </button>

                            <button
                                onClick={handleSectionClick('skills')}
                                className="w-full text-left py-2.5 px-3 rounded-xl text-base font-semibold text-neutral-900 dark:text-white hover:bg-purple-50 dark:hover:bg-white/5 flex items-center gap-3"
                            >
                                <Code2 size={18} className="text-purple-600" />
                                <span>Skills</span>
                            </button>

                            <div className="space-y-1">
                                <button
                                    onClick={handleSectionClick('projects')}
                                    className="w-full text-left py-2.5 px-3 rounded-xl text-base font-semibold text-neutral-900 dark:text-white hover:bg-purple-50 dark:hover:bg-white/5 flex items-center gap-3"
                                >
                                    <Layers size={18} className="text-purple-600" />
                                    <span>Projects</span>
                                </button>
                                <div className="pl-9 pr-2 space-y-1">
                                    <NavLink
                                        to="/projects/Pong"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-white/5"
                                    >
                                        <Gamepad2 size={15} className="text-green-500" />
                                        <span>Pong Game</span>
                                    </NavLink>
                                    <NavLink
                                        to="/projects/TowerDefense"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="flex items-center gap-2 py-2 px-3 rounded-lg text-sm text-neutral-600 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-300 hover:bg-purple-50 dark:hover:bg-white/5"
                                    >
                                        <Gamepad2 size={15} className="text-purple-500" />
                                        <span>Slime Defender</span>
                                    </NavLink>
                                </div>
                            </div>

                            <button
                                onClick={handleSectionClick('contact')}
                                className="w-full text-left py-2.5 px-3 rounded-xl text-base font-semibold text-neutral-900 dark:text-white hover:bg-purple-50 dark:hover:bg-white/5 flex items-center gap-3"
                            >
                                <Mail size={18} className="text-purple-600" />
                                <span>Contact</span>
                            </button>

                            {/* Mobile Socials Divider */}
                            <div className="pt-4 border-t border-neutral-100 dark:border-white/10 flex items-center justify-around">
                                <a
                                    href="https://github.com/Sweekt"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400"
                                >
                                    <GitHubLogoIcon width={18} height={18} />
                                    <span>GitHub</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/benjamin-roy22"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-sm font-medium text-neutral-700 dark:text-neutral-300 hover:text-purple-600 dark:hover:text-purple-400"
                                >
                                    <LinkedInLogoIcon width={18} height={18} />
                                    <span>LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}