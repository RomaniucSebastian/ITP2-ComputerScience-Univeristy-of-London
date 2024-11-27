class MirrorDrawTool extends BaseTool {
    constructor() {
        super('mirrorDraw');
    }

    // Draw method for mirror drawing
    draw() {
        if (mouseIsPressed) {
            stroke(currentColor);
            // Draw mirrored lines
            line(mouseX, mouseY, width - mouseX, mouseY);
            line(mouseX, mouseY, mouseX, height - mouseY);
        }
    }

    mousePressed() {}

    mouseReleased() {}
}
