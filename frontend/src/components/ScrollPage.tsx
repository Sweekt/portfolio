import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Composants de contenu importés
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Experiences from '../pages/Experiences';

interface ScrollPageProps {
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

// Fonction utilitaire de défilement
const smoothScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        // Défilement fluide
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

export default function ScrollPage({ dark, setDark }: ScrollPageProps) {
    const location = useLocation();

    // Logique clé : Détecter le hash de l'URL et déclencher le défilement
    useEffect(() => {
        // Récupère l'ID (ex: 'experiences') en retirant le '#'
        const hash = location.hash.substring(1);

        if (hash) {
            // Un petit délai est crucial pour assurer que le composant ScrollPage et ses sections
            // sont complètement montés dans le DOM, surtout après une navigation depuis une page de jeu.
            setTimeout(() => smoothScroll(hash), 10);
        } else {
            // Si on arrive sur '/' sans hash, on scroll à la section home par défaut
            setTimeout(() => smoothScroll('home'), 10);
        }
    }, [location.hash]); // Se déclenche à chaque changement d'ancre dans l'URL

    return (
        <>
            <main className="bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300 w-screen">
                {/* TOUTES les sections doivent avoir un ID correspondant au hash */}
                <section id="home" className="bg-linear-to-b from-neutral-50 to-neutral-100 dark:bg-linear-to-b dark:from-neutral-950 dark:to-neutral-900"><Home /></section>
                <section id="experiences" className="bg-neutral-100 dark:bg-neutral-900"><Experiences /></section>
                <section id="projects" className="bg-linear-to-b from-neutral-100 to-neutral-50 dark:bg-linear-to-b dark:from-neutral-900 dark:to-neutral-950"><Projects /></section>
                <section id="contact" className="bg-neutral-50 dark:bg-neutral-950"><Contact /></section>
            </main>
        </>
    );
}