// koa 实现原理
// 4部分 applications context request response
// 封装node http server、创建Koa类构造函数
// 构造request、response、context对象
// 中间件机制和剥洋葱模型的实现
// 错误捕获和错误处理
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end('hello world');
})

server.listen(3000, () => {
  console.log('server listening on 3000')
})

// 实现简单版本的 koa
class Application {

}


