const Koa = require('koa'); 
const Router = require('koa-router');
//新建一个服务器
const app = new Koa();//新建一个koa实例
//新建路由
const router = new Router();
//添加路由实例
router.get('/user',ctx=>{
    ctx.body = '用户首页';
})
//监听端口3000
//使用路由
app.use(router.routes());
app.listen(3000);