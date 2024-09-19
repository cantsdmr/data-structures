// This is not a comparison based sorting
export const countingSort = (collection:  Array<any>) => {
    let max = 0;
    
    for (let i = 0; i < collection.length; i++) {
        const element = collection[i];
        
        if (element > max) {
            max = element;
        }
    }

    let frequencyArray= new Array(max + 1).fill(0);
    let result = [];

    for (let k = 0; k < collection.length; k++) {
        const element = collection[k];
        frequencyArray[element]++; // Increment the count of the element in the frequency array, including duplicates
    }

    // Calculate the cumulative count of elements for each position
    for (let i = 1; i <= max; i++) {
        frequencyArray[i] = frequencyArray[i - 1] + frequencyArray[i];
    }

    
    for (let j = collection.length - 1; j >= 0; j--) {
        const element = collection[j];
        const index = frequencyArray[element] - 1;
        result[index] = element;
        frequencyArray[element]--;
    }

    return result;
}
