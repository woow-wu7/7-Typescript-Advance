// 1
// tsc src/*.ts 编译所有scr文件夹中的ts文件

// 2
// 测试 tsconfig.json中的 target 和 module，即 ( 编译后的js的版本类型和模块类型 )

// import { other } from './other'
// import { reverse } from './util/index'
// import { reverse2 } from './util/index2'
// import jQuery from 'jquery'

// const str = 'string'
// const fn = () => {
//   // return reverse([other + str])
//   return reverse2(reverse([other + str]));
// }
// fn()
// console.log(jQuery('#boot'))


// 测试声明文件，全局变量声明
// num已经在 ( types/index.d.ts ) 中声明成了全局变量，因此这里可以直接使用
// const golbal_let_number = 10;
// console.log(`num`, golbal_let_number)

// 测试声明文件，全局常量声明并赋值
// con已经在 ( types/index.d.ts ) 中声明成了全局常量，因此这里可以直接使用
// console.log(`con`, global_const_number)

// 测试声明文件，全局函数
// global_function(10)

// 试声明文件，命名空间，类似对象
// obj.age  = 20;
// obj.name // 只读

// 测试声明文件，函数重载
// const go = fn_overload('11')
// const go2 = fn_overload(10)

// 测试声明文件，interface
// const fun_test_interface = (params: Studuent) => {
//   return params
// }

// 测试声明文件，type
// const fun_test_type:Tfn = (name) => name;


// 测试keyof
// interface ITest {
//   name: string;
//   age: 20;
// }
// const testKeyof = (params: ITest) => {
//   console.log(`params`, params)
// }
// testKeyof({
//   name: 'woow_wu7',
//   age: 20
// })



/*
测试枚举 - 数字成员的 ( 反向映射 )
解析：
1. 数字枚举成员能 - 反向映射
2.
问题：为什么数字枚举成员能反向映射？
回答：因为 - enum枚举，既可以做为数据，也可以作为类型
扩展：enum 和 class 既可以做类型，也可以做数据
3.
Good[name] 是 ( T[K] - 索引访问操作符 )，所以 ( name必须是一个类型，即K必须是一个类型 )
*/
// enum Good {
//   name = 1,
//   age = 3
// }
// const number = Good.name // 1
// const string = Good[number] // 'name'


// 测试类型保护

// typeof 对象
// interface TestObj {
//   name: string;
// }
// const testObj: TestObj = {
//   name: 'woow_wu7'
// }
// type TestObj2 = typeof testObj


// // typeof 函数
// function go(address: string): string[] {
//   return [address]
// }
// type Go = typeof go


// keyof
interface Super {
  name: string;
  age: number;
  language: any[];
}

type Sub1 = keyof Super

function notAny(name) {} // 设置了 noImplicitAny: true，则不能出现隐式any，这里name就会报错

function notUse(age: number, who: string) {
  console.log(`age`, age)
}

let aaaaa

