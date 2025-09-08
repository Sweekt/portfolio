export class Keys {
    keys: Map<string, boolean> = new Map()
    update(key: string, state: boolean) {
        this.keys.set(key, state);
    }
    isPressed(key: string) {
        return (this.keys.get(key) ?? false);
    }
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export class Player {
    x: number;
    y: number;
    dx: number = 0;
    dy: number = 0;
    width: number;
    height: number;
    inputs: Keys;
    jumpState: number = 1;
    movementState: boolean = true;
    constructor(x: number, y: number, width: number, height: number, inputs: Keys) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.inputs = inputs;
    }

    toJSON() {
        return {class: "Player", x: this.x, y: this.y, width: this.width, height: this.height};
    }

    async jumping() {
        this.jumpState -= 1;
        while (this.inputs.isPressed("w") || this.dy === 10) {
            this.dy += 1;
            await sleep(10);
        }
        while (this.jumpState === 0 && this.dy > -10) {
            this.dy -= 1;
            await sleep(10);
        }
    }

    normalizePosition() {
        if (this.x < this.width / 2)
            this.x = this.width / 2;
        if (this.x > 1200 - this.width)
            this.x = 1200 - this.width;
        if (this.y < this.height)
            this.y = this.height;
        if (this.y > 800) {
            this.y = 800;
            this.dy = 0;
            this.jumpState += 1;
        }
    }

    async updateVelocity() {
        //Jump movement
        if (this.inputs.isPressed("w") && this.jumpState > 0) {}
            await this.jumping();
        //Left movement
        if (this.inputs.isPressed("a") && this.dx > -10)
            this.dx -= 1;
        else if (this.dx < 0)
            this.dx += 1;
        //Right movement
        if (this.inputs.isPressed("d") && this.dx < 10)
            this.dx += 1;
        else if (this.dx > 0)
            this.dx -= 1;
        setTimeout(() => this.updateVelocity(), 10);
    }

    async movement() {
        this.x += this.dx;
        this.y -= this.dy;
        this.normalizePosition();
        if (this.movementState)
            setTimeout(() => this.movement(), 10);
    }
}