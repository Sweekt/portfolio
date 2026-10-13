import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { MotionConfig } from 'framer-motion';
import ScrollPage from './components/ScrollPage.tsx';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

const Pong = lazy(() => import('./pages/Pong'));
const TowerDefense = lazy(() => import('./pages/Td.tsx'));

function PageLoader() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center gap-4">
            <div className="w-10 h-10 border-4 border-purple-500/20 border-t-purple-600 rounded-full animate-spin"></div>
            <p className="text-xs font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Loading module...</p>
        </div>
    );
}

export default function App() {
    return (
        <MotionConfig reducedMotion="user">
            <Router>
                <div className="min-h-screen bg-linear-to-b from-neutral-50 to-neutral-100 dark:bg-linear-to-b dark:from-neutral-950 dark:to-neutral-900 text-neutral-950 dark:text-neutral-50 transition-colors duration-300">
                    <NavigationBar />
                    <main>
                        <Suspense fallback={<PageLoader />}>
                            <Routes>
                                <Route path="/" element={<ScrollPage />} />
                                <Route path="/projects/Pong" element={<Pong />} />
                                <Route path="/projects/TowerDefense" element={<TowerDefense />} />
                            </Routes>
                        </Suspense>
                    </main>
                    <Footer />
                </div>
            </Router>
        </MotionConfig>
    );
}