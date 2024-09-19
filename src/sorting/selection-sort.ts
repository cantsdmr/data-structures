export const selectionSort = (collection: Array<any>) => {
    let result: Array<any> = [...collection];

    for (let i = 0; i < result.length; i++) {
        const element = result[i];
        let minimum = element;
        let minimumIndex = i;

        for (let j = i; j < result.length; j++) {
            if(result[j] < minimum){
                minimum = result[j]
                minimumIndex = j
            }
        }

        if (minimumIndex != i) {
            result[minimumIndex] = element;
            result[i] = minimum;   
        }
    }

    return result;
}