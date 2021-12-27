// console.log("Add items to regular tree");

import { BinarySearchTree } from "./data-structures/tree/binary-search-tree";
import { BinaryTree } from "./data-structures/tree/binary-tree";


// let regularTree = new RegularTree<string>()


// regularTree.insert("Projects");

// const rootNode = regularTree.getRoot();

// regularTree.insert("Ceng", rootNode);
// regularTree.insert("SE", rootNode);

// regularTree.insert("Ce 707", rootNode.firstChild ?? rootNode);
// regularTree.insert("Ce 555", rootNode.firstChild ?? rootNode);
// regularTree.insert("Ce 455", rootNode.firstChild ?? rootNode);
// regularTree.insert("Ce 355", rootNode.firstChild ?? rootNode);

// regularTree.insert("SE 404", rootNode.firstChild?.nextSibling ?? rootNode);

// regularTree.printPerDepth(rootNode);


let binaryTree = new BinarySearchTree<number>();

// binaryTree.insert(10);
// binaryTree.insert(20);
// binaryTree.insert(30);
// binaryTree.insert(40);
// binaryTree.insert(50);
// binaryTree.insert(60);
// binaryTree.insert(70);

//binaryTree.printPreOrder(binaryTree.getRoot());

//binaryTree.printInOrder(binaryTree.getRoot());

//binaryTree.delete(14, binaryTree.getRoot())

//binaryTree.printInOrder(binaryTree.getRoot());

const numbers = [10, 20, 25, 30, 40, 50, 60];

binaryTree.createBSTInOrder(numbers, binaryTree.getRoot());

binaryTree.printPreOrder(binaryTree.getRoot());