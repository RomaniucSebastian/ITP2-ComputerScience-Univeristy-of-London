let currentTool;
let currentColor = '#000000';

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('canvasContainer'); // Attach canvas to the container
    background(255); // Set the background to white
    currentTool = new FreehandTool(); // Default tool is Freehand
}

function draw() {
    currentTool.draw(); // Delegate draw behavior to the current tool
}

function mousePressed() {
    currentTool.mousePressed(); // Delegate mousePressed behavior to the current tool
}

function mouseReleased() {
    currentTool.mouseReleased(); // Delegate mouseReleased behavior to the current tool
}

// Function to set the current tool based on user selection
function setTool(tool) {
    switch(tool) {
        case 'freehand':
            currentTool = new FreehandTool();
            break;
        case 'line':
            currentTool = new LineToTool();
            break;
        case 'rectangle':
            currentTool = new RectangleTool();
            break;
        case 'ellipse':
            currentTool = new EllipseTool();
            break;
        case 'sprayCan':
            currentTool = new SprayCanTool();
            break;
        case 'mirrorDraw':
            currentTool = new MirrorDrawTool();
            break;
        case 'stamp':
            currentTool = new StampTool();
            break;
        case 'scissor':
            currentTool = new ScissorTool();
            break;
        case 'image':
            currentTool = new ImageTool();
            break;
    }
}

// Function to set the current color based on user selection
function setColor(color) {
    currentColor = color;
}
