import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { pongGame } from "../scripts/pong.ts";

export default function Pong() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            pongGame(canvasRef.current, 'local');
        }
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div align={'center'}>
                <canvas ref={canvasRef} width="1200" height="800"></canvas>
            </div>
        </motion.section>
    );
}