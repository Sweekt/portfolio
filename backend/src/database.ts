import Database from 'better-sqlite3';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url'; // <-- NOUVEL IMPORT : pour convertir URL -> chemin de fichier
import { WebSocket } from 'ws'; // Gardé pour le contexte si la classe Player y fait référence

// --- CONFIGURATION DE LA BASE DE DONNÉES ---

// Définition de l'équivalent de __dirname pour l'environnement ESM
const __filename = fileURLToPath(import.meta.url);
const currentDir = path.dirname(__filename);

const DB_FILE_NAME = 'pong_hist.db';
// Résolution du chemin : On utilise 'currentDir' (qui est le dossier 'dist' après compilation)
// pour remonter d'un niveau et trouver le dossier 'data'.
const DB_DIR = path.resolve(currentDir, '..', 'data');
const DB_FILE_PATH = path.join(DB_DIR, DB_FILE_NAME);

// 1. VÉRIFIER et CRÉER le répertoire (dossier) si nécessaire
try {
    if (!fs.existsSync(DB_DIR)) {
        console.log(`Creating database directory: ${DB_DIR}`);
        // recursive: true crée tous les sous-dossiers manquants
        fs.mkdirSync(DB_DIR, { recursive: true });
    }
} catch (error) {
    console.error("Failed to create database directory:", error);
    throw error;
}

// 2. INITIALISER la connexion
export const Pong_Hist_db = new Database(DB_FILE_PATH);
console.log(`Database connected: ${DB_FILE_PATH}`);

// Configuration pour la performance
Pong_Hist_db.pragma('journal_mode = WAL');

// --- DÉFINITIONS ET EXPORTS ---

// Création de la table (à exécuter une seule fois au démarrage)
Pong_Hist_db.exec(`
    CREATE TABLE IF NOT EXISTS MatchResult (
        game INTEGER DEFAULT 0,
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        playerA_id INTEGER NOT NULL,
        playerB_id INTEGER NOT NULL,
        scoreA INTEGER NOT NULL,
        scoreB INTEGER NOT NULL,
        winner_id INTEGER NOT NULL,
        match_time DATETIME DEFAULT CURRENT_TIMESTAMP
    );
`);


// Définition de la structure des résultats de match
export type MatchResult = {
    game: number;
    id: number;
    playerA_id: number; // Harmonisé avec le type d'ID utilisateur
    playerB_id: number; // Harmonisé
    scoreA: number;
    scoreB: number;
    winner_id: number; // Harmonisé
    match_time: string; // format ISO
};

/**
 * Insère le résultat d'un match.
 * @param playerA_id L'ID du joueur A (Number).
 * @param playerB_id L'ID du joueur B (Number).
 * @param scoreA Score du joueur A.
 * @param scoreB Score du joueur B.
 * @param winner 0 pour A, 1 pour B, autre pour match nul (draw).
 */
export function insertMatchResult(
    playerA_id: number,
    playerB_id: number,
    scoreA: number,
    scoreB: number,
    winner: number
): void {
    let winner_id: number = -3;
    if (winner === 0)
        winner_id = playerA_id;
    else if (winner === 1)
        winner_id = playerB_id;

    Pong_Hist_db.prepare(`
        INSERT INTO MatchResult (playerA_id, playerB_id, scoreA, scoreB, winner_id)
        VALUES (?, ?, ?, ?, ?)
    `).run(playerA_id, playerB_id, scoreA, scoreB, winner_id);
}

/**
 * Récupère l'historique des matchs pour un utilisateur donné.
 * @param userId L'ID de l'utilisateur (Number).
 */
export function getMatchHistory(userId: number): MatchResult[] { // Changé de number à string
    return Pong_Hist_db.prepare(`
        SELECT *
        FROM MatchResult
        WHERE playerA_id = ?
           OR playerB_id = ?
        ORDER BY match_time DESC
    `).all(userId, userId) as MatchResult[];
}