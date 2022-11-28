// TypeScriptの基本
export {};
// boolean
let bool: boolean = true;

// number
let num: number = 0;

// string
let str: string = 'A';

// Array
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple (指定した順番に型を入れる。)
let tuple: [number, string] = [0, 'A'];

// any(なんでもOK。意味ない。)
let any1: any = false;

// void(なにも返り値がないもの)
const func1 = (): void => {
  const test = 'TEST';
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
let obj2: {} = {}; // あんまりこれは使わない。
let obj3: { id: number; name: string } = { id: 0, name: 'AAA' };
