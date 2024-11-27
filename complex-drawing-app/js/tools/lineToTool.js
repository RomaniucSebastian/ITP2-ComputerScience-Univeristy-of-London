class LineToTool extends BaseTool {
    constructor() {
        super('line');
        this.startX = null;
        this.startY = null;
    }

    // Draw method for drawing a line
    draw() {
        if (mouseIsPressed && this.startX !== null && this.startY !== null) {
            clear();
            background(255); // Clear and redraw the background
            drawLine(this.startX, this.startY, mouseX, mouseY); // Draw the line
        }
    }

    // Capture the start point of the line
    mousePressed() {
        this.startX = mouseX;
        this.startY = mouseY;
    }

    // Reset the start points on mouse release
    mouseReleased() {
        this.startX = null;
        this.startY = null;
    }
}
