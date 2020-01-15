const Koa = require("koa");
const app = new Koa();
const router = require("koa-router")();
const views = require("koa-views");
const path = require("path");
const proxy = require('koa-proxies')

// const assetsPath = "./build";

// let staticServerWithCache = staticMidd(assetsPath, {
//   maxage: 86400000
// });

// let staticServerNoCache = staticMidd(assetsPath);

// 错误处理
app.use(async (ctx, next) => {
  await next();
  if (ctx.status !== 200) {
    ctx.body = `
    <center>
      <h1>${ctx.status}</h1>
      <hr/>
      <h1>访问出错</h1>
      <p>${ctx.url}</p>
    </center>
    `;
  }
});

router.get('/', async (ctx, next) => {
  await ctx.render('index.ejs')
})
// 加载模板引擎
app.use(
  views(path.join(__dirname, "./view"))
);
// 代理
app.use(proxy('/static', {
  target: 'http://127.0.0.1:3000',
  changeOrigin: true,
  prependPath: false
}))

// 调用路由中间件
app.use(router.routes());


app.listen("4300", () => {
  console.log("启动成功");
});
