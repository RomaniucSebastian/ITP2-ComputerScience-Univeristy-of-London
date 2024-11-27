// Helper function to draw a line
function drawLine(x1, y1, x2, y2) {
    stroke(currentColor);
    line(x1, y1, x2, y2);
}

// Helper function to draw a rectangle
function drawRectangle(x, y, w, h) {
    stroke(currentColor);
    noFill();
    rect(x, y, w, h);
}

// Helper function to draw an ellipse
function drawEllipse(x, y, w, h) {
    stroke(currentColor);
    noFill();
    ellipse(x, y, w, h);
}
