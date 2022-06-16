// implement buildheap

export class BinaryMinHeap<T>{
    private itemList: T[] = [];
    private size = -1;

    constructor() {
        this.insert(undefined as any);
    }

    findMin = (): T | undefined => {
        if (this.size > 0) {
            return this.itemList[1];
        }

        return undefined;
    }
    insert = (data: T) => {
        this.itemList.push(data);
        this.size++;

        for (let index = this.itemList.length - 1; index > 0; index /= 2) {
            const element = this.itemList[index];
            const parentIndex = index / 2;
            const parentElement = this.itemList[parentIndex];

            if (element < parentElement) {
                this.itemList[parentIndex] = element;
                this.itemList[index] = parentElement;
                continue;
            }

            break;
        }
    }
    deleteMin = (): T => {
        const deleted = this.itemList[1];
        this.itemList[1] = this.itemList[this.itemList.length - 1];
        this.itemList.splice(this.itemList.length - 1, 1);
        this.size--;

        this.percolateDown(this.itemList, 1);
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

        if (root <= left && root <= right) {
            return;
        }

        if (right != null && left >= right) {
            newIndex = (2 * index) + 1;
            list[index] = right;
        } else if (left != null && right >= left) {
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
        this.size = unsortedItems.length;

        for (let i = Math.floor(this.itemList.length / 2); i > 0; i--) {
            this.percolateDown(this.itemList, i);
        }
    }
    isMinHeap = () => {
        let result = true;

        for (let i = 1; i < this.itemList.length; i++) {
            const parent = this.itemList[Math.floor(i / 2)];

            if (parent > this.itemList[i]) {
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
}