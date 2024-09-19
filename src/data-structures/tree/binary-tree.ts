import { BinaryTreeNode, BinaryTreeNodeType } from "./common";

export class BinaryTree<T>{
    protected rootNode: BinaryTreeNodeType<T> = undefined;

    constructor() {

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

    findMax = (root: BinaryTreeNodeType<T> = this.rootNode): any => {
        if (root == null) {
            return -1;
        }

        const leftMax = this.findMax(root.leftChild);
        const rightMax = this.findMax(root.rightChild);
        const compareMax = Math.max(leftMax, rightMax);

        const rootData = root.data as unknown as number;

        return compareMax > rootData ? compareMax : rootData;
    }

    findMin = (root: BinaryTreeNodeType<T> = this.rootNode): any => {
        if (root == null) {
            return -1;
        }

        const leftMin = this.findMin(root.leftChild);
        const rightMin = this.findMin(root.rightChild);
        const compareMin = Math.min(leftMin, rightMin);

        // Find Left subtree
        // Find Right subtree
        const rootData = root.data as unknown as number;

        return compareMin < rootData ? compareMin : rootData;
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