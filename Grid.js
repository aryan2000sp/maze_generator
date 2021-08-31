class Grid {
  #width;
  #height;
  #cellSize;

  // This a boolean 2d grid map which stores if the cell is visited or not
  #visited;
  // This is a grid array which stores the cells objects
  #girdArray;

  // This a stack that will used in maze generation
  #stack;

  // This variable will store the boolean
  // true is stack is empty and false if not
  #isStackEmpty;

  constructor(width, height, cellSize) {
    this.#width = width;
    this.#height = height;
    this.#cellSize = cellSize;
    this.#girdArray = [];
    this.#visited = [];
    this.#stack = new Stack();
    this.#isStackEmpty = false;
  }

  // This method will create a grid with cell objects in it
  // This method will also fill the visited
  createGrid() {
    let gridRow;
    let gridRowVisited;
    // let totalRows = this.#width / this.#cellSize;
    // let totalCols = this.#height / this.#cellSize;
    for (let row = 0; row < this.#height; row++) {
      gridRow = [];
      gridRowVisited = [];
      for (let col = 0; col < this.#width; col++) {
        gridRow[col] = new Cell(this.#cellSize, row, col);
        gridRowVisited[col] = false;
      }
      this.#girdArray[row] = gridRow;
      this.#visited[row] = gridRowVisited;
    }

    // Mark the initial cell top-left cell as visited
    this.#visited[0][0] = true;

    this.#girdArray[0][0].setIsVisited();

    // Add the top left cell to the stack
    // so that the stack won't be empty.
    this.#stack.pushData(this.#girdArray[0][0]);
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

  // This method will generate the maze
  // This method will be called inside
  // the draw() function and will called
  // until the stack is empty.
  generateMaze() {
    if (!this.#stack.isStackEmpty()) {
      //   console.log("Called");
      let currentCell = this.#stack.popData();
      let currentRowIndex = currentCell.getRowIndex();
      let currentColIndex = currentCell.getColIndex();

      // Create an array that will store the unvisited
      // cells.
      let unvisitedCell = [];

      // Check if the for neighbours and add them the neighbours
      // of the current cell.

      // Add the top cell if available and not visited
      if (
        currentRowIndex > 0 &&
        !this.#visited[currentRowIndex - 1][currentColIndex]
      ) {
        unvisitedCell.push({
          position: "top",
          cell: this.#girdArray[currentRowIndex - 1][currentColIndex],
        });
      }

      // Add the bottom cell if available and not visited
      if (
        currentRowIndex < this.#height - 1 &&
        !this.#visited[currentRowIndex + 1][currentColIndex]
      ) {
        unvisitedCell.push({
          position: "bottom",
          cell: this.#girdArray[currentRowIndex + 1][currentColIndex],
        });
      }

      // Add the right cell if available and not visited
      if (
        currentColIndex < this.#width - 1 &&
        !this.#visited[currentRowIndex][currentColIndex + 1]
      ) {
        unvisitedCell.push({
          position: "right",
          cell: this.#girdArray[currentRowIndex][currentColIndex + 1],
        });
      }

      // Add the left cell if available and not visited
      if (
        currentColIndex > 0 &&
        !this.#visited[currentRowIndex][currentColIndex - 1]
      ) {
        unvisitedCell.push({
          position: "left",
          cell: this.#girdArray[currentRowIndex][currentColIndex - 1],
        });
      }

      // If the unvisited cell array is not empty then only
      // get a random cell and add it to the stack.
      if (unvisitedCell.length > 0) {
        // Push the current cell on the stack
        // so that we can backtrack
        this.#stack.pushData(currentCell);
        const randomCell =
          unvisitedCell[Math.floor(Math.random() * unvisitedCell.length)];

        // Now choose from randomly choose from the unvisited cells
        const newCell = randomCell.cell;

        // Now we remove the wall between the current cell and the
        // new choosen cell.
        if (randomCell.position === "top") {
          newCell.setWallOpen("bottom");
          currentCell.setWallOpen("top");
        }
        if (randomCell.position === "bottom") {
          newCell.setWallOpen("top");
          currentCell.setWallOpen("bottom");
        }
        if (randomCell.position === "left") {
          newCell.setWallOpen("right");
          currentCell.setWallOpen("left");
        }
        if (randomCell.position === "right") {
          newCell.setWallOpen("left");
          currentCell.setWallOpen("right");
        }

        // Mark the current cell as visited
        this.#visited[newCell.getRowIndex()][newCell.getColIndex()] = true;
        this.#girdArray[newCell.getRowIndex()][
          newCell.getColIndex()
        ].setIsVisited();

        this.#stack.pushData(newCell);
      } else {
        //  Here we know that the we are bracktracking
        this.#girdArray[currentCell.getRowIndex()][
          currentCell.getColIndex()
        ].setIsBacktracking();
      }
    }
  }

  // Getters and setters
  getGrid() {
    return this.#girdArray;
  }
}
