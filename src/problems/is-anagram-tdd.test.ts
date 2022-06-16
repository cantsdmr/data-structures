import { expect } from "chai";
import { isAnagram } from "./is-anagram-tdd"

describe('is anagram functionality', () => {
    it("returns true if empty strings provided", () => {
        const expected = true;
        const actual = isAnagram("", "");

        expect(actual).to.equal(expected);
    });

    it("returns true if same strings provided", () => {
        const expected = true;
        const actual = isAnagram("cat", "cat");

        expect(actual).to.equal(expected);
    });

    it("returns true if an anagram provided", () => {
        const expected = true;

        expect(isAnagram("cat", "tac")).to.equal(expected);
        expect(isAnagram("listen", "silent")).to.equal(expected);
        expect(isAnagram("elbow", "below")).to.equal(expected);
    });

    it("returns true if an anagram provided with whitespaces", () => {
        const expected = true;

        expect(isAnagram("cat", "ta    c")).to.equal(expected);
        expect(isAnagram("li ste  n", "sile nt")).to.equal(expected);
        expect(isAnagram(" elbow ", "bel ow")).to.equal(expected);
        expect(isAnagram("conversation", "vernot ias onc")).to.equal(expected);
    });

    it("returns true if an anagram provided with uppercase-lowercase inputs", () => {
        const expected = true;

        expect(isAnagram("Cat", "Tac")).to.equal(expected);
        expect(isAnagram("LISteN", "SILENT")).to.equal(expected);
    });
})