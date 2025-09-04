const canvas: HTMLCanvasElement = document.getElementById("gameCanvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d");

const tile = 80;

function drawGrid() {
    let sq = true;
    for (let i = 0; i < 1200; i += tile) {
        let j = 0;
        sq = !sq;
        for (; j < 800; j += tile) {
            if (sq) {
                ctx.fillStyle = "#364153";
                sq = false;
            } else {
                ctx.fillStyle = "#101828";
                sq = true;
            }
            ctx.fillRect(i, j, tile, tile);
        }
    }
}
drawGrid();