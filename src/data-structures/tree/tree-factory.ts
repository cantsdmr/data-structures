import { TreeType, TreeParam } from './types';
import { AVLTree } from "./avl-tree";
import { BinarySearchTree } from "./binary-search-tree";
import { BinaryTree } from "./binary-tree";
import { RegularTree } from "./regular-tree";

export type GenericTree<T> = BinarySearchTree<T> | BinaryTree<T> | AVLTree<T> | RegularTree<T>;

export function createTree<T>(params: TreeParam): GenericTree<T> {
    switch (params.type) {
        case TreeType.BinarySearchType:
            return new BinarySearchTree<T>();
        case TreeType.BinaryType:
            return new BinaryTree<T>();
        case TreeType.AVLType:
            return new AVLTree<T>();
        case TreeType.RegularType:
        default:
            return new RegularTree<T>();
    }
} 