import {fetchPlayerWin, updateMmr} from "./utils.js";
import {insertMatchResult} from "./database.js";
import {resetHazard} from "./api.js";
import { WebSocket } from "ws";

export class Ball {
    x: number;
    y: number;
    angle: number;
    speed: number;
    ispeed: number;
    ospeed: number;
    radius: number;
    color: string;
    constructor(x: number, y: number, angle: number, speed: number, radius: number, color: string) {
        this.x = x;
        this.y = y;
        this.angle = angle;
        this.speed = speed;
        this.ispeed = speed;
        this.ospeed = speed;
        this.radius = radius;
        this.color = color;
    }
    toJSON() {
        return {type: "Ball", x: this.x, y: this.y, angle: this.angle, speed: this.speed, ispeed: this.ispeed, radius: this.radius, color: this.color};
    }
}

export class Paddle {
    name: string = "Player 2";
    x: number;
    y: number;
    width: number;
    height: number;
    speed: number;
    color: string;
    score: string = "0";
    constructor(x: number, y: number, width: number, height: number, speed: number, color: string) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.color = color;
    }
    toJSON() {
        return {type: "Paddle", name: this.name, x: this.x, y: this.y, width: this.width, height: this.height, speed: this.speed, color: this.color, score: this.score};
    }
}

export class keyInput {
    arrowUp: boolean = false;
    arrowDown: boolean = false;
    w: boolean = false;
    s: boolean = false;
}

export class Hazard {
    x: number;
    y: number = 0;
    speed: number;
    type: string;
    constructor (x: number, speed: number, type: string) {
        this.x = x;
        this.speed = speed;
        this.type = type;
    }
    toJSON () {
        return {x: this.x, y: this.y, type: this.type};
    }
}

export class gameState {
    state: number = 0;
    start: boolean = false;
    maxScore: string = "6";
    score1: string = "0";
    score2: string = "0";
    winner: string = "none";
    hazard: Hazard = new Hazard(0, 0, "Default");
    timer: Timer = new Timer (0, 3);
    toJSON() {
        return {type: "Game", state: this.state, start: this.start, score1: this.score1, score2: this.score2, hazard: this.hazard, timer: this.timer, winner: this.winner};
    }
}

export class Room {
    id: number;
    type: string = "default";
    players: Player[] = [];
    specs: Player[] = [];
    ended: boolean = false;
    constructor (id: number, type?: string) {
        this.id = id;
        if (type)
            this.type = type;
    }
}

export class Player {
    name: string = "Default";
    dbId: number = -1;
    mmr: number = 1200;
    id: number;
    ws: WebSocket;
    frequency: number = 10;
    paddle: Paddle = new Paddle(0, 400, 20, 200, 10, "#fcc800");
    input: keyInput = new keyInput();
    constructor(id: number, ws: WebSocket) {
        this.id = id;
        this.ws = ws;
    }
}

export class Timer {
    timeLeft: number;
    started: boolean = false;
    intervalId: ReturnType<typeof setInterval> | null = null;
    constructor(minutes: number, seconds: number) {
        this.timeLeft = minutes * 60 + seconds;
    }
    start() {
        this.started = true;
        this.intervalId = setInterval(() => {
            if (this.timeLeft > 0)
                this.timeLeft--;
            else
                this.stop();
        }, 1000);
    }
    stop() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            this.started = false;
        }
    }
    toJSON() {
        return {timeLeft: this.timeLeft, started: this.started};
    }
}