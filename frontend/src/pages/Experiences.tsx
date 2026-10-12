import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin, Sparkles } from 'lucide-react';

export default function Experiences() {
    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
        >
            {/* Section Header */}
            <div className="mb-14">
                <div className="flex items-center gap-3 mb-3">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/20 inline-flex items-center gap-1.5">
                        <Briefcase size={14} />
                        Career & Background
                    </span>
                </div>
                <h2 className="text-4xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter flex items-center gap-4">
                    Experiences
                    <span className="h-1 flex-1 bg-gradient-to-r from-purple-600 to-transparent rounded-full opacity-25"></span>
                </h2>
                <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                    A dual trajectory combining engineering foundations, business creation, and hands-on full stack & software craftsmanship.
                </p>
            </div>

            {/* Asymmetrical Grid: School 1/3, Professional 2/3 with distinct color themes */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* --- SCHOOL (1/3 Width) - Indigo / Sapphire Theme --- */}
                <div className="lg:col-span-1 bg-indigo-50/70 dark:bg-indigo-950/20 p-6 sm:p-8 rounded-3xl border-2 border-indigo-200/80 dark:border-indigo-500/25 shadow-xl shadow-indigo-950/5 transition-all hover:border-indigo-400 dark:hover:border-indigo-400/60 flex flex-col justify-between">
                    <div>
                        {/* Header */}
                        <div className="flex items-center gap-3.5 mb-8">
                            <div className="p-3 bg-indigo-500/15 dark:bg-indigo-500/25 rounded-2xl text-indigo-700 dark:text-indigo-300">
                                <GraduationCap size={28} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-indigo-950 dark:text-white">Education</h3>
                                <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">Engineering & Software</p>
                            </div>
                        </div>

                        {/* Timeline */}
                        <div className="space-y-10">
                            {/* 42 Lyon */}
                            <div className="relative pl-6 border-l-2 border-indigo-300 dark:border-indigo-700">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-600 rounded-full border-4 border-indigo-100 dark:border-neutral-900 shadow-xs"></div>
                                <h4 className="text-lg font-bold text-neutral-900 dark:text-indigo-200">42 Lyon</h4>
                                <p className="text-xs font-semibold italic text-indigo-700 dark:text-indigo-300 mb-2">Software Architect</p>
                                <div className="flex flex-wrap gap-3 mt-1.5 mb-3 text-xs font-medium text-neutral-600 dark:text-neutral-400">
                                    <span className="flex items-center gap-1"><Calendar size={13}/> Since 2023</span>
                                    <span className="flex items-center gap-1"><MapPin size={13}/> Lyon, France</span>
                                </div>
                                <ul className="space-y-1.5 text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed">
                                    <li>• Mastery of <b>C</b>, <b>C++</b> & <b>TypeScript</b></li>
                                    <li>• Real-time architectures & algorithms</li>
                                    <li>• Exploration of <b>Unity</b> & <b>Godot</b></li>
                                    <li>• <b>Docker</b> & <b>Git</b> workflows</li>
                                    <li>• Students' Union President (BDE)</li>
                                </ul>
                            </div>

                            {/* INSA Lyon */}
                            <div className="relative pl-6 border-l-2 border-indigo-300 dark:border-indigo-700">
                                <div className="absolute -left-[9px] top-0 w-4 h-4 bg-indigo-400 rounded-full border-4 border-indigo-100 dark:border-neutral-900 shadow-xs"></div>
                                <h4 className="text-lg font-bold text-neutral-900 dark:text-indigo-200">INSA Lyon</h4>
                                <p className="text-xs font-semibold italic text-indigo-700 dark:text-indigo-300 mb-2">Mechanical Engineer</p>
                                <div className="flex flex-wrap gap-3 mt-1.5 mb-3 text-xs font-medium text-neutral-600 dark:text-neutral-400">
                                    <span className="flex items-center gap-1"><Calendar size={13}/> 2015 - 2018</span>
                                    <span className="flex items-center gap-1"><MapPin size={13}/> Villeurbanne, FR</span>
                                </div>
                                <ul className="space-y-1.5 text-neutral-700 dark:text-neutral-300 text-xs sm:text-sm leading-relaxed">
                                    <li>• In-depth mechanical science & physics</li>
                                    <li>• Advanced <b>CAD</b> software mastering</li>
                                    <li>• Product innovation & analytical problem solving</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- PROFESSIONAL (2/3 Width) - Purple / Violet Theme --- */}
                <div className="lg:col-span-2 bg-purple-50/70 dark:bg-purple-950/25 p-6 sm:p-8 rounded-3xl border-2 border-purple-200/80 dark:border-purple-500/25 shadow-xl shadow-purple-950/5 transition-all hover:border-purple-400 dark:hover:border-purple-400/60">
                    {/* Header */}
                    <div className="flex items-center gap-3.5 mb-8">
                        <div className="p-3 bg-purple-500/15 dark:bg-purple-500/25 rounded-2xl text-purple-700 dark:text-purple-300">
                            <Briefcase size={28} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-black text-purple-950 dark:text-white">Professional Experience</h3>
                            <p className="text-xs text-purple-600 dark:text-purple-400 font-semibold">Full Stack Development & Leadership</p>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="space-y-10">
                        {/* Connexia (Current) */}
                        <div className="relative pl-6 border-l-2 border-purple-400 dark:border-purple-600">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-600 rounded-full border-4 border-purple-100 dark:border-neutral-900 shadow-xs"></div>
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                                <h4 className="text-xl font-black text-neutral-900 dark:text-purple-200">Connexia</h4>
                                <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-purple-600 text-white shadow-xs inline-flex items-center gap-1">
                                    <Sparkles size={11} /> Current Role
                                </span>
                            </div>
                            <p className="text-sm font-bold text-purple-700 dark:text-purple-300 mb-2">Full Stack Developer</p>
                            <div className="flex flex-wrap gap-4 mt-1 mb-3 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
                                <span className="flex items-center gap-1.5"><Calendar size={14}/> Since 2026</span>
                                <span className="flex items-center gap-1.5"><MapPin size={14}/> Lyon, France</span>
                            </div>
                            <ul className="space-y-1.5 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                                <li>• <b>Full Stack development</b> for digital services & client solutions</li>
                                <li>• Building modern, scalable architectures using <b>TypeScript</b>, <b>React</b> & <b>Node.js</b></li>
                                <li>• Implementing robust backend services, APIs, and responsive user experiences</li>
                                <li>• Agile delivery, collaborative code reviews, and high quality code standards</li>
                            </ul>
                        </div>

                        {/* Ludera */}
                        <div className="relative pl-6 border-l-2 border-purple-300 dark:border-purple-800">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-500 rounded-full border-4 border-purple-100 dark:border-neutral-900 shadow-xs"></div>
                            <h4 className="text-lg font-bold text-neutral-900 dark:text-purple-200">Ludera</h4>
                            <p className="text-sm font-semibold italic text-purple-700 dark:text-purple-300 mb-2">Boardgame Animation & Event Management</p>
                            <div className="flex flex-wrap gap-4 mt-1 mb-3 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
                                <span className="flex items-center gap-1.5"><Calendar size={14}/> Since 2024</span>
                                <span className="flex items-center gap-1.5"><MapPin size={14}/> France</span>
                            </div>
                            <ul className="space-y-1.5 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                                <li>• Initiation and animation for Disney's <b>Lorcana</b> trading card game</li>
                                <li>• Event team coordination, tournament organization, and player onboarding</li>
                            </ul>
                        </div>

                        {/* Reboot Bar */}
                        <div className="relative pl-6 border-l-2 border-purple-300 dark:border-purple-800">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-400 rounded-full border-4 border-purple-100 dark:border-neutral-900 shadow-xs"></div>
                            <h4 className="text-lg font-bold text-neutral-900 dark:text-purple-200">Reboot Bar — Board & Video Games</h4>
                            <p className="text-sm font-semibold italic text-purple-700 dark:text-purple-300 mb-2">Founder & General Manager</p>
                            <div className="flex flex-wrap gap-4 mt-1 mb-3 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
                                <span className="flex items-center gap-1.5"><Calendar size={14}/> 2018 - 2023</span>
                                <span className="flex items-center gap-1.5"><MapPin size={14}/> Lyon, France</span>
                            </div>
                            <ul className="space-y-1.5 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                                <li>• Entire business <b>creation & operations</b> from ground up</li>
                                <li>• Multi-channel <b>communication & community management</b></li>
                                <li>• Creation & hosting of gaming tournaments, esports screenings, and trivia quizzes</li>
                                <li>• Managed company financials, HR, logistics, and partner relations</li>
                            </ul>
                        </div>

                        {/* Renault Trucks */}
                        <div className="relative pl-6 border-l-2 border-purple-300 dark:border-purple-800">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-400 rounded-full border-4 border-purple-100 dark:border-neutral-900 shadow-xs"></div>
                            <h4 className="text-lg font-bold text-neutral-900 dark:text-purple-200">Renault Trucks</h4>
                            <p className="text-sm font-semibold italic text-purple-700 dark:text-purple-300 mb-2">Engineering Apprentice</p>
                            <div className="flex flex-wrap gap-4 mt-1 mb-3 text-xs sm:text-sm font-medium text-neutral-600 dark:text-neutral-400">
                                <span className="flex items-center gap-1.5"><Calendar size={14}/> 2015 - 2018</span>
                                <span className="flex items-center gap-1.5"><MapPin size={14}/> Saint-Priest, France</span>
                            </div>
                            <ul className="space-y-1.5 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                                <li>• Design and modeling of plastic and structural parts</li>
                                <li>• Cross-functional engineering meetings with international working groups</li>
                                <li>• Prototyping, mechanical stress testing, and technical documentation</li>
                                <li>• Completed a 3-month engineering internship at <b>Mack Trucks</b>, North Carolina, USA</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}