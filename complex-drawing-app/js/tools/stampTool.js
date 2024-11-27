class StampTool extends BaseTool {
    constructor() {
        super('stamp');
    }

    draw() {}

    // Method to place the stamp on mouse press
    mousePressed() {
        image(cloudImage, mouseX - cloudImage.width / 2, mouseY - cloudImage.height / 2);
    }

    mouseReleased() {}
}

let cloudImage;

// Preload the stamp image
function preload() {
    cloudImage = loadImage('assets/cloud.png');
}
