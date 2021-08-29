// Global Variables.
// var cnv;
let cellSize = 20;
let canvasWidth = 400;
let canvasHeight = 400;
let grid;
let square;

/**
 * Function to center the canvas.
 */
// function centerCanvas() {
//   var x = (windowWidth - width) / 2;
//   var y = (windowHeight - height) / 2;
//   cnv.position(x, y);
// }

function setup() {
    grid = new Grid(canvasWidth / cellSize, canvasHeight / cellSize, cellSize);
    square = new Square(0, 0, cellSize);
    grid.createGrid();
    print(grid.getGrid().length);
    createCanvas(canvasWidth, canvasHeight);
    // centerCanvas();
}

function keyPressed() {
    if (keyCode === UP_ARROW) {
        square.moveUp(cellSize);
    } else if (keyCode === DOWN_ARROW) {
        square.moveDown(cellSize);
    } else if (keyCode === LEFT_ARROW) {
        square.moveLeft(cellSize);
    } else if (keyCode === RIGHT_ARROW) {
        square.moveRight(cellSize);
    }
}
// function windowResized() {
//   centerCanvas();
// }

// Always runs 1 frames per second
function draw() {
    background(200, 200, 200);
    grid.showGrid();
    grid.generateMaze();
    // Change the frame rate of the draw function.
    frameRate(60);
    // square.moveDown(cellSize);
    // square.show();
    // print(square.getXCoord(), square.getYCoord());
}
