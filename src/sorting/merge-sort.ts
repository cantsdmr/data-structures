export const mergeSort = (collection: any[]) => {
    return seperateAndCompare(collection)
}

function seperateAndCompare(collection: any[]) {
    if (collection.length <= 1) {
        return [collection[0]]
    }

    let firstHalf = seperateAndCompare(collection.slice(0, collection.length / 2));
    let secondHalf = seperateAndCompare(collection.slice(collection.length / 2));

    const sorted = merge(firstHalf, secondHalf);
    return sorted;
}

export const merge = (first: any[], second: any[]) => {
    let result= [];
    let firstIndex = 0;
    let secondIndex = 0;
    
    // refactor in order not to modify original array
    while (firstIndex <= first.length - 1 && secondIndex <= second.length - 1) {
        if (first[firstIndex] != null && first[firstIndex] <= second[secondIndex]) {
        result.push(first[firstIndex])
        firstIndex++;
        } else if(second[secondIndex] != null){
        result.push(second[secondIndex])
        secondIndex++;
        }
    }

    while (firstIndex <= first.length - 1) {
        if(first[firstIndex] == null){
            break;
        }
        result.push(first[firstIndex])
        firstIndex++;
    }

    while (secondIndex <= second.length - 1) {
        if(second[secondIndex] == null){
            break;
        }
        result.push(second[secondIndex])
        secondIndex++;
    }

    return result;
}