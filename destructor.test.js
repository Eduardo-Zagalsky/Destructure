describe("Assigning Variables to Object Properties", () => {
    it("should assign the nested values to a new variable", () => {
        var obj = { numbers: { a: 1, b: 2 } };
        let { numbers: { a, b } } = obj;
        expect(a).toEqual(1);
        expect(b).toEqual(2);
    });
});