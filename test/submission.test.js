const functions = require('../submission/submission');

test('should greet mark', () => {
    //act - call my function
    const actual = functions.greet('mark')

    //assert - compare what was actually returned against my expected result
    expect(actual).toBe('hello mark');
});

test('should return count of bobs', () => {
    const actual = functions.countOfbobs([{ name: 'bob' }, { name: 'steve' }, { name: 'dave' }, { name: 'bob' }])
    expect(actual).toBe(2);
});

test('should return count of bobs when there are no bobs', () => {
    const actual = functions.countOfbobs([{ name: 'ronald' }, { name: 'steve' }, { name: 'dave' }, { name: 'hamburglar' }])
    expect(actual).toBe(0);
});

test('should return count of bobs when everyone is called bob', () => {
    const actual = functions.countOfbobs([{ name: 'bob' }, { name: 'bob' }, { name: 'bob' }, { name: 'bob' }])
    expect(actual).toBe(4);
});

test('should return no people when everyone under 18', () => {
    const actual = functions.peopleWhoCanVote([{ name: 'bob', age: 7 }, { name: 'bob', age: 7 }, { name: 'bob', age: 7 }, { name: 'bob', age: 7 }])
    expect(actual).toEqual([]);
});


test('should return people over 18', () => {
    const actual = functions.peopleWhoCanVote([{ name: 'bob', age: 17 }, { name: 'bob', age: 70 }, { name: 'bob', age: 77 }, { name: 'bob', age: 7 }])
    expect(actual).toEqual([{ name: 'bob', age: 70 }, { name: 'bob', age: 77 }]);
});

test('should return who are 18', () => {
    const actual = functions.peopleWhoCanVote([{ name: 'rob', age: 18 }, { name: 'mark', age: 18 }, { name: 'dave', age: 18 }, { name: 'john', age: 18 }])
    expect(actual).toEqual(
        [{ name: 'rob', age: 18 }, { name: 'mark', age: 18 }, { name: 'dave', age: 18 }, { name: 'john', age: 18 }]
    );
});

test('should transform Person to ApiPerson', () => {
    const actual = functions.transformForApi({ id: 27, name: 'rob', age: 18 })
    expect(actual).toEqual({ _id: 27, personName: 'rob', ageYrs: 18 });
});

test('should pass valid person', () => {
    const actual = functions.personIsValid({ id: 42, name: 'rob', age: 18 })
    expect(actual).toBe(true);
});

test('should pass valid person with no age', () => {
    const actual = functions.personIsValid({ id: 42, name: 'rob' })
    expect(actual).toBe(true);
});

test('should fail  person with no id', () => {
    const actual = functions.personIsValid({ name: 'rob' })
    expect(actual).toBe(false);
});

test('should fail person with no name', () => {
    const actual = functions.personIsValid({ id: 9, age: 99 })
    expect(actual).toBe(false);
});

test('should fail person with undefined name', () => {
    const actual = functions.personIsValid({ name: undefined, id: 9, age: 99 })
    expect(actual).toBe(false);
});

test('should fail  person no name or id ', () => {
    const actual = functions.personIsValid({ age: 99 })
    expect(actual).toBe(false);
});

test('return oldest person', () => {
    const actual = functions.oldestPerson([{ name: 'jim', age: 12 }, { name: 'bob', age: 99 }, { name: 'jim', age: 98 }])
    expect(actual).toEqual({ name: 'bob', age: 99 });
});

test('returns 0 busses if 0 people', () => {
    const actual = functions.numberBusesRequired(0)
    expect(actual).toBe(0);
});

test('returns 1 busses if 1 people', () => {
    const actual = functions.numberBusesRequired(1)
    expect(actual).toBe(1);
});

test('returns 1 busses if 130 people', () => {
    const actual = functions.numberBusesRequired(129)
    expect(actual).toBe(1);
});

test('returns 4 busses if 500 people', () => {
    const actual = functions.numberBusesRequired(500)
    expect(actual).toBe(4);
});


