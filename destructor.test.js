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
describe("Race Results", () => {
    it("should accept a single array argument and return an object with the keys first, second, third, and rest.", () => {
        expect(raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])).toEqual({ first: "Tom", second: "Margaret", third: "Allison", rest: ["David", "Pierre"] });
    });
});