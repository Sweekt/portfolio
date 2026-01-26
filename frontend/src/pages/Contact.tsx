import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Send, Mail, User, MessageSquare, CheckCircle2 } from 'lucide-react';

export default function Contact() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

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
                // Optionnel : gérer les erreurs ici (ex: captcha, limite de messages)
                alert("Oups ! Il y a eu un problème lors de l'envoi.");
            }
        } catch (error) {
            alert("Erreur réseau. Vérifie ta connexion.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="max-w-7xl mx-auto py-20 px-6 lg:px-16"
        >
            <div className="mb-32">
                <h2 className="text-4xl font-black text-neutral-900 dark:text-white uppercase tracking-tighter flex items-center gap-4">
                    <span className="h-1 flex-1 bg-gradient-to-r from-transparent to-purple-600 rounded-full opacity-20"></span>
                    Get in touch
                    <span className="h-1 flex-1 bg-gradient-to-r from-purple-600 to-transparent rounded-full opacity-20"></span>
                </h2>
            </div>

            <div className="flex justify-center mb-32">
                <div className="w-full max-w-2xl bg-white dark:bg-purple-950/30 backdrop-blur-xl p-8 lg:p-12 rounded-3xl border-2 border-neutral-100 dark:border-white/10 shadow-2xl shadow-purple-900/10">

                    <AnimatePresence mode="wait">
                        {!isSubmitted ? (
                            <motion.form
                                action="https://formspree.io/f/xjgwrdpg"
                                method="POST"
                                key="contact-form"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.05 }}
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-purple-700 dark:text-purple-300 flex items-center gap-2 ml-1">
                                        <User size={16} /> Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        placeholder="John Doe"
                                        className="w-full p-4 bg-neutral-50 dark:bg-white/5 border-2 border-neutral-100 dark:border-white/10 rounded-2xl focus:border-purple-500 dark:focus:border-purple-400 outline-none transition-all text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-purple-700 dark:text-purple-300 flex items-center gap-2 ml-1">
                                        <Mail size={16} /> Email
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        name="email"
                                        placeholder="john@example.com"
                                        className="w-full p-4 bg-neutral-50 dark:bg-white/5 border-2 border-neutral-100 dark:border-white/10 rounded-2xl focus:border-purple-500 dark:focus:border-purple-400 outline-none transition-all text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/20"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-purple-700 dark:text-purple-300 flex items-center gap-2 ml-1">
                                        <MessageSquare size={16} /> Message
                                    </label>
                                    <textarea
                                        name="message"
                                        required
                                        rows={5}
                                        placeholder="How can I help you?"
                                        className="w-full p-4 bg-neutral-50 dark:bg-white/5 border-2 border-neutral-100 dark:border-white/10 rounded-2xl focus:border-purple-500 dark:focus:border-purple-400 outline-none transition-all text-neutral-900 dark:text-white placeholder:text-neutral-400 dark:placeholder:text-white/20 resize-none"
                                    ></textarea>
                                </div>
                                <button
                                    disabled={isLoading}
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black uppercase tracking-widest rounded-2xl shadow-lg shadow-purple-500/30 transition-all active:scale-[0.98] flex items-center justify-center gap-3 disabled:opacity-50"
                                >
                                    {isLoading ? (
                                        <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            Send Message
                                            <Send size={20} />
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
                                    <div className="p-4 bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400 rounded-full">
                                        <CheckCircle2 size={48} />
                                    </div>
                                </div>
                                <h3 className="text-2xl font-black text-neutral-900 dark:text-white uppercase">Message Sent!</h3>
                                <p className="text-neutral-600 dark:text-neutral-400">Thanks for reaching out. I'll get back to you as soon as possible.</p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="text-purple-600 dark:text-purple-400 font-bold hover:underline"
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