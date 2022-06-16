// Open addressing -> large table -> lambda should be around 0.5
// 1- Linear Probing
// 2 - Quadratic Probing
// 3 - Double hashing

import { HashTableOperations } from "./hash-table";

// Deletion is lazy

export class HashTableOpenAddressing<T> implements HashTableOperations<T>{
    insert = (data: T) => {

    }
    remove = (data: T) => {
        return undefined;
    }
    find = (data: T) => {
        return undefined;
    }
}