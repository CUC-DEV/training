# JavaScript学习(1)
## 学习资源
- [mozilla js教程](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)，需要学习*快速入门*和*中级教程*
- [慕课网](http://www.imooc.com/learn/277)国内的视频比较少

## 练习题
以下练习，分别创建文件js-task-1.1.js, js-task-1.2.js, js-task-1.3.js上传自己分支。请同学注意，不要合并到*master*分支，自己分别在自己的分支上开发。结束时间为**北京时间2015年10月9日02:00:00**前

1. 给定一个数字字符串例如:"123,23,21,51,231,12"，实现函数 sumInt(str) 返回各数字之和

2. 给定一个object数组，统计所有key的和(属性可能为字符串或者数字)。[{a:1, b:2},{a:2, b:8, c:'4'}] => {a:3, b:10, c: 4}

3. 实现student类，teacher类，course类。学生可以注册或者取消课程;每个课程有一个任课老师。课程的任课老师可以随时改变，要求在student中有函数getTeachers()获取<课程,老师>对(即{"xxxCouse": [name1,name2,name3] })，teacher中有函数getStudents()获取<课程，学生>对。必须实现的函数签名如下:
	- student: enroll(course), abandon(course), getTeachers()
	- teacher: instruct(course), getStudents()
	- course: set(teacher)
	- 其他函数自行添加，考虑使用场景，处理各种情况(实例化时需传入的参数；取消不存在的课程；改变课程关系时各数据的同步等等)
