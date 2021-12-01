import { DoublyLinkedList } from "./data-structures/linked-list/doubly-linked-list";

console.log("Add items to linked list");

let doubleLinkedList = new DoublyLinkedList<number>();

doubleLinkedList
    .insert(4)
    .insert(6)
    .insert(7)
    .insert(10);

doubleLinkedList
    .insertAtEnd(4)
    .insertAtEnd(6)
    .insertAtEnd(7)
    .insertAtEnd(10);

doubleLinkedList
    .deleteFromEnd()
    .deleteFromEnd()

doubleLinkedList.print();

