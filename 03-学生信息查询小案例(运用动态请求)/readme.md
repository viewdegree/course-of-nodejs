向服务器发送一个特定格式的http请求,返回对应的数据在页面上

例如`http://localhost:3000/student/10`,服务器能够返回学号为10的学生信息,学生的信息存储在student中

ToDoList:

1. 通过正则匹配只能http连接请求的格式必须为`http://localhost:3000/student/xx`
2. 获取url后2位数字的学号并保存
3. 获取数据库中的数据的对象

![](C:\Users\lionli\Desktop\github\course-of-nodejs\03-学生信息查询小案例(运用动态请求)\img\node控制台打印的结果.png)

第一次结果