import { StackOperations } from "./stack";

type GenericObject<T> = { [key: string]: T };

export class ObjectStack<T> implements StackOperations<T> {
    private list: GenericObject<T> = {};    
    private maxSize: number = 1000;
    private top: number = -1;
    private text: string = 'index';

    pop = () => {
        const element = this.list[`${this.text}-${this.top}`];        
        delete this.list[`${this.text}-${this.top}`];
        this.top--;     
        return element;
    };
    push = (data: T) => {
        if (this.top >= this.maxSize) {
            console.log("Stack overflow");
            return;
        }

        this.list[`${this.text}-${++this.top}`] = data;
    };
    print = () => {
        for (const item in this.list) {
            console.log(this.list[item]);
        }
    };
    isEmpty = () => {
        return this.top === -1;
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