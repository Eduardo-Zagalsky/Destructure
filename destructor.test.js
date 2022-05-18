describe("Assigning Variables to Object Properties", () => {
    it("should assign the nested values to a new variable", () => {
        var obj = { numbers: { a: 1, b: 2 } };
        let { numbers: { a, b } } = obj;
        expect(a).toEqual(1);
        expect(b).toEqual(2);
    });
});
describe("One-Line Array Swap with Destructuring", () => {
    it("should switch the first and second value", () => {
        var arr = [1, 2];
        [arr[0], arr[1]] = [arr[1], arr[0]];
        expect(arr).toEqual([2, 1]);
    });
});