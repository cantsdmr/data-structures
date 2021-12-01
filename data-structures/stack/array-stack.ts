import { StackOperations } from "./stack";

export class ArrayStack<T> implements StackOperations<T> {
    private list: T[] = [];
    private size: number = 0;
    private top: number = -1;
    private maxSize: number = 1000;

    pop = () => {
        return this.list.pop();
    };
    push = (data: T) => {
        if (this.size >= this.maxSize) {
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
        return this.size === 0;
    }
}