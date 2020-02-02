向服务器发送一个特定格式的http请求,返回对应的数据在页面上

例如`http://localhost:3000/student/10`,服务器能够返回学号为10的学生信息,学生的信息存储在student中

ToDoList:

1. 通过正则匹配只能http连接请求的格式必须为`http://localhost:3000/student/xx`
2. 获取url后2位数字的学号并保存
3. 获取数据库中的数据的对象
  ![](https://github.com/viewdegree/course-of-nodejs/blob/feature/03%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%E6%9F%A5%E8%AF%A2%E5%B0%8F%E6%A1%88%E4%BE%8B/03-%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%E6%9F%A5%E8%AF%A2%E5%B0%8F%E6%A1%88%E4%BE%8B(%E8%BF%90%E7%94%A8%E5%8A%A8%E6%80%81%E8%AF%B7%E6%B1%82)/img/node%E6%8E%A7%E5%88%B6%E5%8F%B0%E6%89%93%E5%8D%B0%E7%9A%84%E7%BB%93%E6%9E%9C.png)
4. 在页面中响应对应的数据
  ![](https://github.com/viewdegree/course-of-nodejs/blob/feature/03%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%E6%9F%A5%E8%AF%A2%E5%B0%8F%E6%A1%88%E4%BE%8B/03-%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%E6%9F%A5%E8%AF%A2%E5%B0%8F%E6%A1%88%E4%BE%8B(%E8%BF%90%E7%94%A8%E5%8A%A8%E6%80%81%E8%AF%B7%E6%B1%82)/img/%E6%B5%8F%E8%A7%88%E5%99%A8%E5%93%8D%E5%BA%94%E7%BB%93%E6%9E%9C.png)
 5. 处理数据库中不存在的学号
  ![](https://github.com/viewdegree/course-of-nodejs/blob/feature/03%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%E6%9F%A5%E8%AF%A2%E5%B0%8F%E6%A1%88%E4%BE%8B/03-%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%E6%9F%A5%E8%AF%A2%E5%B0%8F%E6%A1%88%E4%BE%8B(%E8%BF%90%E7%94%A8%E5%8A%A8%E6%80%81%E8%AF%B7%E6%B1%82)/img/%E4%B8%8D%E5%AD%98%E5%9C%A8%E7%9A%84%E5%AD%A6%E7%94%9F%E5%A4%84%E7%90%86.png)
