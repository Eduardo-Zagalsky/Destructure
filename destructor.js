var obj = {
    numbers: {
        a: 1,
        b: 2
    }
};
// var a = obj.numbers.a;
// var b = obj.numbers.b;
let { numbers: { a, b } } = obj;