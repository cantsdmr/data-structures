import { AVLTree } from "./avl-tree";
import { BinarySearchTree } from "./binary-search-tree";
import { BinaryTree } from "./binary-tree";
import { RegularTree } from "./regular-tree";

type GenericTree<T> = BinarySearchTree<T> | BinaryTree<T> | AVLTree<T> | RegularTree<T>;

export enum TreeType {
    BinarySearchType,
    BinaryType,
    AVLType,
    RegularType
}

export interface TreeParam {
    type: TreeType
}

export class Tree<T> {
    private innerTree: GenericTree<T>;

    constructor(params: TreeParam) {
        switch (params.type) {
            case TreeType.BinarySearchType:
                this.innerTree = new BinarySearchTree<T>();
                break;
            case TreeType.BinaryType:
                this.innerTree = new BinaryTree<T>();
                break;
            case TreeType.AVLType:
                this.innerTree = new AVLTree<T>();
                break;
            case TreeType.RegularType:
            default:
                this.innerTree = new RegularTree<T>();
                break;
        }
    }

    getTree = () => {
        return this.innerTree;
    }
}

export interface TreeOperations<T> {
    delete: (data: T) => void
    insert: (data: T) => void
    search: (data: T) => boolean
    printPreOrder: () => void
    printInOrder: () => void
    printPostOrder: () => void
    isEmpty: () => boolean
}

export class BinaryTreeNode<T> {
    private data: T | null = null;
    private rightChild: BinaryTreeNode<T> | null = null;
    private leftChild: BinaryTreeNode<T> | null = null;

    constructor(data: T | null = null, rightChild: BinaryTreeNode<T> | null = null, leftChild: BinaryTreeNode<T> | null = null) {
        this.data = data;
        this.rightChild = rightChild;
        this.leftChild = leftChild;
    }
}

export class SimpleTreeNode<T> {
    private data: T | null = null;
    private nextChild: SimpleTreeNode<T> | null = null;
    private firstChild: SimpleTreeNode<T> | null = null;

    constructor(data: T | null = null, nextChild: SimpleTreeNode<T> | null = null, firstChild: SimpleTreeNode<T> | null = null) {
        this.data = data;
        this.nextChild = nextChild;
        this.firstChild = firstChild;
    }
}