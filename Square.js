// This is the object that will
// move to create the maze and
// help to visualize the process.

class Square {
    #size;

    // Will set the initial coords for the square
    #xCoord;
    #yCoord;

    constructor(xCoord, yCoord, size) {
        this.#xCoord = xCoord;
        this.#yCoord = yCoord;
        this.#size = size;
    }

    moveUp(distance) {
        this.#yCoord -= distance;
    }

    moveDown(distance) {
        this.#yCoord += distance;
    }

    moveLeft(distance) {
        this.#xCoord -= distance;
    }

    moveRight(distance) {
        this.#xCoord += distance;
    }

    getXCoord() {
        return this.#xCoord;
    }

    getYCoord() {
        return this.#yCoord;
    }

    // This method is responsible for rendering the
    // square on the canvas.
    show() {
        fill(0, 255, 0);
        noStroke();
        rect(this.#xCoord, this.#yCoord, this.#size, this.#size);
    }
}
