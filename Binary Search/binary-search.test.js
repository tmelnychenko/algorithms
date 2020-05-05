const search = require('./binary-search');

const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 19, 20];
const emptyList = [];

describe ('Binary Search', () => {
    test ('Item Found', () => {
        expect(search(5, list)).toBe(5);
    });

    test ('Item Not Found', () => {
        expect(search(9, list)).toBeNull();
    });

    test ('Item Not Found (Empty List)', () => {
        expect(search(2, emptyList)).toBeNull();
    });

    test ('Item Not Found (String, Not Number)', () => {
        expect(search("wow", list)).toBeNull();
    });
});