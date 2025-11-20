// import { test, expect, expectTypeOf } from 'vitest';
// import { add, log } from '../src/exercises/01_tsc-basics-and-basic-types/02_functions';

// test('add: types are (number, number) => number', () => {
//   expectTypeOf(add).parameters.toEqualTypeOf<[number, number]>();
//   expectTypeOf(add).returns.toEqualTypeOf<number>();
//   expect(add(2, 3)).toBe(5); 
// });

// test('log: returns void', () => {
//   expectTypeOf(log).parameters.toEqualTypeOf<[string]>();
//   expectTypeOf(log).returns.toEqualTypeOf<void>();
//   const result = log('hello');
//   expect(result).toBeUndefined();
// });