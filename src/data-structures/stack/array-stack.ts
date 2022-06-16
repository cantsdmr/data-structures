import { StackOperations } from "./stack";

export class ArrayStack<T> implements StackOperations<T> {
    private list: T[] = [];    
    private maxSize: number = 1000;
    private top: number = -1;

    pop = () => {
        const element = this.list[this.top];        
        this.list = this.list.slice(0, this.top--);
        return element;
    };
    push = (data: T) => {
        if (this.list.length >= this.maxSize) {
            console.log("Stack overflow");
            return;
        }

        this.list[++this.top] = data;
    };
    print = () => {
        for (const item of this.list) {
            console.log(item);
        }
    };
    isEmpty = () => {
        return this.list.length === 0;
    }
    findMin = () : T | undefined =>{
        if (this.isEmpty()) {
            return undefined;
        }

        const value = this.pop();
        const min = this.findMin();
        
        if (min == null || value < min) {
            return value;
        } else {
            return min;
        }
    }
}