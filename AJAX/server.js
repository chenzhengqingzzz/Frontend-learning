// 1.引入express
const { response } = require('express');
const express = require('express');
const { request } = require('http');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置响应
    response.send('HELLO AJAX GET')
})
// 可以接受任意类型的请求
app.all('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置允许任何类型的响应头
    response.setHeader('Access-Control-Allow-Headers', "*")
    // 设置响应
    response.send('HELLO AJAX')
})
app.all('/json-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置允许任何类型的响应头
    response.setHeader('Access-Control-Allow-Headers', "*")
    // 响应一个数据
    const data = {
        name: 'czq'
    }
    // 对对象进行字符串的转换
    let str = JSON.stringify(data)
    // 设置响应
    // send里面只能接收字符串和buffer，不能直接放对象
    response.send(str)
})
// 延时响应
app.all('/delay', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置允许任何类型的响应头
    response.setHeader('Access-Control-Allow-Headers', "*")
    setTimeout(() => {
        // 设置响应体
        response.send('延时响应')
    }, 3000)
})
// jQuery服务
app.all('/jquery-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置允许任何类型的响应头
    response.setHeader('Access-Control-Allow-Headers', "*")
    // response.send('Hello jQuery AJAX')
    const data = {name: 'czq'}
    // 解析JSON字符串
    response.send(JSON.stringify(data))
})
// axios服务
app.all('/axios-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置允许任何类型的响应头
    response.setHeader('Access-Control-Allow-Headers', "*")
    // response.send('Hello jQuery AJAX')
    const data = {name: 'czq'}
    // 解析JSON字符串
    response.send(JSON.stringify(data))
})
// fetch服务
app.all('/fetch-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置允许任何类型的响应头
    response.setHeader('Access-Control-Allow-Headers', "*")
    // response.send('Hello jQuery AJAX')
    const data = {name: 'czq'}
    // 解析JSON字符串
    response.send(JSON.stringify(data))
})
// jsonp服务
app.all('/jsonp-server', (request, response) => {
    response.send(console.log('hello jsonp-server'))
    const data = {
        name: 'czq'
    }
    // 将数据转化为字符串
    let str = JSON.stringify(data)
    // 返回结果
    response.end(`handle(${str})`)
})
// 用户名检测是否存在
app.all('check-username', (request, response) => {
    const data = {
        exist: 1,
        msg: '用户名已经存在'
    }
    // 将数据转化为字符串
    let str = JSON.stringify(data)
    // 返回结果
    response.end(`handle(${str})`)

})
// cors跨域
app.all('/cors-server', (request, response) => {
    // 设置响应头
    response.setHeader('Access-Control-Allow-Origin', '*')
    // response.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500')
    response.send('hello, cors')
})

// 4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中......');
})