export class BinaryHeap<T>{
    private itemList : T[] = [];

    constructor() {
        this.itemList.push();
    }

    findMin = (): any => {
        return this.itemList[1];
    }
    insert = (data: T) => {
        this.itemList.push(data);

        for (let index = this.itemList.length - 1; index >= 0; index /= 2) {
            const element = this.itemList[index];
            const parentIndex = index / 2;
            const parentElement = this.itemList[parentIndex];

            if (element > parentElement) {
                this.itemList[parentIndex] = element;
                this.itemList[index] = parentElement;
                continue;
            }

            break;
        }
    }
    deleteMin = () => {
        this.itemList[0] = this.itemList[this.itemList.length - 1];

        // const leftChild = this.itemList[];

        for (let index = 0; index >= 0; index /= 2) {
            const element = this.itemList[index];
            const parentIndex = index / 2;
            const parentElement = this.itemList[parentIndex];

            if (element > parentElement) {
                this.itemList[parentIndex] = element;
                this.itemList[index] = parentElement;
                continue;
            }

            break;
        }
    }
}