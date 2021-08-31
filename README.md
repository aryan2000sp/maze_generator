# Maze Generator

---

Click [here](https://maze-generator-1.netlify.app/) to see maze generator in action.

The main motive behind this project was to
visualize how backtracking algorithms can work. For more information click [here](https://en.wikipedia.org/wiki/Maze_generation_algorithm#Iterative_implementation)

# Program Structure and planning

---

This project was built using the principles of object oriented programming.
There are 6 classes in total.

- Cell: The Cell class is responsible for storing the walls state (open or closed), rendering each cell as square and its four borders (walls) as lines. State of each cell changes as the algorithm progresses.

- Grid: This class is responsible for creating the grid of cells of certain size. This class also generates the maze using algorithm described below.

- Stack: The Stack class is an adt data structure which is implemented using Linked List. The stack is used in implementing the algorithm as described below.

- List: This class implements the Linked List data structure using nodes to store data.

- The sketch.js file is responsible for setting up and creating visuals on canvas and uses function from the p5.js library.

# Algorithm Steps

---

1. Push any random cell on the stack and mark it as visited.

2. Then while the stack is not empty
   1. Pop the current cell from the stack.
   2. Get the one of the current cell's random neighbouring cell (top, bottom, left, right) which is unvisited.
   3. Remove the walls between the current cell the new choosen neighbouring cell.
   4. Mark the new cell as visited and push it on the stack.

# Why this algorithm Works?

---

Whenever we reach a dead end where there are no neighbouring cells left which are unvisited then we backtrack to previous cell which was stored on the stack. This algorithm makes sure that all the cells in the grid are visited.

# Data Structures used

---

1. Linked List
2. Stack ADT implemented using Linked List.

# Tools used

---

1. Used the p5.js library for creating the visual representation of the algorithm. For more info click [here](https://p5js.org/).

# Reference

---

1. Wikipedia: [link](https://en.wikipedia.org/wiki/Maze_generation_algorithm)
