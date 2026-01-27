import Database from 'better-sqlite3';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
//import { WebSocket } from 'ws';

const __filename = fileURLToPath(import.meta.url);
const currentDir = path.dirname(__filename);

const DB_FILE_NAME = 'pong_hist.db';
const DB_DIR = path.resolve(currentDir, '..', 'data');
const DB_FILE_PATH = path.join(DB_DIR, DB_FILE_NAME);

try {
    if (!fs.existsSync(DB_DIR)) {
        console.log(`Creating database directory: ${DB_DIR}`);
        fs.mkdirSync(DB_DIR, { recursive: true });
    }
} catch (error) {
    console.error("Failed to create database directory:", error);
    throw error;
}

export const Pong_Hist_db = new Database(DB_FILE_PATH);
console.log(`Database connected: ${DB_FILE_PATH}`);

Pong_Hist_db.pragma('journal_mode = WAL');

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

export type MatchResult = {
    game: number;
    id: number;
    playerA_id: number;
    playerB_id: number;
    scoreA: number;
    scoreB: number;
    winner_id: number;
    match_time: string;
};

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

export function getMatchHistory(userId: number): MatchResult[] { // Changé de number à string
    return Pong_Hist_db.prepare(`
        SELECT *
        FROM MatchResult
        WHERE playerA_id = ?
           OR playerB_id = ?
        ORDER BY match_time DESC
    `).all(userId, userId) as MatchResult[];
}