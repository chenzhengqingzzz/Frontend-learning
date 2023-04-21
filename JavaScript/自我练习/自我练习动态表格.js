var studentDatas =
    [{
        name: '陈正清',
        subject: 'JavaScript',
        role: '顾清寒',
        score: 90,
    },
    {
        name: '邱欣汝',
        subject: 'C',
        role: '小乔',
        score: 98,
    },
    {
        name: '李豪',
        subject: '数字电子技术',
        role: '季沧海',
        score: 95
    },
    {
        name: '王镜兆',
        subject: '永劫无间',
        role: '殷紫萍',
        score: '85'
    }]
    // 获取表格里面
var tbody = document.querySelector('tbody');
// 遍历数组长度以创建好信息单元行
for(var i = 0; i < studentDatas.length; i++){ //管行
    var informationTr = document.createElement('tr');
    tbody.appendChild(informationTr);
    // 遍历对象，通过key获取value并且创建好信息单元格
    for(k in studentDatas[i]){ //管列
        var informationTd = document.createElement('td');
        informationTr.appendChild(informationTd)
        informationTd.innerHTML = studentDatas[i][k]
    }
    // 在大的for循环设置四个删除单元格
    var deleteTd = document.createElement('td');
    deleteTd.innerHTML = '<a href="javascript:;">删除</a>';
    informationTr.appendChild(deleteTd);
}
// 给每个a标签绑定事件，应单独开行，写在里面的for循环则浪费性能
var deleteOperation = document.querySelectorAll('a');
for(var i = 0; i < deleteOperation.length; i++){
    // 伪数组，应该指定里面具体的元素
    deleteOperation[i].onclick = function(){
        // 删除当前所在的一整行，则是删除informationTr
        tbody.removeChild(this.parentNode.parentNode)
    }
    
}