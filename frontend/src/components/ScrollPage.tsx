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
            <main className="">
                {/* TOUTES les sections doivent avoir un ID correspondant au hash */}
                <section id="home"><Home /></section>
                <section id="experiences" className="mt-16"><Experiences /></section>
                <section id="projects" className="mt-16"><Projects /></section>
                <section id="contact" className="mt-16"><Contact /></section>
            </main>
        </>
    );
}