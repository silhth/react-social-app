import {greetings} from './../utils.js'


it('test greeings() function', () => {
    const result = greetings('salvatore');
    expect(result).toBe('hello dear salvatore');
})


// per testare array o object

it('testing an array', () => {
    const arr = [1,2,3];
    expect(arr).toEqual([1,2,3]);
})