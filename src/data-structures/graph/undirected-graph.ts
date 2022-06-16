import { BinaryMinHeap } from "../heap/binary-min-heap";

export class UndirectedGraph<T> {
    private minimumList: BinaryMinHeap<T> = new BinaryMinHeap<T>();
    private adjacencyList: number[][] = [];

    constructor() {

    }

    addEdge = (nodeOne: T, nodeTwo: T) => {
        //
    }
    addVertice = (nodeOne: T) => {
        //
    }
}