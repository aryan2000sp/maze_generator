class Cell {
  #size;
  #walls;
  #row;
  #col;
  // Accepts a size variable
  constructor(size, row, col) {
    this.#size = size;
    this.#row = row;
    this.#col = col;
    // Create a boolean array for the walls
    this.#walls = [true, true, true, true];
  }

  // This method will borders of the cell
  show() {
    // Each cell has four lines which are its walls
    // Top line
    line(
      this.#col * this.#size,
      this.#row * this.#size,
      this.#col * this.#size + this.#size,
      this.#row * this.#size
    );

    // Bottom line
    line(
      this.#col * this.#size,
      this.#row * this.#size + this.#size,
      this.#col * this.#size + this.#size,
      this.#row * this.#size + this.#size
    );

    // Left line
    line(
      this.#col * this.#size,
      this.#row * this.#size,
      this.#col * this.#size,
      this.#row * this.#size + this.#size
    );

    // Right line
    line(
      this.#col * this.#size + this.#size,
      this.#row * this.#size,
      this.#col * this.#size + this.#size,
      this.#row * this.#size + this.#size
    );
  }
}
