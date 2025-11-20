import { BrowserRouter as Router, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import ScrollPage from './components/ScrollPage.tsx'; // Contient maintenant UNIQUEMENT les sections
import Pong from './pages/Pong';
import NavigationBar from './components/NavigationBar';

export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-text text-bg dark:bg-bg dark:text-text transition-colors duration-300">
                <NavigationBar />

                <main>
                    <Routes>
                        <Route path="/" element={<ScrollPage />} />
                        <Route path="/projects/:Pong" element={<Pong />} />
                    </Routes>
                </main>

            </div>
        </Router>
    );
}