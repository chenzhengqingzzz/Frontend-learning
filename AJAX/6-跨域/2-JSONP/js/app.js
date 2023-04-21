const data = {
    name: 'czq'
}
// 处理数据
function handle(){
    // 获取result元素
    const result = document.querySelector('div')
    result.innerHTML = data.name
}

handle(data)