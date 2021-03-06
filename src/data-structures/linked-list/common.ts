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

export class SinglyListNode<T> {
    public data: T | null = null;
    public next: SinglyListNode<T> | null = null;

    constructor(data: T | null = null, next: SinglyListNode<T> | null = null) {
        this.data = data;
        this.next = next;
    }
}

export class DoublyListNode<T>{
    public data: T | null = null;
    public prev: DoublyListNode<T> | null = null;
    public next: DoublyListNode<T> | null = null;

    constructor(data: T | null = null, prev: DoublyListNode<T> | null = null, next: DoublyListNode<T> | null = null) {
        this.data = data;
        this.prev = prev;
        this.next = next;
    }
}