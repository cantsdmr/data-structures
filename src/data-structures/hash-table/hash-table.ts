import { HashTableOpenAddressing } from "./hash-table-open-addressing";
import { HashTableSequentialChaining } from "./hash-table-sequential-chaining";

type GenericHashTable<T> = HashTableOpenAddressing<T> | HashTableSequentialChaining<T>;

export enum HashTableType {
    OpenAddressingType,
    SequentialType
}

export interface HashTableParam {
    type: HashTableType
}

export class HashTable<T> {
    private innerHashTable: GenericHashTable<T>;

    constructor(params: HashTableParam) {
        switch (params.type) {
            case HashTableType.OpenAddressingType:
                this.innerHashTable = new HashTableOpenAddressing<T>();
                break;
            case HashTableType.SequentialType:
            default:
                this.innerHashTable = new HashTableSequentialChaining<T>();
                break;
        }
    }

    getHashTable = () =>{
        return this.innerHashTable;
    }
}

export interface HashTableOperations<T> {
    insert: (data: T) => void
    remove: (data: T) => T | undefined,
    find: (data: T) => T | undefined
}
