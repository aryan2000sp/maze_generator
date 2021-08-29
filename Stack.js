// This is a stack data structure
// for the handling the maze
// generator using depth first search.
// The stack is implemented using a linked
// list.

class Stack {
    #list;
    #size;

    constructor() {
        this.#list = new List();
        this.#size = 0;
    }

    // Adds the data at the front of the list
    pushData(data) {
        this.#list.addFront(data);
        this.#size++;
    }

    // Removes the data from the front of the list and returns it
    popData() {
        let data = this.#list.deleteFront();
        this.#size--;
        return data;
    }

    // Returns data from the front of the list
    peek() {
        return this.#list.getFront();
    }

    // Get the stack size.
    getStackSize() {
        return this.#size;
    }

    isStackEmpty() {
        return this.#list.isListEmpty();
    }
}
