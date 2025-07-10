import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { useState, useEffect } from 'react';

export default function App() {
    const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
    }, [dark]);

    return (
        <Router>
            <div className="min-h-screen bg-secondary dark:bg-dominant text-dominant dark:text-secondary transition-colors duration-300">
                <header className="flex justify-between items-center p-8">
                    <h1 className="text-2xl font-medium hover:text-accent">Sweek.</h1>
                    <nav className="flex gap-8 text-xl border border-dominant dark:border-secondary pb-4">
                        <NavLink to="/" className={({ isActive }) => isActive ? 'underline hover:text-accent' : 'hover:text-accent'}>Accueil</NavLink>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? 'underline' : ''}>Projets</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'underline' : ''}>Contact</NavLink>
                    </nav>
                    <button onClick={() => setDark(d => !d)} className="ml-4">
                        {dark ? '☀️' : '🌙'}
                    </button>
                </header>
                <main className="p-8">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}