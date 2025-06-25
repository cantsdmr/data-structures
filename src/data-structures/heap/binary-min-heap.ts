export class BinaryMinHeap<T> {
    private itemList: T[] = [];
    private size = 0;
    private comparator: (a: T, b: T) => number;

    constructor(comparator?: (a: T, b: T) => number) {
        this.comparator = comparator || ((a, b) => (a < b ? -1 : a > b ? 1 : 0));
    }

    private compare(a: T, b: T): boolean {
        if (a === undefined || b === undefined) return false;
        return this.comparator(a, b) < 0;
    }

    findMin = (): T | undefined => {
        if (this.size > 0) {
            return this.itemList[0];
        }

        return undefined;
    }
    insert = (data: T) => {
        if (data === undefined) return;
        
        this.itemList.push(data);
        this.size++;

        for (let index = this.itemList.length - 1; index > 0; index = Math.floor(index / 2)) {
            const element = this.itemList[index];
            const parentIndex = Math.floor(index / 2);
            const parentElement = this.itemList[parentIndex];

            if (this.compare(element, parentElement)) {
                this.itemList[parentIndex] = element;
                this.itemList[index] = parentElement;
                continue;
            }
            break;
        }
    }

    deleteMin = (): T => {
        const deleted = this.itemList[0];
        this.itemList[0] = this.itemList[this.itemList.length - 1];
        this.itemList.splice(this.itemList.length - 1, 1);
        this.size--;

        this.percolateDown(this.itemList, 0);
        return deleted;
    }

    percolateDown = (list: T[], index: number) => {
        if (this.size < index) {
            return;
        }

        const root = list[index];
        const left = list[2 * index];
        const right = list[(2 * index) + 1];
        let newIndex;

        if (left == null && right == null) {
            return;
        }

        if ((left == null || !this.compare(left, root)) && 
            (right == null || !this.compare(right, root))) {
            return;
        }

        if (right != null && this.compare(right, left)) {
            newIndex = (2 * index) + 1;
            list[index] = right;
        } else if (left != null) {
            newIndex = (2 * index);
            list[index] = left;
        } else {
            return;
        }

        list[newIndex] = root;
        this.percolateDown(list, newIndex);
    }
    buildHeap = (unsortedItems: T[] = []) => {
        this.itemList = [...this.itemList, ...unsortedItems];

        for (let i = Math.floor(this.itemList.length / 2); i >= 0; i--) {
            this.percolateDown(this.itemList, i);
        }
    }
    isMinHeap = () => {
        let result = true;

        for (let i = 0; i < this.itemList.length; i++) {
            const parent = this.itemList[Math.floor(i / 2)];
            if (!this.compare(parent, this.itemList[i])) {
                result = false;
                break;
            }
        }

        return result;
    }
    findSibling = (index: number) => {
        let sibling = null;

        if (index > this.size) {
            return sibling;
        }

        const parentIndex = Math.floor(index / 2);
        const leftSiblingCandidate = index - 1;
        const rightSiblingCandidate = index + 1;

        if (Math.floor(leftSiblingCandidate / 2) == parentIndex) {
            sibling = this.itemList[leftSiblingCandidate];
        } else if (Math.floor(rightSiblingCandidate / 2) == parentIndex) {
            sibling = this.itemList[rightSiblingCandidate];
        }

        return sibling;
    }

    getSize = () => {
        return this.size;
    }

    printHeap = () => {
        console.log(this.itemList);
    }
}