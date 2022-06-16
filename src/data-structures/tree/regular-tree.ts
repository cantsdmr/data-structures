import { RegularTreeNode, TreeOperations } from "./common";

export class RegularTree<T> implements TreeOperations<T>{
    private rootNode = new RegularTreeNode<T>();
    private delimiter = "---";

    constructor() {

    }

    delete = (data: T) => {

    };
    insert = (data: T, parentNode?: RegularTreeNode<T>) => {
        let newNode = new RegularTreeNode<T>(data);

        if (parentNode == null) {
            this.rootNode = newNode;
            return this;
        }

        if (parentNode.firstChild == null) {
            parentNode.firstChild = newNode;
        } else {
            let traveler = parentNode.firstChild;

            while (traveler.nextSibling) {
                traveler = traveler.nextSibling;
            }

            traveler.nextSibling = newNode;
        }

        return this;
    };
    search = (data: T) => {
        return true;
    };
    getRoot = () => {
        return this.rootNode;
    };
    printPerDepth = (root?: RegularTreeNode<T>, pad: number = 0) => {
        if (root == null) {
            return;
        }

        let innerPad = pad + (root.data as unknown as string).length + this.delimiter.length;
        let text = `${" ".repeat(pad)}${root.data}`;
        let postfix = root.firstChild ? "---".padStart(innerPad) : ""

        console.log(`${text}\n${postfix}`);

        this.printPerDepth(root.firstChild ?? undefined, innerPad);

        if (root.nextSibling) {
            console.log("|\n".padStart(pad).repeat(2));
        }

        this.printPerDepth(root.nextSibling ?? undefined, pad);
    };
    printPerBreadth = (root?: RegularTreeNode<T>, depth:number = 0) => {
        if (root == null) {
            return;
        }

        if (depth === 0) {
            console.log(root.data);            
        }

        let traveler = root.firstChild;

        if (traveler == null) {
            return;
        }

        depth++;

        while (traveler) {
            console.log(traveler.data);
            traveler = traveler.nextSibling;
        }

        this.printPerBreadth(root.firstChild ?? undefined, depth);
        this.printPerBreadth(root.nextSibling ?? undefined, depth);
    };
    isEmpty = () => {
        return this.rootNode == null;
    };
}