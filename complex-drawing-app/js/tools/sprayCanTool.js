class SprayCanTool extends BaseTool {
    constructor() {
        super('sprayCan');
    }

    // Draw method for the spray can effect
    draw() {
        if (mouseIsPressed) {
            for (let i = 0; i < 10; i++) {
                let offsetX = random(-10, 10);
                let offsetY = random(-10, 10);
                stroke(currentColor);
                point(mouseX + offsetX, mouseY + offsetY);
            }
        }
    }

    mousePressed() {}

    mouseReleased() {}
}
