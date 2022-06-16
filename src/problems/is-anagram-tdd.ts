export const isAnagram = (first: string, second: string): boolean => {
    if (first.trim() === second.trim()) {
        return true;
    }

    if (first.trim().length === 0 && second.trim().length === 0) {
        return true;
    }

    const letterToSearch = first.charAt(0);
    let letterPositionInSecond = 0;
    const firstToSearch = first.slice(1);

    if (letterToSearch != ' ') {
        letterPositionInSecond = second.toLowerCase().indexOf(letterToSearch.toLowerCase());

        if (letterPositionInSecond < 0) {
            return false;
        }
    } else {
        return isAnagram(firstToSearch, second);
    }

    let secondToSearch =
        second
            .substring(0, letterPositionInSecond) +
        second
            .substring(letterPositionInSecond + 1, second.length);

    return isAnagram(firstToSearch, secondToSearch);
}