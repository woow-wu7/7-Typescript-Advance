// declare var jQuery = (dom: string) => void;
// 这里已经在@types/jquery中声明了，只是为了测试


// 全局变量 let var
// 全局常量 const
declare let golbal_let_number: number;
declare const global_const_number = 100;

// 全局函数
declare function global_function(count: number): void;

// 命名空间 ( 对象 )
// 命名空间可以嵌套
declare namespace obj {
  const name: string;
  let age: number;
}

// 函数重载
declare function fn_overload(params: string): string;
declare function fn_overload(params: number): nubmer[]

// interface
interface Studuent {
  name: string;
  age: number;
}

// type
type Tfn = (name: string) => string;

