class Cell {
  #size;
  #walls;
  #row;
  #col;
  #isBacktracking;
  // Boolean that will store if the cell is visited or not
  #visited;

  // Accepts a size variable, row and col
  constructor(size, row, col) {
    this.#size = size;
    this.#row = row;
    this.#col = col;
    // By default all the cells are not visited
    this.#visited = false;

    // This variable is used to state if the
    // current cell is backtracked or not.
    // By default all cells are set
    // backtracking to false.
    this.#isBacktracking = false;

    // Create object which will store the walls state,
    // open false and closed true. By default all walls
    // are closed.
    this.#walls = {
      top: true,
      bottom: true,
      left: true,
      right: true,
    };
  }

  // This method will draw borders of the cell
  // and rectangles as cells
  show() {
    fill(0, 0, 0);
    noStroke();
    if (this.#visited) {
      fill(255, 0, 0);
    }
    if (this.#isBacktracking) {
      fill(255, 255, 255);
    }
    rect(
      this.#col * this.#size,
      this.#row * this.#size,
      this.#size,
      this.#size
    );

    if (this.#walls.top) {
      stroke(0);
      line(
        this.#col * this.#size,
        this.#row * this.#size,
        this.#col * this.#size + this.#size,
        this.#row * this.#size
      );
    }
    // Bottom line
    if (this.#walls.bottom) {
      stroke(0);
      line(
        this.#col * this.#size,
        this.#row * this.#size + this.#size,
        this.#col * this.#size + this.#size,
        this.#row * this.#size + this.#size
      );
    }

    // Left line
    if (this.#walls.left) {
      stroke(0);
      line(
        this.#col * this.#size,
        this.#row * this.#size,
        this.#col * this.#size,
        this.#row * this.#size + this.#size
      );
    }
    // Right line
    if (this.#walls.right) {
      stroke(0);
      line(
        this.#col * this.#size + this.#size,
        this.#row * this.#size,
        this.#col * this.#size + this.#size,
        this.#row * this.#size + this.#size
      );
    }
  }

  // Getters and setter methods
  isWall(wallDirection) {
    return this.#walls[wallDirection];
  }

  setWallOpen(wallDirection) {
    this.#walls[wallDirection] = false;
  }

  getRowIndex() {
    return this.#row;
  }

  getColIndex() {
    return this.#col;
  }

  setIsVisited() {
    this.#visited = true;
  }

  setIsBacktracking() {
    this.#isBacktracking = true;
  }
}
