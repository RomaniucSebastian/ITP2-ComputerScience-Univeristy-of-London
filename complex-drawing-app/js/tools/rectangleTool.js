class RectangleTool extends BaseTool {
    constructor() {
        super('rectangle');
        this.startX = null;
        this.startY = null;
    }

    // Draw method for drawing a rectangle
    draw() {
        if (mouseIsPressed && this.startX !== null && this.startY !== null) {
            clear();
            background(255); // Clear and redraw the background
            drawRectangle(this.startX, this.startY, mouseX - this.startX, mouseY - this.startY); // Draw the rectangle
        }
    }

    // Capture the start point of the rectangle
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
