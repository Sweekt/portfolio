import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { tdGame, tdStop } from "../scripts/td.ts";

export default function TowerDefense() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            tdGame(canvasRef.current);
        }
        return () => {
            console.log("Déconnexion du jeu...");
           tdStop(); // ou socket.close()
        };
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div className="flex p-24 justify-center items-center w-full">
                <canvas className="shadow-game shadow-accent2/50" ref={canvasRef} width="1200" height="800"></canvas>
            </div>
            <div className="mx-50 bg-accent2/10 p-4 rounded-lg border border-accent2/20">
                <h2>How to play ?</h2>
            </div>
        </motion.section>
    );
}