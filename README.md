# Typescript 进阶


#### (1) 项目依赖
- vite jquery @types/jquery



#### 一些小的知识点
- 1
- 问题: .gitignore不生效？
- 答案: 把git的本地缓存改成未track状态 => git rm -r --cached .
- 注意: rm -r 中的-r表示的是 ( recursive: 递归 ) 的意思
- 资料: https://juejin.cn/post/6844903831579410439
- 2
- type 和 interface 的区别
- type不会新建类型，而是给已有类型取一个名字；而interface会新建一个类型
- type可以用于原始值，联合类型，元组以及其他任意需要手写的类型；而interface只用于对象
- type不能被 ( extends继承 ) 和 ( implements实现 )，什么是implements呢？比如 class去实现一个interface
- 3
- const 和 readonly 的区别
- 两者都不能被修改，变量用const，对象的属性用readonly


#### 资料
- tsconfig.json全解析 https://lq782655835.github.io/blogs/project/ts-tsconfig.html
