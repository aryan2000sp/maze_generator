// Global Variables.
let cnv;
let cellSize = 10;
let canvasWidth = 400;
let canvasHeight = 400;
let grid;
let square;

/**
 * Function to center the canvas.
 */
function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  grid = new Grid(canvasWidth / cellSize, canvasHeight / cellSize, cellSize);
  square = new Square(0, 0, cellSize);
  grid.createGrid();
  print(grid.getGrid().length);
  cnv = createCanvas(canvasWidth, canvasHeight);
  centerCanvas();
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
function windowResized() {
  centerCanvas();
}

// Always runs 60 frames per second
function draw() {
  background(0, 0, 0);
  grid.showGrid();
  grid.generateMaze();
  fill(255, 0, 0);
  frameRate(60);
}
