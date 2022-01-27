export class BinaryMinHeap<T>{
    private itemList : T[] = [];
    private size = -1;

    constructor() {
        this.insert(0 as any);
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
    deleteMin = () => {
        this.itemList[1] = this.itemList[this.itemList.length - 1];
        this.itemList.splice(this.itemList.length - 1, 1);
        this.size--;

        this.percolateDown(this.itemList, 1);
        console.log(this.itemList);
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

        if (left >= right && right != null) {
            newIndex = (2 * index) + 1;
            list[index] = right;            
        } else {
            newIndex = (2 * index);
            list[index] = left;
        }

        list[newIndex] = root;

        this.percolateDown(list, newIndex);
    }
    isMinHeap = () => {}
}