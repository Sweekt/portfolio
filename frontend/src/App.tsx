import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import ScrollPage from './components/ScrollPage.tsx'; // Contient maintenant UNIQUEMENT les sections
import Pong from './pages/Pong';
import TowerDefense from './pages/Td.tsx'
import NavigationBar from './components/NavigationBar';

export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-linear-to-b from-neutral-50 to-neutral-100 dark:bg-linear-to-b dark:from-neutral-950 dark:to-neutral-900 text-neutral-950 dark:text-neutral-50 transition-colors duration-300">
                <NavigationBar />
                <main>
                    <Routes>
                        <Route path="/" element={<ScrollPage />} />
                        <Route path="/projects/Pong" element={<Pong />} />
                        <Route path="/projects/TowerDefense" element={<TowerDefense />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}