import { ArrayQueue } from "./array-queue";
import { LinkedListQueue } from "./linked-list-queue";

type GenericQueue<T> = ArrayQueue<T> | LinkedListQueue<T>;

export enum QueueType {
    ArrayQueueType,
    LinkedListQueueType
}

export interface QueueParam {
    type: QueueType
}

export class Queue<T> {
    private innerQueue: GenericQueue<T>;

    constructor(params: QueueParam) {
        switch (params.type) {
            case QueueType.ArrayQueueType:
                this.innerQueue = new ArrayQueue<T>();
                break;
            case QueueType.LinkedListQueueType:
            default:
                this.innerQueue = new LinkedListQueue<T>();
                break;
        }
    }

    getQueue = () =>{
        return this.innerQueue;
    }
}

export interface QueueOperations<T> {
    dequeue: () => T | null | undefined,
    enqueue: (data: T) => void
    print: () => void
    isEmpty: () => boolean
}
