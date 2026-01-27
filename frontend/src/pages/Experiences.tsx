import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experiences() {
    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-16 py-20 px-6 lg:px-16"
        >
            <div className="mb-16">
                <h2 className="text-4xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter flex items-center gap-4">
                    Experiences
                    <span className="h-1 flex-1 bg-gradient-to-r from-purple-600 to-transparent rounded-full opacity-20"></span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto max-w-7xl">
                {/* --- SCHOOL --- */}
                <div className="bg-white dark:bg-purple-950/30 p-8 rounded-3xl border-2 border-neutral-100 dark:border-white/10 shadow-xl shadow-purple-900/5 transition-all hover:border-purple-200 dark:hover:border-purple-500/30">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-yellow-100 dark:bg-yellow-500/20 rounded-2xl text-yellow-600 dark:text-yellow-400">
                            <GraduationCap size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">School</h3>
                    </div>

                    <div className="space-y-10">
                        <div className="relative pl-6 border-l-2 border-purple-200 dark:border-purple-800">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-neutral-900"></div>
                            <h4 className="text-xl font-bold text-neutral-900 dark:text-purple-300">42 Lyon Auvergne Rhône-Alpes</h4>
                            <p className="text-sm font-semibold italic text-neutral-500 mb-2">Software architect</p>
                            <div className="flex flex-wrap gap-4 mt-2 mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                                <span className="flex items-center gap-1"><Calendar size={14}/> Since 2023</span>
                                <span className="flex items-center gap-1"><MapPin size={14}/> Charbonnière-les-bains, France</span>
                            </div>
                            <ul className="space-y-2 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                                <li>• Acquirement of <b>C</b>, <b>C++</b> and <b>Typescript</b></li>
                                <li>• Discovering and studying of <b>Unity</b> and <b>Godot</b></li>
                                <li>• Advancing <b>algorithm</b> knowledge</li>
                                <li>• Introduction to <b>Docker</b> and <b>Git</b></li>
                                <li>• Event animation as Students' Union president</li>
                            </ul>
                        </div>
                        <div className="relative pl-6 border-l-2 border-purple-200 dark:border-purple-800">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-400 rounded-full border-4 border-white dark:border-neutral-900"></div>
                            <h4 className="text-xl font-bold text-neutral-900 dark:text-purple-300">INSA Lyon</h4>
                            <p className="text-sm font-semibold italic text-neutral-500 mb-2">Mechanical Engineer</p>
                            <div className="flex flex-wrap gap-4 mt-2 mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                                <span className="flex items-center gap-1"><Calendar size={14}/> 2015 - 2018</span>
                                <span className="flex items-center gap-1"><MapPin size={14}/> Villeurbanne, France</span>
                            </div>
                            <ul className="space-y-2 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                                <li>• <b>Mechanical science</b> in-depth study</li>
                                <li>• <b>CAD</b> mastering on multiple software</li>
                                <li>• Product <b>innovation</b> learning</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* --- PROFESSIONAL --- */}
                <div className="bg-white dark:bg-purple-950/30 p-8 rounded-3xl border-2 border-neutral-100 dark:border-white/10 shadow-xl shadow-purple-900/5 transition-all hover:border-purple-200 dark:hover:border-purple-500/30">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="p-3 bg-yellow-100 dark:bg-yellow-500/20 rounded-2xl text-yellow-600 dark:text-yellow-400">
                            <Briefcase size={32} />
                        </div>
                        <h3 className="text-2xl font-bold text-neutral-900 dark:text-white">Professional</h3>
                    </div>

                    <div className="space-y-10">
                        <div className="relative pl-6 border-l-2 border-purple-200 dark:border-purple-800">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-600 rounded-full border-4 border-white dark:border-neutral-900"></div>
                            <h4 className="text-xl font-bold text-neutral-900 dark:text-purple-300">Ludera </h4>
                            <p className="text-sm font-semibold italic text-neutral-500 mb-2">Boardgame animation</p>
                            <div className="flex flex-wrap gap-4 mt-2 mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                                <span className="flex items-center gap-1"><Calendar size={14}/> Since 2024</span>
                            </div>
                            <ul className="space-y-2 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                                <li>• <b>Introduction</b> and <b>initiation</b> to Disney's trading card game, <b>Lorcana</b></li>
                                <li>• <b>Team management</b> at events</li>
                            </ul>
                        </div>
                        <div className="relative pl-6 border-l-2 border-purple-200 dark:border-purple-800">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-400 rounded-full border-4 border-white dark:border-neutral-900"></div>
                            <h4 className="text-xl font-bold text-neutral-900 dark:text-purple-300">Reboot Bar - Board and Video Games</h4>
                            <p className="text-sm font-semibold italic text-neutral-500 mb-2">Founder and manager</p>
                            <div className="flex flex-wrap gap-4 mt-2 mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                                <span className="flex items-center gap-1"><Calendar size={14}/> 2018 - 2023</span>
                                <span className="flex items-center gap-1"><MapPin size={14}/> Lyon, France</span>
                            </div>
                            <ul className="space-y-2 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                                <li>• Entire business <b>creation</b></li>
                                <li>• <b>Communication</b> through diverse medias</li>
                                <li>• <b>Creation</b> and <b>organization</b> of various events (tournaments, trivia quizzes, etc.)</li>
                                <li>• Running of the company's <b>accounting</b> and <b>HR</b></li>
                            </ul>
                        </div>
                        <div className="relative pl-6 border-l-2 border-purple-200 dark:border-purple-800">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-purple-400 rounded-full border-4 border-white dark:border-neutral-900"></div>
                            <h4 className="text-xl font-bold text-neutral-900 dark:text-purple-300">Renault Trucks</h4>
                            <p className="text-sm font-semibold italic text-neutral-500 mb-2">Engineering Apprentice</p>
                            <div className="flex flex-wrap gap-4 mt-2 mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">
                                <span className="flex items-center gap-1"><Calendar size={14}/> 2015 - 2018</span>
                                <span className="flex items-center gap-1"><MapPin size={14}/> Saint-Priest, France</span>
                            </div>
                            <ul className="space-y-2 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                                <li>• <b>Designing</b> of plastic parts</li>
                                <li>• Creation of documentation compiling the different truck parts</li>
                                <li>• Helding of meetings with various stakeholders within the same working group</li>
                                <li>• <b>Prototyping</b> and <b>stress</b> testing of mechanical parts</li>
                                <li>• Completing a 3-month internship at Mack, North Carolina, USA</li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </motion.section>
    );
}