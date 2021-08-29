// This is a linked list data structure
// which is used for implementing stack

class List {
    #head;
    #listSize;

    constructor() {
        this.#head = null;
        this.#listSize = 0;
    }

    // Adds the data to the front of the list
    addFront(data) {
        // Create a new Node
        let newNode = new Node(data, null);

        // If the list is empty
        if (this.#head === null) {
            this.#head = newNode;
        } else {
            newNode.setNextNode(this.#head);
            this.#head = newNode;
        }

        this.#listSize++;
    }

    // Deletes the front node from the list and returns it
    deleteFront() {
        let data = this.#head.getData();
        this.#head = this.#head.getNext();
        this.#listSize--;
        return data;
    }

    // Gettes and setters
    getSize() {
        return this.#listSize;
    }

    isListEmpty() {
        return this.#head === null && this.#listSize === 0;
    }

    // Get the front data.
    getFront() {
        return this.#head.getData();
    }
}
