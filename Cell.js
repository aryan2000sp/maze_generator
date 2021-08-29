class Cell {
    #size;
    #walls;
    #row;
    #col;
    #neighbours;

    // Boolean that will store if the cell is visited or not
    #visited;

    // Accepts a size variable, row and col
    constructor(size, row, col) {
        this.#size = size;
        this.#row = row;
        this.#col = col;
        this.#neighbours = [];
        // By default all the cells are not visited
        this.#visited = false;

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
    show() {
        // Each cell has four lines which are its walls
        // Top line

        if (!this.#walls.top) {
            stroke(200, 200, 200);
        } else {
            stroke(0, 0, 0);
        }

        line(
            this.#col * this.#size,
            this.#row * this.#size,
            this.#col * this.#size + this.#size,
            this.#row * this.#size
        );
        // Bottom line
        if (!this.#walls.bottom) {
            stroke(200, 200, 200);
        } else {
            stroke(0, 0, 0);
        }
        line(
            this.#col * this.#size,
            this.#row * this.#size + this.#size,
            this.#col * this.#size + this.#size,
            this.#row * this.#size + this.#size
        );

        // Left line
        if (!this.#walls.left) {
            stroke(200, 200, 200);
        } else {
            stroke(0, 0, 0);
        }
        line(
            this.#col * this.#size,
            this.#row * this.#size,
            this.#col * this.#size,
            this.#row * this.#size + this.#size
        );

        if (!this.#walls.right) {
            stroke(200, 200, 200);
        } else {
            stroke(0, 0, 0);
        }
        // Right line
        line(
            this.#col * this.#size + this.#size,
            this.#row * this.#size,
            this.#col * this.#size + this.#size,
            this.#row * this.#size + this.#size
        );
    }

    // // The neighbourCell is the cell object
    // // that is neighbour to current cell.
    // addNeighbour(neighbourCell) {
    //     this.#neighbours.push(neighbourCell);
    // }

    // // The neighbourCell is cell object that is
    // // supposed to be removed neighbours array.
    // removeNeighbour(neighbourCell) {
    //     let newArray = [];
    //     for (let i = 0; i < this.#neighbours.length; i++) {
    //         if (this.#neighbours[i] !== neighbourCell) {
    //             newArray.push(this.#neighbours[i]);
    //         }
    //     }

    //     this.#neighbours = newArray;
    // }

    // Getters and setter methods
    isWall(wallDirection) {
        return this.#walls[wallDirection];
    }

    setWallOpen(wallDirection, color) {
        if (color === "green") {
            stroke(0, 255, 0);
        }
        if (color === "white") {
            stroke(255, 255, 255);
        }
        if (wallDirection === "top") {
            line(
                this.#col * this.#size,
                this.#row * this.#size,
                this.#col * this.#size + this.#size,
                this.#row * this.#size
            );
        } else if (wallDirection === "bottom") {
            line(
                this.#col * this.#size,
                this.#row * this.#size + this.#size,
                this.#col * this.#size + this.#size,
                this.#row * this.#size + this.#size
            );
        } else if (wallDirection === "left") {
            line(
                this.#col * this.#size,
                this.#row * this.#size,
                this.#col * this.#size,
                this.#row * this.#size + this.#size
            );
        } else if (wallDirection === "right") {
            line(
                this.#col * this.#size + this.#size,
                this.#row * this.#size,
                this.#col * this.#size + this.#size,
                this.#row * this.#size + this.#size
            );
        }

        // noStroke();
        // fill(0, 255, 0);
        // rect(
        //     this.#row * this.#size,
        //     this.#col * this.#size,
        //     this.#size,
        //     this.#size
        // );
        this.#walls[wallDirection] = false;
    }

    getRowIndex() {
        return this.#row;
    }

    getColIndex() {
        return this.#col;
    }
}
