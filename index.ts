// const a: string = 'hello';
// console.log(a)
// 类型
// 1.Enum类型
// 常量枚举 它是使用 const 关键字修饰的枚举，常量枚举与普通枚举的区别是，整个枚举会在编译阶段被删除
// const enum Color {
//     RED,
//     PINK,
//     BLUE
// }

// const pink: Color = Color.PINK;
// console.log(pink)

// 2.数组类型
// const flag1: number[] = [1, 2, 3];
// const flag2: Array<number> = [1, 2, 3];
// console.log(flag1, flag2)

// 3.元组类型
// const flag: [string, number] = ['hello', 1]
// console.log(flag)

// 4.联合类型（Union Types）表示取值可以为多种类型中的一种 未赋值时联合类型上只能访问两个类型共有的属性和方法
// let s: string | number;
// s = 'a'
// console.log(s.length)
// s = 123
// console.log(s.toFixed(2))

// 5.类型断言
// let s = 'this is'
// let sLen: number = (<string>s).length

// let d = 'this is'
// let dLen: number = (s as string).length
// 非空断言 在上下文中当类型检查器无法断定类型时 一个新的后缀表达式操作符 ! 可以用于断言操作对象是非 null 和非 undefined 类型
// let flag: null | undefined | string | number;
// flag!.toString()

// 6.类型别名
// type flag = string | number;
// function calc(d: flag) {
//     console.log(d)
// }
// calc(2)

// 7.交叉类型 通过 & 运算符可以将现有的多种类型叠加到一起成为一种类型
// type Name = { name: string };
// type Age = { age: number };
// type Per = Name & Age;
// let people: Per = {
//     name: 'canvas',
//     age: 123
// }

// 函数
// 1.函数表达式
// type SumFunc = (x: number, y: number) => number;

// let countNumber: SumFunc = (a, b) => {
//     return a + b;
// }

// console.log(countNumber(2, 4))

// 2.可选参数
// function print(name: string, age?: number): void {
//     console.log(name, age)
// }
// print('sss')

// 接口
// 1.对象形状
// interface Speakable {
//     speak(): void;
//     readonly lng: string;
//     name?: string;
// }
// let speakman: Speakable = {
//     name: '123',
//     lng: '33',
//     speak() { }
// }

// 2.接口的继承
// interface Name {
//     name: string;
// }

// interface China extends Name {
//     age: number;
// }

// let obj: China = {
//     name: '22',
//     age: 2
// }

// 3.函数类型接口
// interface discount {
//     (price: number, age: number): number;
// }
// const cost: discount = (price, age) => {
//     return price * age
// }
// cost(1, 2)

// 泛型
// function createArray<T>(length: number, value: T): Array<T> {
//     let result: T[] = [];
//     for (let i = 0; i < length; i++) {
//         result[i] = value;
//     }
//     return result;
// }
// createArray(1, "x")

// 1.多个类型参数
// function swap<T, U>(tuple: [T, U]): [U, T] {
//     return [tuple[1], tuple[0]]
// }
// swap([7, 's'])

// 2.泛型约束 我们可以对泛型进行约束，只允许这个函数传入那些包含 length 属性的变量
// interface Lengthwise {
//     length: number;
// }
// function loging<T extends Lengthwise>(arg: T): T {
//     console.log(arg.length)
//     return arg;
// }

// 3.泛型接口
// interface Cart<T> {
//     list: T[];
// }
// let cart: Cart<{ name: string }> = {
//     list: [{ name: '123' }]
// }
// console.log(cart)

// 4.泛型类型别名
// type Car<T> = { list: T[] } | T[];
// let c1: Car<string> = { list: ['2'] };
// let c2: Car<number> = [1]

// 技巧
// 1.typeof 关键词
// let p1 = {
//     name: 'hello',
//     age: 10,
//     gender: 'male'
// }
// type People = typeof p1;
// function getName(p: People): string {
//     return p.name
// }
// let p2 = {
//     name: 'cc',
//     age: 10,
//     gender: 'f'
// }
// getName(p2)

// 2.keyof 关键词
// interface Person {
//     name: string;
//     age: number;
//     gender: 'male' | 'female'
// }
// type PersonKey = keyof Person;

// function getValueByKey(p: Person, key: PersonKey) {
//     return p[key];
// }
// let val = getValueByKey({ name: 'j', age: 2, gender: 'male' }, 'age')

// 3.索引访问操作符
// interface Person {
//     name: string;
//     age: number;
// }
// type x = Person['name']

// 4.映射类型 in
// interface Person {
//     name: string;
//     age: number;
//     gender: 'male' | 'female';
// }
// type PartPerson = {
//     [Key in keyof Person]?: Person[Key];
// }
// let p1: PartPerson = {}
const foo = 123;