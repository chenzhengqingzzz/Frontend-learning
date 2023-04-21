function animate(obj, target, callback) {
    // console.log(callback); callback = function(){} 调用的时候 callback()

    // 给不同的元素指定了不同的定时器 避免了用var直接在内存开辟空间
    // 当我们不断点击按钮，这个元素的速度会越来越快，因为开启了太多的定时器
    // 解决方案：让我们元素只有一个定时器
    // 先清除以前的定时器，只保留当前的一个定时器执行
    clearInterval(obj.moveTimer)
    obj.moveTimer = setInterval(() => {
        // 步长值写到定时器里面
        // 把我们的步长值改为整数 不要出现小数的问题
        // var step = Math.ceil((target - obj.offsetLeft) / 10)
        // 错误的示范：取绝对值
        // var step = Math.ceil(Math.abs((target - obj.offsetLeft) / 10));
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // console.log(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.moveTimer)
            // 回调函数写到定时器结束里面
            if(callback){
                // 调用函数
                callback()
            }
        }
        // 把每次加1 这个步长值改为一个慢慢变小的值 步长公式：(目标值—现在的位置) / 10
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 30);
}