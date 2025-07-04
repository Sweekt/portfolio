import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { useState, useEffect } from 'react';

export default function App() {
    //const [dark, setDark] = useState(false);
    const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
    }, [dark]);

    return (
        <Router>
            <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
                <header className="flex justify-between items-center p-4 shadow dark:shadow-lg">
                    <h1 className="text-2xl font-bold">Benjamin 'Sweek' Roy</h1>
                    <nav className="flex gap-4">
                        <NavLink to="/" className={({ isActive }) => isActive ? 'underline' : ''}>Accueil</NavLink>
                        <NavLink to="/projects" className={({ isActive }) => isActive ? 'underline' : ''}>Projets</NavLink>
                        <NavLink to="/contact" className={({ isActive }) => isActive ? 'underline' : ''}>Contact</NavLink>
                        <button onClick={() => setDark(d => !d)} className="ml-4">
                            {dark ? '☀️' : '🌙'}
                        </button>
                    </nav>
                </header>
                <main className="p-6">
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