# Ajax学习

## 1. 原生AJAX

### 1.1 AJAX简介

​	AJAX全称为`Asynchronous JavaScript And XML` 就是异步的`JS`和`XML`

​	通过AJAX可以在浏览器中向服务器发送异步请求，最大的优势：**无刷新获取数据**

​	AJAX不是新的编程语言，而是一种将现有的标准组合在一起使用的新方式

### 1.2 XML简介

​	`XML`：可扩展标记语言

​	`XML`被设计用来传输和存储数据

​	`XML`和`HTML`类似，不同的是`HTML`中都是预定义标签，而`XML`中没有预定义标签，全都是自定义标签，用来展示一些数据

```xml
// 比如说我有一个学生数据：
name = '孙悟空', age = 18, gender = '男'
// 用XML表示：
<student>
		<name>孙悟空</name>
		<age>18</age>
		<gender>男</gender>
</student>
```

​	现在已经被JSON取代了

```json
// 用JSON表示：
		{'name': '孙悟空', 'age': 18, 'gender': '男'}
```

### 1.3 AJAX的特点

##### 	1.3.1 AJAX的有点

		1. 可以无需刷新页面与服务器端进行通信
		1. 允许你根据用户事件来更新部分页面内容

#### 	1.3.2 AJAX的缺点

1. 没有浏览历史，不能回退
2. 存在跨域问题（同源） 从a.com发送ajax请求到b.com默认是不允许的
3. SEO不友好

**HTTP协议**

​	HTTP（hypertext transport protocol）协议（超文本传输协议），协议详细规定了浏览器和万维网服务器之间互相通信的规则

1. 请求报文

​	重点是格式与参数

```
行 			POST / s?te=utf-8 HTTP/1.1
头				Host: atguigu.com
				Cookie: name=guigu
				Content-type: application/x-www/form-urlencoded
				User-Agent: chrome 83
空行
体				username=admin$password=admin （GET请求发送的请求体为空）
```

2. 响应报文

```
行				HTTP/1.1 200 OK 这里的状态码还可以有404 403等等
头				Content-Type: text/html;charset=utf-8
				Content-length: 2048
				Content-encoding: gzip
空行
体				<html>
						<head>
						</head>
						<body>
								<h1>abc</h1>
						</body>
				</html>
```



### 1.4 AJAX的使用

​	**express框架的使用**

		1. 在包文件夹用npm包管理器安装express框架

```
npm init --yes
npm i express
```

2. 脚本文件

```javascript
// 1.引入express
const { response } = require('express');
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/', (request, response) => {
    // 设置响应
    response.send('HELLO, EXPRESS')
})

// 4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中......');
})
```

3. 在调试窗口查看到请求报文和响应报文相关信息

![image-20230220151158020](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230220151158020.png)

![image-20230220151228065](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230220151228065.png)

![image-20230220151243605](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230220151243605.png)

**AJAX请求的基本操作**

需要注意client端里面的`onreadystatechange`属性以及发送一个请求的流程

POST请求需要调用对象的post方法，其他类似

1. server端：

```javascript
// 1.引入express
const { response } = require('express');
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置响应
    response.send('HELLO AJAX')
})
app.post('/server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置响应
    response.send('HELLO AJAX')
})

// 4.监听端口启动服务
app.listen(8000, () => {
    console.log('服务已经启动，8000端口监听中......');
})
```

2. client端

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>发送AJAX GET请求</title>
    <style>
        #result {
            width: 200px;
            height: 100px;
            border: 1px solid purple;
        }
    </style>
</head>
<body>
    <button>点击发送GET请求</button>
    <div id="result"></div>
    <script>
        // 获取button元素
        const btn = document.querySelector('button')
        const result = document.querySelector('div')
        btn.addEventListener('click', () => {
            // 操作AJAX

            // 1.创建对象
            const xhr = new XMLHttpRequest();
            // 2.初始化，设置请求方法和url
            xhr.open('GET', 'http://127.0.0.1:8000/server')
            // 3.发送
            xhr.send()
            // 事件绑定 处理服务端返回的结果
            // on 当...时
            // readystate 是xhr对象中的一个属性 表示状态 0（未初始化） 1（open方法调用完毕） 2（send方法调用完毕） 3（服务端返回了部分结果） 4（服务端返回了全部结果） 
            // change 改变
            xhr.onreadystatechange = function(){
                // 判断
                // 此条件为服务端返回了所有结果
                if(xhr.readyState === 4){
                    // 判断 响应的状态码 200 404 403 401 500
                    // 2xx 这种的状态码都是表示成功
                    if(xhr.status >= 200 && xhr.status < 300){
                        // 处理结果 行 头 空行 体
                        // 1.响应行
                        // console.log(xhr.status); //状态码
                        // console.log(xhr.statusText); //状态字符串
                        // console.log(xhr.getAllResponseHeaders()); //所有响应头
                        // console.log(xhr.response); //响应体

                        // 设置div框里面的文本
                        result.innerHTML = xhr.response
                    }else{

                    }
                }
            }
        })
    </script>
</body>
</html>
```

![image-20230220155129337](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230220155129337.png)

**url传参：**

​	在URL后面用`?`表示传参，各个参数之间用`&`分割

​	而POST方法传参则需要在xhr.send（方法里面传递参数）

​	get方法传参因为实在url后面加参数，所以地址栏可以看出来

```javascript
xhr.open('GET', 'http://127.0.0.1:8000/server?a=100&b=200&c=300')
```

```javascript
xhr.send('a=100&b=200&c=300')
```



GET:![image-20230220155609894](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230220155609894.png)

POST:

![image-20230220163616410](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230220163616410.png)

**请求头自定义请求头**

​	client端要用到`setRequestHeader('', '')`方法来设置 要写在`open()`后，`send()`之前

​	server端要设置与之对应的接受请求头

​	一般会把身份这种验证类的信息放在请求头

server端：

```javascript
// 可以接受任意类型的请求
app.all('/server', (request, response) => { //这里变成all是因为post请求会进行预检
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // 设置允许任何类型的**响应头**
    response.setHeader('Access-Control-Allow-Headers', "*")
    // 设置响应
    response.send('HELLO AJAX')
})
```

client端：

```javascript
            // 设置请求头
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
            // 自定义请求头
            xhr.setRequestHeader('name', 'czq')
```

![image-20230220165336985](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230220165336985.png)

**服务端响应JSON数据**

​	此需要用到JSON中的些许操作字符串的方法

server端

```javascript
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
```

client端

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON响应</title>
    <style>
        #result {
            width: 200px;
            height: 100px;
            border: 1px solid skyblue;
        }
    </style>
</head>

<body>
    <button>响应JSON数据</button>
    <div id="result"></div>
    <script>
        const btn = document.querySelector('button')
        const result = document.querySelector('div')
        btn.addEventListener('click', () => {
            // 发送请求
            const xhr = new XMLHttpRequest()
            // 设置响应体数据的类型
            xhr.responseType = 'json'
            // 初始化
            xhr.open('GET', 'http://127.0.0.1:8000/json-server')
            // 发送
            xhr.send()
            // 事件绑定
            xhr.onreadystatechange = () => {
                if(xhr.readyState === 4){
                    if(xhr.status >= 200 && xhr.status < 300){
                        // result.innerHTML = xhr.response
                        // 1.手动对数据进行转化
                        // let data = JSON.parse(xhr.response)
                        // result.innerHTML = data.name
                        
                        // 2.自动转换 见28行
                      	console.log(xhr.response)
                        result.innerHTML = xhr.response.name
                    }
                }
            }
        })
    </script>
</body>

</html>
```

![image-20230220172332356](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230220172332356.png)

**IE浏览器缓存问题**

​	IE浏览器在第二次接受服务器的数据走的是缓存路线，在服务器返回来的数据发生变化时IE无法正确做出改变

​	则需要在client端加入时间戳，让IE浏览器以为这是两个不同的请求以解决这个问题

```javascript
xhr.open('GET', 'http://127.0.0.1:8000/ie?t=' +Date.now())
```

**超时与网络异常**

​	实际体验中需要我们对于断网和网络超时来设置特定场景以满足用户需求

​	这里服务端给客户端是设置了延迟3s返回结果 而客户端设置了2s的超时要求，所以客户端不会收到服务端的响应`延时响应`

server：

```javascript
// 延时响应
app.get('/delay', (request, response) => {
    response.setHeader('Access-Control-Allow-Origin', '*')
    setTimeout(() => {
        // 设置响应体
        response.send('延时响应')
    }, 3000)
})
```

​	client:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>请求超时与网络异常</title>
    <style>
        #result {
            width: 200px;
            height: 100px;
            border: 1px solid purple;
        }
    </style>
</head>
<body>
    <button>点击发送请求</button>
    <div id="result"></div>
    <script>
        const btn = document.querySelector('button')
        const result = document.querySelector('div')
        btn.addEventListener('click', () => {
            const xhr = new XMLHttpRequest()
            // 超时设置 2s
            xhr.timeout = 2000
            // 超时回调 
            xhr.ontimeout = () => {
                alert('网络异常，请稍后重试！！')
            }
            // 网络异常回调
            xhr.onerror = () => {
                alert('您的网络似乎出了点问题')
            }
            xhr.open('GET', 'http://127.0.0.1:8000/delay')
            xhr.send()
            xhr.onreadystatechange = function(){
                if(xhr.readyState === 4){
                    if(xhr.status >= 200 & xhr.status < 300){
                        result.innerHTML = xhr.response
                    }
                }
            }
        })
    </script>
</body>
</html>
```

调试结果：

收不到服务器响应：

![image-20230221121451663](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221121451663.png)

![image-20230221121530054](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221121530054.png)

断网时做出的响应：

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221121556362.png" alt="image-20230221121556362" style="zoom:50%;" />

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221121625798.png" alt="image-20230221121625798" style="zoom:50%;" />

![image-20230221121639933](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221121639933.png)

**AJAX取消请求**

​	关于ajax取消请求 需要用到abort方法

client：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>取消请求</title>
    <style>
    </style>
</head>
<body>
    <button>点击发送</button>
    <button>点击取消</button>
    <script>
        // 获取元素对象
        const btns = document.querySelectorAll('button')
        // 因为在两个函数都要用到这个对象的实例，所以将它定义为全局变量
        let xhr = null
        btns[0].addEventListener('click', () => {
            xhr = new XMLHttpRequest()
            xhr.open('GET', 'http://127.0.0.1:8000/delay')
            xhr.send()
        })

        // 取消请求abort
        btns[1].addEventListener('click', () => {
            xhr.abort()
        })
    </script>
</body>
</html>
```

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221141738781.png" alt="image-20230221141738781" style="zoom:50%;" />

**重复请求问题**

​	为了给服务器减少压力，在用户多次点击发送请求按钮的时候将其设为最后一次有效

​	需要给定一个标识符

client端：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>重复请求问题</title>
    <style>
    </style>
</head>
<body>
    <button>点击发送</button>
    <script>
        // 获取元素对象
        const btns = document.querySelectorAll('button')
        // 因为在两个函数都要用到这个对象的实例，所以将它定义为全局变量
        let xhr = null
        // 标识变量
        let isSending = false //是否在发送ajax请求
        btns[0].addEventListener('click', () => {
            // 判断标识变量
            if(isSending){
                xhr.abort() //如果正在发送，则取消该请求，创建一个新的请求
            }
            xhr = new XMLHttpRequest()
            // 修改标识变量的值
            isSending = true
            xhr.open('GET', 'http://127.0.0.1:8000/delay')
            xhr.send()
            xhr.onreadystatechange = () => {
                if(xhr.readyState === 4){
                    // 修改标识变量
                    isSending = false
                }
            }
        })
    </script>
</body>
</html>
```

![image-20230221143037214](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221143037214.png)

**jQuery使用ajax**

​	![image-20230221145819379](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221145819379.png)

server端：

```javascript
// jQuery服务
app.all('/jquery-server', (request, response) => {
    // 设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin', '*')
    // response.send('Hello jQuery AJAX')
    const data = {name: 'czq'}
    // 解析JSON字符串
    response.send(JSON.stringify(data))
})
```

client端

此处第四个参数是响应体的格式

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jQuery发送ajax请求</title>
    <!-- 引入jQuery -->
    <script src="../../jQuery/jQuery3.6.3.js"></script>
    <!-- 最新版本的 Bootstrap 核心 CSS 文件 -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
    <!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"
        integrity="sha384-aJ21OjlMXNL5UyIl/XNwTMqvzeRMZH2w8c5cRVpzpU8Y5bApTppSuUkhZXN0VxHd"
        crossorigin="anonymous"></script>

</head>

<body>
    <div class="container">
        <h2 class="page-header">jQuery发送ajax请求</h2>
        <button class="btn btn-primary">GET</button>
        <button class="btn btn-danger">POST</button>
        <button class="btn btn-info">通用型方法AJAX</button>
    </div>
    <script>
        // get请求 看清楚其中的参数
        $('button').eq(0).click(() => {
            $.get('http://127.0.0.1:8000/jquery-server', {a: 100, b: 200}, function(data){
                console.log(data);
            }, 'json')
        })

        // post请求
        $('button').eq(1).click(() => {
            $.post('http://127.0.0.1:8000/jquery-server', {a: 100, b: 200}, function(data){
                console.log(data);
            }, 'json')
        })
        $('button').eq(2).click(() => {
            // 接受的参数为对象格式
            $.ajax({
                // url
                url: 'http://127.0.0.1:8000/delay',
                // 参数
                data: {a: 100, b: 200},
                // 请求类型
                type: 'GET',
                // 响应体结果
                dataType: 'json',
                // 成功的回调
                success: function(data){
                    console.log(data);
                }, 
                // 超时时间
                timeout: 2000,
                // 失败的回调
                error: function(){
                    console.log('出错啦！');
                }, 
                // 头信息
                headers: {
                    c: 300, 
                    d: 400
                },
            })
        })
    </script>
</body>

</html>
```

调试结果：

​	**GET请求**

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221150038759.png" alt="image-20230221150038759" style="zoom:50%;" />

![image-20230221150052108](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221150052108.png)

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221150106945.png" alt="image-20230221150106945" style="zoom:50%;" />

​	**POST请求**

![image-20230221150153991](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221150153991.png)

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221150205766.png" alt="image-20230221150205766" style="zoom:50%;" />

![image-20230221150214380](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221150214380.png)

**通用型方法AJAX**

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221151504366.png" alt="image-20230221151504366" style="zoom:50%;" />

![image-20230221151444603](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221151444603.png)

**axios发送AJAX请求**

​	官方github：https://github.com/axios/axios

​	可以在里面查询到文档

server端：

```javascript
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
```

client端：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>axios 发送AJAX请求</title>
    <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>
</head>

<body>
    <button>GET</button>
    <button>POST</button>
    <button>AJAX</button>
    <script>
        const btns = document.querySelectorAll('button')
        btns[0].addEventListener('click', () => {

            // // 配置baseURL
            // axios.defaults.baseURL = 'http://127.0.0.1:8000'

            // GET请求
            axios.get('http://127.0.0.1:8000/axios-server', {
                // url参数
                params: {
                    id: 100,
                    vip: 7
                },
                // 设置请求头信息
                headers: {
                    name: 'czq',
                    age: 21
                },
            }).then((response) => {
                // 数据的返回与处理 jQuery是回调函数，axios则是基于promise
                console.log(response);
            })
        })
        btns[1].addEventListener('click', () => {
            // POST请求
            axios.post('http://127.0.0.1:8000/axios-server', {
                    // 请求体
                    username: 'admin',
                    password: 'admin'
                } ,{
                    // url
                    params: {
                        id: 200,
                        vip: 9,
                    },
                    // 请求头信息
                    headers: {
                        name: 'czq',
                        age: 21
                    },
                }).then((response) => {
                    console.log(response.data);
                })
        })
        btns[2].addEventListener('click', () => {
            // axios函数发送请求 简便轻快
            axios({
                // 请求方法
                method: 'POST',
                // url
                url: 'http://127.0.0.1:8000/axios-server', 
                // url参数
                params: {
                    id: 300,
                    vip: 10,
                },
                // 头信息
                headers: {
                    a: 100, 
                    b: 200
                },
                // 请求体参数
                data: {
                    username: 'admin',
                    password: 'admin'
                }
            }).then((response) => {
                // 响应状态码
                console.log(response.status);
                // 响应状态字符串
                console.log(response.statusText);
                // 响应头信息
                console.log(response.headers);
                // 响应体
                console.log(response.data);
            })
        })
    </script>
</body>

</html>
```

调试结果

​	**GET**

![image-20230221154902153](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221154902153.png)

![image-20230221154920213](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221154920213.png)

​	**POST**

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221155023170.png" alt="image-20230221155023170" style="zoom:50%;" />

![image-20230221155034112](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221155034112.png)

**axios函数发送请求**

![image-20230221155950590](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221155950590.png)

![image-20230221160000065](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221160000065.png)

![image-20230221160011784](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221160011784.png)

**fetch方法发送请求**

​	fetch方法的作用域在全局，所以他任何时候都可调用

server端：

```javascript
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
```

​	client端：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>fetch发送AJAX请求</title>
</head>
<body>
    <button>AJAX请求</button>
    <script>
        const btn = document.querySelector('button')
        btn.addEventListener('click', () => {
            fetch('http://127.0.0.1:8000/fetch-server?vip=10', {
                // 请求方法
                method: 'POST',
                // 请求头
                headers: {
                    name: 'czq'
                },
                // 请求体
                body: 'username=admin&password:admin'
            }).then((response) => {
                // 无法直接获取响应体，需要使用里面的text()方法
                // return response.text();
                // 由于服务器返回的是json，则需要将其变为json()方法
                return response.json()
            }).then((response) => {
                console.log(response);
            })
        })
    </script>
</body>
</html>
```

​	调试结果

![image-20230221161603926](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221161603926.png)

![image-20230221161625519](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221161625519.png)

![image-20230221161634754](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221161634754.png)

## 2. 跨域

### 2.1 同源策略

​	同源策略（Same-Origin Policy）最早由Netscape公司提出，是浏览器的一种安全策略

​	同源：协议、域名、端口号必须完全相同

​	违背同源策略就是跨域

server端：

```js
const { response } = require('express')
const express = require('express')

const app = express()

app.get('/home', (request, response) => {
    // 响应一个页面
    response.sendFile(__dirname + '/index.html')
})

app.get('/data', (request, response) => {
    response.send('用户数据')
})

app.listen(9000, () => {
    console.log('服务已经启动');
})
```

client端：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>首页</title>
</head>
<body>
    <h1>逊</h1>
    <button>点击获取用户数据</button>
    <script>
        const btn = document.querySelector('button')
        btn.addEventListener('click', () => {
            const xhr = new XMLHttpRequest()
            // 因为这里是满足同源策略的，所以url可以简写
            xhr.open('GET', '/data')
            // 发送
            xhr.send()
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4) {
                    if (xhr.status >= 200 && xhr.status < 300) {
                        console.log(xhr.response);
                    }
                }
            }
        })
    </script>
</body>
</html>
```

调试结果

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221163426258.png" alt="image-20230221163426258" style="zoom:50%;" />

![image-20230221163453705](/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230221163453705.png)

### 2.2 如何解决跨域

### 2.2.1 JSONP

	1. JSONP是什么

​		JSONP（JSON with Padding），是一个非官方的跨域解决方案，纯粹凭借程序员的聪明才智开发出来的，只支持`get`请求

2. JSONP怎么工作的？

​		在网页上有一些标签天生具有跨域能力，比如：`ing`,`link`,`ifrme`,`script`

​		JSONP就是利用script标签的跨域能力来发送请求的



server端

```javascript
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
```

client端

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>案例</title>
</head>
<body>
    用户名：<input type="text" id="username">
    <script>
        // 获取input元素
        const input = document.querySelector('input')
        const p = document.querySelector('p')

        // 声明handle函数
        function handle(data) {
            input.style.border = 'solid 1px #f00'
            p.innerHTML = data.msg
        }
        // 绑定事件
        input.addEventListener('blur', function(){
            // 获取用户的输入值
            let username = this.value
            // 向服务端发送请求，检测用户名是否存在
            // 1.创建script标签
            const script = document.createElement('script')
            // 设置标签的src属性
            script.src = 'http://127.0.0.1:8000/check-username'
            // 3.将script插入到文档中
            document.body.appendChild(script)
        })
    </script>
</body>
</html>
```

### 3.2.2 CORS

https://developer.mozilla.org/zh-CN/docs/Web/HTTP/CORS

#### 3.2.1 CORS是什么？

​	CORS（Cross-Origin Resource Sharing），跨域资源共享。CORS是官方的跨域解决方案，它的特点是不需要客户端做任何特殊的操作，完全在服务器中进行处理，支持`get`和`post`请求。跨域资源共享标准新增了一组HTTP首部字段，允许服务器声明哪些源站通过浏览器有权访问哪些资源

#### 3.2.2 CORS怎么工作？

​	CORS是通过设置一个响应头来告诉服务器，该请求允许跨域，浏览器收到相应以后就会对响应放行

跟刚开始的例子放特殊的规则一样 主要是在server端

```javascript
    response.setHeader('Access-Control-Allow-Origin', '*')
```

