import { DoublyLinkedList } from "../linked-list/doubly-linked-list";
import { StackOperations } from "./stack";

export class LinkedListStack<T> implements StackOperations<T> {
    private list: DoublyLinkedList<T> = new DoublyLinkedList<T>();

    pop = () => {
        const node = this.list.getLastNode();

        if (node != null) {
            this.list.deleteFromEnd();
            return node.data;
        }

        return null;
    };
    push = (data: T) => {
        this.list.insertAtEnd(data);
    };
    print = () => {
        this.list.print();
    };
    isEmpty = () => {
        return this.list.isEmpty();
    }
    findMin = () : T | undefined =>  {
        throw new Error("Not Implemented");        
    }
}