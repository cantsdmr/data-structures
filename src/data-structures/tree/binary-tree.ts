import { BinaryTreeNode, BinaryTreeNodeType } from "./common";

export class BinaryTree<T> {
    protected rootNode: BinaryTreeNodeType<T> = undefined;
    protected comparator: (a: T, b: T) => number;

    constructor(comparator?: (a: T, b: T) => number) {
        this.comparator = comparator || ((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    }

    protected compare(a: T, b: T): number {
        return this.comparator(a, b);
    }

    getRoot = () => {
        return this.rootNode;
    }

    getHeight = (root: BinaryTreeNodeType<T> = this.rootNode): number => {
        if (root == null) {
            return -1;
        }

        return 1 + Math.max(this.getHeight(root.leftChild), this.getHeight(root.rightChild));
    }

    findMax = (root: BinaryTreeNodeType<T> = this.rootNode): T | undefined => {
        if (root == null) {
            return undefined;
        }

        let max = root.data;
        const leftMax = this.findMax(root.leftChild);
        const rightMax = this.findMax(root.rightChild);

        if (leftMax !== undefined && this.compare(max, leftMax) < 0) max = leftMax;
        if (rightMax !== undefined && this.compare(max, rightMax) < 0) max = rightMax;

        return max;
    }

    findMin = (root: BinaryTreeNodeType<T> = this.rootNode): T | undefined => {
        if (root == null) {
            return undefined;
        }

        let min = root.data;
        const leftMin = this.findMin(root.leftChild);
        const rightMin = this.findMin(root.rightChild);

        if (leftMin !== undefined && this.compare(min, leftMin) > 0) min = leftMin;
        if (rightMin !== undefined && this.compare(min, rightMin) > 0) min = rightMin;

        return min;
    }

    sum = (root: BinaryTreeNodeType<T> = this.rootNode): number => {
        if (root == null) {
            return 0;
        }

        return (root.data as unknown as number) + this.sum(root.leftChild) + this.sum(root.rightChild);
    }

    isEmpty = () => {
        return this.rootNode == null;
    }

    printPreOrder = (root: BinaryTreeNodeType<T> = this.rootNode) => {
        if (root == null) {
            return;
        }

        console.log(root.data);
        this.printPreOrder(root.leftChild);
        this.printPreOrder(root.rightChild);
    }

    printInOrder = (root: BinaryTreeNodeType<T> = this.rootNode) => {
        if (root == null) {
            return;
        }

        this.printInOrder(root.leftChild);
        console.log(root.data);
        this.printInOrder(root.rightChild);
    }

    printPostOrder = (root: BinaryTreeNodeType<T> = this.rootNode) => {
        if (root == null) {
            return;
        }

        this.printPostOrder(root.leftChild);
        this.printPostOrder(root.rightChild);
        console.log(root.data);
    }

    getLeafCount = (root: BinaryTreeNodeType<T>): number => {
        if (root == null) {
            return 0;
        }

        if (root.leftChild == null && root.rightChild == null) {
            return 1;
        }

        return this.getLeafCount(root.leftChild) + this.getLeafCount(root.rightChild);
    }

    getMaxHeight = (root: BinaryTreeNodeType<T>): number => {
        if (root == null) {
            return 0;
        }

        if (root.leftChild == null && root.rightChild == null) {
            return 1;
        }

        return this.getLeafCount(root.leftChild) + this.getLeafCount(root.rightChild);
    }
    insert = (data: T, parentNode: BinaryTreeNodeType<T> = this.rootNode) => {
        if (parentNode == null) {
            parentNode = new BinaryTreeNode<T>(data, null, null);

            if (this.rootNode == null) {
                this.rootNode = parentNode;
            }

            return;
        }

        if (parentNode.rightChild == null) {
            this.insert(data, parentNode.rightChild);
        } else if (parentNode.leftChild == null) {
            this.insert(data, parentNode.leftChild);
        } else {
            this.insert(data, parentNode.leftChild);
        }
    }
    search = (data: T, root: BinaryTreeNodeType<T> = this.rootNode): boolean => {
        if (root == null) {
            return false;
        }

        if (root.data == data) {
            return true;
        }

        return this.search(data, root.leftChild) || this.search(data, root.rightChild);
    }
}