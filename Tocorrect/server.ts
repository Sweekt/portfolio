import express from "express";
import { WebSocketServer } from "ws";
import http from "http";
import path from "path";
import { fileURLToPath } from "url";
import { Keys, Player } from "./class.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const server = http.createServer(app);
const wss = new WebSocketServer({ server });

app.use(express.static(path.join(__dirname, "../public")));

wss.on("connection", (ws) => {
    console.log("Client connected");
    const input = new Keys;
    const player = new Player(600, 800, 80, 80, input);
    ws.on("message", (message) => {
        const data = JSON.parse(message.toString());
        if (data.type === "input") {
            input.update(data.key, data.state)
        }
    });
    player.updateVelocity();
    player.movement();
    const intervalId = setInterval(() => {
        ws.send(JSON.stringify(player));
    }, 10);
    ws.on("close", () => {
        clearInterval(intervalId);
        console.log("Client disconnected")
    });
});

server.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});