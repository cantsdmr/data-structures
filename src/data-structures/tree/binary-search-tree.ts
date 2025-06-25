import { BinaryTree } from "./binary-tree";
import { BinaryTreeNode, BinaryTreeNodeType } from "./common";

export class BinarySearchTree<T> extends BinaryTree<T> {
    constructor(comparator?: (a: T, b: T) => number) {
        super(comparator);
    }

    findMax = (root: BinaryTreeNodeType<T> = this.rootNode): T | undefined => {
        if (root == null) {
            return undefined;
        }

        if (root.rightChild == null) {
            return root.data;
        }

        return this.findMax(root.rightChild);
    }

    findMin = (root: BinaryTreeNodeType<T> = this.rootNode): T | undefined => {
        if (root == null) {
            return undefined;
        }

        if (root.leftChild == null) {
            return root.data;
        }

        return this.findMin(root.leftChild);
    }

    delete = (data: T, root: BinaryTreeNodeType<T> = this.rootNode): BinaryTreeNodeType<T> => {
        if (root == null) {
            return root;
        }

        if (data == root.data) {
            if (root.rightChild == null && root.leftChild == null) {
                return null;
            } else if (root.rightChild != null && root.leftChild != null) {
                const leftMax = this.findMax(root.leftChild);
                if (leftMax !== undefined) {
                    this.delete(leftMax, root.leftChild);
                    root.data = leftMax;
                }
            } else if (root.rightChild != null) {
                root.data = (root.rightChild as BinaryTreeNode<T>).data;
                root.rightChild = null;
            } else if (root.leftChild != null) {
                root.data = root.leftChild.data;
                root.leftChild = null;
            }

            return root;
        } else if (this.compare(data, root.data) > 0) {
            root.rightChild = this.delete(data, root.rightChild);
        } else if (this.compare(data, root.data) < 0) {
            root.leftChild = this.delete(data, root.leftChild);
        }

        return root;
    }

    insert = (data: T, parentNode: BinaryTreeNodeType<T> = this.rootNode): BinaryTreeNodeType<T> => {
        if (parentNode == null) {
            if (this.rootNode == null) {
                this.rootNode = new BinaryTreeNode<T>(data, null, null);
                return this.rootNode;
            }
            return parentNode;
        }

        const comparison = this.compare(data, parentNode.data);
        
        if (comparison > 0) {
            if (parentNode.rightChild == null) {
                parentNode.rightChild = new BinaryTreeNode<T>(data, null, null);
                return parentNode.rightChild;
            } else {
                return this.insert(data, parentNode.rightChild);
            }
        } else if (comparison < 0) {
            if (parentNode.leftChild == null) {
                parentNode.leftChild = new BinaryTreeNode<T>(data, null, null);
                return parentNode.leftChild;
            } else {
                return this.insert(data, parentNode.leftChild);
            }
        }

        return parentNode;
    }

    search = (data: T, root: BinaryTreeNodeType<T> = this.rootNode): boolean => {
        if (root == null) {
            return false;
        }

        const comparison = this.compare(data, root.data);
        
        if (comparison === 0) {
            return true;
        } else if (comparison > 0) {
            return this.search(data, root.rightChild);
        } else {
            return this.search(data, root.leftChild);
        }
    }

    createBSTInOrder = (data: T[], root: BinaryTreeNodeType<T> = this.rootNode): void => {
        const mid = Math.floor(data.length / 2);

        if (data.length == 0) {
            return;
        }

        if (data.length == 1) {
            this.insert(data[mid], root);
            return;
        }

        const left_data = data.slice(0, mid);
        const right_data = data.slice(mid + 1);

        const newNode = this.insert(data[mid], root);
        this.createBSTInOrder(left_data, newNode);
        this.createBSTInOrder(right_data, newNode);
    }

    isBst = (root: BinaryTreeNodeType<T> = this.rootNode): boolean => {
        if (root == null) {
            return true;
        }
        
        if (root.leftChild != null && this.compare(root.data, root.leftChild.data) < 0) {
            return false;
        }

        if (root.rightChild != null && this.compare(root.data, root.rightChild.data) > 0) {
            return false;
        }
        
        return this.isBst(root.leftChild) && this.isBst(root.rightChild);
    }
}