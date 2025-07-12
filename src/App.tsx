import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Experiences from './pages/Experiences';
import { useState, useEffect } from 'react';

export default function App() {
    const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
    }, [dark]);

    return (
        <Router>
            <div className="min-h-screen bg-text text-bg dark:bg-bg dark:text-text transition-colors duration-300">
                <header className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-900">
                    <NavLink to="/" className="text-2xl font-medium text-accent2">Sweek.</NavLink>
                    <nav className="flex gap-8 text-xl">
                        <NavLink to="/experiences" className={({ isActive }) => isActive ? 'text-accent1' : 'hover:text-hover'}>Experiences</NavLink>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? 'text-accent1' : 'hover:text-hover'}>Projets</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'text-accent1' : 'hover:text-hover'}>Contact</NavLink>
                    </nav>
                    <button onClick={() => setDark(d => !d)} className="ml-4">
                        {dark ? '☀️' : '🌙'}
                    </button>
                </header>
                <main className="p-8">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/experiences" element={<Experiences />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}