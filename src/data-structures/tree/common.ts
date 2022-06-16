import { AVLTree } from "./avl-tree";
import { BinarySearchTree } from "./binary-search-tree";
import { BinaryTree } from "./binary-tree";
import { RegularTree } from "./regular-tree";

export type GenericTree<T> = BinarySearchTree<T> | BinaryTree<T> | AVLTree<T> | RegularTree<T>;

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
    insert: (data: T, parentNode?: any) => void
    search: (data: T) => boolean
    isEmpty: () => boolean
}

export class BinaryTreeNode<T> {
    data: T;
    leftChild: BinaryTreeNodeType<T>;
    rightChild: BinaryTreeNodeType<T>;

    constructor(data: T, rightChild: BinaryTreeNodeType<T>, leftChild: BinaryTreeNodeType<T>) {
        this.data = data;
        this.rightChild = rightChild;
        this.leftChild = leftChild;
    }

    deleteNode(){
        this.rightChild = null;
        this.leftChild = null;
    }
}

export class RegularTreeNode<T> {
    data: T | null = null;
    nextSibling: RegularTreeNode<T> | null = null;
    firstChild: RegularTreeNode<T> | null = null;

    constructor(data: T | null = null, nextSibling: RegularTreeNode<T> | null = null, firstChild: RegularTreeNode<T> | null = null) {
        this.data = data;
        this.nextSibling = nextSibling;
        this.firstChild = firstChild;
    }
}

export type BinaryTreeNodeType<T> = BinaryTreeNode<T> | null | undefined;
export type BinaryTreeNodeDataType<T> = T | null | undefined;