export const insertionSort = (collection: Array<any>) => {
    let result: Array<any> = [...collection];

    for (let i = 1; i < result.length; i++) {
        const element = result[i];

        let previousIndex = i - 1;

        while (result[previousIndex] > element && previousIndex > -1) {
            result[previousIndex + 1] = result[previousIndex];
            previousIndex = previousIndex - 1;
        }

        result[previousIndex + 1] = element;
    }

    return result;
}