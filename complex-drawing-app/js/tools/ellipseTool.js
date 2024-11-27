class EllipseTool extends BaseTool {
    constructor() {
        super('ellipse');
        this.startX = null;
        this.startY = null;
    }

    // Draw method for drawing an ellipse
    draw() {
        if (mouseIsPressed && this.startX !== null && this.startY !== null) {
            clear();
            background(255); // Clear and redraw the background
            drawEllipse(this.startX, this.startY, mouseX - this.startX, mouseY - this.startY); // Draw the ellipse
        }
    }

    // Capture the start point of the ellipse
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
