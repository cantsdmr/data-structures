// console.log("Add items to regular tree");

import { BinaryMinHeap } from "./data-structures/heap/binary-min-heap";
import { Stack, StackType } from "./data-structures/stack/stack";
import { HuffmanCoding } from "./encoding/huffman-coding";


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


// let binaryHeap = new BinaryMinHeap<number>();

// binaryHeap.buildHeap([10, 3, 9, 24]);
// console.log(binaryHeap.findSibling(4));

// let stack = new Stack<number>({
//     type: StackType.ArrayStackType
// });

// const actualStack = stack.getStack();
// actualStack.push(-4);
// actualStack.push(15);
// actualStack.push(45);
// actualStack.push(-1);
// actualStack.push(8);
// actualStack.push(9);
// actualStack.push(42);

// console.log(actualStack.findMin());

// binaryHeap.insert(10);
// binaryHeap.insert(3);
// binaryHeap.insert(9);
// binaryHeap.insert(24);

// console.log(binaryHeap.findMin());
// console.log(binaryHeap.deleteMin());
// console.log(binaryHeap.findMin());
// console.log(binaryHeap.deleteMin());
// console.log(binaryHeap.findMin());
// console.log(binaryHeap.deleteMin());


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

// const numbers = [10, 20, 25, 30, 40, 50, 60];

// binaryTree.createBSTInOrder(numbers, binaryTree.getRoot());

// binaryTree.printPreOrder(binaryTree.getRoot());

const input = 'ABCDASDASDAASEETT';
const huff = new HuffmanCoding(input);

const result = huff.encode();

// calculate compression ratio using byte calculation
const compressionRatio = (result.encodedString.length / (input.length * 8)) * 100;
console.log(compressionRatio);


console.log(huff.decode(result.encodedString));