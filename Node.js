// This is used for implementing the List
"use strict";
class Node {
    #data;
    #nextNode;

    constructor(data, nextNode) {
        this.#data = data;
        this.#nextNode = nextNode;
    }

    // Getters and setters
    getData() {
        return this.#data;
    }

    getNext() {
        return this.#nextNode;
    }

    setNextNode(newNode) {
        this.#nextNode = newNode;
    }
}
