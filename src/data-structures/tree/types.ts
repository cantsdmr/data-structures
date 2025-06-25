export enum TreeType {
    BinarySearchType,
    BinaryType,
    AVLType,
    RegularType
}

export interface TreeParam {
    type: TreeType
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