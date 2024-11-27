class ScissorTool extends BaseTool {
    constructor() {
        super('scissor');
        this.startX = null;
        this.startY = null;
    }

    draw() {}

    // Capture the start point of the area to be cut
    mousePressed() {
        this.startX = mouseX;
        this.startY = mouseY;
    }

    // Clear the canvas area defined by the mouse points
    mouseReleased() {
        if (this.startX !== null && this.startY !== null) {
            clear();
            background(255);
        }
        this.startX = null;
        this.startY = null;
    }
}
