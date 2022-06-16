import { DoublyLinkedList } from "../linked-list/doubly-linked-list";
import { QueueOperations } from "./queue";

export class LinkedListQueue<T> implements QueueOperations<T>{
    private innerList: DoublyLinkedList<T> = new DoublyLinkedList<T>();

    dequeue =  () => {
        const firstNode = this.innerList.getFirstNode();
        
        if(firstNode != null){
            this.innerList.deleteFromStart();
            return firstNode.data;
        }

        return null;
    }
    enqueue = (data: T) => {
        this.innerList.insertAtEnd(data);
    }
    print = () => {
        this.innerList.print();
    }
    isEmpty = () => {
        return this.innerList.isEmpty();
    };    
}