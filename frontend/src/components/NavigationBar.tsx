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
import {FaceIcon, GitHubLogoIcon, ImageIcon, LinkedInLogoIcon, SunIcon} from "@radix-ui/react-icons"
import {LinkedinIcon} from "lucide-react";

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
                                "bg-transparent hover:bg-transparent hover:text-hover data-[active]:bg-transparent focus:bg-transparent",
                                // Le style CONDITIONNEL si actif
                                isSectionActive(id)
                                    ? "text-accent1 border-b-2 border-accent2 font-bold" // Style Actif
                                    : "text-bg dark:text-text" // Style Inactif par défaut
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
                        className="bg-transparent hover:bg-transparent hover:text-hover"
                    >
                        <NavLink
                            to={`/#${id}`}
                            className={cn(
                                // Vos styles personnalisés de base
                                "bg-transparent hover:bg-transparent hover:text-hover data-[active]:bg-transparent focus:bg-transparent",
                                // Le style CONDITIONNEL si actif
                                isSectionActive(id)
                                    ? "text-accent1 border-b-2 border-accent2 font-bold" // Style Actif
                                    : "text-bg dark:text-text" // Style Inactif par défaut
                            )}
                        >
                            {name}
                        </NavLink>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className="grid w-[200px] gap-3 p-4">
                            <li>
                                <NavigationMenuLink asChild>
                                    <NavLink to="/projects/Pong" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                                        Pong Game
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
        <header className="flex justify-between items-center border-b-2 border-gray-200 dark:border-accent2 sticky top-0 z-10 bg-text dark:bg-bg transition-colors duration-300 px-4 p-4">
            {/* Lien Logo */}
            <nav className="flex-1 gap-8 text-xl items-center">
                <NavigationMenu>
                    <NavigationMenuList>
                        {NAV_SECTIONS.map((section, i) => (Element(section.id, section.name)))}
                    </NavigationMenuList>
                </NavigationMenu>
            </nav>
            <nav className="flex-1 text-center">
                <NavLink to="/#home" className="text-4xl font-medium text-accent2 p-4 hover:text-hover">
                    Sweek.
                </NavLink>
            </nav>
            <nav className="flex-1 flex items-center justify-end">
                <a href="https://www.linkedin.com/in/benjamin-roy22" target="_blank" rel="noopener noreferrer" className="ml-4"><LinkedInLogoIcon /></a>
                <a href="https://github.com/Sweekt" target="_blank" rel="noopener noreferrer" className="ml-4"><GitHubLogoIcon /></a>
                <button onClick={() => setDark(d => !d)} className="ml-4">
                    {dark ? '☀️' : '🌙'}
                </button>
            </nav>
        </header>

    );
}