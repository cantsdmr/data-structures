import { LinkedListOperations } from "./common";
import { SinglyListNode as SinglyListNode } from "./list-node";

export interface SinglyLinkedListOperations<T> extends LinkedListOperations<T> {
    insertAfterNode: (node: SinglyListNode<T>, data: T) => void,
    deleteNode: (node: SinglyListNode<T>) => void,
}

export class SinglyLinkedList<T> implements SinglyLinkedListOperations<T> {
    private head: SinglyListNode<T> | null = null;
    private zeroth: SinglyListNode<T> = new SinglyListNode<T>();
    private size: number = 0;

    insert = (data: T) => {
        let newNode = new SinglyListNode<T>(data, this.zeroth);

        newNode.next = this.zeroth.next;
        this.zeroth.next = newNode;
        this.head = newNode;
        this.size++;

        return this;
    };
    insertAtEnd = (data: T) => {
        let traveler = this.zeroth.next;

        if (traveler == null) {
            return this.insert(data);
        }

        while (traveler?.next) {
            traveler = traveler.next;
        }

        let newNode = new SinglyListNode<T>(data, traveler);

        traveler.next = newNode;
        this.size++;

        return this;
    };
    insertAfterNode = (node: SinglyListNode<T>, data: T) => {
        if (node == null) {
            return this;
        }

        let newNode = new SinglyListNode<T>(data, node.next);

        node.next = newNode;

        this.size++;
        return this;
    };
    deleteNode = (node: SinglyListNode<T>) => {
        if (node.next == null) {
            this.zeroth.next = null;
            this.size--;

            return this;
        }

        // Try the hard way
        node.data = node.next.data;
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

        while (traveler.next?.next) {
            traveler = traveler.next;
        }

        traveler.next = null;

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