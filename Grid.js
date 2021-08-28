class Grid {
  #width;
  #height;
  #cellSize;
  // This a boolean 2d grid map which stores if the cell is visited or not
  #visited;
  // This is a grid array which stores the cells objects
  #girdArray;

  constructor(width, height, cellSize) {
    this.#width = width;
    this.#height = height;
    this.#cellSize = cellSize;
    this.#girdArray = [];
    this.#visited = [];
  }

  // This method will create a grid with cell objects in it
  // This method will also fill the visited
  createGrid() {
    let gridRow;
    let gridRowVisited;
    // let totalRows = this.#width / this.#cellSize;
    // let totalCols = this.#height / this.#cellSize;
    for (let row = 0; row < this.#width; row++) {
      gridRow = [];
      gridRowVisited = [];
      for (let col = 0; col < this.#height; col++) {
        gridRow[col] = new Cell(this.#cellSize, row, col);
        gridRowVisited[col] = false;
      }
      this.#girdArray[row] = gridRow;
      this.#visited[row] = gridRowVisited;
    }
  }

  // This method will draw each cell.
  // This method is called inside the
  // draw method and is called once the
  // create grid method is called in setup
  // method.
  showGrid() {
    for (let row = 0; row < this.#width; row++) {
      for (let col = 0; col < this.#height; col++) {
        this.#girdArray[row][col].show();
      }
    }
  }

  // Getters and setters
  getGrid() {
    return this.#girdArray;
  }
}
