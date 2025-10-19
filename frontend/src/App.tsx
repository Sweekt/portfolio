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
                <header className="flex justify-between items-center border-b-2 border-gray-200 dark:border-accent2">
                    <NavLink to="/" className="text-2xl font-medium text-accent2 p-4 hover:text-hover">Sweek.</NavLink>
                    <nav className="flex gap-8 text-xl">
                        <NavLink to="/experiences" className={({ isActive }) => isActive ? 'p-4 text-accent1 border-b-3 border-accent2' : 'p-4 hover:text-hover hover:border-b-2 hover:border-hover'}>Experiences</NavLink>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? 'p-4 text-accent1 border-b-3 border-accent2' : 'p-4 hover:text-hover hover:border-b-2 hover:border-hover'}>Projets</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'p-4 text-accent1 border-b-3 border-accent2' : 'p-4 hover:text-hover hover:border-b-2 hover:border-hover'}>Contact</NavLink>
                        <button onClick={() => setDark(d => !d)} className="ml-4">
                            {dark ? '☀️' : '🌙'}
                        </button>
                    </nav>
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