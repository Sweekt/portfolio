import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react'; // 👈 Importez useRef
import { jumpGame } from "../scripts/jump.ts";

export default function Projects() {
    // 1. Créer la ref (doit être typée comme HTMLCanvasElement ou null)
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // 2. Vérifiez si la ref a un élément courant (l'élément est monté)
        if (canvasRef.current) {
            // 3. Passez l'élément canvas directement à votre fonction
            jumpGame(canvasRef.current);
        }
    }, []);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
        >
            {/* 4. Attachez la ref au canvas (l'ID n'est plus strictement nécessaire) */}
            <canvas ref={canvasRef} width="1200" height="800"></canvas>
        </motion.section>
    );
}