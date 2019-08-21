const Koa = require("koa");
const app = new Koa();
const router = require("koa-router")();
// const { historyApiFallback } = require("koa2-connect-history-api-fallback");
const staticMidd = require("koa-static");
const views = require("koa-views");
const path = require("path");
const assetsPath = "./build";

let staticServerWithCache = staticMidd(assetsPath, {
  maxage: 86400000
});

let staticServerNoCache = staticMidd(assetsPath);

router.get("/(:spa)?", async ctx => {
  await ctx.render("index");
});

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

// 加载模板引擎
app.use(
  views(path.join(__dirname, "../build"), {
    map: {
      html: "ejs" //可以把ejs文件改成html
    }
  })
);

// 调用路由中间件
app.use(router.routes());

// 静态资源
app.use(async (ctx, next) => {
  ctx.url = ctx.URL.pathname;
  if (!ctx.url.includes(".")) {
    ctx.url += ".html";
    return staticServerNoCache(ctx, next);
  }

  return staticServerWithCache(ctx, next);
});

app.listen("4300", () => {
  console.log("启动成功");
});
