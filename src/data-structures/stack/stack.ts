import { ArrayStack } from "./array-stack";
import { LinkedListStack } from "./linked-list-stack";
import { ObjectStack } from "./object-stack";

type GenericStack<T> = ArrayStack<T> | ObjectStack<T> | LinkedListStack<T>;

export enum StackType {
    ArrayStackType,
    ObjectStackType,
    LinkedListStackType
}

export interface StackParam {
    type: StackType
}

export class Stack<T> {
    private innerStack: GenericStack<T>;

    constructor(params: StackParam) {
        switch (params.type) {
            case StackType.ArrayStackType:
                this.innerStack = new ArrayStack<T>();
                break;
            case StackType.ObjectStackType:
                this.innerStack = new ObjectStack<T>();
                break;
            case StackType.LinkedListStackType:
            default:
                this.innerStack = new LinkedListStack<T>();
                break;
        }
    }

    getStack = () =>{
        return this.innerStack;
    }
}

export interface StackOperations<T> {
    pop: () => T | null | undefined,
    push: (data: T) => void
    print: () => void
    isEmpty: () => boolean
    findMin: () => T | undefined
}
