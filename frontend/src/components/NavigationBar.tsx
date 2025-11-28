import {NavLink, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import {
    NavigationMenu, NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from "./NavigationMenu.tsx";
import {cn} from "../lib/utils.tsx";
import {GitHubLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons"

// --- Définition des sections pour la navigation (pour l'utiliser dans le header) ---
const NAV_SECTIONS = [
    { name: 'Experiences', id: 'experiences' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
];

export default function NavigationBar() {
    // Gestion du Dark Mode
    const [dark, setDark] = useState(() => window.matchMedia('(prefers-color-scheme: dark)').matches);
    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
    }, [dark]);

    // On récupère la location actuelle (pathname + hash)
    const location = useLocation();

    // Fonction helper pour vérifier si un lien est actif
    const isSectionActive = (sectionId: string) => {
        // Cas spécial pour la page d'accueil sans hash
        if (sectionId === 'home' && location.pathname === '/' && !location.hash) return true;

        // Vérifie si on est sur la home '/' ET que le hash correspond (ex: #projects)
        return location.pathname === '/' && location.hash === `#${sectionId}`;
    };

    function Element(id: string, name: string) {
        if (id !== 'projects') {
            return (
                <NavigationMenuItem key={`nav-item-${id}`}>
                    <NavigationMenuLink asChild>
                        <NavLink
                            to={`/#${id}`}
                            className={cn(
                                // Vos styles personnalisés de base
                                "font-semibold bg-transparent hover:bg-transparent hover:text-hover data-[active]:bg-transparent focus:bg-transparent text-bold hover:text-yellow-600 dark:hover:text-yellow-500",
                                // Le style CONDITIONNEL si actif
                                isSectionActive(id)
                                    ? "text-purple-400" // Style Actif
                                    : "text-neutral-950 dark:text-neutral-50" // Style Inactif par défaut
                            )}
                        >
                            {name}
                        </NavLink>
                    </NavigationMenuLink>
                </NavigationMenuItem>
            )
        } else {
            return (
                <NavigationMenuItem key={`nav-item-${id}`}>
                    <NavigationMenuTrigger
                        className="bg-transparent hover:bg-transparent"
                    >
                        <NavLink
                            to={`/#${id}`}
                            className={cn(
                                // Vos styles personnalisés de base
                                "font-semibold bg-transparent hover:bg-transparent data-[active]:bg-transparent focus:bg-transparent hover:text-yellow-600 dark:hover:text-yellow-500",
                                // Le style CONDITIONNEL si actif
                                isSectionActive(id)
                                    ? "text-purple-400" // Style Actif
                                    : "text-neutral-950 dark:text-neutral-50" // Style Inactif par défaut
                            )}
                        >
                            {name}
                        </NavLink>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[150px] gap-3 p-2 text-end">
                            <li>
                                <NavigationMenuLink asChild>
                                    <NavLink to="/projects/Pong" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent text-neutral-950 dark:text-neutral-50 hover:text-yellow-600 dark:hover:text-yellow-500 focus:bg-accent focus:text-accent-foreground">
                                        Pong Game
                                    </NavLink>
                                </NavigationMenuLink>
                                <NavigationMenuLink asChild>
                                    <NavLink to="/projects/TowerDefense" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent text-neutral-950 dark:text-neutral-50 hover:text-yellow-600 dark:hover:text-yellow-500 focus:bg-accent focus:text-accent-foreground">
                                        Slime Defender
                                    </NavLink>
                                </NavigationMenuLink>
                            </li>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            )
        }
    }

    return (
        <header className="flex justify-between items-center border-b-2 border-purple-400 dark:border-purple-600 sticky top-0 z-10 bg-neutral-50 dark:bg-neutral-950 transition-colors duration-300 px-4 p-4">
            {/* Lien Logo */}
            <nav className="flex-1 gap-8 text-xl items-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        {NAV_SECTIONS.map((section, i) => (Element(section.id, section.name)))}
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
            <nav className="flex-1 text-center">
                <NavLink to="/#home" className="text-4xl font-medium text-purple-600 p-4 hover:text-yellow-600 dark:hover:text-yellow-500">
                    Sweek.
                </NavLink>
            </nav>
            <nav className="flex-1 flex items-center justify-end">
                <a href="https://www.linkedin.com/in/benjamin-roy22" target="_blank" rel="noopener noreferrer" className="ml-4 hover:text-yellow-600 dark:hover:text-yellow-500"><LinkedInLogoIcon /></a>
                <a href="https://github.com/Sweekt" target="_blank" rel="noopener noreferrer" className="ml-4 hover:text-yellow-600 dark:hover:text-yellow-500"><GitHubLogoIcon /></a>
                <button onClick={() => setDark(d => !d)} className="ml-4">
                    {dark ? '☀️' : '🌙'}
                </button>
            </nav>
        </header>

    );
}