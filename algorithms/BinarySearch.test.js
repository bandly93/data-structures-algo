const BinarySearch = require('./BinarySearch');

test('([1,2,3,4,5,6,7,8,9,10],5) should return 5',() => {
	expect(BinarySearch([1,2,3,4,5,6,7,8,9,10],5)).toBe(5);
});
