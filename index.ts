import { DoublyLinkedList } from "./data-structures/linked-list/doubly-linked-list";

console.log("Add items to linked list");

let doublyLinkedList = new DoublyLinkedList<number>();

doublyLinkedList
    .insert(4)
    .insert(6)
    .insert(7)
    .insert(10);

doublyLinkedList
    .insertAtEnd(4)
    .insertAtEnd(6)
    .insertAtEnd(7)
    .insertAtEnd(10);

doublyLinkedList
    .deleteFromEnd()
    .deleteFromEnd()

doublyLinkedList.print();

