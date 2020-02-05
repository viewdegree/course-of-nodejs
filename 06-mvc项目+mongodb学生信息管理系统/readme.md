### 第一阶段:实现首页的功能显示所有学生

搭建好首页

规划好项目路由结构

![](https://github.com/viewdegree/course-of-nodejs/blob/feature/06mvx%2Bmongodb%E9%A1%B9%E7%9B%AE---%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/06-mvc%E9%A1%B9%E7%9B%AE%2Bmongodb%E5%AD%A6%E7%94%9F%E4%BF%A1%E6%81%AF%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F/readme_img/Node%E8%B7%AF%E7%94%B1%E5%9B%BE_%E5%AD%A6%E7%94%9F%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F.png)

### 第二阶段:实现添加学生功能

在这里我一开始想用form去传递数据给后台,但是后来发现当后台添加成功时,我想要给控制前端弹出弹窗的时候form就不行了,需要用到ajax的success回调函数,form是有来无回的感觉

在布局的时候一些功能可以通过控制距离来达到美化页面的效果,最后一个返回首页我将其设置为右对齐,这样就显得协调和错落有致,而且不易与提交按钮混在一起

```html
<div class="box">
        <p>请填写新增学生信息</p>
        <p><span>姓名:</span><input type="text" name="name" id="username"></p>
        <p><span>语文:</span><input type="text" name="chinese" id="chinese"></p> 
        <p><span>数学:</span><input type="text" name="math" id="math"></p> 
        <p><span>英语:</span><input type="text" name="english" id="english"></p>
        <p><input type="submit" value="提交" id="submitBtn"></p>
        <p class="right"><a href="/">点我返回首页</a></p> 
    </div>
```

对于引入css我觉得引入一个就可以了,我们可以给css设置class类名,而在一个css文件不断的写入相应的css文件这样在信息量小而页面多的动态页面比较节省性能



### 第三阶段:实现删除学生操作

与增加学生不同的是,在进行删除操作之前需要去判断已存在的学生,如果学生存在才能删除,而增加学生是在增加操作之前判断未存在的学生,只要学生不存在才能删除

如果能有显示学生,并勾选的页面就会好很多,以后再升级



### 第四阶段:实现修改学生信息操作

把app.js的渲染页面的操作写入控制层中,显得清爽多了

这里有个细节就是当我只填姓名,其他不填的就修改为空了,要实现如果不写不修改的功能需要对传入的数据进行js的数组判断,或者用mongodb判断,这个之后再升级吧

### 第五阶段:实现修改学生信息操作

这个直接一个查询若成功则返回前端json数据,前端的ajax的success函数会弹出json数据

### 项目中可优化的点

1. 在db.js中每个操作都都有一个相同的点就是

```js
        if(name===''){  //排除空字符串的情况
            callback('请填写学生姓名');
            return;
        }
```

为了减少代码的冗余,可以用中间件来写

2. 在修改学生操作

   页面可以这样引导,先让用户填写姓名之后再显示给用户相应需要填写的.

   如果所有选项都出现,那么默认不写的选项可以不修改

   ​	默认不写不修改,可以在mongo的修改语句中实现或者通过js遍历对象判断,不过这两点我都不大熟悉

3. 在删除学生操作

   可以在删除的时候提示确认删除的窗口

   ​	这需要用到弹窗的知识

4. 在查询学生的时候

   可以将查询到的结果打印在页面上







