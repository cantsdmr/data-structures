import { DoublyListNode, SinglyListNode } from "./list-node";

type GenericNode<T> = DoublyListNode<T> | SinglyListNode<T> | null;

export interface LinkedListOperations<T> {
    insert: (data: T) => void,
    insertAtEnd: (data: T) => void,
    delete: (data: T) => void,
    deleteFromEnd: () => void,
    deleteFromStart: () => void,
    getNode: (data: T) => GenericNode<T>,
    getFirstNode: () => GenericNode<T>,
    getLastNode: () => GenericNode<T>,
    print: () => void,
    search: (data: T) => boolean,
    isEmpty: () => boolean
}