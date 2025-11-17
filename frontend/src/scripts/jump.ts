class Player {
    x: number;
    y: number;
    width: number;
    height: number;
    constructor(x: number, y: number, width: number, height: number) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }
}

export function jumpGame(canvas: HTMLCanvasElement) {
    console.log("Jump game started");
    const ctx = canvas.getContext("2d")!;

    const socket = new WebSocket("ws://localhost:8080");

    socket.onopen = () => {
        console.log("Connection opened");

    }
    window.addEventListener("keydown", (event) => {
        socket.send(JSON.stringify({ type: "input", key: event.key, state: true }));
    });

    window.addEventListener("keyup", (event) => {
        socket.send(JSON.stringify({ type: "input", key: event.key, state: false }));
    });

    function drawMap() {
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    function drawPlayer(player: Player) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(player.x - player.width / 2, player.y - player.height, player.width, player.height);
    }

    function drawLoop(player: Player) {
        drawMap();
        drawPlayer(player);
        setTimeout(() => drawLoop(player), 10);
    }

    const player = new Player(canvas.width / 2, canvas.height, 80, 80);
    socket.onopen = function () {
        drawLoop(player);
        return console.log("Connected to server");
    };

    socket.onmessage = function (event) {
        const data = JSON.parse(event.data);
        switch (data.class) {
            case "Player":
                player.x = data.x;
                player.y = data.y;
                player.width = data.width;
                player.height = data.height;
                break;
            default:
                console.warn("Unknown type received:", data);
        }
    };

    socket.onclose = function () { return console.log("Disconnected"); };
}