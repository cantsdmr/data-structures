export const mergeSort = <T>(collection: T[], comparator?: (a: T, b: T) => number) => {
    return seperateAndCompare<T>(collection, comparator);
}

function seperateAndCompare<T>(collection: T[], comparator?: (a: T, b: T) => number): T[] {
    if (collection.length <= 1) {
        return collection;
    }

    let firstHalf = seperateAndCompare<T>(collection.slice(0, collection.length / 2), comparator);
    let secondHalf = seperateAndCompare<T>(collection.slice(collection.length / 2), comparator);

    return merge(firstHalf, secondHalf, comparator);
}

export const merge = <T>(first: T[], second: T[], comparator?: (a: T, b: T) => number) => {
    let result: T[] = [];
    let firstIndex = 0;
    let secondIndex = 0;
    
    const compare = (a: T, b: T): number => {
        if (comparator) {
            return comparator(a, b);
        }
        return a < b ? -1 : a > b ? 1 : 0;
    };

    while (firstIndex <= first.length - 1 && secondIndex <= second.length - 1) {
        if (first[firstIndex] != null && compare(first[firstIndex], second[secondIndex]) <= 0) {
            result.push(first[firstIndex]);
            firstIndex++;
        } else if (second[secondIndex] != null) {
            result.push(second[secondIndex]);
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