class FreehandTool extends BaseTool {
    constructor() {
        super('freehand'); // Call parent constructor
        this.previousX = null;
        this.previousY = null;
    }

    // Draw method for freehand drawing
    draw() {
        if (mouseIsPressed) {
            stroke(currentColor);
            if (this.previousX && this.previousY) {
                line(this.previousX, this.previousY, mouseX, mouseY);
            }
            this.previousX = mouseX;
            this.previousY = mouseY;
        } else {
            this.previousX = null;
            this.previousY = null;
        }
    }

    mousePressed() {}

    mouseReleased() {}
}
