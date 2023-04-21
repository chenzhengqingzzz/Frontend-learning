console.log('test');
alert('test')
var favDrink = prompt("你最喜欢什么饮料，可口？雪碧？还是百事或者其他？！");
alert('您输入的饮料是：' + favDrink)
switch(favDrink) {
  case "可口":
    alert("逊");
    break;
  case "百事":
    alert("可以我也喜欢");
    break;
  case "雪碧":
    alert("我之前喜欢");
    break;
  default:
    alert("我没听说过");
}