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
    let _first = [...first]
    let _second = [...second]
    
    // refactor in order not to modify original array
    while(_first.length > 0 && _second.length > 0){
    	if(_first[0] <= _second[0]){
      	result.push(_first[0])
        _first.splice(0, 1)
      } else {
      	result.push(_second[0])
        _second.splice(0, 1)
      }
    }
    
    while(_first.length > 0){
        result.push(_first[0])
        _first.splice(0, 1)
    }
    
    while(_second.length > 0){
        result.push(_second[0])
        _second.splice(0, 1)
    }

    return result;
}