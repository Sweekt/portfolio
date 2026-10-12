import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
    Send,
    Mail,
    User,
    MessageSquare,
    CheckCircle2,
    Copy,
    Check,
    MapPin,
    ArrowUpRight
} from 'lucide-react';
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const contactEmail = "b.roy@groupe-connexia.com";

    const handleCopyEmail = () => {
        navigator.clipboard.writeText(contactEmail);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2500);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("https://formspree.io/f/xjgwrdpg", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                alert("Oups ! Unexpected error.");
            }
        } catch {
            alert("Network error. Check your connection.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-7xl mx-auto py-16 sm:py-24 px-4 sm:px-6 lg:px-8"
        >
            {/* Header */}
            <div className="mb-14">
                <div className="flex items-center gap-3 mb-3">
                    <span className="px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-500/10 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/20 inline-flex items-center gap-1.5">
                        <Mail size={14} />
                        Let's Connect
                    </span>
                </div>
                <h2 className="text-4xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter flex items-center gap-4">
                    Get in touch
                    <span className="h-1 flex-1 bg-gradient-to-r from-purple-600 to-transparent rounded-full opacity-25"></span>
                </h2>
                <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-sm sm:text-base max-w-2xl leading-relaxed">
                    Have a project in mind, want to discuss game development or software architecture, or just want to say hi? Drop me a message!
                </p>
            </div>

            {/* Two-Column Responsive Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left Column: Direct Contact Info & Socials (5 cols) */}
                <div className="lg:col-span-5 space-y-6">
                    {/* Email Card with Copy Action */}
                    <div className="bg-white/90 dark:bg-purple-950/25 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border-2 border-neutral-100 dark:border-white/10 shadow-xl shadow-purple-900/5 space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="p-3 rounded-2xl bg-purple-500/10 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400">
                                    <Mail size={22} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                                        Email
                                    </h3>
                                    <p className="text-base font-bold text-neutral-900 dark:text-white break-all">
                                        {contactEmail}
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pt-2">
                            <button
                                onClick={handleCopyEmail}
                                className="flex-1 py-2.5 px-4 rounded-xl bg-purple-50 dark:bg-white/5 hover:bg-purple-100 dark:hover:bg-white/10 border border-purple-200 dark:border-white/10 text-xs font-bold text-purple-700 dark:text-purple-300 transition-all flex items-center justify-center gap-2 active:scale-95"
                            >
                                {copiedEmail ? (
                                    <>
                                        <Check size={14} className="text-green-500" />
                                        <span>Copied to clipboard!</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy size={14} />
                                        <span>Copy email address</span>
                                    </>
                                )}
                            </button>
                            <a
                                href={`mailto:${contactEmail}`}
                                className="p-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition-colors shadow-xs"
                                title="Open mail client"
                            >
                                <ArrowUpRight size={16} />
                            </a>
                        </div>
                    </div>

                    {/* Location Card */}
                    <div className="bg-white/90 dark:bg-purple-950/25 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border-2 border-neutral-100 dark:border-white/10 shadow-xl shadow-purple-900/5 flex items-center gap-4">
                        <div className="p-3 rounded-2xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 shrink-0">
                            <MapPin size={22} />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                                Location
                            </h3>
                            <p className="text-base font-bold text-neutral-900 dark:text-white">
                                Lyon, France
                            </p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400">
                                Full Stack Developer • Open for tech talks & exchanges
                            </p>
                        </div>
                    </div>

                    {/* Social Channels Card */}
                    <div className="bg-white/90 dark:bg-purple-950/25 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border-2 border-neutral-100 dark:border-white/10 shadow-xl shadow-purple-900/5 space-y-4">
                        <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                            Find me online
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            <a
                                href="https://github.com/Sweekt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-2xl bg-neutral-50 dark:bg-white/5 hover:bg-purple-50 dark:hover:bg-purple-900/20 border border-neutral-200/80 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-500/40 transition-all flex flex-col items-center justify-center gap-2 group"
                            >
                                <GitHubLogoIcon width={24} height={24} className="text-neutral-800 dark:text-neutral-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                                <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">GitHub</span>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/benjamin-roy22"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 rounded-2xl bg-neutral-50 dark:bg-white/5 hover:bg-purple-50 dark:hover:bg-purple-900/20 border border-neutral-200/80 dark:border-white/10 hover:border-purple-300 dark:hover:border-purple-500/40 transition-all flex flex-col items-center justify-center gap-2 group"
                            >
                                <LinkedInLogoIcon width={24} height={24} className="text-neutral-800 dark:text-neutral-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" />
                                <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Formspree Form (7 cols) */}
                <div className="lg:col-span-7 bg-white/95 dark:bg-purple-950/30 backdrop-blur-xl p-8 lg:p-10 rounded-3xl border-2 border-neutral-100 dark:border-white/10 shadow-2xl shadow-purple-900/10">
                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.form
                                action="https://formspree.io/f/xjgwrdpg"
                                method="POST"
                                key="contact-form"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                onSubmit={handleSubmit}
                                className="space-y-5"
                            >
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 flex items-center gap-2 ml-1">
                                        <User size={15} /> Your Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        className="w-full p-4 bg-neutral-50 dark:bg-white/5 border-2 border-neutral-100 dark:border-white/10 rounded-2xl focus:border-purple-500 dark:focus:border-purple-400 outline-none transition-all text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/20 text-sm"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 flex items-center gap-2 ml-1">
                                        <Mail size={15} /> Email Address
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        className="w-full p-4 bg-neutral-50 dark:bg-white/5 border-2 border-neutral-100 dark:border-white/10 rounded-2xl focus:border-purple-500 dark:focus:border-purple-400 outline-none transition-all text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/20 text-sm"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-purple-700 dark:text-purple-300 flex items-center gap-2 ml-1">
                                        <MessageSquare size={15} /> Message
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="Tell me about your project, idea, or questions..."
                                        className="w-full p-4 bg-neutral-50 dark:bg-white/5 border-2 border-neutral-100 dark:border-white/10 rounded-2xl focus:border-purple-500 dark:focus:border-purple-400 outline-none transition-all text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/20 resize-none text-sm"
                                    ></textarea>
                                </div>

                                <button
                                    disabled={isLoading}
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black uppercase tracking-widest text-xs sm:text-sm rounded-2xl shadow-lg shadow-purple-500/25 transition-all active:scale-[0.98] flex items-center justify-center gap-2.5 disabled:opacity-50 cursor-pointer"
                                >
                                    {isLoading ? (
                                        <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </button>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success-message"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="py-12 text-center space-y-6"
                            >
                                <div className="flex justify-center">
                                    <div className="p-4 bg-purple-100 dark:bg-purple-500/20 text-purple-600 dark:text-purple-400 rounded-full">
                                        <CheckCircle2 size={48} />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-black text-neutral-900 dark:text-white uppercase">Message Sent!</h3>
                                <p className="text-neutral-600 dark:text-neutral-400 text-sm max-w-md mx-auto">
                                    Thanks for reaching out! I've received your note and will get back to you as soon as possible.
                                </p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-purple-600 dark:text-purple-400 font-bold text-sm hover:underline"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.section>
    );
}