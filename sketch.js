// Global Variables.
// var cnv;
let canvasWidth = 400;
let canvasHeight = 400;
let grid;

/**
 * Function to center the canvas.
 */
// function centerCanvas() {
//   var x = (windowWidth - width) / 2;
//   var y = (windowHeight - height) / 2;
//   cnv.position(x, y);
// }

function setup() {
  grid = new Grid(canvasWidth / 20, canvasHeight / 20, 20);
  grid.createGrid();
  print(grid.getGrid().length);
  createCanvas(canvasWidth, canvasHeight);
  // centerCanvas();
}

// function windowResized() {
//   centerCanvas();
// }

// Always runs 60 frames per second
function draw() {
  background(200, 200, 200);
  grid.showGrid();
}
