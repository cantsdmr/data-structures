import { BinaryMinHeap } from "../data-structures/heap/binary-min-heap";
import { BinaryTree } from "../data-structures/tree/binary-tree";
import { BinaryTreeNode } from "../data-structures/tree/common";
import { mergeSort } from "../sorting/merge-sort";

interface Dictionary<T> {
    [Key: string]: T;
}

interface HuffmanData {
    value: string;
    frequency: number;
}

export class HuffmanCoding {
    private binaryTree: BinaryTree<string>
    private _input: string = ""
    private _nodes: BinaryTreeNode<HuffmanData>[] = []
    private heap: BinaryMinHeap<HuffmanNode>;
    private encodingTable: { [key: string]: string } = {};
    
    constructor(input: string) {
        this.binaryTree = new BinaryTree<string>();
        this._input = input;
        // Initialize heap with proper comparator for HuffmanNodes
        this.heap = new BinaryMinHeap<HuffmanNode>((a, b) => {
            if (!a || !b) return 0;
            return a.frequency - b.frequency;
        });
    }

    public setInput(input: string) {
        this._input = input;
        let dict = {} as Dictionary<number>;

        // Calculate frequencies
        for (let i = 0; i < this._input.length; i++) {
            const element = this._input.charAt(i);
            const node = {
                data: {
                    value: element,
                    frequency: (dict[element] || 0) + 1,
                },
                rightChild: null,
                leftChild: null
            } as BinaryTreeNode<HuffmanData>
            this._nodes.push(node);
        }

        // // Convert dictionary to array of [char, frequency] pairs
        // const frequencyArray = Object.entries(dict);
        
        // // Sort by frequency (descending)
        // const sortedArray = mergeSort(frequencyArray, (a, b) => a[1] - b[1]);

        // this._sortedDictionary = sortedArray;
        
        // this._sortedDictionary.forEach(element => {
        //     this.binaryTree.insert(element[0], element[1]);
        // });
    }

    public encode() {
        const dict: { [key: string]: number } = {};

        // Calculate frequencies
        for (let i = 0; i < this._input.length; i++) {
            const element = this._input.charAt(i);
            dict[element] = (dict[element] || 0) + 1;
        }

        // Create nodes and add to heap
        for (const [char, freq] of Object.entries(dict)) {
            const node = new HuffmanNode(char, freq);
            this.heap.insert(node);
        }
        
        this.heap.buildHeap();

        while (this.heap.getSize() > 1) {
            const left = this.heap.deleteMin();
            const right = this.heap.deleteMin();
            
            const newNode = new HuffmanNode(left?.char + right?.char, (left?.frequency || 0) + (right?.frequency || 0));
            newNode.left = left;
            newNode.right = right;
            
            this.heap.insert(newNode);
        }

        // Build encoding table
        const root = this.heap.deleteMin();
        const encodingTable: { [key: string]: string } = {};
        this.buildEncodingTable(root, '', encodingTable);

        // Encode the input string
        let encodedString = '';
        for (const char of this._input) {
            encodedString += encodingTable[char] || '';
        }

        this.encodingTable = encodingTable;

        return {
            encodedString,
            encodingTable,
            root
        };
    }

    private buildEncodingTable(node: HuffmanNode | null, currentCode: string, table: { [key: string]: string }) {
        if (!node) return;
        
        if (!node.left && !node.right && node.char) {
            table[node.char] = currentCode || '0';
            return;
        }

        this.buildEncodingTable(node.left, currentCode + '0', table);
        this.buildEncodingTable(node.right, currentCode + '1', table);
    }

    public decode(encodedString: string ) {
        var decodedString = ''
        var start = 0
        var end = 1

        while(end < encodedString.length) {
            var part = encodedString.slice(start, end+1)

            if (Object.values(this.encodingTable).some(e => e === part)){
                decodedString += Object.keys(this.encodingTable).find(key => this.encodingTable[key] === part) || ''
                start = end + 1;
                end = start + 1
            }
            else {
                end++
            }
        }

        return decodedString;
    }
    
    public printHeap() {
        this.heap.printHeap();
    }
}

class HuffmanNode {
    char: string;
    frequency: number;
    left: HuffmanNode | null = null;
    right: HuffmanNode | null = null;

    constructor(char: string, frequency: number) {
        this.char = char;
        this.frequency = frequency;
    }
}