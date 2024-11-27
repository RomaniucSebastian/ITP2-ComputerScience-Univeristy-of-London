// Toolbox class to manage and add tools
class Toolbox {
    constructor() {
        this.tools = [];
        this.addTool(new FreehandTool());
        this.addTool(new LineToTool());
        this.addTool(new RectangleTool());
        this.addTool(new EllipseTool());
        this.addTool(new SprayCanTool());
        this.addTool(new MirrorDrawTool());
        this.addTool(new StampTool());
        this.addTool(new ScissorTool());
        this.addTool(new ImageTool());
    }

    // Method to add a tool to the toolbox
    addTool(tool) {
        this.tools.push(tool);
    }
}

let toolbox = new Toolbox(); // Create a new toolbox instance
