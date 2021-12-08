import { DoublyListNode, LinkedListOperations } from "./common";

export interface DoublyLinkedListOperations<T> extends LinkedListOperations<T> {
    insertAfterNode: (node: DoublyListNode<T>, data: T) => void,
    deleteNode: (node: DoublyListNode<T>) => void,
}

export class DoublyLinkedList<T> implements DoublyLinkedListOperations<T> {
    private head: DoublyListNode<T> | null = null;
    private zeroth: DoublyListNode<T> = new DoublyListNode<T>();
    private size: number = 0;

    insert = (data: T) => {
        let newNode = new DoublyListNode<T>(data, this.zeroth);

        newNode.next = this.zeroth.next;
        this.zeroth.next = newNode;
        this.head = newNode;
        this.size++;

        return this;
    };
    insertAtEnd = (data: T) => {
        let traveler = this.head;

        if (traveler == null) {
            return this.insert(data);
        }

        while (traveler?.next) {
            traveler = traveler.next;
        }

        let newNode = new DoublyListNode<T>(data, traveler);

        traveler.next = newNode;
        this.size++;

        return this;
    };
    insertAfterNode = (node: DoublyListNode<T>, data: T) => {
        if (node == null) {
            return this;
        }

        let newNode = new DoublyListNode<T>(data, node, node.next);

        node.next = newNode;
        node.next.prev = newNode;

        this.size++;
        return this;
    };
    deleteNode = (node: DoublyListNode<T>) => {
        if (node.next == null) {
            this.zeroth.next = null;
            this.size--;

            return this;
        }

        // Try the hard way
        node.data = node.next.data;

        if (node.next.next != null) {
            node.next.next.prev = node;
        }

        node.next = node.next.next;

        this.size--;

        return this;
    }
    delete = (data: T) => { };
    deleteFromEnd = () => {
        let traveler = this.zeroth.next;

        if (traveler == null) {
            return this;
        }

        if (traveler.next == null) {
            this.zeroth.next = null;
            this.size--;

            return this;
        }

        while (traveler.next) {
            traveler = traveler.next;
        }

        if (traveler.prev != null) {
            traveler.prev.next = null;
            this.size--;
        }

        return this;
    };
    deleteFromStart = () => {
        if (this.zeroth.next == null) {
            return this;
        }

        this.zeroth.next = null;
        this.size--;

        return this;
    };
    getNode = (data: T) => {
        let traveler = this.zeroth.next;
        let result = null;

        while (traveler) {
            if (traveler.data === data) {
                result = traveler;
                break;
            }

            traveler = traveler.next;
        }

        return result;
    };
    getFirstNode = () => {
        return this.zeroth.next;
    };
    getLastNode = () => {
        let traveler = this.zeroth.next;

        if (traveler == null) {
            return null;
        }

        while (traveler.next) {
            traveler = traveler.next;
        }

        return traveler;
    };
    print = () => {
        let traveler = this.zeroth.next;

        while (traveler) {
            console.log(traveler.data);
            traveler = traveler.next;
        }
    };
    search = (data: T) => {
        let traveler = this.zeroth.next;
        let result = false;

        while (traveler) {
            if (traveler.data === data) {
                result = true;
                break;
            }

            traveler = traveler.next;
        }

        return result;
    };
    isEmpty = () => {
        return this.size === 0;
    }
}