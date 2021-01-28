import { setUser } from '../utils.js';

const test = QUnit.test;

test('the FormData should save user input to local storage', (expect) => {
    const form = new FormData();
    form.append('name', 'case');
    form.append('element', 'water');
    setUser(form);

    const actual = localStorage.getItem('USER');
    const trueActual = JSON.parse(actual);

    const expected = {
        name: 'case',
        cp: 0,
        element: 'water',
        jp: 0,
        completed: {},
    };

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(trueActual, expected);
});
