export const isAnagram = (first: string, second: string): boolean => {
    if (first.length != second.length) {
        return false;
    }

    const letter = first.charAt(0);

    if (!letter) {
        return true;
    }

    const foundIndex = second.indexOf(letter);

    if (foundIndex === -1) {
        return false;
    }

    const _first = first.substring(1, first.length);
    const _second = second.substring(0, foundIndex) + second.substring(foundIndex + 1, second.length);

    return isAnagram(_first, _second);
}