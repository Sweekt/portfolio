import { motion } from 'framer-motion';

export default function Contact() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        ><div className="grid place-items-center text-center py-32 min-h-[30vh]">
            <div className="w-full">
                <h2 className="text-3xl font-semibold mb-4">Contact Me</h2>
                <form className="mx-auto space-y-4 max-w-md p-4">
                    <input type="text" placeholder="Name" className="w-full p-2 rounded border" />
                    <input type="email" placeholder="Email" className="w-full p-2 rounded border" />
                    <textarea placeholder="Message" className="w-full p-2 rounded border"></textarea>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded">Envoyer</button>
                </form>
            </div>
        </div>
        </motion.section>
    );
}