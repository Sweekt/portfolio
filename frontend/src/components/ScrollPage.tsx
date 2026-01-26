import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Experiences from '../pages/Experiences';

interface ScrollPageProps {
    dark: boolean;
    setDark: React.Dispatch<React.SetStateAction<boolean>>;
}

const smoothScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

export default function ScrollPage({ dark, setDark }: ScrollPageProps) {
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash.substring(1);
        if (hash) {
            setTimeout(() => smoothScroll(hash), 10);
        } else {
            setTimeout(() => smoothScroll('home'), 10);
        }
    }, [location.hash]);

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]');

        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    window.history.replaceState(null, '', `#${id}`);
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        window.history.replaceState(null, '', `#${id}`);
                        window.dispatchEvent(new Event("hashchange"));
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <>
            <main className="bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300 w-screen">
                <section id="home" className="bg-linear-to-b from-neutral-50 to-neutral-100 dark:bg-linear-to-b dark:from-neutral-950 dark:to-neutral-900"><Home /></section>
                <section id="experiences" className="bg-neutral-100 dark:bg-neutral-900"><Experiences /></section>
                <section id="projects" className="bg-linear-to-b from-neutral-100 to-neutral-50 dark:bg-linear-to-b dark:from-neutral-900 dark:to-neutral-950"><Projects /></section>
                <section id="contact" className="bg-neutral-50 dark:bg-neutral-950"><Contact /></section>
            </main>
        </>
    );
}