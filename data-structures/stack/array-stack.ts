import { StackOperations } from "./stack";

export class ArrayStack<T> implements StackOperations<T> {
    private list: T[] = [];    
    private maxSize: number = 1000;

    pop = () => {
        return this.list.pop();
    };
    push = (data: T) => {
        if (this.list.length >= this.maxSize) {
            console.log("Stack overflow");
            return;
        }

        this.list.push(data);
    };
    print = () => {
        for (const item of this.list) {
            console.log(item);
        }
    };
    isEmpty = () => {
        return this.list.length === 0;
    }
}