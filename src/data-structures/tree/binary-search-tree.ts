import { BinaryTree } from "./binary-tree";
import { BinaryTreeNode, BinaryTreeNodeType } from "./common";

export class BinarySearchTree<T> extends BinaryTree<T>{
    constructor() {
        super();
    }

    findMax = (root: BinaryTreeNodeType<T> = this.rootNode): any => {
        if (root == null) {
            return undefined;
        }

        if (root.rightChild == null) {
            return root.data;
        }

        return this.findMax(root.rightChild);
    }
    findMin = (root: BinaryTreeNodeType<T> = this.rootNode): any => {
        if (root == null) {
            return undefined;
        }

        if (root.leftChild == null) {
            return root.data;
        }

        return this.findMin(root.leftChild);
    }
    delete = (data: T, root: BinaryTreeNodeType<T> = this.rootNode) => {
        if (root == null) {
            return root;
        }

        if (data == root.data) {
            if (root.rightChild == null && root.leftChild == null) {
                return null;
            } else if (root.rightChild != null && root.leftChild != null) {
                const leftMax = this.findMax(root.leftChild);

                this.delete(leftMax, root.leftChild);
                root.data = leftMax;
            } else if (root.rightChild != null) {
                root.data = (root.rightChild as BinaryTreeNode<T>).data;
                root.rightChild = null;
            } else if (root.leftChild != null) {
                root.data = root.leftChild.data;
                root.leftChild = null;
            }

            return root;
        } else if (data > root.data) {
            root.rightChild = this.delete(data, root.rightChild);
        } else if (data < root.data) {
            root.leftChild = this.delete(data, root.leftChild);
        }

        return root;
    }
    insert = (data: T, parentNode: BinaryTreeNodeType<T> = this.rootNode) => {
        if (parentNode == null) {
            if (this.rootNode == null) {
                this.rootNode = new BinaryTreeNode<T>(data, null, null);
                return this.rootNode;
            }

            return parentNode;
        }

        if (data > parentNode.data) {
            if (parentNode.rightChild == null) {
                parentNode.rightChild = new BinaryTreeNode<T>(data, null, null);
                return parentNode.rightChild;
            } else {
                this.insert(data, parentNode.rightChild);
            }
        } else if (data < parentNode.data) {
            if (parentNode.leftChild == null) {
                parentNode.leftChild = new BinaryTreeNode<T>(data, null, null);
                return parentNode.leftChild;
            } else {
                this.insert(data, parentNode.leftChild);
            }
        }

        return null;
    }
    search = (data: T, root: BinaryTreeNodeType<T> = this.rootNode): boolean => {
        if (root == null) {
            return false;
        }

        if (root.data == data) {
            return true;
        } else if (data > root.data) {
            return this.search(data, root.rightChild);
        } else if (data < root.data) {
            return this.search(data, root.leftChild);
        }

        return false;
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
        
        if (root.leftChild != null && root.data < root.leftChild.data) {
            return false;
        }

        if (root.rightChild != null && root.data > root.rightChild.data) {
            return false;
        }
        
        return this.isBst(root.leftChild) && this.isBst(root.rightChild);
    }
}