import { QueueOperations } from "./queue";

// using circular array
export class ArrayQueue<T> implements QueueOperations<T>{
    private innerList: T[] = [];
    private maxSize: number = 1000;
    private size: number = 0;
    private front: number = 0;
    private back: number = this.maxSize - 1;

    dequeue = () => {
        if (this.isEmpty()) {
            return;
        }

        const element = this.innerList[this.front];
        this.front = (this.front + 1) % this.maxSize;

        this.size--;

        return element;
    }
    enqueue = (data: T) => {
        if (this.size >= this.maxSize) {
            console.log("Queue overflow");
            return;
        }

        this.back = (this.back + 1) % this.maxSize;
        this.innerList[this.back] = data;
        this.size++;
    }
    print = () => {
        for (let index = this.front; index < this.back; index++){
            const element = this.innerList[index];

            console.log(element);
        }
    }
    isEmpty = () => {
        return this.size === 0;
    };
}