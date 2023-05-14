# JavaScript学习

```html
// js编写位置
<!DOCTYPE  html>
	<html>
    <head>
      <meta charset-"UTF-8">
      <title></title>
      <!--可以将js代码便携袋外部js文件中，然后通过script标签引入，写到外部文件中可以在不同页面中同时引用，也可以利用浏览器的缓存机制-->
      <!--script标签一旦用于引入外部文件了，就不能再编写代码了，即使编写了浏览器也会忽略，如果需要则可以再新建一个script标签用于编写内部代码-->
      <script type="text/javascript" src="script.js"></script>
      <script type="text/javascript">
      	alert("我是内部的js代码");
      </script>
    </head>
	</html>
```

## 上面例子讲到的外部文件

```javascript
alert("我是外部的js代码");
```





## 原型

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 
        1.函数的prototype属性
            * 每个函数都有一个prototype属性，它默认指向一个Object空对象(即称为原型对象)
            * 原型对象中有一个属性constructor，它指向函数对象
        2.给原型对象添加属性（一般都是方法）
            * 作用：函数的所有实例对象自动拥有原型中的属性（方法）

     -->
     <script type="text/javascript">
        console.log(Date.prototype, typeof Date.prototype);
 
        function fun() {

        }
        fun.prototype.test = function () {
            console.log('test()');
        }
        console.log(fun.prototype);
     </script>
</body>
</html>
```



## 显式原型和隐式原型 

### 内存图

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221009174126851.png" alt="image-20221009174126851" />

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <!-- 
        总结：
            * 函数的prototype属性：在定义函数时自动添加的，默认值是一个空的Object对象
            * 对象的__proto__属性：创建对象时自动添加的，默认值为构造函数的prototype属性值
            * 程序员能直接操作显式原型，但不能直接操作隐式原型（ES6之前） 
     -->

     <script type="text/javascript">
        //1.每个函数function都有一个prototype，即显式原型（属性），默认指向一个空的Object对象
        //定义构造函数
        function Fn() { //内部语句：this.prototype = {}
            
        }
        console.log(Fn.prototype);
        //2.每个实例对象都有一个__prototype__，可称为隐式原型（属性）
        //创建实例对象
        var fn = new Fn() //内部语句：this.__proto__ = Fn.prototype
        console.log(fn.__proto__);
        //3.对象的隐式原型的值为其对应构造函数的显式原型的值
        console.log(fn.__proto__ === Fn.prototype);
        //给原型添加方法
        Fn.prototype.test = function(){
            console.log("test()");
        }
        //通过实例对象调用原型的方法
        fn.__proto__.test()
     </script>
</body>
</html>
```

## 原型链

```

```

# 此时开始基于黑马教程编纂笔记

## 1. 初识JavaScript

### 1.4 浏览器执行JS简介

​	浏览器分成两部分：渲染引擎和JS引擎

	* 渲染引擎：用来解析HTML与CSS，俗称内核，比如 chrome 浏览器的 blink ，老版本的 webkit
	* 也称为 JS 解释器。 用来读取网页中的JavaScript代码，对其处理后运行，比如 chrome 浏览器的 V8

​	浏览器本身并不会执行JS代码，而是通过内置 JavaScript 引擎(解释器) 来执行 JS 代码 。JS 引擎执行代码时逐行解释每一句源码（转换为机器语言），然后由计算机去执行，所以JavaScript 语言归为脚本语言，会逐行解释执行。

![在这里插入图片描述](https://img-blog.csdnimg.cn/6626246651a048ab94cff1c8afe62fc2.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center)

### 1.5 JS组成

![JS组成图](https://img-blog.csdnimg.cn/a9331f588aa54d43b22ae207249f0e1f.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0F1Z2Vuc3Rlcm5fUVhM,size_16,color_FFFFFF,t_70#pic_center)

#### 1.5.1 DOM——文档对象模型

​	**文档对象模型**（Document Object Model  简称DOM），是W3C组织推荐的处理可扩展标记语言的**标准编程接口**

​	通过DOM提供的接口可以对页面上的各种元素进行操作（大小、位置、颜色等）

#### 1.5.2 BOM——浏览器对象模型

​	浏览器对象模型（Browser Object Model，简称BOM）是指浏览器对象模型，它提供了独立于内容的、可以与浏览器窗口进行互动的对象结构。通过BOM可以操作浏览器窗口，比如弹出框、控制浏览器跳转、获取分辨率等



## 数组

### 1. 数组的概念

​	问：之前学习的变量，只能存储一个值。如果我们想存储班级中所有学生的姓名，那么该如何存储呢？

​	答：可以使用数组（Array）。数组可以把一组相关的数据一起存放，并提供方便的访问（获取方式）

​	问：什么是数组呢？

​	答：数组是指**一组数据的集合**，其中每个数据被称作**元素**，在数组中可以**存放任意类型的元素**。数组是一种将**一组数据存储在单个变量名下**的优雅方式

```javascript
//普通变量一次智能存储一个值
var num = 10;
//数组一次可以存储多个值
var arr = [1, 2, 3, 4, 5];
```

### 2. 创建数组

#### 2.1 数组的创建方式

​	JavaScript中创建数组有两种方式：

		* 利用new关键字创建数组
		* 利用数组字面量创建数组

#### 2.2 利用new关键字创建数组

```javascript
var arr = new Array();//创建一个新的空数组
```

#### 2.3 利用数组字面量创建数组

```javascript
//1. 使用数组字面量创建新的空数组
var arr = [];
//2. 使用数组字面量方式创建带初始值的数组
var arr = ['abc', 'def', 'xyz'];
```

#### 2.4 数组元素的类型

​	数组中可以存放**任意类型**的数据，例如字符串，数字，布尔值等

```javascript
var arrStus = ['小白', 12, true, 29.9]
```

### 3. 获取数组元素

#### 3.1 数组的索引

​	**索引（下标）**：用来访问数组元素的序号（数组下标从0开始）

```javascript
var arr = ['小白', '小黑', '大黄', '佩奇'];
//索引号：		0				1				2			3
```

​	数组可以通过**索引**来访问、设置、修改对应的数组元素，我们可以通过“**数组名[索引]**”的形式来获取数组中的元素

​	这里的**访问**就是获取得到的意思

```javascript
//定义数组
var arrStus = [1, 2, 3];
//获取数组中的第二个元素
console.log(arrStus[1]);
```

### 4. 遍历数组

​	问：数组中的每一项我们怎么取出来？

​	答：可以通过"**数组名 [索引号]**"的方式一项项取出来

```javascript
var arr = ['red', 'green', 'blue'];
console.log(arr[0]);	//red
console.log(arr[1]);	//green
console.log(arr[2]);	//blue
```

​	问：怎么把数组里面的元素全部取出来？

​	**规律：**

​		从代码中我们可以发现，从数组中取出每一个元素时，代码是重复的，有所不一样的是**索引值在递增**，可以用**循环**来解决

​		**遍历：**就是把数组中的每个元素从头到尾都访问一次（类似于上课学生点名）

### 5. 数组中新增元素

​	可以通过修改length长度以及索引号增加数组元素

#### 5.1 通过修改length长度新增数组元素

	* 可以通过修改length长度来实现数组扩容的目的
	* length属性是可读写的

```javascript
var arr = ['red', 'green', 'blue', 'pink'];
arr.length = 7;
console.log(arr);
console.log(arr[4]);//undefined
console.log(arr[5]);//undefined
console.log(arr[6]);//undefined
```

​	其中索引号4，5，6的空间没有给值，就是声明变量未给值，默认值就是undefined

#### 5.2 通过修改数组索引新增数组元素

	* 可以通过修改数组索引的方式追加数组元素
	* 不能直接给数组名赋值，否则会覆盖掉以前的数据

```javascript
var arr = ['red', 'green', 'blue', 'pink'];
arr[4] = 'hotpink';
console.log(arr)
```

​	这种方式也是我们最常用的一种方式

### 6. 翻转数组

​	个人理解：直接用它reserve()方法

```javascript
var arr5 = [1, 2, 3, 4, 5]
var newArr5 = arr5.reverse()
console.log(newArr5);
```

​	输出结果如下：

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221110150330645.png" alt="image-20221110150330645" />

### 7. 冒泡排序

​	冒泡排序：是一种算法，把一系列的数据按照一定的顺序进行排列显示（从小到大或从大到小）

​	例如，我们可以将数组`[5, 4, 3, 2, 1]`中的元素按照从小到大的顺序排序，输出：`[1, 2, 3, 4, 5]`

​	冒泡排序是一种简单的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。走访数列的工作是重复地进行直到没有再需要交换，也就是说该数列已经排序完成。这个算法的名字由来是因为越小的元素会经由交换慢慢“浮”到数列的顶端。



## 函数

### 1. 函数的概念

​	在JavaScript里面，可能会定义非常多相同或者功能相似的代码，这些代码可能需要大量重复使用

​	虽然for循环语句也能实现一些简单的重复操作，但是比较具有局限性，此时我们就可以使用**JavaScript中的函数**

*函数：**就是封装了一段**可被重复调用执行的代码块**，通过此代码块可以实现大量代码的重复使用

### 3. 函数的参数

#### 3.1 形参和实参

```javascript
function 函数名(形参1, 形参2){ //在声明函数的小括号里面是 形参 （形式上的参数）
  函数体;
}
函数名(实参1, 实参2); //在函数调用的小括号里面是 实参 （实际的参数）
```

​	在**声明函数时**，可以在函数名称后面的小括号中添加一些参数，这些参数被称为**形参**，而在调用该函数时，同样也需要传递相应的函数，这些参数被称为**实参**

| 参数 |                           说明                           |
| :--: | :------------------------------------------------------: |
| 形参 | 形式上的参数 函数定义的时候传递的参数 当前并不知道是什么 |
| 实参 | 实际上的参数 函数调用的时候传递的参数 实参是传递给形参的 |

#### 3.3 函数形参和实参个数不匹配问题

|       形参个数       |                说明                |
| :------------------: | :--------------------------------: |
| 实参个数等于形参个数 |            输出正确结果            |
| 实参个数多余形参个数 |          只取到形参的个数          |
| 实参个数小于形参个数 | 多的形参定义为undefined，结果为NaN |

```javascript
function sum(num1, num2){
  console.log(num1 + num2);
}
sum(100, 200);	//形参和实参个数相等，输出正确结果
sum(100, 400, 500, 700);	//实参个数多余形参，只取到形参的个数
sum(200);	//实参个数小于形参，多的形参定义为undefined，结果为NaN
```

### 4. 函数的返回值

#### 4.1 return语句

​	有的时候，我们会希望函数将值返回给调用者，此时通过使用return语句就可以实现 

#### 4.2 return终止函数

​	函数遇到return就停止执行

#### 4.3 return的返回值

​	**return只能返回一个值**。如果用逗号隔开多个值，则以最后一个为准

#### 4.5 break, continue, return的区别

	* break：结束当前的循环体（如for、while）
	* continue：跳出本次循环，继续执行下次循环（如for、while）
	* return：不仅可以退出循环，还能够返回return语句中的值，还可以结束当前的函数体内的代码

### 5. arguments的使用

​	当我们不确定有多少个参数传递的时候，可以用**arguments**来获取。在JavaScript中，arguments实际上它是当前函数的一个**内置对象**。所有函数都内置了一个arguments对象，arguments对象中**存储了传递的所有实参**，它是一个伪数组。

### 6. 函数的两种声明方式

```javascript
//函数的两种声明方式
//1. 利用函数关键字自定义函数（命名函数）
function fn(形参){
  函数体;
}
fn();

//2. 函数表达式
var fn = function(形参){
  函数体
};
fn();
//1. fn是变量名，不是函数名
//2. 函数表达式声明方式跟声明变量差不多，只不过变量里面存的是值，而函数表达式里面存的是函数
```

## JavaScript作用域

### 1. 作用域

#### 1.1 作用域概述

​	通常来说，一段程序代码中所用到的名字并不总是有效和可用的，而先定这个名字的**可用性的代码范围**就是这个名字的**作用域**。作用域的使用提高了程序逻辑的局部性，增强了程序的可靠性，减少了名字的冲突

​	1. JavaScript作用域：就是代码名字（变量）在某个范围内起作用和效果 目的是为了提高程序的可靠性更重要的是减少命名冲突

​	2. js的作用域（es6之前）： 全局作用域		局部作用域

​		全局作用域：整个script标签 或者是一个单独的js文件

​		局部作用域（函数作用域）：在函数内部就是局部作用域 这个代码的名字只在函数内部起作用和效果

### 2. 变量的作用域

#### 2.1 变量作用域的分类

​	在JavaScript中，根据作用域的不同，变量可以分为两种：

		* 全局变量：在全局作用域下的变量 在全局下都可以使用 注意：如果在函数内部没有声明直接复制的变量也属于全局变量
		* 局部变量： 在局部作用域下的变量 后者在函数内部的变量就是 局部变量 注意：函数的形参也可以看做是局部变量

**从执行效率来看全局变量和局部变量**

* 全局变量只有浏览器关闭的时候才会销毁，比较占内存资源
* 局部变量 当我们程序执行完毕就会销毁，比较节约内存资源

### 3. 作用域链

​	作用域链：内部函数访问外部函数的变量，采取的是链式查找的方式来决定取哪个值 这种结构我们称为作用域链 就近原则

## JavaScript对象

### 2. 创建对象的三种方式

​	在JavaScript中，现阶段我们可以采用三种方式创建对象（object）

	* 利用**字面量**创建对象
	* 利用**new Object**创建对象
	* 利用**构造函数**创建对象

#### 2.1 利用字面量创建对象

​	**对象字面量：**就是花括号`{}`里面包含了表达这个具体事物（对象）的属性和方法

```javascript
var obj = {
  username: '张三',
  age: 18,
  sex: '男',
  sayHi: function(){
    console.log('hi~')
  }
}
```

​	（1） 里面的属性或者方法我们采取键值对的形式 键 属性名 : 值 属性值

​	（2） 多个属性或者方法中间用逗号隔开

​	（3） 方法冒号后面跟的是一个匿名函数

​	**使用对象：**

​		（1） 调用对象的属性 我们采取`对象名.属性名` 这个`.`我们理解为“的”

```javascript
console.log(obj.username);
```

​		（2） 调用属性还有一种方法 对象名['属性名']

```javascript
console.log(obj.username);
```

​		（3）调用对象的方法 sayHi 对象名.方法名() 千万别忘记添加小括号

```javascript
obj.sayHi();
```

#### 2.2 利用new Object创建对象

​	（1） 我们是利用登号复制的方法 添加对象的属性和方法

​	（2） 每个属性和方法之间用`;`结束

```javascript
        // 利用new Object 创建对象
        var obj = new Object(); // 创建了一个空对象
        obj.username = '张三';
        obj.age = 18;
        obj.sex = '男'
        obj.sayHi = function () {
            console.log('hi~');
        }
        console.log(obj.username);
        console.log(obj.age);
        console.log(obj['sex']);
        obj.sayHi()
```

#### 2.3 利用构造函数创建对象

​	**我们为什么要使用构造函数？**

​		就是因为我们前面两种创建对象的方式一次只能创建一个对象，里面很多的属性和方法是大量相同的，我们只能复制

​		因此我们可以利用函数的方法重复这些相同的代码，我们把这个函数称为 `构造函数`

​		构造函数 就是把我们对象里面一些相同的属性和方法抽象出来封装到函数里面，它是一种特殊的函数，主要用来初始化对象，即为对象成员变量赋初始值，它总与new运算符一起使用。我们可以把对象中一些公共的属性和方法抽取出来，然后封装到这个函数里面

```javascript
//语法格式
function 构造函数名字(){
		this.属性 = 值；
		this.方法 = function(){
			
		}
}
//调用构造函数
new 构造函数名();

//示例
//我们利用构造函数需要创建四大天王的对象 相同的属性：名字 年龄 性别 相同的方法：唱歌
function Star(uname, age, sex) { //传的形参将会参与赋值
  	//这里的this可以理解为‘当前的’，即写他们的共同点
  	this.name = uname; //注意这个uname
  	this.age = age;
  	this.sex = sex
  	this.sing = function(songName){
      	console.log(this.name + '正在唱：' + songName) // 注意这里的name 不能改成uname
    }
}
var ldh = new Star('刘德华', 18, '男'); //调用函数返回的是一个对象
ldh.sing('冰雨');

var zxy = new Star('张学友', 19, '男');
console.log(zxy)
zxy.sing('李香兰');

//1. 构造函数名字首字母要大写
//2. 我们构造函数不需要return就可以返回结果
//3. 我们调用构造函数必须使用 new 这个关键字
//4. 我们只要 new Star() 调用函数就创建了一个对象 ldh {}
//5. 我们的属性和方法面前必须添加 this
```

​	**输出结果：**

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221115194227747.png" alt="image-20221115194227747" />

#### 2.4 构造函数和对象

	* 构造函数： 如Stars()， 抽象了对象的公共部分，封装到了函数里面，它泛指某一大类(class)
	* 创建对象：如new Stars()，特指某一个，通过new关键字创建对象的过程 我们也成为对象的实例化

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221115195319156.png" alt="image-20221115195319156" />

​	

```javascript
//构造函数和对象
//1. 构造函数 明星 泛指的某一大类 它类似于 java语言里面的 类(class)
function Star(uname){
  this.name = uname;
  this.age = age;
  this.sex = sex;
  this.sing = function(songName) {
    console.log(this.name + '正在唱：' + songName)
  }
}
//2. 对象 特指 是一个具体的事物 刘德华 == Star {name: '刘德华', age: 18, sex: '男', sing: ƒ}
var ldh = new Star('刘德华', 18, '男');
console.log(ldh);
//3. 利用构造函数创建对象的过程 我们也称为对象的实例化
```

#### 2.5 new关键字执行过程

​	new在执行时会做四件事情：

​		1. 占内存中创建一个新的空对象

​		2. 让this指向这个新的对象

​		3. 执行构造函数里面的代码，给这个新对象添加属性和方法

​		4. 返回这个新对象（所以构造函数里面不需要return）

#### 2.6 遍历对象

​	对象和数组一样可以存储数据 则会有遍历其的方法

```javascript
//for in 遍历对象
for(变量名 in 对象名){
  console.log(变量名); //遍历对象产生的数据让变量来接
}
```

​	**示例：**

```javascript
        //遍历对象
        var obj = {
            name: '张三',
            age: 18,
            sex: '男'
        }
        // for in 遍历对象
        for (const key in obj) {
            console.log(key);// 这个输出得到的是属性名
            console.log(obj[key]); //这个输出得到的是属性值
        }
```

​	**输出结果：**

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221116184027956.png" alt="image-20221116184027956" />

### 小结：

		* 对象可以让代码结构更清晰
		* 对象是一个复杂的数据类型object
		* 本质：独享就是一组无序的相关属性和方法的集合
		* 构造函数泛指某一大类，比如苹果，不管是红色苹果还是绿色苹果都统称为苹果
		* 对象的示例特指一个事物，比如这个苹果，正在写代码的czq等
		* for...in语句用于对对象的属性进行循环操作

## JavaScript内置对象

### 1. 内置对象

	* JavaScript中的对象分为三种：自定义对象、内置对象、浏览器对象
	* 前两种独享是JS基础内容，属于ECMAScript，第三个浏览器对象属于我们JS独有的，在api中会有
	* **内置对象**就是指JS语言自带的一些对象，这些对象供开发者使用，并提供了一些常用的伙食基本而必要的功能（属性和方法）

### 2. 查文档

​	学习一个内置对象的使用，只要学会其常用成员的使用即可，我们可以通过查文档学习，可以通过MDN/W3C来查询

#### 2.2 如何学习对象中的方法

	* 查阅该方法的功能
	* 查看里面参数的意义和类型
	* 查看返回值的意义和类型
	* 通过demo进行测试

### 3. Math对象

​	`Math数学对象`不是一个构造函数，它里面所有的属性与方法都是静态的 所以我们不需要new来调用 而是直接使用里面的属性和方法即可

#### 3.1 封装自己的Math对象

```javascript
        // 利用对象封装自己的数学对象 里面有 PI 最大值和最小值
        const myMath = {
            PI: 3.1415926,
            max: function(){
                // 接收传递的所有实参
                var max = arguments[0]
                for(var i = 0; i < arguments.length; i++){
                    if(arguments[i] > max){
                        max = arguments[i];
                    }
                }
                return max;
            },
            min: function(){
                var min = arguments[0];
                for(var i = 0; i < arguments.length; i++){
                    if (arguments[i] < min) {
                        min = arguments[i];
                    }
                }
                return min
            }
        }
```

#### 3.2 Math概述

​	Math对象不是构造函数，它具有数学常数核函数的属性和方法。和数学相关的运算（求绝对值、取整、最大值等）可以使用Math中的成员

```javascript
Math.PI									//圆周率
Math.floor()						//向下取整
Math.ceil()							//向上取整
Math.round()						//四舍五入 其他数字都是四舍五入，但是x.5很特殊，它往大了取
Math.abs()							//绝对值
Math.max()/Math.min()		//求最大和最小值
```

#### 3.3 随机数方法random()

	* Math对象随机数方法 random()返回一个随机的小数 其范围`[0,1)`
	* 这个方法里不需要形参
	* 我们想要得到两个数之间的随机整数 并且包含这两个整数 算法：

```javascript
//这个例子返回了一个在指定值之间的随机数。这个值不小于 min（有可能等于），并且小于（不等于）max
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
```

###  4. 日期对象

#### 4.1 日期概述

​	`Date()` 日期对象它和Math()对象不一样 是一个构造函数 必须使用`new`进行实例化来调用

​	Date实例用来处理日期和时间

#### 4.2 Date()方法的使用

 1. 获取当前时间必须实例化

    ```javascript
    var now = new Date();
    console.log(now);
    ```

	2. Date()构造函数的参数

​	如果括号里有时间，就返回参数里面的时间。例如日期格式字符串为'2019-5-1'，可以写成`new Date('2019-5-1')`或者`new Date(2019/5/1)`

#### 4.3 日期格式化

​	我们想要`2019-8-8 8:8:8:8格式`的日期，要怎么办？

​	需要获取日期指定的部分，所以我们要手动得到这种格式

|     方法名      |            说明            |        代码         |
| :-------------: | :------------------------: | :-----------------: |
| `getFullYear()` |          获取当年          | dObj.getFullYears() |
|  `getMonth()`   |       获取当月(0~11)       |   dObj.getMonth()   |
|   `getDate()`   |        获取当天日期        |   dObj.getDate()    |
|   `getDay()`    | 获取星期几（周日0到周六6） |    dObj.getDay()    |
|  `getHours()`   |        获取当前小时        |   dObj.getHours()   |
| `getMinutes()`  |        获取当前分钟        |  dObj.getMinutes()  |
| `getSeconds()`  |        获取当前秒钟        |  dObj.getSeconds()  |

#### 4.4 获取日期的总的毫秒形式

​	Date对象上基于1970年1月1日（世界标准时间）起的毫秒数，也就是说距离1970年1月1过了多少毫秒数（时间戳）

​	1. 通过 `value of()` `getTime()`

```javascript
var date = new Date();
console.log(date.valueOf());
console.log(date.getTime());
```

​	2. 简单的写法（开发中的常用写法）

```javascript
var date1 = +new Date(); // +new Date() 不传参返回的是当前时间减去1970的毫秒数
var date1 = +new Date('2001-10-1 8:8:8') //输出结果固定为'1001894888000' 这表明括号里面传参数就代表返回参数的时间减去1970-1-1所得到的时间戳
console.log(date1);
```

​	3. H5新增的 获得总的毫秒数

```javascript
console.log(Date.now()); // 注意 这个now方法里面无法传参 建议用第二种能够传参的方法
```

## 倒计时效果

​	1. 核心算法：输入的时间减去现在的时间就是剩余的时间，即倒计时。但是不能拿着时分秒相减，比如05分减去25分，结果为负数

​	2. 用时间戳来做。用户输入时间总的毫秒数减去现在时间的总的毫秒数，得到的就是剩余时间的毫秒数

​	3. 把剩余时间总的毫秒数转换为天、时、分、秒（时间戳转换为时分秒）

​	转换公式如下：

```javascript
d = parseInt(总秒数 / 60 / 60 / 24); //计算天数
h = parseInt(总秒数 / 60 / 60 % 24); //计算小时
m = parseInt(总秒数 / 60 % 60); //计算分数
s = parseInt(总秒数 % 60); //计算当前秒数
seconds = 时间戳 / 1000; // 由时间戳转换为秒数
```

### 5. 数组对象

#### 5.1 数组对象的创建

​	创建数组对象的两种方式

		* 字面量方式

```javascript
var arr = [1, 2, 3];
console.log(arr[0]);
```

  * new Array()

```javascript
var arr1 = new Array() //创建了一个新的数组元素
var arr1 = new Array(2) //这个2表示数组的长度为2 里面有2个空的数组元素
var arr1 = new Array(2, 3) //等价于[2, 3] 这样写表示 里面有2个数组元素 是2和3
```

#### 5.2 检测是否为数组

```javascript
//翻转数组算法
function reverse(){
	var newArr = [];
  for(var i = arr.length - 1; i>=0; i++){
    newArr[newArr.length] = arr[i];
  }
  return newArr;
}
console.log(reserve([1, 2, 3]));// [3, 2, 1]
console.log(reserve(1, 2, 3));//[]
//至此，需要加一个检查是否为数组的方法来满足需求
// (1) instance of 运算符 它可以用来检测是否为数组
var arr = [];
console.log(arr instanceof Array) //true
var obj = {};
console.log(obj instanceof Array) //false

```

 1. instanceof运算符可以用来检测是否为数组

    例如

    ```javascript
    var arr = [];
    console.log(arr instanceof Array) //true
    var obj = {};
    console.log(obj instanceof Array) //false
    ```

    则上述例子外面包裹一个if条件判断便可实现

    ```javascript
    function reverse(arr){
    	if(arr instanceof Array){
        var newArr = [];
        //跟上具体算法
        for(var i = arr.length - 1; i >= 0; i--){
          newArr[newArr.length] = arr[i];
        }
        return newArr;
      }else{
        return '这个参数要求必须是数组格式[1, 2, 3]'
      }
    }
    ```

2. Array.isArray(参数)

```javascript
console.log(Array.isArray([1, 2, 3])); //true
console.log(Array.isArray({'a', 'b', 'c'})); //true
```

#### 5.3 添加删除数组的方法

|        方法名        |                          说明                           |        返回值        |
| :------------------: | :-----------------------------------------------------: | :------------------: |
|  push(参数1......)   |         末尾添加一个或多个元素，注意修改原数组          |     返回新的长度     |
|        pop()         | 删除数组最后一个元素，把数组长度－1，无参数，修改原数组 | 返回它删除的元素的值 |
| unshift(参数1......) |     向数组的开头添加一个或更多元素，注意修改原数组      |     返回新的长度     |
|       shift()        |  删除数组的第一个元素，数组长度－1 无参数，修改原数组   |  返回第一个元素的值  |

	1. push()

```javascript
//1. push() 在我们数组的末尾 添加一个或多个数组元素 push 推
var arr = [1, 2, 3];
console.log(arr.push(4, 'abc')); //返回push之后的数组长度5
console.log(arr); //返回数组里的元素情况 [1, 2, 3, 4, 'abc']
// (1) push()是可以给数组追加新的元素
// (2) push()的参数直接写数组元素就可以了
// (3) push完毕之后返回的结果是新数组长度
// (4) 原数组也会发生变化
```

2. unshift()

```javascript
//2. unshift() 在我们数组的开头 添加一个或者多个元素
console.log(arr.unshift('test')); //返回更新后的数组长度 6
console.log(arr); //['test', 1, 2, 3, 4, 'abc']
// (1) unshift()是可以在数组的前面追加新的元素
// (2) unshift()的参数直接写数组元素就可以了
// (3) unshift完毕之后返回的结果是新数组长度
// (4) 原数组也会发生变化
```

3. pop()

```javascript
//3. pop() 它可以删除数组的最后一个元素
console.log(arr.pop()); //返回值为被删除的那个数组元素 所以这里应该输出'abc'
console.log(arr); //['test', 1, 2, 3, 4]
// (1) pop()是可以在删除数组的最后一个元素 记住一次只能删除一次元素
// (2) pop()没有参数
// (3) pop完毕之后返回的结果是删除的那个元素
// (4) 原数组也会发生变化
```

4. shift()

```javascript
// 4. shift() 它可以删除数组的第一个元素
console.log(arr.shift());//返回值为被删除的那个数组元素 所以这里应该输出'test'
console.log(arr);//[1, 2, 3, 4]
// (1) shift()是可以删除数组的第一个元素 记住一次只能删除一次元素
// (2) shift()没有参数
// (3) shift完毕之后返回的结果是阐述的那个元素
// (4) 原数组也会发生变化
```

#### 5.4 数组排序

|   方法名    |             说明             |          是否修改原数组           |
| :---------: | :--------------------------: | :-------------------------------: |
| `reverse()` | 颠倒数组中元素的顺序，无参数 | 该方法会改变原来的数组 返回新数组 |
|  `sort()`   |     对数组的元素进行排序     | 该方法会改变原来的数组 返回新数组 |

**注意，直接用sort()方法则是字典排序，要想实现我们常用的排序效果，则需要这样做：**

```javascript
var arr = [13, 4, 77, 1, 7];
arr.sort((a, b) => {
  return a - b; // 升序的顺序排列
  return b - a; // 降序的顺序排列
})
console.log(arr); //满足需求
```

#### 5.5 数组索引方法

|     方法名      |              说明              |               返回值               |
| :-------------: | :----------------------------: | :--------------------------------: |
|   `indexOf()`   | 数组中查找给定元素的第一个索引 | 如果存在则返回索引号，否则返回`-1` |
| `lastIndexOf()` |     在数组中的最后一个索引     | 如果存在则返回索引号，否则返回`-1` |

```javascript
        //返回数组元素索引号方法 
        //它只返回第一个满足条件的索引号
        //如果在数组里面找不到元素，则返回-1
        var arr = ['red', 'green', 'blue', 'pink']
        console.log(arr.indexOf('blue'));
        console.log(arr.lastIndexOf('blue'))
```

## 数组去重案例

​	1. 目标：把旧数组里面不重复的元素选取出来放到新数组中，重复的元素只保留一个，放到新数组中去重

​	2. 核心算法：我们遍历数组，然后那这就数组元素胡去查询新数组，如果该元素在新数组里面没有出现过，我们就添加，否则就不添加

 3. 我们怎么知道该元素有没有存在呢？利用新数组.indexOf(数组元素) 如果返回值是-1，就说明新数组里面没有该元素

    ```javascript
            var arr = ['c', 'a', 'z', 'a', 'x', 'a', 'a', 'c', 'b'];
            var newArr = [];
            for(var i = 0; i < arr.length; i++){
                if(newArr.indexOf(arr[i]) == -1){
                    newArr.push(arr[i])
                } 
            }
            console.log(arr); //['c', 'a', 'z', 'a', 'x', 'a', 'a', 'c', 'b']
            console.log(newArr); //['c', 'a', 'z', 'x', 'b']
    ```

    将其封装成自己的函数unique():

    ```javascript
            var arr = ['c', 'a', 'z', 'a', 'x', 'a', 'a', 'c', 'b'];
            function unique(arr) {
                var newArr = [];
                for (var i = 0; i < arr.length; i++) {
                    if (newArr.indexOf(arr[i]) == -1) {
                        newArr.push(arr[i])
                    }
                }
                return newArr
            }
            console.log(arr);
            console.log(unique(['c', 'a', 'z', 'a', 'x', 'a', 'a', 'c', 'b'])) //['c', 'a', 'z', 'x', 'b']
    ```

#### 5.6 数组转换为字符串

|     方法名     |                说明                |     返回值     |
| :------------: | :--------------------------------: | :------------: |
|  `toString()`  | 把数组转换为字符串，逗号分隔每一项 | 返回一个字符串 |
| `join(分隔符)` | 把数组中的所有元素转换为一个字符串 | 返回一个字符串 |

	1. toString() 将我们的数组转化为字符串

```javascript
var arr = [1, 2, 3];
console.log(arr.toString()); //1,2,3
```

	2. join(分隔符)

```javascript
var arr = ['green', 'blue', 'pink'];
console.log(arr.join()); //不传参默认用逗号分隔 green,blue,pink
console.log(arr.join(':')); //green:blue:pink
```

### 6. 字符串对象

#### 6.1 基本包装类型

看个例子：

```javascript
var str = 'andy';
console.log(str.length); //4
```

​	思考：`对象`才有`属性和方法`, `复杂数据类型`才有`属性和方法` ，上面的这种简单数据类型为什么会有length属性呢？

​	基本包装类型：就是把`简单数据类型`包装成为了`复杂数据类型`

​	底层实现：

```javascript
//1. 把简单数据类型包装成为复杂数据类型
var temp = new String('andy');
//2. 把临时变量得知给了str
str = temp;
//3. 销毁这个临时变量
temp = null;
```

​	为了方便操作基本数据类型，JavaScript还提供了三个特殊的引用类型：String、Number和Boolean

​	**基本包装类型**就是把简单数据类型包装成为复杂数据类型，这样基本数据类型就有了属性和方法

#### 6.2 字符串的不可变性

​	指的是里面的值不可变，虽然看上去可以改变内容，但其实是地址变了，内存中新开辟了一个内存空间

```javascript
var str = 'abc';
str = 'hello';
//当重新给str赋值的时候，常量'abc'不会被修改，依然在内存中
//重新给字符串赋值，会重新在内存中开辟空间，这个特点就是字符串的不可变性
var str = '';
for (var i = 0; i < 1000000; i++){
  str += i;
}
console.log(str);// 这个结果需要花费大量时间来显示，因为需要不断的开辟新的内存空间
```

#### 6.3 根据字符返回位置

​	字符串中所有的方法，都不会修改字符串本身（字符串是不可变的），操作完成会返回一个新的字符串

|                方法名                 |                             说明                             |
| :-----------------------------------: | :----------------------------------------------------------: |
| `indexOf('要查找的字符', 开始的位置)` | 返回指定内容中原字符串中的位置，如果找不到就返回-1，开始的位置是index索引号 |
|            `lastIndexOf()`            |                 从后往前找，只找第一个匹配的                 |

```javascript
//字符串对象 根据字符返回位置
var str = '改革春风吹满地,春';
console.log(str.indexOf('春'));//2
console.log(str.indexOf('春', 3)); //从索引号为3的位置往后查找 8
```

```javascript
        //查找字符串'abcoefoxyozzopp'中所有o出现的位置以及次数
        // 1.先找第一个o出现的位置
        // 2. 只要indexOf返回的结果不是-1就继续往后查找
        // 3. 因为indexOf只能查找到第一个，所以后面的查找，利用第二个参数，当前索引加1，从而继续查找
        var str1 = 'abcoefoxyozzopp';
        var index = str1.indexOf('o');
        var num = 0;
        while(index !== -1){
            console.log(index);
            num++;
            index = str1.indexOf('o', index +1)
        }
```

#### 6.4 根据位置返回字符（重点）

|       方法名        |                    说明                    |              使用              |
| :-----------------: | :----------------------------------------: | :----------------------------: |
|   `charAt(index)`   | 返回指定位置的字符（index字符串的索引号）  |         str.charAt(0)          |
| `charCodeAt(index)` | 获取指定位置处字符的ASCII码（index索引号） |       str.charCodeAt(0)        |
|    `str[index]`     |             获取指定位置处字符             | HTML5，IE8+支持 和charAt()等效 |

 1. charAt(index) 根据位置返回字符

    ```javascript
    var str = 'andy';
    console.loh(str.charAt(3)); //y
    ```

2. charCodeAt(index) 返回相应索引号的字符ASCII码值 目的：判断用户按下了哪个键

   ```javascript
   var str = 'andy';
   console.log(str.charCodeAt(0)); //97
   ```

3. str[index] H5新增的

   ```javascript
   var str = 'andy';
   console.log(str[0]);
   ```



**案例：返回字符位置**

​	判断一个字符串`'abcoefoxyozzopp'`中出现次数最多的字符并统计其次数

​	要做这个案例我们首先就要了解判断对象key的一个知识点

```javascript
//有一个对象
var o = {
	age: 18;
}
if(o['age']){
  console.log('里面有该属性');
}else{
  console.log('里面没有该属性')
}
//输出结果为‘里面有该属性’
```

​	则此案例的核心算法为：

​		① 利用`charAt()`遍历这个字符串

​		② 把每个字符都存储给对象，如果对象没有该属性，就为1

​		③ 遍历对象，得到最大值和该字符

```javascript
//利用charAt()遍历这个字符串
//把每个字符都存储给对象，如果对象没有该属性，则为1，如果存在就加一
//遍历对象，得到最大值和该字符
var str = 'abcoefoxyozzopp';
var o = {};
//遍历字符串
for(var i = 0; i < str.length; i++){
  var chars = str.charAt(i); // 将所有字符串拆分出来存到chars这个变量里
  if(o[chars]){ //将整个字符串中的每一个字符拿来判断 o[chars]是value
    o[chars]++
  }else{
    o[chars] = 1; //不存在则赋值为1
  }
}
console.log(o);

//遍历刚才的o对象
var max = 0;
var ch = '';
for(var k in o){
  //k得到的是key
  //o[k] 得到的是value
  if(o[k] > max){
    max = o[k]
    ch = k; //将最大值的key存进去
  }
}
console.log('出现次数最多的字符是：' + ch + ',出现次数为：' + max)
```

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221126170925892.png" alt="image-20221126170925892" />

#### 6.5 字符串操作方法（重点）

|             方法名              |                             说明                             |
| :-----------------------------: | :----------------------------------------------------------: |
| `concat(str1, str2, str3, ...)` | 用于来连接两个或多个字符串，拼接字符串，等效于`+`，但`+`更常用 |
|     `substr(start, length)`     |         从`start`位置开始(索引号)，`length` 取的个数         |
|       `slice(start, end)`       | 从`start`位置开始，截取到`end`位置，`end`取不到（他们俩都是索引号） |
|     `substring(start, end)`     | 从`start`位置开始，截取到`end`位置，`end`取不到 基本和`slice()`想通，但是不接受负值 |

1. concat(str1, str2, ...)

   ```javascript
   var str = 'andy';
   console.log(str.concat('red'))//andyred
   ```

2. substr(start, length)

   ```javascript
   var str = '改革春风吹满地';
   console.log(str.substr(2, 2)) //春风 第一个2是索引号的2 从第几个开始 第二个2是去几个字符
   ```

**其他方法**

​	1. 替换字符 replace(被替换的字符, 替换为的字符) 它只会替换第一个字符

```
var str = 'andyandy';
console.log(str.replace('a', 'b')); //bndyandy
```

 2. 字符转换为数组 split(分隔符) 前面我们了解过`join()` 把数组转换为字符串

    ```
    var str = 'red, pink, blue';
    console.log(str.split(',')); //['red', 'pink', 'blue']
    var str1 = 'red&pink&blue';
    console.log(str2.split('&')); //['red', 'pink', 'blue']
    ```

    

### 7. 简单数据类型和复杂数据类型

#### 7.1 简单类型与复杂类型

​	简单类型又叫做基本数据类型或者**值类型**，复杂类型又叫做**引用类型**

 * 值类型：简单数据类型/基本数据类型，在存储时变量中存储的是值本身，因此叫做值类型

   string、number、boolean、undefined、null

   ```javascript
   //在这里值得注意的是：因为初期设计的缺陷，基本数据类型null 返回的是一个空对象 Object
   var timer = null;
   console.log(typeof timer); //object
   //如果有个变量我们以后打算储存为对象，暂时没想好放啥，这个时候就给null
   ```

   

 * 引用类型：复杂数据类型，在存储时变量中存储的仅仅是地址（引用），因此叫做引用数据类型

   通过new关键字创建的对象（系统对象、自定义对象），如Object、Array、Date等

#### 7.2 堆和栈

​	堆栈空间分配区别：

		1. `栈（操作系统）`：由操作系统自动分配释放存放函数的参数值、局部变量的值等。其操作方式类似于数据结构中的栈

​		**简单数据类型存放到栈里面**

2. `堆（操作系统）`：存储复杂类型（对象），一般由程序员分配释放，若程序员不释放，由垃圾回收机制回收

​	**复杂数据类型存放到堆里面**

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221126180748936.png" alt="image-20221126180748936" />

​	**注意：JavaScript中没有堆栈的概念，通过堆栈的方式，可以更容易理解代码的一些执行方式，便于将来学习其他语言。**

#### 7.3 简单类型的内存分配

 * 值类型（简单数据类型）：string、number、boolean、undefined、null

 * 值类型变量的数据直接存放在变量（栈空间）中 它存放在栈里面 直接开辟一个空间存放的是值

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221126181513100.png" alt="image-20221126181513100" />

#### 7.4 复杂类型的内存分配

* 复杂类型（引用数据类型）：Object、Array、Date等
* 复杂数据类型的数据首先在栈里面存放地址 十六进制表示 然后这个地址指向堆里面的数据

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221126181453544.png" alt="image-20221126181453544" />

#### 7.5 简单类型传参

​	函数的形参也可以看做是一个变量，当我们把一个值类型变量作为参数传给函数的形参时，其实是把变量中栈空间里的值复制了一份给形参，那么方法内部对形参做任何修改，都不会影响到外部变量

```javascript
function fn(a){
	a++;
  console.log(a);
}
var x = 10;
fn(x);
console.log(x);
```

#### 7.6 复杂类型传参

​	函数的形参也可以看做是一个变量，当我们把引用类型变量传给形参时，其实就是把变量在栈空间里保存的堆地址复制给了形参，形参和实参其实保存的是同一个堆地址，所以操作的是同一个对象

```javascript
function Person(name){
  this.name = name;
}
function f1(x){
  console.log(x.name); //2. 刘德华
  x.name = '张学友';
  console.log(x.name); //3. 张学友
}
var p = new Person('刘德华');
console.log(p.name); //1. 刘德华
f1(p);
console.log(p.name); //4. 张学友
```

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221126183009999.png" alt="image-20221126183009999" />

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221126183042950.png" alt="image-20221126183042950" />

### 8. Web APIs和JS基础关联性

#### 8.1.1 JS的组成

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221127151545670.png" alt="image-20221127151545670" />

##### 8.1.2 JS基础阶段以及Web APIs阶段

​	**JS基础阶段**

* 我们学习的是ECMAScript标准规定的基本语法
* 只学习基本语法，做不了常用的网页交互效果

​	**Web APIs阶段**

* Web APIs是W3C组织的标准
* 主要学习DOM和BOM
* Web APIs是JS所独有的部分
* 主要学习页面交互功能

​	`JS`基础学习`ECMAScript `基础语法为后面做铺垫，`Web APIs`是`JS`的应用，大量使用`JS`基础语法做交互效果

### 9. API和Web API

#### 9.1 API

​	`API(Application Programming Interface 应用程序编程接口)`是一些预先定义的函数，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力，又无需访问源码，或理解内部工作机制的细节

​	简单理解：**API是给程序员提供的一种工具，以便能更轻松的实现想要完成的功能。**

​	比如手机充电的接口：<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221127152820185.png" alt="image-20221127152820185" />

​	我们要实现充电这个功能：

		* 我们不关心手机内部变压器，内部怎么存储电等
		* 我们不关心在这个充电线是怎么制作的
		* 我们只知道，我们拿着充电线插进充电接口就可以充电
		* 这个充电接口就是一个**API**

#### 9.2 Web API

​	**Web API是浏览器**提供的一套操作**浏览器功能**和**页面元素**的**API**（DOM和BOM）

​	现阶段主要针对于浏览器了解常用的API，主要针对浏览器做交互效果

​	比如我们想要浏览器弹出一个警示框，直接使用alert('弹出')

#### 9.3 API和Web API总结

	1. **API是为我们程序员提供的一个接口，帮助我们实现某种功能，我们会使用就可以了，不必纠结内部如何实现**
	1. Web API主要是针对于浏览器提供的接口，主要针对于浏览器做交互效果
	1. Web API一般都有输入和输出（函数的传参和返回值），Web API很多都是方法（函数）
	1. 学习Web API可以结合前面学习内置对象方法的思路学习

### 10. DOM简介

#### 10.1 什么是DOM

​	文档对象模型（Document Object Model，简称DOM），是W3C组织推荐的处理可扩展标记语言（HTML或者XML）的**标准编程接口**

​	W3C已经定义了一系列的DOM接口，通过这些DOM接口可以改变网页的内容、结构和样式

#### 10.2 DOM树

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221127155607924.png" alt="image-20221127155607924" />

* 文档：一个页面就是一个文档，DOM中使用`document`来表示
* 元素：页面中的所有标签都是元素，DM中使用`element`来表示
* 节点：网页中的所有内容都是节点（标签、属性、文本、注释等），DOM中使用`node`来表示

​	**DOM把以上内容都看做是对象**

#### 10.3 获取元素

##### 10.3.1 如何获取页面元素

​	DOM在我们实际开发中主要用来操作元素

​	我们如何来获取页面中的元素呢？

​	获取页面中的元素可以用以下几种方式：

	* 根据`ID`获取
	* 根据`标签名`获取
	* 通过`HTML5新增的方法`获取
	* `特殊元素`获取

##### 10.3.2 根据ID获取

​	使用`getElementById()`方法可以获取带有ID的元素对象

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="time">2022-11-27</div>
    <script>
        // 1.因为我们文档页面从上往下加载，所以得先有标签 所以我们的script写到标签的下面
        // 2.get 获得 element 元素 by 通过 驼峰命名法
        // 3.参数id是大小写敏感的字符串
        // 4.返回的是一个元素对象
        var timer = document.getElementById('time');
        console.log(timer);
        console.log(typeof timer); //返回的是一个Element对象
        //console.dir 打印我们返回的元素对象 更好地查看里面的属性和方法
        console.dir(timer); //可能是因为版本更新 这里和log的效果一样
    </script>
</body>
</html>
```

##### 10.3.3 根据标签名获取

​	使用`getElementByTagName()`方法可以返回带有**指定标签名的对象的集合**

​	注意：父元素必须是**单个对象（必须指明是哪一个元素对象）**，获取的时候不包括父元素自己

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <ul>
        <li>逊1</li>
        <li>逊2</li>
        <li>逊3</li>
        <li>逊4</li>
        <li>逊5</li>
    </ul>

    <ol id="a">
        <li>逊1</li>
        <li>逊2</li>
        <li>逊3</li>
        <li>逊4</li>
        <li>逊5</li>
    </ol>
    <script>
        // 返回的是 获取过来元素对象的集合 以伪数组的形式存储
        var test = document.getElementsByTagName('li');
        console.log(test); //伪数组
        console.log(typeof test); //object
        console.log(test[0]);
        // 我们想要依次打印里面的元素对象我们可以采取遍历的方式
        for (var i = 0; i < test.length; i++) {
            console.log(test[i]);
        }

        // 如果页面中只有一个li 返回还是伪数组的形式
        // 如果页面中没有这个元素 返回的是空的伪数组的形式

        // var olTag = document.getElementsByTagName('ol');//[ol]
        // console.log(olTag.getElementsByTagName('li')); //伪数组不能作为父元素 报错
        // console.log((olTag[0].getElementsByTagName('li'))); //必须指明数组中的那个元素 这个才是对的

        // 开发中常用的通过父元素获取所有子元素的写法
        var olTag = document.getElementById('a');
        console.log(olTag.getElementsByTagName('li'));
    </script>
</body>

</html>
```

​	**注意：**

		1. 因为得到的是一个对象的集合，所以我们想操作里面的元素就需要遍历
		1. 得到元素对象是动态的

##### 10.3.4 通过HTML5新增方法获取

```javascript
document.getElementsByClassName('类名'); //根据类名返回元素对象集合
```

```javascript
document.querySelector('选择器'); //根据制定选择器返回第一个元素对象
```

```javascript
document.querySelector('选择器'); //根据指定选择器返回
```

​	代码实操：

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="box">盒子1</div>
    <div class="box">盒子2</div>
    <div id="nav">
        <ul>
            <li>首页</li>
            <li>产品</li>
        </ul>
    </div>
    <script>
        // 1.getElementsNameByClassName 根据类名获得某些元素集合
        var boxs = document.getElementsByClassName('box');
        console.log(boxs);

        // 2.querySelector 返回指定选择器的第一个元素对象 切记 里面的选择器需要加符号 .box #nav
        var firstBox = document.querySelector('.box')
        console.log(firstBox);
        var nav = document.querySelector('#nav');
        console.log(nav);
        var li = document.querySelector('li');
        console.log(li);

        // 3.querySelectorAll() 返回指定选择器的所有元素对象集合
        var allBox = document.querySelectorAll('.box')
        console.log(allBox);
        var allLi = document.querySelectorAll('li');
        console.log(allLi);
    </script>
</body>
</html>
```

##### 10.3.5 获取特殊元素（body,html）

​	获取body元素

```javascript
document.body; //返回body元素对象
```

​	获取html元素

```
document.documentElement; //返回html元素对象
```

#### 10.4 事件基础

##### 10.4.1 事件概述

​	JavaScript使我们有能力创建动态页面，而事件是可被JavaScript侦测到的行为

​	简单理解：触发---响应机制

​	网页中的每个元素都可以产生某些可以出发JavaScript的事件，例如，我们可以在用户点击某按钮时产生一个事件，然后去执行某些操作

##### 	10.4.2 事件三要素

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="btn">唐伯虎</button>
    <script>
        //点击一个按钮 弹出一个对话框
        // 1.事件由三部分组成 事件源 事件类型 事件处理程序 这个我们称之为事件的三要素
        // (1) 事件源 事件被触发的对象 谁 按钮
        var btn = document.getElementById('btn')
        // (2) 事件类型 如何触发 什么事件 比如鼠标点击(onclick) 还是鼠标经过 还是键盘按下
        // (3) 事件处理程序 通过一个函数赋值的方式完成
        btn.onclick = () => {
            alert('点秋香');
        }
    </script>
</body>
</html>
```

##### 10.4.3 执行事件基础

1. 获取事件源
2. 注册事件（绑定事件）
3. 添加事件处理程序

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div>123</div>
    <script>
        //执行事件步骤
        //点击div 控制台输出 我被选中了
        // 1.获取事件源
        var div = document.querySelector('div');
        // 2.绑定事件
        // div.onclick
        // 3.添加事件处理程序
        div.onclick = () => {
            console.log('我被选中了');
        }
    </script>
</body>
</html>
```

​	**常见的鼠标事件**

|   鼠标事件    |     触发条件     |
| :-----------: | :--------------: |
|   `onclick`   | 鼠标点击左键触发 |
| `onmouseover` |   鼠标经过触发   |
| `onmouseout`  |   鼠标离开触发   |
|   `onfocus`   | 获得鼠标焦点触发 |
|   `onblur`    | 失去鼠标焦点触发 |
| `onmousemove` |   鼠标移动触发   |
|  `onmouseup`  |   鼠标弹起出发   |
| `onmousedown` |   鼠标按下触发   |

#### 11. 操作元素

​	JavaScript的DOM操作可以改变网页内容、结构和样式，我们可以利用DOM操作元素来改变元素里面的内容、属性等。注意以下都是属性

##### 11.1 改变元素内容

```javascript
element.innerText
```

​	从起始位置到终止位置的内容，但它去除html标签，同时空格和换行也会去掉

​	代码示例

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 300px;
            height: 30px;
            line-height: 30px;
            color: #fff;
            background-color: pink;
        }
    </style>
</head>
<body>
    <button>显示当前系统时间</button>
    <div>来个时间</div>
    <script>
        // 当我们点击了按钮，div里面的文字会发生变化
        // 1.获取元素
        var btn = document.querySelector('button');
        var div = document.querySelector('div');
        // 2.注册事件
        btn.onclick = () => {
            div.innerText = new Date()
        }
    </script>
</body>
</html>
```



```javascript
element.innerHTML
```

​	起始位置到终止位置的全部内容，包括html标签，同时保留空格和换行

​	两者代码举例：

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div></div>
    <p>
        我是文字
        <span>123</span>
    </p>
    <script>
        //innerText和innerHTML的区别
        // 1.innerText 不识别HTML标签 非标准 它会去除空格和换行
        var div = document.querySelector('div');
        div.innerText = '今年是2022'

        // 2.innerHTML 识别HTML标签 W3C标准 它会保留空格和换行
        div.innerHTML = '今年是<strong>2022</strong>'
        // 这两个属性是可读写的 可以获取元素里面的内容
        var p = document.querySelector('p');
        console.log(p.innerText);
        /*
        我是文字
        123
        */
        console.log(p.innerHTML);
        /*
                我是文字
                <span>123</span>
        */

    </script>
</body>
</html>
```

##### 11.2 常用元素的属性操作

	1. innerText、innerHTML 改变元素内容
	1. src、href
	1. id、alt、title

​	具体修改就是写在函数里面

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button id="ldh">刘德华</button>
    <button id="zxy">张学友</button>
    <img src="./images/ldh.jpeg" alt="" title="刘德华">
    
    <script>
        // 修改元素属性
        // 1. 获取元素
        var ldh = document.getElementById('ldh');
        var zxy = document.getElementById('zxy');
        var img = document.querySelector('img');
        // 2.注册事件 处理程序
        zxy.onclick = () => {
            img.src = "./images/zxy.jpeg";
            img.title = "张学友"
        }
        ldh.onclick = () => {
            img.src = "./images/ldh.jpeg"
            img.title = '刘德华'
        }
    </script>
</body>
</html>
```

​	**案例编写：**分时间显示不同的图片，显示不同的问候语

​		例如：如果上午打开页面，显示上午好，显示上午的图片

​			分上午中午下午		

​		分析：

​			① 根据系统不同时间来判断，所以需要用到日期内置对象

​			② 利用多分支语句来设置不同的图片

​			③ 需要一个图片，并且根据时间修改图片，就需要用到操作元素的src属性

​			④ 需要一个div元素，显示不同问候语，修改元素内容即可

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        img{
            width: 300px;
        }
    </style>
    <img src="./morning.jpg" alt="">
    <div>上午好</div>
    <script>
        // 1.获取元素
        var img = document.querySelector('img');
        var div = document.querySelector('div');
        // 2.得到当前的小时数
        var date = new Date();
        var h = date.getHours();
        // 3.判断小时数改变图片和文字信息
        if(h < 12 && h >= 6){
             img.src = './morning.jpg';
             div.innerHTML = '亲，上午好'
        }else if(h < 18){
            img.src = './afternoon.jpg';
            div.innerHTML = '亲，下午好';
        }else{
            img.src = './evening.jpg';
            div.innerHTML = '亲，晚上好';
        }
    </script>
</head>
<body>
    
</body>
</html>
```

##### 11.3 表单元素的属性操作

​	利用DOM可以操作这些表单元素的属性：

​		`type,value,checked,selected,disabled,placeholder`等

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button>按钮</button>
    <input type="text" placeholder="输入内容">
    <script>
        // 1.获取元素
        var btn = document.querySelector('button');
        var input = document.querySelector('input');
        // 2.注册事件 处理程序
        btn.onclick = function() { //注意 这里没有用箭头函数的原因是 下面要使用this 如果在这里的箭头函数使用this 则会出现无法指向的问题
            // input.innerHTML = '被点击了'; innerHTML是 普通盒子 才能用的 比如div 标签里面才有的内容
            input.placeholder = '被点击了';
            // 如果想要某个表单被禁用 不能再点击 disabled 我们想要这个button按钮禁用
            // btn.disabled = true; 或者这样：
            this.disabled = true; // 这里的this指向的是事件函数的调用者 btn
        }
    </script>
</body>
</html>
```

​	**案例：仿京东显示密码**

​		点击按钮将密码框切换为文本框，并且可以查看密码明文

​		① 核心思路：点击眼睛按钮，把密码框类型改为文本框就可以看见里面的密码

​		② 一个按钮两个状态，单击一次，切换为文本框，继续单击一次切换为密码框

​		③ 算法：利用一个flag变量，来判断flag的值，如果是1就切换为文本框，flag设置为0，如果是0就切换为密码框，flag设置为1

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221130165812282.png" alt="image-20221130165812282" />

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            /* 此做法为绑定父子关系 子绝父相 */
            position: relative;
            width: 400px;
            /* 只保留这个盒子的下边框 solid则是指定其颜色 */
            border-bottom: 1px solid #ccc;
            /*  这个则是和浏览器此时的边缘做比较 auto最佳 */
            margin: 100px auto;
        }
        .box input {
            width: 370px;
            height: 30px;
            /* 隐藏input边框 */
            border: 0;
            /* 去掉选中框 */
            outline: none;
        }
        /* 通过css手动缩小图片 */
        .box img {
            /* 调整图片位置 */
            /* 此做法为绑定父子关系 子绝父相 */
            position: absolute;
            top: 10px;
            right: 2px;
            width: 24px;
        }
    </style>
</head>
<body>
    <div class="box">
        <label for="">
            <!-- 闭眼图片 -->
            <img src="./images/close.png" alt="" id="eye">
        </label>
        <input type="password" name="" id="pwd">
    </div>
    <script>
        // 1.获取元素
        var eye = document.getElementById('eye');
        var pwd = document.getElementById('pwd');

        // 2. 绑定事件 处理程序
        var flag = true;

        eye.onclick = () => {
            if (flag) {
                pwd.type = 'text';
                eye.src = './images/open.png';
                flag = !flag;
            }else{
                pwd.type = 'password';
                eye.src = './images/close.png'
                flag = !flag;
            }
        }

    </script>
</body>
</html>
```

##### 11.4 样式属性操作

​	我们可以通过JS修改元素的大小、颜色、位置等样式

	1. element.style			行内样式操作
	1. element.className  类名样式操作 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <div></div>
    <script>
        // 1. 获取元素
        var div = document.querySelector('div');
        // 2.绑定事件 处理程序
        div.onclick = () => {
            // div.style里面的属性采取驼峰命名法
            div.style.backgroundColor = 'red';
            div.style.width = '250px';
        }
    </script>
</body>
</html>
```

​	**注意：**

		1. JS里面的样式采取驼峰命名法 比如：`fontSize`、`backgroundColor`等
		1. JS修改style样式操作，产生的是行内样式，JavaScript写的CSS权重比较高

**案例：淘宝关闭二维码**

​	① 核心思路：利用样式的显示和隐藏完成，`display:none` 隐藏元素 `display:block` 显示元素

​	② 点击按钮，就让这个二维码盒子隐藏起来即可

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    .box {
        position: relative;
        width: 74px;
        height: 88px;
        border: 1px solid #ccc;
        margin: 100px auto;
        font-size: 12px;
        text-align: center;
        color: #f40;
        /* display: block; */
    }

    .box img {
        width: 60px;
        margin-top: 5px;
    }

    .close-btn {
        position: absolute;
        top: -1px;
        left: -16px;
        width: 14px;
        height: 14px;
        border: 1px solid #ccc;
        line-height: 14px;
        font-family: Arial, Helvetica, sans-serif;
        cursor: pointer;
    }
</style>

<body>
    <div class="box">
        淘宝二维码
        <img src="./images/tao.png" alt="">
        <i class="close-btn">×</i>

        <script>
            // 1.获取元素
            // 这种方法也可以 注意的是 getElementsByClassName返回的是一个集合
            // var close = document.getElementsByClassName('close-btn');
            // close[0].onclick = () => {
            //     console.log('test');
            // }
            var btn = document.querySelector('.close-btn');
            var box = document.querySelector('.box');
            // 2.注册事件
            btn.onclick = () => {
                box.style.display = 'none';
            }
        </script>
    </div>
</body>

</html>
```

​	**案例：循环精灵图背景**

​		可以利用for循环设置一组元素的精灵图背景

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221202194024366.png" alt="image-20221202194024366" />

​	① 首先精灵图排列是有规律的

​	② 核心思路：利用for循环 修改精灵图片的背景位置background-position

​	③ 让循环里面的i索引号 * 44 就是每个图片的坐标

 	

​	**案例：显示隐藏文本框内容**

​		当鼠标点击文本框时，里面的默认文字隐藏，当鼠标离开文本框时，里面的文字显示

​			① 首先表单需要2个新事件，获得焦点`onfocus` 	失去焦点 `onblur`

​			② 如果获得焦点，判断表单里面内容是否为默认文字，如果是默认文字，就清空表单内容

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        input {
            color: #999;
        }
    </style>
</head>
<body>
    <!-- 注意 如果这里用的是placeholder，则在清空搜索内容时则会自动显示value值 -->
    <input type="text" value="手机">
    <script>
        // 1.获取元素
        var text = document.querySelector('input');
        // 2.绑定事件 获得焦点事件 onfocus
        text.onfocus = () => {
            // console.log('得到了焦点');
            if(text.value === '手机'){
                text.value = '';
            }
            // 获得焦点需要把文本框里面的文字变深
            text.style.color = "#333"
        }
        // 3.绑定事件 失去焦点事件 onblur
        text.onblur = () => {
            if(text.value === ''){
                text.value = '手机'
            }
            // 失去焦点需要把文本框里面的文字变浅
            text.style.color = "#999"
        }
    </script>
</body>
</html>
```

​	**通过className更改元素样式**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: pink;
        }

        .change {
            background-color: purple;
            color: #fff;
            font-size: 25px;
            margin-top: 100px;
        }
    </style>
</head>

<body>
    <div>文本</div>
    <script>
        // 1.使用element.style 获得修改元素样式 在样式比较少或者功能简单的情况下使用
        var test = document.querySelector('div');
        test.onclick = () => {
            // test.style.backgroundColor = 'purple';
            // test.style.color = '#fff';
            // test.style.fontSize = '25px';
            // test.style.marginTop = '100px';

            // 2.我们可以通过修改元素的className来修改元素的样式 适合于样式较多或者功能复杂的情况
            // 让我们当前元素的类名改为了change 相当于在上面的div里面添加了className="change"
            test.className = 'change';
        }
    </script>
</body>

</html>
```

​	**注意：**

		1. 如果样式修改较多，可以采取操作类名的方式更改元素样式
		1. class因为是个保留字，因此使用className来操作元素类名属性
		1. className会直接更改元素的类名，会覆盖原先的类名

**案例：密码框格式提示错误信息**

​	用户如果离开密码框，里面输入的个数不是6~16，则提示错误信息，否则提示输入正确信息

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221206115417419.png" alt="image-20221206115417419" />

​	① 首先判断的事件是表单失去焦点`onblur`

​	② 如果输入正确 则提示正确的信息颜色为绿色，小图标变化

​	③ 如果输入不是6到16位，则提示错误信息颜色为红色，小图标变化

​	④ 因为里面变化样式较多，我们采取className修改样式

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 600px;
            margin: 100px auto;
        }

        .message {
            display: inline-block;
            font-size: 12px;
            color: #999;
            background: url(images/mess.png) no-repeat left center;
            padding-left: 20px;
        }

        .wrong {
            color: red;
            background-image: url(images/wrong.png);
        }

        .right {
            color: green;
            background-image: url(images/right.png);
        }
    </style>
</head>

<body>
    <div class="register">
        <input type="password" class="input">
        <p class="message">请输入6~16位密码</p>
    </div>
    <script>
        // 1.获取元素
        var ipt = document.querySelector('.input');
        var message = document.querySelector('.message');
        // 2.绑定事件 失去焦点
        ipt.onblur = () => {
            // 根据表单里面值得长度 ipt.value.length
            // 注意这里不是覆盖，而是在原有的基础上添加
            if(ipt.value.length >= 6 && ipt.value.length <= 16){
                message.className = 'message right';
                message.innerHTML = '输入正确';
            }else{
                message.className = 'message wrong';
                message.innerHTML = '输入错误，长度应为6~16';
            }
        }
    </script>
</body>

</html>
```

### 操作元素总结

​	操作元素是DOM的核心内容

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221207152027049.png" alt="image-20221207152027049" />

##### 11.5 排他思想

​	如果有同一组元素，我们想要某一个元素实现某种样式，需要用到循环的排他思想算法：

 1. 所有元素全部清除样式（干掉其他人）

 2. 给当前元素设置样式（留下我自己）

 3. 注意顺序不能颠倒，首先干掉其他人，再留下我自己

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <button>按钮1</button>
        <button>按钮2</button>
        <button>按钮3</button>
        <button>按钮4</button>
        <button>按钮5</button>
        <script>
            // 1.获取所有按钮
            var btns = document.querySelectorAll('button');
            // btns得到的是伪数组 里面的每一个元素 btns[i]
            for(var i = 0; i < btns.length; i++){
                btns[i].onclick = function(){
                    // (1)我们先把所有按钮的背景颜色去掉
                    for(var i = 0; i < btns.length; i++){
                        btns[i].style.backgroundColor = '';
                    }
                    // (2)然后才让当前的元素背景颜色为pink
                    this.style.backgroundColor = 'pink';
                }
            }
        </script>
    </body>
    </html>
    ```

    **案例：百度换肤**

    ​	① 这个案例练习的是给一组元素注册事件

    ​	② 给4个小图片利用循环注册点击事件

    ​	③ 当我们点击了这个图片，让我们页面背景改为当前的图片

    ​	④ 核心算法：把当前图片的src路径取过来，给body作为背景即可

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    * {
        margin: 0;
        padding: 0;
    }

    body {
        background: url(images/1.jpg) no-repeat center top;
    }

    li {
        list-style: none;
    }

    .baidu {
        overflow: hidden;
        margin: 100px auto;
        background-color: #fff;
        width: 410px;
        padding-top: 3px;
    }

    .baidu li {
        float: left;
        margin: 0 1px;
        cursor: pointer;
    }

    .baidu img {
        width: 100px;
    }
</style>

<body>
    <ul class="baidu">
        <li><img src="./images/1.jpg"></li>
        <li><img src="./images/2.jpg"></li>
        <li><img src="./images/3.jpg"></li>
        <li><img src="./images/4.jpg"></li>
    </ul>
    <script>
        // 1.获取元素
        var imgs = document.querySelector('.baidu').querySelectorAll('img')
        console.log(imgs);
        // 2.循环注册事件
        for(var i = 0; i < imgs.length; i++){
            imgs[i].onclick = function(){
                // this.src就是我们点击图片的路径
            //    console.log(this.src);
            //    把这个路径给body就行了
            document.body.style.backgroundImage = 'url(' + this.src +')';
            }
        }
    </script>
</body>

</html>
```

​	**案例：表格隔行变色**

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221207162122477.png" alt="image-20221207162122477" />

​	**案例分析**

​		① 用到新的鼠标事件 `onmouseover` 鼠标离开 `onmouseout`

​		② 核心思路：鼠标经过`tr`行，当前的行变换背景颜色，鼠标离开后去掉当前的背景颜色

​		③ 注意：第一行（`thead`里面的行）不需要变换颜色，因此我们获取的是`tbody`里面的行

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    table {
        width: 800px;
        margin: 100px auto;
        text-align: center;
        border-collapse: collapse;
        font-size: 14px;
    }

    thead tr {
        height: 30px;
        background-color: skyblue;
    }

    tbody tr {
        height: 30px;
    }

    tbody td {
        border-bottom: 1px solid #d7d7d7;
        font-size: 12px;
        color: blue;
    }

    .bg {
        background-color: pink;
    }
</style>

<body>
    <table>
        <thead>
            <tr>
                <th>代码</th>
                <th>名称</th>
                <th>最新公布净值</th>
                <th>累计净值</th>
                <th>前单位净值</th>
                <th>净值增长率</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>003526</td>
                <td>农银金穗3个月定期开放债券</td>
                <td>1.075</td>
                <td>1.079</td>
                <td>1.074</td>
                <td>+0.047%</td>
            </tr>
            <tr>
                <td>003526</td>
                <td>农银金穗3个月定期开放债券</td>
                <td>1.075</td>
                <td>1.079</td>
                <td>1.074</td>
                <td>+0.047%</td>
            </tr>
            <tr>
                <td>003526</td>
                <td>农银金穗3个月定期开放债券</td>
                <td>1.075</td>
                <td>1.079</td>
                <td>1.074</td>
                <td>+0.047%</td>
            </tr>
            <tr>
                <td>003526</td>
                <td>农银金穗3个月定期开放债券</td>
                <td>1.075</td>
                <td>1.079</td>
                <td>1.074</td>
                <td>+0.047%</td>
            </tr>
            <tr>
                <td>003526</td>
                <td>农银金穗3个月定期开放债券</td>
                <td>1.075</td>
                <td>1.079</td>
                <td>1.074</td>
                <td>+0.047%</td>
            </tr>
            <tr>
                <td>003526</td>
                <td>农银金穗3个月定期开放债券</td>
                <td>1.075</td>
                <td>1.079</td>
                <td>1.074</td>
                <td>+0.047%</td>
            </tr>
        </tbody>
    </table>
    <script>
        // 1.获取元素 获取的是tbdy里面所有的行
        var trs = document.querySelector('tbody').querySelectorAll('tr')
        // 2. 利用循环绑定事件
        for (var i = 0; i < trs.length; i++) {

            // element.style写法
            // trs[i].onmouseover = function(){
            //     this.style.backgroundColor = 'pink' 
            // }
            // trs[i].onmouseout = function(){
            //     this.style.backgroundColor = '';
            // }

            // className写法
            trs[i].onmouseover = function () {
                // console.log(11);
                this.className = 'bg';
            }
            trs[i].onmouseout = function () {
                this.className = '';
            }
        }
    </script>
</body>

</html>
```

​	**案例：表单全选取消案例**

​	分析：

​		**① 全选和取消全选做法：**让下面所有复选框的checked（选中状态）跟随全选按钮即可

​		**② 下面复选框需要全部选中，上面全选才能选中做法：** 给下面所有复选框绑定点击事件，每次点击，都要循环查看下面所有复选框是否有没选中的，如果有一个没选中的，上面全选框就不选中

​		③ 可以设置一个变量，来控制全选是否选中

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            padding: 0;
            margin: 0;
        }
        table {
            width: 300px;
            border-collapse: collapse;
            border: 1px solid skyblue;
        }
        th, td {
            border: 1px solid red;
            color: black;
            padding: 2px;
        }
        th {
            background-color: skyblue;
            font-size: 16px;
            padding: 10px;
            color: #fff;
        }
        td {
            font-size: 14px;
        }
        tbody tr {
            background-color: #c0c0c0;
        }
        tbody tr :hover {
            cursor: pointer;
            background-color: #fafafa;
        }
    </style>
</head>
<body>
    <div>
        <table>
            <thead>
                <tr>
                    <th>
                        <input type="checkbox" id="j_cbAll">
                    </th>
                    <th>商品</th>
                    <th>价格</th>
                </tr>
            </thead>
            <tbody id="j_tb">
                <tr>
                    <td>
                        <input type="checkbox">
                    </td>
                    <td>iPhone8</td>
                    <td>8000</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox">
                    </td>
                    <td>iPad Pro</td>
                    <td>5000</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox">
                    </td>
                    <td>iPad Air</td>
                    <td>2000</td>
                </tr>
                <tr>
                    <td>
                        <input type="checkbox">
                    </td>
                    <td>Apple Watch</td>
                    <td>2000</td>
                </tr>
            </tbody>
        </table>
    </div>
    <script>
        // 1.全选和取消全选
        // 获取元素
        var checkAll = document.getElementById('j_cbAll');
        var checks = document.getElementById('j_tb').querySelectorAll('input');
        // 注册事件
        
        // 全选按钮影响下面的小按钮
        checkAll.onclick = () => {
            for(var i = 0; i < checks.length; i++){
                checks[i].checked = checkAll.checked
            }
        }
        // 下面的小按钮影响全选按钮
        for(var i = 0; i < checks.length; i++){
            checks[i].onclick = () => {
                var flag = true;
                // 每次点击下面的复选框都要循环检查这四个小按钮是否全被选中
                for(var i = 0; i < checks.length; i++){
                    
                    // 在页面第一次打开的时候，所有按钮的checked属性都默认为false
                    // 如果此时点击一次，则是选中按钮，if再进行取反就是false，则不会执行if语法
                    // 所以下面的if翻译过来就是：当其中有一个按钮没有被选中的时候
                    if(!checks[i].checked){
                        flag = false;
                        break;// 只要有一个按钮的check为false，全选按钮就永远不会被选上 后面的就不用判断
                    }
                    
                }
                checkAll.checked = flag
            }
        }
        
    </script>
</body>
</html>
```

##### 10.6 自定义属性的操作

 	1. 获取属性值
 	 * element.属性 获取属性值，它获取的是内置属性值（元素本身自带的属性 比如id,class等）
 	 * element.getAttribute('属性') 它主要获得我们程序员自定义的属性

2. 设置属性值
   * element.属性 = '值'							设置内置属性值
   * element.setAttribute('属性', '值')     主要针对自定义属性

3. 移除属性 removeAttribute('属性')

**案例：tab栏切换（重点案例）**

​	当鼠标点击上面相应选项卡（tab），下面内容跟随变化

​	案例分析：

​		① Tab栏切换有2个大的模块

​		② 上面的模块选项卡里，点击某一个，当前这一个底色会是红色，其余不变（排他思想）修改类名的方式

​		③ 下面的模块内容，会跟随上面的选项卡变化，所以下面模块变化写到点击事件里面

​		④ 规律：下面的米快显示内容和上面的选项卡一一对应，互相之间匹配

​		⑤ 核心思路：给上面的tab_list里面所有的li添加自定义属性，属性值从0开始编号

​		⑥ 当我们点击tab_list里面的某个li，则会让tab_con里面对应序号的内容显示，其余隐藏（排他思想）

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        li {
            list-style-type: none;
        }

        .tab {
            width: 978px;
            height: 100px auto;
        }

        .tab_list {
            height: 39px;
            border: 1px solid #ccc;
        }

        .tab_list li {
            float: left;
            height: 39px;
            line-height: 39px;
            padding: 0 20px;
            text-align: center;
            cursor: pointer;
        }

        .tab_list .current {
            background-color: red;
            color: #fff;
        }

        /* 要首先设置全部的内容模块为不可见状态 */
        .item {
            display: none;
        }
    </style>
</head>

<body>
    <div class="tab">
        <div class="tab_list">
            <ul>
                <li class="current">商品介绍</li>
                <li>规格与包装</li>
                <li>售后保障</li>
                <li>商品评价(50000)</li>
                <li>手机社区</li>
            </ul>
        </div>
        <div class="tab_con">
            <div class="item" style="display: block;">商品介绍模块内容</div>
            <div class="item">规格与包装模块内容</div>
            <div class="item">售后保障模块内容</div>
            <div class="item">商品评价模块内容</div>
            <div class="item">手机社区模块内容</div>
        </div>
    </div>
    <script>

        var tab_list = document.querySelector('.tab_list')
        var lis = tab_list.querySelectorAll('li');
        var tab_con = document.querySelector('.tab_con');
        var divs = tab_con.querySelectorAll('div');

        // 实现上面选项卡的相关功能
        for (var i = 0; i < lis.length; i++) {
            // 给5个表头的li设置索引号
            lis[i].setAttribute('index', i)
            lis[i].onclick = function () {

                // 干掉所有人 其余的li清除 class 这个类名，实现切换高亮效果
                for (var i = 0; i < lis.length; i++) {
                    lis[i].className = '';
                }
                // 留下我自己，实现切换高亮效果
                this.className = 'current'
                
                //  下面内容显示模块
                var index = this.getAttribute('index')
                // 干掉所有人
                for (var i = 0; i < divs.length; i++) {
                    divs[i].style.display = 'none'
                }
                // 得到当前index对应的值
                // 留下我自己，实现切换对应内容效果
                divs[index].style.display = 'block'
            }
        }

    </script>
</body>

</html>
```

##### 10.7 H5自定义属性

​	**自定义属性目的：是为了保存并使用数据。有些数据可以保存到页面中而不用保存到数据库中。**

​	自定义属性是通过`getAttribute('属性')`获取

​	但是有些自定义属性很容易引起歧义，不容易判断是元素的内置属性还是自定义属性

​	H5给我们新增了自定义属性：

​	**1. H5设置自定义属性**

​		H5规定了自定义属性`data-`开头作为属性名并且赋值

​		**比如`<div data-index="1"></div>`**

​		或者使用JS设置

​		**element.setAttribute('data-index', 2)**

​	**2. 获取H5自定义属性**

  		1. 兼容性获取 `element.getAttribute('data-index');`
  		2. H5新增`element.dataset.index`或者`element.dataset['index']`	ie11以后才支持

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div getTime="20" data-index="2" data-list-name="andy"></div>
    <script>
        var div = document.querySelector('div');
        console.log(div.getAttribute('getTime'));
        div.setAttribute('data-time', 20);
        console.log(div.getAttribute('data-index'));
        console.log(div.getAttribute('data-list-name'));

        // H5新增获取自定义属性的方法
        // dataset是一个集合 里面存放了所有以data开头的自定义属性
        console.log(div.dataset);
        console.log(div.dataset.index);
        console.log(div.dataset['index']);
        // 如果自定义属性里面有多个-链接的单词，我们获取的时候采取驼峰命名法
        console.log(div.dataset.listName);
        console.log(div.dataset['listName']);
        
    </script>
</body>
</html>
```

### 11. 节点操作

#### 11.1 为什么学节点操作

​	获取元素通常使用两种方式：

​		**1. 利用DOM提供的方法获取元素**

			* `document.getElementById()`
			* `document.getElementByTagName()`
			* `document.querySelector()`等
			* 逻辑性不强、繁琐

​		**2. 利用节点层级关系获取元素**

* 利用父子兄节点关系获取元素
* 逻辑性强，但是兼容性稍差

​		两种方式都可以获取元素节点，后面都会使用，节点操作更简单

#### 11.2 节点概述

​	网页中所有的内容都是节点（标签、属性、文本、注释等），在DOM中，节点使用node来表示

​	HTML DOM树种的所有节点均可通过JavaScript进行访问，所有HTML元素（节点）均可被修改，也可以被创建或删除

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221209145009753.png" alt="image-20221209145009753" />

​	一般地，节点至少拥有`nodeType(节点类型)`、`nodeName(节点名称)`和`nodeValue(节点值)`这三个基本属性

* 元素节点的nodeType为1
* 属性节点的nodeType为2
* 文本节点的nodeType为3(文本节点包含文字、空格、换行等)

​	**在实际开发中，节点操作主要操作的是元素节点**

#### 11.3 节点层级

​	利用DOM树可以把节点划分为不同的层级关系，常见的是**父子兄层级关系**

1. 父级节点

```
node.parentNode
```

* parentNode属性可返回某节点的父节点，注意是**最近的一个父节点**
* 如果指定的节点没有父节点则返回null

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- 节点的优点 -->
    <div>我是div</div>
    <span>我是span</span>
    <ul>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
    </ul>
    <div class="box">
        <span class="erweima">x</span>
    </div>
    <script>
        var erweima = document.querySelector('.erweima');

        // 1. 父节点 parentNode
        // 得到的是离元素最近的父级节点 如果找不到父节点就返回为null
        console.log(erweima.parentNode);

    </script>
</body>

</html>
```

2. 子节点

```
1. parentNode.childNodes(标准);
```

​	parentNodes.childNodes返回包含指定节点的子节点的集合，该集合为即时更新的集合

​	**注意：返回值里面包含了所有子节点，包括元素节点，文本节点等**

​	**如果只想要获得里面的元素节点，则需要专门处理。所以我们一般不提倡使用childNodes**

```javascript
var ul = document.querySelector('ul');
for(var i = 0; i < ul.childNodes.length; i++){
  if(ul.childNodes[i].nodeType == 1){
    // ul.childNodes[i]是元素节点
    console.log(ul.childNodes[i]);
  }
}
```

```
2. parentNode.children(非标准)
```

​	**parentNode.children**是一个只读属性，返回**所有的子元素节点**。它只返回子元素节点，其余节点不返回

​	虽然chileren是一个非标准，凡事得到了各个浏览器的支持，可以放心使用

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <!-- 节点的优点 -->
    <div>我是div</div>
    <span>我是span</span>
    <ul>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
        <li>我是li</li>
    </ul>
    <div class="box">
        <span class="erweima">x</span>
    </div>
    <script>
        // DOM提供的方法（API）获取
        var ul = document.querySelector('ul');
        var lis = ul.querySelectorAll('li');
        // 1.子节点 childNodes获取的是所有子节点 包含元素节点 文本节点等
        console.log(ul.childNodes);
        // console.log(ul.chileNodes[1].nodeType);
        // 2.children 获取所有的子元素节点 也是我们实际开发常用的
        console.log(ul.children);
    </script>
</body>

</html>
```

```
3. parentNode.firstChild
```

​	`firstChild`返回第一个子节点，找不到则返回`null`。同样，也是包含所有的节点

```
4. parentNode.lastChild
```

​	`lastChild`返回最后一个子节点，找不到则返回`null`。同样，也是包含所有的节点

```
5. parentNode.firstElemetChild
```

​	`firstElementChild`返回子一个子元素节点，找不到则返回`null`

```
6. parentnode.lastElementChild
```

​	`lastElementChild`返回子一个子元素节点，找不到则返回`null`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ol>
        <li>我是li1</li>
        <li>我是li2</li>
        <li>我是li3</li>
        <li>我是li4</li>
    </ol>
    <script>
        var ol = document.querySelector('ol');
        // 1. firstChild 第一个子节点 不管是文本节点还是元素节点
        console.log(ol.firstChild);
        
        // 2.firstElementChild 返回第一个子元素节点
        console.log(ol.firstElementChild);
    </script>
</body>
</html>
```

​	

**注意：这两个方法有兼容性问题，IE9以上才支持**

​	实际开发中，`firstChild`和`lastChild`包含其他节点，操作不方便，而`firstElementChild`和`lastElementChild`又有兼容性问题，那么我们如何获取第一个子元素节点或最后一个子元素节点呢？

​	**解决方案：**

```javascript
// 实际开发的写法：既没有兼容性问题又返回第一个子元素
console.log(ol.children[0]);
console.log(ol.children[3]);
console.log(ol.children.length - 1);
```

​	**案例：下拉菜单**

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221209184304196.png" alt="image-20221209184304196" />

​	案例分析：

​		① 导航栏里面的li都要有鼠标经过的效果，所以需要循环注册鼠标事件

​		② 核心原理：当鼠标经过li里面的第二个孩子ul显示，当鼠标离开，则ul隐藏

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        li {
            list-style-type: none;
        }
        
        a {
            text-decoration: none;
            font-size: 14px;
        }
        
        .nav {
            margin: 100px;
        }
        
        .nav>li {
            position: relative;
            float: left;
            width: 80px;
            height: 41px;
            text-align: center;
        }
        
        .nav li a {
            display: block;
            width: 100%;
            height: 100%;
            line-height: 41px;
            color: #333;
        }
        
        .nav>li>a:hover {
            background-color: #eee;
        }
        
        .nav ul {
            display: none;
            position: absolute;
            top: 41px;
            left: 0;
            width: 100%;
            border-left: 1px solid #FECC5B;
            border-right: 1px solid #FECC5B;
        }
        
        .nav ul li {
            border-bottom: 1px solid #FECC5B;
        }
        
        .nav ul li a:hover {
            background-color: #FFF5DA;
        }
    </style>
</head>

<body>
    <ul class="nav">
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="#">私信</a>
                </li>
                <li>
                    <a href="#">评论</a>
                </li>
                <li>
                    <a href="#">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="#">私信</a>
                </li>
                <li>
                    <a href="#">评论</a>
                </li>
                <li>
                    <a href="#">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="#">私信</a>
                </li>
                <li>
                    <a href="#">评论</a>
                </li>
                <li>
                    <a href="#">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="#">私信</a>
                </li>
                <li>
                    <a href="#">评论</a>
                </li>
                <li>
                    <a href="#">@我</a>
                </li>
            </ul>
        </li>
    </ul>

    <script>
        // 1. 获取元素
        var nav = document.querySelector('.nav');
        var lis = nav.children; //得到4个小li
        console.log(lis);
        for(var i = 0; i < lis.length; i++){
            lis[i].onmouseover = function(){
                //这里主要是对ul进行操作，ul在li的子项中索引号为1 
                this.children[1].style.display = 'block'
            }
            lis[i].onmouseout = function(){
                //这里主要是对ul进行操作，ul在li的子项中索引号为1 
                this.children[1].style.display = 'none'
            }
        }
    </script>
</body>

</html>
```

3. 兄弟节点

```
1. node.nextSibling
```

​	`nextSibling`返回当前元素的下一个兄弟节点，找不到则返回`null`，同样，也是包含所有节点

```
2. node.previousSibling
```

​	`previousSibling`返回当前元素上一个兄弟节点，找不到则返回`null`，同样，也是包含所有的节点

```
3. node.nextElementSibling
```

​	`nextElementSibling`返回当前元素下一个兄弟元素节点，找不到则返回`null`

```
4. node.previousElementSibling
```

​	`nextElementSibling`返回当前元素上一个兄弟元素节点，找不到则返回`null`

​	**注意：这两个方法有兼容性问题，IE9以上才支持**

​	**问：怎么解决兼容性问题？**

​	--自己风脏一个兼容性的函数

```javascript
function getNextElementSibling(element){
  while (element = element.nextSibling){
    if(element.nodeType === 1){
      return element;
    }
  }
  return null;
}
```

#### 11.4.1 创建节点

```
document.createElement('tagName')
```

​	`document.createElement()`方法创建由`tagName`指定的`HTML`元素。因为这些元素原先不存在，是根据我们的需求动态生成的，所以我们也称为**动态创建元素节点**

#### 11.4.2 添加节点

```
1. node.appendChild(child)
```

​	`node.appendChild()`方法将一个节点添加到指定父节点的子节点列表**末尾**。类似于css里面的after伪元素

```
2. node.insertBefore(child, 指定元素)
```

​	`node.insertBefore()`方法将一个节点添加到父节点的指定子节点**前面**，类似于css里面的before伪元素

​	**案例：简单版发布留言案例**

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221209201127909.png" alt="image-20221209201127909" />

​	案例分析：

​		① 核心思路：点击按钮之后，就会动态创建一个`li`，添加到`ul`里面

​		② 创建`li`的同时，把文本域里面的值通过`li.innerHTML`赋值给`li`

​		③ 如果想要新的留言后面显示就用`appendChild`，如果想要前面显示就用`insertBefore`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        textarea {
            width: 200px;
            height: 100px;
            /* 边框为1像素的红色实线 */
            border: 1px solid red;
            resize: none;
        }
        ul {
            margin-top: 50px;
        }
        li {
            width: 300px;
            padding: 5px;
            background-color: skyblue;
            color: red;
            font-size: 14px;
            margin: 15px 0;
        }
    </style>
</head>
<body>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <button>发布</button>
    <ul></ul>
    <script>
        // 1. 获取元素
        var btn = document.querySelector('button');
        var text = document.querySelector('textarea');
        var ul = document.querySelector('ul');
        // 绑定事件
        btn.onclick = function(){
            if(text.value == ''){
                alert('对不起，您没有输入内容')
            }else{
                var li = document.createElement('li');
                li.innerHTML = text.value
                ul.insertBefore(li, ul.children[0]);
                // 文本域输入之后清空
                text.value = '';
            }
        }
    </script>
</body>
</html>
```

#### 11.4.3 删除节点

```
node.removeChild(child)
```

​	`node.removeChild()`方法从`DOM`中删除一个子节点，返回删除的节点

​	上一个留言板案例的完善（添加了删除功能）：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        textarea {
            width: 200px;
            height: 100px;
            /* 边框为1像素的红色实线 */
            border: 1px solid red;
            resize: none;
        }
        ul {
            margin-top: 50px;
        }
        li {
            width: 300px;
            padding: 5px;
            background-color: skyblue;
            color: red;
            font-size: 14px;
            margin: 15px 0;
        }
    </style>
</head>
<body>
    <textarea name="" id="" cols="30" rows="10"></textarea>
    <button id="publish">发布</button>
    <button id="delete">删除</button>
    <ul></ul>
    <script>
        // 1. 获取元素
        var btn1 = document.getElementById('publish');
        var btn2 = document.getElementById('delete')
        var text = document.querySelector('textarea');
        var ul = document.querySelector('ul');
        // 绑定事件
        btn1.onclick = function(){
            if(text.value == ''){
                alert('对不起，您没有输入内容')
            }else{
                var li = document.createElement('li');
                li.innerHTML = text.value
                ul.insertBefore(li, ul.children[0]);
                // 文本域输入之后清空
                text.value = '';
            }
        }
        btn2.onclick = () => {
            if(ul.children.length === 0){
                btn2.disabled = true;
            }else{
                ul.removeChild(ul.children[0])
            }
        }
    </script>
</body>
</html>
```

#### 11.4.4 复制节点（克隆节点）

```
node.cloneNode()
```

​	`node.cloneNode()`方法返回调用该方法的节点的一个副本。也称为`克隆节点/拷贝节点`

​	注意：

		1. 如果括号里的参数为`空或者false`，则是`浅拷贝`，即只克隆复制节点本身，不克隆里面的内容
		1. 如果括号里的参数为`true`，则是`深拷贝`，即只克隆复制节点本身，复制标签并且复制内容

​	**案例：动态生成表格**

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221211140924207.png" alt="image-20221211140924207" />

​	案例分析：

​		① 因为里面的学生数据都是动态的，我们需要js动态生成，这里我们模拟数据，自己定义好数据。数据我们采取对象形式存储

​		② 所有的数据都是放到tbody里面的行中

​		③ 因为行很多，我们需要循环创建多个行（对应多少人）

​		④ 每个行里面又有很多单元格（对应里面的数据），我们还继续使用循环创建多个单元格，并且把数据存入里面（双重for循环）

​		⑤ 最后一列单元格是删除，需要单独创建单元格

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        table {
            width: 500px;
            margin: 100px auto;
            border-collapse: collapse;
            text-align: center;
        }

        td,
        th {
            border: 1px solid #333;
        }

        thead tr {
            height: 40px;
            background-color: #ccc;
        }
    </style>
</head>

<body>
    <table cellspacing="0">
        <thead>
            <tr>
                <th>姓名</th>
                <th>科目</th>
                <th>成绩</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>

        </tbody>
    </table>
    <script>
        // 1.先去准备好学生的数据,数组里面放对象
        var studentDatas = [{
            name: '魏璎珞',
            subject: 'JavaScript',
            score: 100
        }, {
            name: '弘历',
            subject: 'JavaScript',
            score: 98
        }, {
            name: '傅恒',
            subject: 'JavaScript',
            score: 99
        }, {
            name: '明玉',
            subject: 'JavaScript',
            score: 88
        },];
        // 2.往tbody里面创建行 有几个人（数组长度）我们就创建几行
        var tbody = document.querySelector('tbody');
        for(var i = 0; i < studentDatas.length; i++){ //外面的for循环管的是行
            // （1）创建tr行
            var tr = document.createElement('tr');
            tbody.appendChild(tr); 
            // （2）行里面创建单元格(跟数据有关系的3个单元格) td 单元格的竖向取决于每个对象里面的属性个数
            // for循环遍历对象
            for(var k in studentDatas[i]){ //里面的for循环管列 遍历对象 studentDatas是一个数组 里面加中括号再赋值才是对象
                // 创建单元格
                var td = document.createElement('td');
                td.innerHTML = studentDatas[i][k];
                // 将td放入父元素tr里面
                tr.appendChild(td);
            }
            // （3）创建有删除字样的单元格
            var deleteTd = document.createElement('td');
            deleteTd.innerHTML = '<a href="javascript:;">删除</a>'
            tr.appendChild(deleteTd);
        }
        // （4） 删除操作
        var deleteOperation = document.querySelectorAll('a');
        console.log(deleteOperation);
        for(var i = 0; i < deleteOperation.length; i++){
            deleteOperation[i].onclick = function(){
                // 点击a 删除 当前a 所在的行(链接的爸爸的爸爸)  node.removeChild(child) 
                tbody.removeChild(this.parentNode.parentNode)
            }
        }
        // 回顾：
        // for(var k in obj){
        //     k 得到的是属性名
        //     obj[k]得到的是属性值
        // }
    </script>
</body>

</html>
```

​	**提示：最后一个我们要删除的是a所在的tr，a标签与其的关系可以在此图看出：**

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221211153202901.png" alt="image-20221211153202901" />

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221211160819319.png" alt="image-20221211160819319" />

#### 11.4.5 三种动态创建元素区别

* documen.write()
* element.innerHTML()
* document.createElement()

**区别：**

	1. documen.write()是直接将内容写入页面的内容流，**但是文档流执行完毕后，它会导致页面的重绘**
	1. element.innerHTML()是将内容写入某个DOM节点，不会导致页面全部重绘
	1. element.innerHTML()创建多个元素效率更高（采取数组形式拼接，而不是拼接字符串），结构稍微复杂
	1. document.createElement()创建多个元素效率稍微低一点点，但是结构更清晰

### 12. DOM重点核心

	1. 对于JavaScript，为了能够使JavaScript操作HTML，JavaScript就有了一套自己的DOM编程接口
	1. 对于HTML，DOM使得HTML形成一棵DOM树，包含文档、元素、节点

​	关于DOM操作，我们主要针对于元素的操作。主要有创建、增、删、改、查、属性操作、事件操作

#### 12.1 创建

	1. document.write()
	1. innerHTML()
	1. createElement()

#### 12.2 增

	1. appendChild()
	1. insertBefore()

#### 12.3 删

	1. removeChild()

#### 12.4 改

​	主要修改DOM的元素属性，DOM元素的内容、属性、表单的值等

	1. 修改元素属性：`src、href、title`等
	1. 修改普通元素内容：`innerHTML、innerText`
	1. 修改表单元素：`value、type、disabled`等
	1. 修改元素样式：`style、className`

#### 12.5 查

​	主要获取查询DOM的元素：

	1. DOM提供的API方法：`getElementById、getElementByTagName` 古老用法 不太推荐
	1. H5提供的新方法：`querySelector、querySelectorAll` 提倡
	1. 利用节点操作获取元素：`父(parentNode)、子(children)、兄弟(previousElementSinbling、nextElementSibling)` 提倡

#### 12.6 属性操作

​	主要针对于自定义属性：

	1. `setAttribute`：设置DOM的属性值
	1. `getAttribute`：得到DOM的属性值
	1. `removeAttribute`：移除属性

#### 12.7 事件操作

​	给元素注册事件、采取 `事件源.事件类型 = 事件处理程序`

|   鼠标事件    |     触发条件     |
| :-----------: | :--------------: |
|   `onclick`   | 鼠标点击左键触发 |
| `onmouseover` |   鼠标经过触发   |
| `onmouseout`  |   鼠标离开触发   |
|   `onfocus`   | 获得鼠标焦点触发 |
|   `onblur`    | 失去鼠标焦点触发 |
| `onmousemove` |   鼠标移动触发   |
|  `onmouseup`  |   鼠标弹起触发   |
| `onmousedown` |   鼠标按下触发   |

### 13. 事件高级

#### 13.1 注册事件（绑定事件）

##### 13.1.1 注册事件概述

​	给元素添加事件，称为`注册事件`或者`绑定事件`

​	注册事件有两种方式：**传统方式和方法监听注册方式**

​	**传统注册方式**

	* 利用`on`开头的事件 `onclick`
	* *<button onclick = ('hi~')></button>*
	* `btn.onclick = function() 或 btn.onclick = () => {} 箭头函数没有自己的this `
	* 特点：注册事件的**唯一性**
	* 同一个元素同一个时间只能设置一个处理函数，最后注册的处理函数将会覆盖前面注册的处理函数

​	**方法监听注册方式**

	* W3C标准 推荐方式
	* `addEventListener()` 它是一个方法
	* IE9之前的IE不支持此方法，可使用`attachEvent()`代替
	* 特点：同一个元素同一个时间可以注册多个监听器
	* 按注册的顺序依次执行

##### 13.1.2 addEventListener 事件监听方式

```
eventTarget.addEventListener(type, listener[, useCapture])
```

​	`eventTarget.addEventListener()`方法将指定的监听器注册到`eventTarget（目标对象）`上，当该对象触发指定的事件时，就会执行事件处理函数

​	该方法接收三个参数：

* **type：** 事件类型字符串，比如`click`、`mouseover`，注意这里不要带`on`
* **listener：** 事件处理函数，事件发生时，会调用该监听函数
* **useCapture：**可选参数，是一个布尔值，默认是`false`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button>传统注册事件</button>
    <button>方法监听注册事件</button>
    <script>
        // 1.传统方式注册事件
        var btns = document.querySelectorAll('button')
        btns[0].onclick = () => {
            alert('hi!')
        }
        btns[0].onclick = () => {
            alert('how are you')
        } //传统事件注册方式 后面会覆盖前面

        // 2.事件监听注册事件 addEventListener 
        // （1）里面的事件类型是字符串，必定加引号，而且不带on
        btns[1].addEventListener('click', function(){
            alert(22);
        })
        btns[1].addEventListener('click', function(){
            alert(33);
        })
    </script>
</body>
</html>
```

**另：attachEvent()这个方法在mdn已经无法查到所以不做介绍**

#### 13.2 删除事件

##### 13.2.1 删除事件的方式

 	1. 传统注册方式

```
eventTarget.onclick = null
```

 2. 方法监听注册方式

    ①  `eventTarget.removeEventListener(type, listener[, useCapture]);`

    

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: skyblue;
        }
    </style>
</head>
<body>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <script>
        // 1.传统方法
        var divs = document.querySelectorAll('div');
        divs[0].onclick = () => {
            alert(11);
            divs[0].onclick = null;
        }
        
        // 2.事件监听器
        divs[1].addEventListener('click', fn) // 里面的fn 调用不用加小括号
        function fn(){
            alert(22)
            divs[1].removeEventListener('click', fn)
        }
    </script>
</body>
</html>
```

#### 13.3 DOM事件流

​	**事件流**描述的是从页面中接收事件的顺序

​	**事件**发生时会在元素节点之间按照特定的顺序传播，这个**传播过程**即为**DOM事件流**

​	比如我们给div注册了点击事件：

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221212150702783.png" alt="image-20221212150702783" />

* 事件冒泡：IE最早提出，事件开始时由最具体的元素接收，然后逐级向上传播到DOM最顶层节点的过程
* 事件捕获：网景最早提出，由DOM最顶层节点开始，然后逐级乡下传播到最具体的元素接收的过程

​	我们向水里扔一块石头，首先它会有一个下降的过程，这个过程就可以理解为从最顶层向事件发生的最具体元素（目标点）的捕获过程，之后会产生泡泡，会在最低点（最具体元素）之后漂浮到水面上，这个过程相当于事件冒泡

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221212151154786.png" alt="image-20221212151154786" />

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .father {
            overflow: hidden;
            width: 300px;
            height: 300px;
            margin: 100px auto;
            background-color: pink;
            text-align: center;
        }
        
        .son {
            width: 200px;
            height: 200px;
            margin: 50px;
            background-color: purple;
            line-height: 200px;
            color: #fff;
        }
    </style>
</head>
<body>
    <div class="father">
        <div class="son">son盒子</div>
    </div>
    <script>
        // dom事件流三个阶段 
        // 1.JS代码中只能执行捕获或者冒泡其中的一个阶段
        // 2.onclick 和 attachEvent（ie）只能得到冒泡阶段
        // 3.捕获阶段 如果addEventListener()第三个参数是true 那么则处于捕获阶段 document -> html -> body -> father -> son
        // 即使我们点了son盒子，这串代码会先alert father再alert son
        var son = document.querySelector('.son');
        son.addEventListener('click', function(){
            alert('son');
        }, true);
        var father = document.querySelector('.father');
        father.addEventListener('click', function(){
            alert('father');
        }, true)

        // 4. 冒泡阶段 如果addEventListener 第三个参数是false 那么则处于冒泡阶段 son -> father -> body -> html -> document
        // 即使我们点了father盒子，这串代码会先alert son再alert father
        father.addEventListener('click', function(){
            alert('father');
        }, false)
        son.addEventListener('click', function(){
            alert('son');
        }, false)
        document.addEventListener('click', function(){
            alert('document');
        }, false)
    </script>
</body>
</html>
```

​	**注意**

		* JS代码中只能执行捕获或者冒泡其中的一个阶段
		* `onclick`和`attachEvent`只能得到冒泡阶段
		* `addEventListener(type, listener[, useCapture])`第三个参数如果是`true`，表示在实践捕获阶段调用事件处理程序；如果是`false`（不写默认就是`false`），表示在事件冒泡阶段调用事件处理程序
		* **实际开发中我们很少使用事件捕获，我们更关注事件冒泡**
		* **有些事件是没有冒泡的，比如`onblur`、`onfocus`、`onmouseenter`、`onmouseleave`**
		* 事件冒泡有时候会带来麻烦，有时候优惠帮助很巧妙的做某些事件

#### 13.4 事件对象

##### 13.4.1 什么是事件对象

```
eventTarget.onclick = function(event){}
eventTarget.addEventListener('click', function(event){})
// 这个event就是事件对象
```

​	官方解释：event对象代表事件的状态，比如键盘按键的状态、鼠标的位置、鼠标按钮的状态

​	简单解释：事件发生后，**跟事件相关的一系列信息数据的集合**都放到这个对象里面，这个对象就是**事件对象`event`**，它有很多的属性和方法

​	比如：

* 谁绑定了这个事件
* 鼠标触发事件的话，会得到鼠标的相关信息，如鼠标位置
* 键盘触发事件的话，会得到键盘的相关信息，如按了哪个键

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <div>123</div>
    <script>
        // 事件对象
        var div = document.querySelector('div');
        // div.onclick = (event) => {

        //     console.log(event);
        // }

        div.addEventListener('click', (event) => {
            console.log(event);
        })
        // 1.event就是一个事件对象 写到我们振听函数的小括号里面 当形参来看
        // 2.事件对象只会有了事件才会存在，它是系统给我们自动创建的，不需要传递参数
        // 3.事件对象是我们事件的一系列相关数据的集合 跟时间相关的 比如鼠标点击里面就包含了鼠标的相关信息，鼠标坐标等等 如果是键盘事件 里面就包含了键盘事件的信息 比如判断用户按下了哪个键
        // 4.这个事件对象我们可以自己命名 比如 event、evt、e
        // 5.事件对象也有兼容性问题，ie678 通过window.event 兼容性写法 event = event || window.event
    </script>
</body>

</html>
```

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221212161641666.png" alt="image-20221212161641666" />

##### 13.4.2 事件对象的使用语法

```javascript
eventTarget.onclick = function(event){
	// 这个event就是事件对象，我们还喜欢写成e或者evt
}
eventTarget.addEventListener('click', function(event){
  // 这个event就是事件对象，我们还喜欢写成e或者evt
})
```

​	这个`event`是个实参，系统帮我们设定为事件对象，不需要传递实参过去

​	当我们注册事件时，`event`对象会被系统自动创建，并一次传递给时间监听器（事件处理函数）

​	事件对象本身的获取存在兼容性问题：

		1. 标准浏览器中是浏览器给方法传递的参数，只需要定义形参`e`就可以获取到
		1. IE6~8中，浏览器不会给方法传递参数，如果需要的话，则应去`window.event`中获取查找

##### 13.4.4 事件对象的常见属性和方法

|   事件对象属性方法    |                             说明                             |
| :-------------------: | :----------------------------------------------------------: |
|      `e.target`       |                 返回**触发**事件的对象 标准                  |
|    `e.srcElement`     |           返回**触发**事件的对象 非标准 ie6-8使用            |
|       `e.type`        |          返回事件的类型 比如click mouseover 不带on           |
|   `e.cancelBubble`    |               该属性组织冒泡 非标准 ie6-8使用                |
|    `e.returnValue`    | 该属性阻止默认事件（默认行为） 非标准 ie6-8使用 比如不让链接跳转 |
| `e.preventDefault()`  |     该方法阻止默认事件（默认行为） 标准 比如不让链接跳转     |
| `e.stopPropagation()` |                        阻止冒泡 标准                         |

#### 13.5 阻止事件冒泡

##### 13.5.1 阻止事件冒泡的两种方式

​	事件冒泡：开始时由最具体的元素接收，然后逐级向上传播到DOM最顶层节点

​	**阻止事件冒泡**

 * 标准写法：利用时间对象里面的`stopPropagation()`方法

   ```javascript
   e.stopPropagation()
   ```

* 非标准写法：IE6-8 利用时间对象`cancelBubble`属性

#### 13.6 事件委托（代理、委派）

```html
<ul>
  <li>a</li>
  <li>a</li>
  <li>a</li>
  <li>a</li>
  <li>a</li>
  <li>a</li>
  <li>a</li>
  <li>a</li>
</ul>
```

​	点击每个`li`都会弹出对话框，以前需要给每个`li`注册事件，是非常辛苦的，而且访问`DOM`次数越多，这就会延长整个页面的交互就绪时间

​	**事件委托**

​		事件委托也称为事件代理，在`jQuery`里面称为事件委派

​	**事件委托的原理**

​		**不是每个子节点单独设置事件监听器，而是事件监听器设置在其父节点上，然后利用冒泡原理影响设置每个子节点**

​		以上案例：给`ul`注册点击事件，然后利用事件对象的`target`来找到当前点击的`li`，事件会冒泡到`ul`上，`ul`有注册事件，就会触发事件监听器

​	**事件委托的作用**

​		我们只操作了一次`DOM`，提高了程序的性能

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
        <li>a</li>
    </ul>
    <script>
        // 事件委托的核心原理：给父节点添加侦听器，利用时间冒泡影响每一个子节点
        var ul = document.querySelector('ul');
        ul.addEventListener('click', function(e) {
            alert('test')
            // 干掉别人 
            for(var i = 0; i < ul.children.length; i++){
                ul.children[i].style.backgroundColor = ''
            }
            // e.target 这个可以得到我们点击的对象
            e.target.style.backgroundColor = 'red'
        })
    </script>
</body>
</html>
```

#### 13.7 常用的鼠标事件（见12.7）

 	1. 禁止鼠标右键菜单

​	`contextmenu`主要控制应该何时显示上下文菜单，主要用于程序员取消默认的上下文菜单

```javascript
document.addEventListener('contextmenu', function(e){
	e.preventDecault();
})
```

2. 禁止鼠标选中（selectstart 开始选中）

```javascript
document.addEventListener('selectstart', function(e){
	e.preventDefault();
})
```

##### 13.7.2 鼠标事件对象

​	`event`对象代表事件的状态，跟事件相关的一系列信息的集合

​	

| 鼠标事件对象 |                  说明                  |
| :----------: | :------------------------------------: |
| `e.clientX`  | 返回鼠标相对于浏览器窗口可视区的X坐标  |
| `e.clientY`  | 返回鼠标相对于浏览器窗口可视区的Y坐标  |
|  `e.pageX`   | 返回鼠标相对于文档页面的X坐标 IE9+支持 |
|  `e.pageY`   | 返回鼠标相对于文档页面的Y坐标 IE9+支持 |
| `e.screenX`  |     返回鼠标相对于电脑屏幕的X坐标      |
| `e.screenY`  |     返回鼠标相对于电脑屏幕的Y坐标      |

```javascript
        // 鼠标事件对象 MouseEvent
        document.addEventListener('click', function(e){
            // 1.client 鼠标在可视区的x和y坐标
            console.log(e.clientX);
            console.log(e.clientY); 
            // 2.page 鼠标在页面文档的x和y坐标
            console.log(e.pageX);
            console.log(e.pageY);
        })
```

**案例：跟随鼠标的天使**

​	让一个天使图片一直跟着鼠标移动

​		① 鼠标不断的移动，使用鼠标事件：`onmousemove`

​		② 在页面中移动，给`document`注册事件

​		③ 图片要移动距离，而且不占位置，我们使用绝对定位即可

​		④ 核心原理：每次鼠标移动，我们都会获得最新的鼠标坐标，把这个x和y坐标作为图片的`top`和`left`值就可以移动图片

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        img {
            position: absolute;
        }
    </style>
</head>
<body>
    <img src="./images/angel.gif" alt="">
    <script>
        var angel = document.querySelector('img');
        document.addEventListener('mousemove', function(e){
            // 1.mousemove只要我们移动鼠标1px 就会触发这个事件
            var x = e.pageX;
            var y = e.pageY;
            console.log('指针的x坐标为：' + x, '指针的y坐标为：' + y);
            // 3. 千万不要忘记给top left添加px单位
            angel.style.left = x + 'px';
            angel.style.top = y + 'px';
        })
    </script>
</body>
</html>
```

#### 13.8 常用键盘事件

##### 13.8.1 常用键盘事件

​	事件除了使用鼠标触发，还可以用键盘触发

|   键盘事件   |                           触发事件                           |
| :----------: | :----------------------------------------------------------: |
|  `onkeyup`   |                   某个键盘按键被松开时触发                   |
| `onkeydown`  |                   某个键盘按键被按下时触发                   |
| `onkeypress` | 某个键盘按键被按下时触发 **但是它不能识别功能键 比如 Ctrl shift 箭头等** |

```javascript
        // document.onkeyup = () => {
        //     console.log('我弹起了');
        // }
        document.addEventListener('keyup', () => {
            console.log('我弹起了');
        })
        document.addEventListener('keydown', () => {
            console.log('我按下了');
        })
        document.addEventListener('keypress', () => {
            console.log('我按下了press');
        })
```

​	注意：

	1. 如果使用`addEventListener()`不需要加on
	1. `onkeypress`和前面2个的区别是，它不识别功能键，比如左右箭头，Ctrl、shift等
	1. 三个事件的执行顺序是：`keydown-->keypress-->keyup`

##### 13.8.2 键盘事件对象

| 键盘事件对象属性 |       说明        |
| :--------------: | :---------------: |
|    `keyCode`     | 返回该键的ASCII值 |

​	注意：`onkeydown`和`onkeyup`不区分字母大小写，`onkeypress`区分字母大小写。我们实际开发中更多使用的是`keydown`和`keyup`，它能识别所有的键（包括功能键），`keypress`不能识别功能键，但是`keyCode`属性能区分大小写，返回不同的ASCII值

​	**案例：模拟京东按键输入内容**

​		当我们按下`s`键，光标就定位到搜索框

​	案例分析：

​		① 核心思路：检测用户是否按下了`s`键，如果按下`s`键，就把光标定位到搜索框里面

​		② 使用键盘事件对象里面的`keyCode`判断用户按下的是否是`s`键

​		③ 搜索框获得焦点：使用JS里面的`focus()`方法

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" name="" id="">
    <script>
       var search = document.querySelector('input');;
       document.addEventListener('keyup', (e) => {
            if(e.keyCode == 83){
                search.focus();
            }
       }) 
    </script>
</body>
</html>
```

​	**案例：模拟京东快递单号查询**

​		要求：当我们在文本框输入内容时，文本框上面自动显示大字号的内容

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221214152249522.png" alt="image-20221214152249522" />

​	案例分析：

​		① 快递单号输入内容时，上面的大号字体盒子（con）显示（这里的字号更大）

​		② 表单检测用户输入：给表单添加键盘事件

​		③ 同时把快递单号里面的值(value)获取过来赋值给con盒子(innerText)作为内容

​		④ 如果快递单号里面的内容为空，就隐藏大号字体（con）盒子

​		**⑤ 注意：`keydown`和`keypress`在文本框里面的特点：他们两个事件触发的时候，文字还没有落入文本框中**

​		⑥ 当我们失去焦点，就隐藏这个con盒子

​		⑦ 当我们获得焦点，并且文本框内容不为空，就显示这个盒子

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .search {
            position: relative;
            width: 178px;
            margin: 100px;
        }

        .con {
            display: none;
            position: absolute;
            top: -40px;
            width: 171px;
            border: 1px solid rgba(0, 0, 0, .2);
            box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
            padding: 5px 0;
            font-size: 18px;
            line-height: 20px;
            color: #333;
        }

        .con::before {
            content: '';
            width: 0;
            height: 0;
            position: absolute;
            top: 28px;
            left: 18px;
            border: 8px solid #000;
            border-style: solid dashed dashed;
            border-color: #fff transparent transparent;
        }
    </style>
</head>

<body>
    <div class="search">
        <div class="con">123</div>
        <input type="text" placeholder="请输入您的快递单号" class="jd">
    </div>
    <script>
        var con = document.querySelector('.con');
        var jd_input = document.querySelector('.jd');
        jd_input.addEventListener('keyup', () => {
            if (jd_input.value == '') {
                con.style.display = 'none';
            }else{
                con.style.display = 'block';
                con.innerHTML = jd_input.value
            }
        })
        // 失去焦点
        jd_input.addEventListener('blur', () => {
            con.style.display = 'none'
        })
        // 获得焦点
        jd_input.addEventListener('focus', () => {
            if (jd_input.value !== '') {
                con.style.display = 'block';
            }
        })
    </script>
</body>

</html>
```

### 14. BOM浏览器对象模型

#### 14.1 BOM概述

##### 14.1.1 什么是BOM

​	`BOM(Browser Object Model)`即**浏览器对象模型**，它提供了独立于内容而与**浏览器窗口进行交互的对象**，其核心对象是`window`

​	`BOM`由一系列相关的对象构成，并且每个对象都提供了很多方法与属性

​	`BOM`缺乏标准，`JavaScript`语法的标准化组织是ECMA，`DOM`的标准化组织是W3C

，`BOM`最初是Netscape浏览器标准的一部分

|               DOM                |                    BOM                     |
| :------------------------------: | :----------------------------------------: |
|           文档对象模型           |               浏览器对象模型               |
| 把【文档】当做一个【对象】来看待 |     把【浏览器】当做一个【对象】来看待     |
|      顶级对象是**document**      |            顶级对象是**window**            |
|     主要学习的是操作页面元素     |    主要学习的是浏览器窗口交互的一些对象    |
|           W3C标准规范            | 浏览器厂商在各自浏览器上定义的，兼容性较差 |

##### 14.1.2 BOM构成

​	`BOM`比`DOM`更大，它包含`DOM`

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221214162023744.png" alt="image-20221214162023744" />

​	**`window`对象是浏览器的顶级对象**，它具有双重角色

		1. 它是JS访问浏览器窗口的一个接口
		1. 它是一个全局对象，定义在全局作用域中的变量、函数都会变成`window`对象的属性和方法

​	在调用的时候可以省略`window`，前面学习的对话框都属于`window`对象的方法，如`alert()`、`promot()`等

#### 15.2 window对象的常见事件

##### 15.2.1 窗口加载事件

```javascript
window.onload = function(){}
//或者
window.addEventListener('load', function())
```

​	`window.onload`是窗口（页面）加载事件，当文档内容完全加载会触发该事件（包括图像、脚本文件、CSS文件等），就调用的处理函数

​	注意：

	1. 有了`window.onload`就可以把JS代码写到页面元素的上方，因为`onload`是等页面内容全部加载完毕，再去执行处理函数
	1. `window.onload`传统注册事件的方式只能写一次，如果有多个，会以最后一个`window.onload`为准

```javascript
document.addEventListener('DOMContentLoaded', function(){});
```

​	`DOMContentLoaded`事件触发时，仅当`DOM`加载完成，不包括样式表，图片，flash等等，IE9以上才支持

​	如果页面的图片很多的话，从用户访问到`onload`触发可能需要较长时间，交互效果就不能实现，必然影响用户的体验，因此`DOMContentLoaded`事件比较合适

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script>
        // window.onload = function() {
        //     var btn = document.querySelector('button');
        //     btn.addEventListener('click', function() {
        //         alert('点击我');
        //     })
        // }
        // window.onload = function() {
        //     alert(22);
        // }
        window.addEventListener('load', function() {
            var btn = document.querySelector('button');
            btn.addEventListener('click', function() {
                alert('点击我');
            })
        })
        window.addEventListener('load', function() {

            alert(22);
        })
        document.addEventListener('DOMContentLoaded', function() {
                alert(33);
            })
            // load 等页面内容全部加载完毕，包含页面dom元素 图片 flash  css 等等
            // DOMContentLoaded 是DOM 加载完毕，不包含图片 falsh css 等就可以执行 加载速度比 load更快一些
    </script>
</head>

<body>

    <button>点击</button>

</body>

</html>
```

##### 15.2.2 调整窗口大小事件

```javascript
window.onresize = function(){}
window.addEventListener("resize", function(){});
```

​	`window.onresize`是调整窗口大小加载事件，当触发时就调用的处理函数

​	注意：

1. 只要窗口大小发生像素变化，就会触发这个事件
2. 我们经常利用这个事件完成响应式布局。`window.innerWidth` 当前屏幕的宽度

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
        }
    </style>
</head>

<body>
    <script>
        window.addEventListener('load', function() {
            var div = document.querySelector('div');
            window.addEventListener('resize', function() {
                console.log(window.innerWidth);

                console.log('变化了');
                if (window.innerWidth <= 800) {
                    div.style.display = 'none';
                } else {
                    div.style.display = 'block';
                }

            })
        })
    </script>
    <div></div>
</body>

</html>
```

#### 15.3 定时器

##### 15.3.1 两种定时器

​	`window`对象给我们提供了2个非常好用的方法-**定时器**

	* `setTimeout()`
	* `setInterval()`

​	`setTimeout()` 延时时间到了，就去调用这个回调函数，只调用一次 就结束了这个定时器

​	`setInterval()` 每隔这个延时时间，就去调用这个回调函数，会调用很多次，重复调用这个函数

##### 15.3.2 setTimeout定时器

```javascript
window.setTimeout(调用函数, 延迟的毫秒数);
```

​	`setTimeout()`方法用于设置一个定时器，该定时器到期后执行调用函数

​	`setTimeout()`这个调用函数我们也称为**回调函数callback**

​	普通函数时按照代码顺序直接调用，而这个函数**需要等待时间**，时间到了才调用这个函数，因此成为回调函数

​	以前我们学的`element.onclick = function(){}`或者`element.addEventListener('click', fn)`，里面的函数也是回调函数

```javascript
        // 1.setTimeout
        // window在调用的时候可以省略
        // 这个延时事件单位是毫秒，但是可以省略 如果省略则默认为0
        // 这个调用函数可以直接写函数，还可以写 函数名
        // 页面中可能有很多个定时器，我们经常给定时器加标识符（名字）
        // setTimeout(() => {
        //     console.log('时间到了');
        // }, 2000);
        function callback() {
            console.log('爆炸了');
        }
        setTimeout(callback, 3000)
        setTimeout('callback()', 3000) //不提倡这个写法
```

​	**案例：5秒后自动关闭的广告**

​		① 核心思路：五秒之后，就把这个广告隐藏起来

​		② 用定时器`setTimeout`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <img src="./images/ad.jpg" alt="">
    <script>
        var ad = document.querySelector('img');
        setTimeout(() => {
            ad.style.display = 'none'
        }, 5000);
    </script>
</body>
</html>
```

##### 15.3.3 停止setTimeout()定时器

```javascript
window.clearTimeout(timeoutID)
```

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button>点我停止定时器</button>
    <script>
        var timer = setTimeout(() => {
            console.log('爆炸了');
        }, 5000);
        var btn = document.querySelector('button');
        btn.addEventListener('click', () => {
            clearTimeout(timer)
        })
    </script>
</body>
</html>
```

##### 15.3.4 setInterval()定时器

```javascript
window.setInterval(回调函数, 间隔的毫秒数);
```

​	`setInterval()`方法重复调用一个函数，每隔这个时间，就去调用一次回调函数

​	注意：

	1. `window`可以省略
	1. 这个调用函数可以**直接写函数，或者写函数名**或者采取字符串'函数名()'三种形式
	1. 间隔的毫秒数省略默认是0，如果写，必须是毫秒，表示每隔多少毫秒就自动调用这个函数
	1. 因为定时器可能有很多，所以我们经常给定时器赋值一个标识符

```javascript
        var timer = setInterval(() => {
            console.log('继续输出');
        }, 1000);
```

**案例：倒计时**

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221214174115487.png" alt="image-20221214174115487" />

​	案例分析：

​		① 这个倒计时是不断变化的，因此需要定时器来自动变化(setInterval)

​		② 三个黑色盒子连分别存放时分秒

​		③ 三个黑色盒子利用`innerHTML`放入计算的小时分钟秒数

​		④ 第一次执行也是间隔毫秒数，因此刚刷新页面会有空白

​		⑤ 最好采取封装函数的方式，这样可以先调用一次这个函数，防止刚开始刷新页面有空白问题

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        span {
            display: inline-block;
            width: 40px;
            height: 40px;
            font-size: 20px;
            text-align: center;
            line-height: 40px;
            color: white;
            background-color: black;
        }
    </style>
</head>

<body>
    <div>
        <span class="hour">1</span>
        <span class="minute">2</span>
        <span class="second">3</span>
    </div>
    <script>
        var hour = document.querySelector('.hour');
        var minute = document.querySelector('.minute');
        var second = document.querySelector('.second');
        var userMileTile = +new Date('2022-12-20 18:00:00') // 传参意味着将输入的参数进行时间戳计算
        countDown() //我们先调用一次这个函数，防止刷新页面出现空白
        setInterval(countDown, 1000);
        function countDown() {
            var nowTime = +new Date() //不传参返回的是当前时间减去1970的毫秒数
            // var userMileTile = +new Date(userTime) // 传参意味着将输入的参数进行时间戳计算
            var countDownTime = (userMileTile - nowTime) / 1000 //转换为秒数
            d = parseInt(countDownTime / 60 / 60 / 24); //计算天数
            d = d > 10 ? d : '0' + d
            h = parseInt(countDownTime / 60 / 60 % 24); //计算小时
            h = h > 10 ? h : '0' + h
            hour.innerHTML = h; //把剩余的小时给黑色盒子
            m = parseInt(countDownTime / 60 % 60); //计算分数
            m = m > 10 ? m : '0' + m
            minute.innerHTML = m;
            s = parseInt(countDownTime % 60); //计算当前秒数
            s = s > 10 ? s : '0' + s
            second.innerHTML = s;
        }
    </script>
</body>

</html>
```

##### 13.3.5 停止setInterval()定时器

```
window.clearInterval(intervalID);
```

​	`clearInterval()`方法取消了先前通过调用`setInterval()`建立的定时器

​	注意：

1. window可以省略
2. 里面的参数就是定时器的标识符

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <button class="begin">开启定时器</button>
    <button class="stop">停止定时器</button>
    <script>
        var begin = document.querySelector('.begin');
        var stop = document.querySelector('.stop');
        var timer = null; //因为两个监听按钮传入的函数作用域不同，为了读取到这个定时器，所以我们选择把timer写到全局变量来
        begin.addEventListener('click', () => {
            timer = setInterval(() => {
                console.log('你好吗');
            }, 1000);
        })
        
        stop.addEventListener('click', () => {
            clearInterval(timer)
        })
    </script>
</body>
</html>
```

**案例：发送短信**

​	点击该按钮后，该按钮60s内不能再次点击，防止重复发送短信

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221215144543677.png" alt="image-20221215144543677" style="zoom:50%;" />

​	案例分析

​		① 按钮点击之后，会禁用`disabled`为`true`

​		② 同时按钮里面的内容会变化，注意button里面的内容通过`innerHTML`来修改

​		③ 里面的秒数是有变化的，因此需要用到定时器

​		④ 定义一个变量，在定时器里面不断递减

​		⑤ 如果变量为0，说明到了时间，我们需要停止定时器，并且复原按钮到初始状态

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    手机号码：<input type="number" name="" id=""> <button>发送</button>
    <script>
        var send = document.querySelector('button');
        send.addEventListener('click', () => {
            var limit = 5;
            if (send.disabled = true) {
                !send.disabled;
                var timer = setInterval(() => {
                    send.innerHTML = '还剩' + limit-- + '秒再次点击';
                    if (limit == -1) {
                        send.disabled = false;
                        send.innerHTML = '发送';
                        clearInterval(timer);
                    }
                }, 1000);
            }
        })


    </script>
</body>

</html>
```

​	另一种实现思路：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    手机号码：<input type="number" name="" id=""> <button>发送</button>
    <script>


        //另一种实现思路：
        var send = document.querySelector('button');
        var limit = 5;
        send.addEventListener('click', function(){
            this.disabled = true;
            var timer = setInterval(() => {
                if (limit == 0) {
                    //清除定时器和复原按钮
                    clearInterval(timer);
                    send.disabled = false;
                    send.innerHTML = '发送';
                    limit = 5 //重新开始
                }else{
                    send.innerHTML = '还剩下' + limit + '秒再次点击';
                    limit--;
                }
            }, 1000);
        })
    </script>
</body>

</html>
```

##### 13.3.6 this

​	`this`的指向在函数定义的时候是确定不了的，只有函数执行的时候才能确定`this`到底指向谁，一般情况下`this`的最终指向是那个**调用它的对象**

​	现阶段我们先了解一下几个`this`指向

	1. 全局作用域或者普通函数中`this`指向全局对象`window`(注意定时器里面的`this`指向`window`)
	1. 方法调用中，谁调用方法，this就指向谁

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <button>点击</button>
    <script>
        // this 指向问题 一般情况下this的最终指向的是那个调用它的对象

        // 1. 全局作用域或者普通函数中this指向全局对象window（ 注意定时器里面的this指向window）
        console.log(this);

        function fn() {
            console.log(this);

        }
        window.fn();
        window.setTimeout(function() {
            console.log(this);

        }, 1000);
        // 2. 方法调用中谁调用this指向谁
        var o = {
            sayHi: function() {
                console.log(this); // this指向的是 o 这个对象

            }
        }
        o.sayHi();
        var btn = document.querySelector('button');
        // btn.onclick = function() {
        //     console.log(this); // this指向的是btn这个按钮对象

        // }
        btn.addEventListener('click', function() {
                console.log(this); // this指向的是btn这个按钮对象

            })
            // 3. 构造函数中this指向构造函数的实例
        function Fun() {
            console.log(this); // this 指向的是fun 实例对象

        }
        var fun = new Fun();
    </script>
</body>

</html>
```

#### 13.4 JavaScript执行机制

##### 13.4.1 JS是单线程

​	JavaScript语言的一大特点是**单线程**，也就是说，**同一个时间只能做一件事**。这是因为JavaScript这门脚本语言诞生的使命所致——JavaScript是为处理页面中用户的交互，以及操作DOM而诞生的。比如我们对某个DOM元素进行添加和删除操作，不能同时进行。应该先进行添加，之后再删除

​	单线程就意味着，所有任务需要排队，前一个任务结束，才会执行后一个任务。这样所导致的问题是：如果JS执行的时间过长，就会造成页面的渲染不连贯，导致页面渲染加载阻塞

##### 13.4.2 同步和异步

​	为了解决这个问题，利用多核CPU的计算能力，HTML5提出了`Web Worker`标准，允许JavaScript脚本创建多个线程，于是JS中出现了**同步**和**异步**

​	**同步**

​		前一个任务结束之后再执行后一个任务，程序的执行顺序与任务的排列顺序是一直的、同步的。比如做饭的同步做法：我们要烧水煮饭，等水开了（10min之后），再去切菜、炒菜

​	**异步**

​		你在做一件事情时，因为这件事情会花费很长时间，在做这件事的同时，你还可以去处理其他事情。比如做饭的异步做法：我们在烧水的同时，去切菜，炒菜

​	**它们本质的区别：这条流水线上各个流程的执行顺序不同**

##### 	**同步任务**

​		同步任务都在主线程上执行，形成一个执行栈

​	**异步任务**

​		JS的异步是通过回调函数实现的

​		一般而言，异步任务有以下三种类型：

1. 普通事件，如`click`、`resize`等
2. 资源加载，如`load`、`error`等
3. 定时器，如`setInterval`、`setTimeout`等

​		异步任务相关**回调函数**添加至**任务队列**中（任务队列也称为消息队列）<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221216155016851.png" alt="image-20221216155016851" style="zoom:50%;" />

##### 13.4.3 JS执行机制

	1. 先执行**执行栈中的同步任务**
	1. 异步任务（回调函数）放入任务队列中
	1. 一旦执行栈中的所有同步任务执行完毕，系统就会按次序读取**任务队列**中的异步任务，于是被读取的异步任务结束等待状态，进入执行栈，开始执行

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221216155431300.png" alt="image-20221216155431300" style="zoom:50%;" />

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221216160130585.png" alt="image-20221216160130585" />

​	由于主线程不断的重复获得任务、执行任务、再获取任务、再执行，所以这种机制被称为**事件循环（event loop）**

#### 13.5 location对象

##### 13.5.1 什么是location对象

​	`window`对象给我们提供了一个**`location`属性**用于**获取或设置窗体的URL**，并且可以用于**解析URL**。因为这个属性返回的是一个对象，所以我们将这个属性也称为*location对象*

##### 13.5.2 URL

​	**统一资源定位符（Uniform Recource Locator,URL）**是互联网上标准资源的地址。互联网上的每个文件都有一个唯一的`URL`,它包含的信息指出文件的位置以及浏览器应该怎么处理它

​	URL的一般语法格式为：

```
protocol://host[:post]/path/[?query]#fragment
http://www.itcast.cn/index.html?name=andy&age=18#link
```

|    组成    |                             说明                             |
| :--------: | :----------------------------------------------------------: |
| `protocol` |              通信协议 常用的有http,ftp,maito等               |
|   `host`   |                 主机（域名） www.itheima.com                 |
|   `port`   |   端口号 可选 省略使用方案的默认端口 如http的默认端口为80    |
|   `path`   | 路径 由0个或多个`/`符号隔开的字符串，一般用来表示主机上的一个目录或文件地 |
|  `query`   |           参数 以键值对的形式，通过`&`符号分割开来           |
|  fragment  |                片段 #后面内容常见于链接、锚点                |

##### 13.5.3 location对象的属性

|  location对象属性   |               返回值               |
| :-----------------: | :--------------------------------: |
|   `location.href`   |        获取或者设置整个 URL        |
|   `location.host`   |  返回主机（域名）www.itheima.com   |
|   `location.port`   | 返回端口号 如果未写，返回空字符串  |
| `location.pathname` |              返回路径              |
|  `location.search`  |              返回参数              |
|   `location.hash`   | 返回片段 #后面内容 常见于链接 锚点 |

​	重点记住：**href、search**

​	**案例：获取URL参数数据**

​		主要练习数据在不同页面中的传递

​	案例分析：

​		① 第一个登录页面，里面有提交表单，`action`提交到`index.html`页面

​		② 第二个页面，可以使用第一个页面的参数，这样实现了一个数据在不同页面之间的传递效果

​		③ 第二个页面之所以可以使用第一个页面的数据，是利用了URL里面的`location.search`参数

​		④ 在第二个页面中，需要把这个参数提取

​		⑤ 第一步 利用`substr`去掉`?`

​		⑥ 第二步 利用`=`号分割 键和值：`split('=')`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="index.html">
        <input type="text" name="username">
        <input type="submit" value="登录">
    </form>
</body>
</html>
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div></div>
    <script>
        console.log(location.search); //?username=xxx
        // 1.先去掉 substr(起始的位置, 截取几个字符)
        var params = location.search.substr(1) //uname=xxx
        console.log(params);
        // 2.利用=把字符串分割为数组
        var arr = params.split('=')
        console.log(arr);
        var div = document.querySelector('div')
        // 3.把数据写入div中
        div.innerHTML = arr[1] + '欢迎你'
    </script>
</body>
</html>
```

##### 13.5.4 location对象的方法

|   location对象方法   |                            返回值                            |
| :------------------: | :----------------------------------------------------------: |
| `location.assign()`  |  跟`href`一样，可以跳转页面（也称为重定向页面） 有历史记录   |
| `location.replace()` |        替换当前页面，因为不记录历史，所以不能后退页面        |
| `location.reload()`  | 重新加载页面，相当于刷新按钮或者F5 如果参数为`true`， 强制刷新 `ctrl+F5` |

####  13.6 navigator对象

​	`navigator`对象包含有关浏览器的信息，它有很多属性，我们最常用的是`userAgent`，该属性可以返回由客户机发送服务器的user-agent头部的值 可以在浏览器控制台输入`navigator`来查看相关属性及方法

​	下面前端代码可以判断用户使用哪个终端打开页面，实现跳转

```javascript
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            window.location.href = "../H5/index.html"; //手机
        }
```

#### 13.7 history对象

​	`window`对象给我们提供了一个`history`对象，与浏览器历史记录进行交互。该对象包含用户（在浏览器窗口中）访问过的URL

| history对象方法 |                             作用                             |
| :-------------: | :----------------------------------------------------------: |
|    `back()`     |                           后退功能                           |
|   `forword()`   |                           前进功能                           |
|    go(param)    | 前进后退功能 如果参数是n，则前进n个页面 如果参数是-n，则后退n个页面 |

### 14. PC端网页特效

#### 14.1 元素偏移量offset系列

##### 14.1.1 offset概述

​	offset翻译过来就是偏移量，我们使用offset系列相关属性可以**动态的**的大该元素的位置（偏移）、大小等

* 获得元素距离带有定位父元素的位置
* 获取元素自身的大小（宽度高度）
* 注意：返回的数值都不带单位

​	offset系列常用属性：

|     offset系列属性     |                             作用                             |
| :--------------------: | :----------------------------------------------------------: |
| `element.offsetParent` | 返回作为该元素带有定位的父级元素 如果父级都没有定位则返回`body` |
|  `element.offsetTop`   |             返回元素相对带有定位父元素上方的偏移             |
|  `element.offsetLeft`  |            返回元素相对带有定位父元素上边框的偏移            |
| `element.offsetWidth`  | 返回自身包括`padding`、边框、内容区的宽度，返回数值不带单位  |
| `element.offsetHeight` | 返回自身包括`padding`、边框、内容区的高度，返回数值不带单位  |

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        .father {
            /* position: relative; */
            width: 200px;
            height: 200px;
            background-color: pink;
            margin: 150px;
        }
        
        .son {
            width: 100px;
            height: 100px;
            background-color: purple;
            margin-left: 45px;
        }
        
        .w {
            height: 200px;
            background-color: skyblue;
            margin: 0 auto 200px;
            padding: 10px;
            border: 15px solid red;
        }
    </style>
</head>

<body>
    <div class="father">
        <div class="son"></div>
    </div>
    <div class="w"></div>
    <script>
        // offset 系列
        var father = document.querySelector('.father');
        var son = document.querySelector('.son');
        // 1.可以得到元素的偏移 位置 返回的不带单位的数值  
        console.log(father.offsetTop);
        console.log(father.offsetLeft);
        // 它以带有定位的父亲为准  如果么有父亲或者父亲没有定位 则以 body 为准
        console.log(son.offsetLeft);
        var w = document.querySelector('.w');
        // 2.可以得到元素的大小 宽度和高度 是包含padding + border + width 
        console.log(w.offsetWidth);
        console.log(w.offsetHeight);
        // 3. 返回带有定位的父亲 否则返回的是body
        console.log(son.offsetParent); // 返回带有定位的父亲 否则返回的是body
        console.log(son.parentNode); // 返回父亲 是最近一级的父亲 亲爸爸 不管父亲有没有定位
    </script>
</body>

</html>
```



##### 14.1.2 offset与style区别

|                        offset                        |                            style                             |
| :--------------------------------------------------: | :----------------------------------------------------------: |
|         `offset`可以得到任意样式表中的样式值         | `style`只能得到行内样式表中的样式值<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221221115603547.png" alt="image-20221221115603547" />
 |
|          `offset`系列获得的数值是没有单位的          |            `style.width`获得的是带有单位的字符串             |
|       `offsetWidth`包括`padding+border+width`        |        `style.width`获得不包含`padding`和`border`的值        |
|   `offsetWidth`等属性是只读属性，只能获取不能赋值    |        `style.width`是可读写属性，可以获取也可以赋值         |
| **所以，我们想要获取元素大小位置，用`offset`更合适** |     **所以，我们想要给元素更改值，则需要用`style`改变**      |

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            width: 200px;
            height: 200px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <div class="box"></div>
    <script>
        // offset与style的区别
        var box = document.querySelector('.box');
        console.log(box.offsetWidth);
        console.log(box.style.width);
    </script>
</body>
</html>
```

**案例：获取鼠标在盒子内的坐标**

​	分析：

​		① 我们在盒子内点击，想要得到鼠标距离盒子左右的距离

​		② 首先得到鼠标在页面中的坐标（e.pageX，e.pageY）

​		③ 其次得到盒子在页面中的距离（box.offsetLeft，box.offsetTop）

​		④ 用鼠标距离页面的坐标减去盒子在页面中的距离 的到鼠标在盒子内的坐标

​		⑤ 如果想要移动一下鼠标，就要获取最新的坐标，使用鼠标移动事件`mousemove`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box {
            width: 300px;
            height: 300px;
            background-color: pink;
            margin: 200px;
        }
    </style>
</head>
<body>
    <div class="box"></div>
    <script>
        var box = document.querySelector('.box');
        box.addEventListener('mousemove', (e) => {
            // console.log(e.pageX);
            // console.log(e.pageY);
            var x = e.pageX - box.offsetLeft;
            var y = e.pageY - box.offsetTop;
            box.innerHTML = 'x坐标是:' + x + ',y坐标是:' + y;
        })
    </script>
</body>
</html>
```

**案例：模态框拖拽**

​	弹出框，我们也成为模态框

1. 点击弹出层，会弹出模态框，并且显示灰色半透明的遮挡层
2. 点击关闭按钮，可以关闭模态框，并且同时关闭灰色半透明遮挡层
3. 鼠标放到模态框最上面一行，可以按住鼠标拖拽模态框在页面中移动
4. 鼠标松开，可以停止拖动模态框移动

​	案例分析：

​		① 点击弹出层，模态框和遮挡层就会显示出来`display: block;`

​		② 点击关闭按钮，模态框和遮挡层就会隐藏起来`display: none;`

​		③ 在页面中拖拽的原理：鼠标按下并且移动，之后松开鼠标

​		④ 触发事件是`鼠标按下mousedown`，`鼠标移动mousemove`，`鼠标松开mouseup`

​		⑤ 拖拽过程：鼠标移动过程中，获得最新的值赋值给模态框的`left`和`top`值，这样模态框就可以跟着鼠标走了

​		⑥ 鼠标按下触发的事件源是最上面一行 id为title

​		⑦ 鼠标的坐标减去鼠标在盒子内的坐标，才是模态真正的位置

​		⑧ **鼠标按下**，我们就可以得到鼠标在盒子内的坐标

​		⑨**鼠标移动，**就让模态框的坐标设置为：鼠标在盒子的坐标 - 盒子坐标即可 注意移动事件写在按下事件里面

​		⑩**鼠标松开，**就停止拖拽，就是可以让鼠标移动事件解除

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .login-header {
            width: 100%;
            text-align: center;
            height: 30px;
            font-size: 24px;
            line-height: 30px;
        }
        
        ul,
        li,
        ol,
        dl,
        dt,
        dd,
        div,
        p,
        span,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        a {
            padding: 0px;
            margin: 0px;
        }
        
        .login {
            display: none;
            width: 512px;
            height: 280px;
            position: fixed;
            border: #ebebeb solid 1px;
            left: 50%;
            top: 50%;
            background: #ffffff;
            box-shadow: 0px 0px 20px #ddd;
            z-index: 9999;
            transform: translate(-50%, -50%);
        }
        
        .login-title {
            width: 100%;
            margin: 10px 0px 0px 0px;
            text-align: center;
            line-height: 40px;
            height: 40px;
            font-size: 18px;
            position: relative;
            cursor: move;
        }
        
        .login-input-content {
            margin-top: 20px;
        }
        
        .login-button {
            width: 50%;
            margin: 30px auto 0px auto;
            line-height: 40px;
            font-size: 14px;
            border: #ebebeb 1px solid;
            text-align: center;
        }
        
        .login-bg {
            display: none;
            width: 100%;
            height: 100%;
            position: fixed;
            top: 0px;
            left: 0px;
            background: rgba(0, 0, 0, .3);
        }
        
        a {
            text-decoration: none;
            color: #000000;
        }
        
        .login-button a {
            display: block;
        }
        
        .login-input input.list-input {
            float: left;
            line-height: 35px;
            height: 35px;
            width: 350px;
            border: #ebebeb 1px solid;
            text-indent: 5px;
        }
        
        .login-input {
            overflow: hidden;
            margin: 0px 0px 20px 0px;
        }
        
        .login-input label {
            float: left;
            width: 90px;
            padding-right: 10px;
            text-align: right;
            line-height: 35px;
            height: 35px;
            font-size: 14px;
        }
        
        .login-title span {
            position: absolute;
            font-size: 12px;
            right: -20px;
            top: -30px;
            background: #ffffff;
            border: #ebebeb solid 1px;
            width: 40px;
            height: 40px;
            border-radius: 20px;
        }
    </style>
</head>
<body>
    <div class="login-header"><a id="link" href="javascript:;">点击弹出登录框</a></div>
    <div id="login" class="login">
        <div id="title" class="login-title">登录会员
            <span><a id="closeBtn" href="javascript:void(0);" class="close-login">关闭</a></span>
        </div>
        <div class="login-input-content">
            <div class="login-input">
                <label for="">用户名：</label>
                <input type="text" placeholder="请输入用户名" name="info[username]" id="username" class="list-input">
            </div>
            <div class="login-input">
                <label for="">登录密码：</label>
                <input type="password" placeholder="请输入密码" name="info[password]" id="password" class="list-input">
            </div>
        </div>
        <div id="loginBtn" class="login-button"><a href="javascript:void(0);" id="login-button-submit">登录</a></div>
    </div>
    <!-- 遮盖层 -->
    <div id="bg" class="login-bg"></div>

    <script>
        // 获取元素
        var login = document.querySelector('.login');
        var mask = document.querySelector('#bg');
        var link = document.querySelector('#link');
        var closeBtn = document.querySelector('#closeBtn');
        var title = document.querySelector('.login-title')
        // 点击弹出层这个链接 link 让mask和login显示出来
        link.addEventListener('click', () => {
            mask.style.display = 'block';
            login.style.display = 'block';
        })
        // 点击closeBtn就隐藏mask和login
        closeBtn.addEventListener('click', () => {
            mask.style.display = 'none';
            login.style.display = 'none';
        })
        // 开始拖拽
        // 当我们的鼠标按下，就获得鼠标在盒子内的坐标
        title.addEventListener('mousedown', (e) => {
            var mouseInBoxX = e.pageX - login.offsetLeft;
            var mouseInBoxY = e.pageY - login.offsetTop;
            // 在页面的任何一个地方都可以去移动鼠标，所以事件源应该是document
            document.addEventListener('mousemove', move)
            function move(e){
                login.style.left = e.pageX - mouseInBoxX + 'px';
                login.style.top = e.pageY - mouseInBoxY + 'px';
            }
            // 如果前面写匿名函数，则这里无法获取第二个参数：要移除的函数 所以我们选择在前面将此匿名函数分离出来并取名字
            document.addEventListener('mouseup', () => {
                document.removeEventListener('mousemove', move)
            })
        })
    </script>
</body>
</html>
```

​	**案例：仿京东放大镜**

​	案例分析：

​		① 整个案例可以分为三个功能模块

​		② 鼠标经过小图片盒子，黄色的遮挡层和大图片盒子显示，离开隐藏2个盒子的功能

​		③ 黄色的遮挡层跟随鼠标的功能

​			细节：**把鼠标坐标给遮挡层不合适。因为遮挡层坐标以父盒子为准**

​						首先是获得鼠标在盒子中的坐标

​						之后把数值给遮挡层作为left和top值

​						此时用到鼠标移动事件，但是还是在小图片盒子内移动

​						发现，遮挡层位置不对，需要再减去盒子自身高度和宽度的一半

​						遮挡层不能超出小图片盒子的范围

​						如果小于0，就把坐标设置为0

​						如果大于遮挡层的最大移动距离，就把坐标设置为最大的移动距离

​						遮挡层的最大移动距离：小图片盒子宽度 - 遮挡盒子宽度

​		④ 移动黄色遮挡层，大图片跟随移动的功能

```javascript
window.addEventListener('load', function() {
    var preview_img = document.querySelector('.preview_img');
    var mask = document.querySelector('.mask');
    var big = document.querySelector('.big');
    // 1. 当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
    preview_img.addEventListener('mouseover', function() {
        mask.style.display = 'block';
        big.style.display = 'block';
    })
    preview_img.addEventListener('mouseout', function() {
            mask.style.display = 'none';
            big.style.display = 'none';
        })
        // 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
    preview_img.addEventListener('mousemove', function(e) {
        // (1). 先计算出鼠标在盒子内的坐标
        var x = e.pageX - this.offsetLeft;
        var y = e.pageY - this.offsetTop;
        // console.log(x, y);
        // (2) 减去盒子高度 300的一半 是 150 就是我们mask 的最终 left 和top值了
        // (3) 我们mask 移动的距离
        var maskX = x - mask.offsetWidth / 2;
        var maskY = y - mask.offsetHeight / 2;
        // (4) 如果x 坐标小于了0 就让他停在0 的位置
        // 遮挡层的最大移动距离
        var maskMax = preview_img.offsetWidth - mask.offsetWidth;
        if (maskX <= 0) {
            maskX = 0;
        } else if (maskX >= maskMax) {
            maskX = maskMax;
        }
        if (maskY <= 0) {
            maskY = 0;
        } else if (maskY >= maskMax) {
            maskY = maskMax;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
        // 大图
        var bigIMg = document.querySelector('.bigImg');
        // 大图片最大移动距离
        var bigMax = bigIMg.offsetWidth - big.offsetWidth;
        // 大图片的移动距离 X Y
        var bigX = maskX * bigMax / maskMax;
        var bigY = maskY * bigMax / maskMax;
        bigIMg.style.left = -bigX + 'px';
        bigIMg.style.top = -bigY + 'px';

    })

})
```

#### 14.2 元素可视区client系列

​	**client**翻译过来就是客户端，我们使用`client`系列的相关属性来获取元素可视区的相关信息。通过`client`系列的相关属性可以动态的得到该元素的边框大小、元素大小等

|     client系列属性     |                             作用                             |
| :--------------------: | :----------------------------------------------------------: |
|  `element.clientTop`   |                     返回元素上边框的大小                     |
|  `element.clientLeft`  |                     返回元素左边框的大小                     |
| `element.clientWidth`  | 返回自身包括`padding`、内容区的宽度，不含边框，返回数值不带单位 |
| `element.clientHeight` |   返回自身包括`padding`、内容区的高度，不含边框，返回数值    |

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221221162236824.png" alt="image-20221221162236824" style="zoom:50%;" />

#### 14.3 元素滚动scroll系列

##### 14.3.1 元素scroll系列属性

​	**scroll**翻译过来就是滚动的，我们使用`scroll`系列相关属性可以动态的得到该元素的大小、滚动距离等

|     scroll系列属性     |                      作用                      |
| :--------------------: | :--------------------------------------------: |
|  `element.scrollTop`   |     返回被卷去的上侧距离，返回数值不带单位     |
|  `element.scrollLeft`  |     返回被卷去的左侧距离，返回数值不带单位     |
| `element.scrollWidth`  | 返回自身实际的宽度，不含边框，返回数值不带单位 |
| `element.scrollHeight` | 返回自身实际的高度，不含边框，返回数值不带单位 |

​	`scroll`翻译过来就是滚动的，我们使用`scroll`系列相关属性可以动态的得到该元素的大小、滚动距离等

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221230143831060.png" alt="image-20221230143831060" style="zoom:50%;" />

##### 14.3.2 页面被卷去的头部

​	如果浏览器的高（或宽）不足以显示整个页面时，会自动出现滚动条。当滚动条向下滚动时，页面上面被隐藏掉的高度，我们就被称为`页面被卷曲的头部`。滚动条在滚动时会触发`onscroll`事件

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
            border: 10px solid red;
            padding: 10px;
            overflow: auto;
        }
    </style>
</head>
<body>
    <div>我是内容
        我是内容
        我是内容
        我是内容
        我是内容
        我是内容
        我是内容
        我是内容
        我是内容
        我是内容
        我是内容
        我是内容
        我是内容
        我是内容
        我是内容
        我是内容
        我是内容
        我是内容
        我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
    </div>
    <script>
        // scroll系列
        var div = document.querySelector('div');
        console.log(div.scrollHeight);
        // scroll滚动事件 当我们滚动条发生变化会触发的事件
        div.addEventListener('scroll', () => {
            console.log(div.scrollTop);
        })
    </script>
</body>
</html>
```

**案例：仿淘宝固定右侧侧边栏**

	1. 原先侧边栏是绝对定位
	1. 当页面滚动到一定位置，侧边栏改回固定定位
	1. 页面继续滚动，会让`返回顶部`显示出来

案例分析：

​	① 需要用到页面滚动事件`scroll` 因为是页面滚动，所以事件源是`document`

​	② 滚动到某个位置，就是判断页面被卷上去的上部值

​	**③ 页面被卷去的头部：可以通过`window.pageYOffset`获得** 如果是被卷去的左侧`window.pageXOffset`

​	④ 注意：元素被卷曲的头部是**`element.scrollTop`**，如果是页面被卷去的头部则是**`window.pageYOffset`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .slider-bar {
            position: absolute;
            left: 10px;
            top: 300px;
            margin-left: 200px;
            width: 45px;
            height: 130px;
            background-color: red;
        }
        
        .w {
            width: 200px;
            /* margin: 10px auto; */
        }
        
        .header {
            height: 150px;
            background-color: purple;
        }
        
        .banner {
            height: 250px;
            background-color: skyblue;
        }
        
        .main {
            height: 1000px;
            background-color: yellowgreen;
        }
        
        span {
            display: none;
            position: absolute;
            bottom: 0;
        }
    </style>
</head>
<body>
    <div class="slider-bar">
        <span class="goBack">返回顶部</span>
    </div>
    <div class="header w">头部区域</div>
    <div class="banner w">banner区域</div>
    <div class="main w">主体部分</div>
    <script>
        // 1.获取元素
        var sliderBar = document.querySelector('.slider-bar');
        var banner = document.querySelector('.banner');
        var main = document.querySelector('.main');
        var goBack = document.querySelector('.goBack')
        // console.log(banner.offsetTop); 这个就是被卷去头部的大小

        // 侧边栏固定定位之后应该变化的数值
        var sliderBarTop = sliderBar.offsetTop - banner.offsetTop;
        // 2.页面滚动事件
        document.addEventListener('scroll', () => {
            // console.log(window.pageYOffset);
            // 3.当页面被卷去的头部大于等于了172 此时 侧边栏就要改为固定定位
            if(window.pageYOffset >= banner.offsetTop){
                sliderBar.style.position = 'fixed';
                sliderBar.style.top = sliderBarTop + 'px'
            }else {
                sliderBar.style.position = 'absolute';
                sliderBar.style.top = '300px'
            }
            
            // 4.当我们的页面滚动到main盒子，就显示goBack模块
            if(window.pageYOffset >= main.offsetTop){
                goBack.style.display = 'block'
            }else {
                goBack.style.display = 'none'
            }
        })
    </script>
</body>
</html>
```

**三大系列总结**

​	

|   三大系列大小对比    |                             作用                             |
| :-------------------: | :----------------------------------------------------------: |
| `element.offsetWidth` | 返回自身包括`padding`、边框、内容区的宽度，返回数值不带单位  |
| `element.clientWidth` | 返回自身包括`padding`、内容区的宽度，不含边框，返回数值不带单位 |
| `element.scrollWidth` |          返回自身实际宽度不含边框，返回数值不带单位          |

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221231134548012.png" alt="image-20221231134548012" style="zoom:50%;" />

​	它们的主要用法：

		1. `offset`系列经常用于获得元素位置 **offsetLeft offsetTop**
		1. `client`系列经常用于获取元素大小 **clientWidth clientHeight**
		1. `scroll`系列经常用于获取滚动距离 **scrollTop scrollLeft**
		1. **注意页面滚动的距离通过**`window.pageXOffset`获得

#### 14.4 动画函数封装

##### 14.4.1 动画实现原理

​	**核心原理：**通过定时器`setInterval()`不断移动盒子的位置

​	实现步骤：

1. 获得盒子当前位置
2. 让盒子在当前位置加上1个移动距离
3. 利用定时器不断重复这个操作
4. 加一个结束定时器的条件
5. 注意此元素需要添加定位，才能使用`element.style.left`

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            position: absolute;
            left: 0;
            width: 100px;
            height: 100px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <div></div>
    <script>
       var div = document.querySelector('div');
       var move = setInterval(() => {
        if (div.offsetLeft >= 400) {
            clearInterval(move)
        }
        div.style.left = div.offsetLeft + 1 + 'px'
       }, 30);
    </script>
</body>
</html><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            position: absolute;
            left: 0;
            width: 100px;
            height: 100px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <div></div>
    <script>
       var div = document.querySelector('div');
       var move = setInterval(() => {
        if (div.offsetLeft >= 400) {
            clearInterval(move)
        }
        div.style.left = div.offsetLeft + 1 + 'px'
       }, 30);
    </script>
</body>
</html>
```

##### 14.4.2 动画函数简单封装

​	注意函数需要传递两个参数 **动画对象**和**需要移动到的距离**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            position: absolute;
            left: 0;
            width: 100px;
            height: 100px;
            top: 50px;
            background-color: pink;
        }
        span {
            position: absolute;
            left: 0;
            top: 300px;
            width: 200px;
            height: 200px;
            background-color: red;
        }
    </style>
</head>

<body>
    <div></div>
    <span>逆天</span>
    <button>点我让逆天起飞</button>
    <script>
        function animate(obj, target) {
            // 给不同的元素指定了不同的定时器 避免了用var直接在内存开辟空间
            // 当我们不断点击按钮，这个元素的速度会越来越快，因为开启了太多的定时器
            // 解决方案：让我们元素只有一个定时器
            // 先清除以前的定时器，只保留当前的一个定时器执行
            clearInterval(obj.moveTimer)
            obj.moveTimer = setInterval(() => {
                if (obj.offsetLeft >= target) {
                    clearInterval(moveTimer)
                }
                obj.style.left = obj.offsetLeft + 1 + 'px'
            }, 30);
        }
        var div = document.querySelector('div');
        var span = document.querySelector('span');
        var button = document.querySelector('button');
        animate(div, 300)
        button.addEventListener('click', () => {
            animate(span, 200)
        })
    </script>
</body>

</html>
```

##### 14.4.3 缓动效果原理

​	缓动动画就是让元素运动速度有所变化，最常见的是让速度慢慢停下来

​	思路：

	1. 让盒子每次移动的距离慢慢变小，速度就会慢慢落下来
	1. 核心算法：(目标值—现在的位置) / 10 作为每次移动的距离 步长
	1. 停止的条件是：让当前盒子等于目标位置就停止定时器

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            position: absolute;
            left: 0;
            width: 100px;
            height: 100px;
            top: 50px;
            background-color: pink;
        }
        span {
            position: absolute;
            left: 0;
            top: 300px;
            width: 200px;
            height: 200px;
            background-color: red;
        }
    </style>
</head>

<body>
    <div></div>
    <span>逆天</span>
    <button>点我让逆天起飞</button>
    <script>
        function animate(obj, target) {
            // 给不同的元素指定了不同的定时器 避免了用var直接在内存开辟空间
            // 当我们不断点击按钮，这个元素的速度会越来越快，因为开启了太多的定时器
            // 解决方案：让我们元素只有一个定时器
            // 先清除以前的定时器，只保留当前的一个定时器执行
            clearInterval(obj.moveTimer)
            obj.moveTimer = setInterval(() => {
                // 步长值写到定时器里面
                var step = (target - obj.offsetLeft) / 10
                if (obj.offsetLeft >= target) {
                    clearInterval(moveTimer)
                }
                // 把每次加1 这个步长值改为一个慢慢变小的值 步长公式：(目标值—现在的位置) / 10
                obj.style.left = obj.offsetLeft + step + 'px';
            }, 30);
        }
        var div = document.querySelector('div');
        var span = document.querySelector('span');
        var button = document.querySelector('button');
        animate(div, 300)
        button.addEventListener('click', () => {
            animate(span, 200)
        })
    </script>
</body>

</html>
```

​	匀速动画就是 盒子当前的位置 + 固定的值

​	缓动动画就是 盒子当前的位置 + 逐渐变小的值

##### 14.4.4 动画函数多个目标值之间移动

​	可以让动画函数从800移动到500

​	当我们点击按钮的时候，判断步长是正值还是负值

1. 如果是正值，则步长往大了取整

2. 如果是负值，则步长往小了取整

   ```html
   <!DOCTYPE html>
   <html lang="en">
   
   <head>
       <meta charset="UTF-8">
       <meta http-equiv="X-UA-Compatible" content="IE=edge">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
       <style>
           div {
               position: absolute;
               left: 0;
               width: 100px;
               height: 100px;
               top: 50px;
               background-color: pink;
           }
           span {
               position: absolute;
               left: 0;
               top: 300px;
               width: 200px;
               height: 200px;
               background-color: red;
           }
       </style>
   </head>
   
   <body>
       <div></div>
       <span>逆天</span>
       <button class="btn500">点我让逆天500</button>
       <button class="btn800">点我让逆天800</button>
       <script>
           function animate(obj, target) {
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
                   }
                   // 把每次加1 这个步长值改为一个慢慢变小的值 步长公式：(目标值—现在的位置) / 10
                   obj.style.left = obj.offsetLeft + step + 'px';
               }, 30);
           }
           var div = document.querySelector('div');
           var span = document.querySelector('span');
           var button500 = document.querySelector('.btn500');
           var button800 = document.querySelector('.btn800');
           animate(div, 300)
           button500.addEventListener('click', () => {
               animate(span, 500)
           })
           button800.addEventListener('click', () => {
               animate(span, 800)
           })
       </script>
   </body>
   
   </html>
   ```

##### 14.4.5 动画函数添加回调函数

​	**回调函数原理**：函数可以作为一个参数。将这个函数作为参数传入到另一个参数里面，当那个函数执行完之后，再执行传进去的这个函数，这个过程就叫做**回调**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            position: absolute;
            left: 0;
            width: 100px;
            height: 100px;
            top: 50px;
            background-color: pink;
        }
        span {
            position: absolute;
            left: 0;
            top: 300px;
            width: 200px;
            height: 200px;
            background-color: red;
        }
    </style>
</head>

<body>
    <div></div>
    <span>逆天</span>
    <button class="btn500">点我让逆天500</button>
    <button class="btn800">点我让逆天800</button>
    <script>
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
        var div = document.querySelector('div');
        var span = document.querySelector('span');
        var button500 = document.querySelector('.btn500');
        var button800 = document.querySelector('.btn800');
        animate(div, 300)
        button500.addEventListener('click', () => {
            animate(span, 500)
        })
        button800.addEventListener('click', () => {
            animate(span, 800, function(){      
                // alert('test');
                span.style.backgroundColor = 'black'
            })
        })
    </script>
</body>

</html>
```

##### 14.4.6 动画函数封装到单独JS文件里面

​	因为以后经常使用这个动画函数，可以单独封装到一个JS文件里面，使用的时候引用这个JS文件即可

1. 单独新建一个JS文件

```javascript
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
```

	2. 正常写程序并引入函数

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./animate.js"></script>
    <style>
        .sliderbar {
            position: fixed;
            right: 0;
            bottom: 100px;
            width: 40px;
            height: 40px;
            text-align: center;
            line-height: 40px;
            cursor: pointer;
            color: #fff;
        }

        .con {
          position: absolute;
          left: 0;
          top: 0;
          width: 200px;
          height: 40px;
          background-color: purple;
          z-index: -1;
        }
    </style>
</head>
<body>
  <div class="sliderbar">
    <span>←</span>
    <div class="con">问题反馈</div>
  </div>
  <script>
    // 1.获取元素
    var sliderbar = document.querySelector('.sliderbar');
    var con = document.querySelector('.con');
    // 当我们鼠标经过sliderbar 就会让con这个盒子滑动到左侧
    sliderbar.addEventListener('mouseenter', () => {
      animate(con, -160, function(){
        // 当我们动画执行完毕，就把←换为→
        sliderbar.children[0].innerHTML = '→'
      })
    })
    // 当我们鼠标离开sliderbar 就会让con这个盒子滑动到原位
    sliderbar.addEventListener('mouseleave', () => {
      animate(con, 0, function(){
        sliderbar.children[0].innerHTML = '←'
      })
    })
  </script>  
</body>
</html>
```

#### 14.5 常见网页特效案例

​	**案例：筋斗云案例**

​		鼠标经过某个小li，筋斗云会跟着到当前小li位置

​		鼠标离开这个小li，筋斗云复原为原来的位置

​		鼠标点击了某个小li，筋斗云就会留在点击这个小li的位置

​	案例分析：

​		① 利用动画函数做动画效果

​		② 原先筋斗云的起始位置是0

​		③ 鼠标经过某个小li，把当前小li的`offsetLeft`位置作为目标值即可

​		④ 鼠标离开某个小li，就把目标值设为0

​		⑤ 如果点击了某个小li，就把li当前的位置存储起来，作为筋斗云的起始位置

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="../animate.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0
        }

        ul {
            list-style: none;
        }

        body {
            background-color: black;
        }

        .c-nav {
            width: 900px;
            height: 42px;
            background: #fff url(images/rss.png) no-repeat right center;
            margin: 100px auto;
            border-radius: 5px;
            position: relative;
        }

        .c-nav ul {
            position: absolute;
        }

        .c-nav li {
            float: left;
            width: 83px;
            text-align: center;
            line-height: 42px;
        }

        .c-nav li a {
            color: #333;
            text-decoration: none;
            display: inline-block;
            height: 42px;
        }

        .c-nav li a:hover {
            color: white;
        }

        .c-nav li.current a {
            color: #0dff1d;
        }

        .cloud {
            position: absolute;
            left: 0;
            top: 0;
            width: 83px;
            height: 42px;
            background: url(images/cloud.gif) no-repeat;
        }
    </style>
</head>

<body>
    <div id="c_nav" class="c-nav">
        <span class="cloud"></span>
        <ul>
            <li class="current"><a href="#">网页新闻</a></li>
            <li><a href="#">师资力量</a></li>
            <li><a href="#">活动策划</a></li>
            <li><a href="#">企业文化</a></li>
            <li><a href="#">招聘信息</a></li>
            <li><a href="#">公司简介</a></li>
            <li><a href="#">我是佩奇</a></li>
            <li><a href="#">啥是佩奇</a></li>
        </ul>
    </div>
    <script>
        // 1.获取元素
        var cloud = document.querySelector('.cloud');
        var c_nav = document.querySelector('.c-nav');
        var lis = c_nav.querySelectorAll('li');
        // 2.给所有小li绑定事件
        // 这个current作为筋斗云的起始位置
        var current = 0;
        for (var i = 0; i < lis.length; i++) {
            lis[i].addEventListener('mouseenter', function () {
                animate(cloud, this.offsetLeft);
            })
            lis[i].addEventListener('mouseleave', function () {
                animate(cloud, current);
            })
            // 3.当我们鼠标点击，就把当前位置作为目标值
            lis[i].addEventListener('click', function () {
                current = this.offsetLeft
            })
        }

    </script>
</body>

</html>
```

### 15. 移动端网页特效

#### 15.1 触屏事件

##### 15.1.1 触屏事件概述

​	移动端浏览器兼容性较好，我们不需要考虑以前JS兼容性的问题，可以放心使用原声JS书写效果，但是移动端也有自己独特的地方。比如**触屏事件touch**（也称触摸事件）Android和IOS都有

​	touch对象代表一个触摸点。触摸点可能是一根手指，也可能是一根触摸笔。触屏事件可响应用户手指（或触控笔）对屏幕或者触控板操作

​	常见的触屏事件如下：

| 触屏touch事件 |             说明              |
| :-----------: | :---------------------------: |
| `touchstart`  |  手指触摸到一个DOM元素时触发  |
|  `touchmove`  | 手指在一个DOM元素上滑动时触发 |
|  `touchend`   | 手指从一个DOM元素上移开时触发 |

##### 15.1.2 触摸事件对象（TouchEvent）

​	`TouchEvent`是一类描述手指在触摸平面（触摸屏、触摸板等）的状态变化的事件。这类事件用于描述一个或多个触点，使开发者可以检测触点的移动，触点的增加和减少等等

​	`touchstart,touchmove,touchend`三个事件都会各自有事件对象

​	触摸事件对象重点我们看三个常见对象列表：

|     触摸列表     |                        说明                        |
| :--------------: | :------------------------------------------------: |
|    `touches`     |          正在触摸屏幕的所有手指的一个列表          |
| `targetTouches`  |       正在触摸当前DOM元素上的手指的一个列表        |
| `changedTouches` | 手指状态发生了改变的列表，从无到有，从有到无的变化 |

**因为我们一般都是触摸元素，所以最常用的是`targetTouches`** 

##### 15.1.3 移动端拖动元素

	1. `touchstart,touchmove,touchend`可以实现拖动元素
	1. 但是拖动元素需要当前手指的坐标值 我们可以使用`targetTouches[0]`里面的`pageX`和`pageY`
	1. 移动端拖动的原理：手指移动中，计算出手指移动的距离。然后用盒子原来的位置 + 手指移动的距离
	1. 手指移动的距离：手指滑动中的位置 - 手指刚开始触摸的位置

​	拖动元素三部曲：

​		① 触摸元素`touchstart`：获取手指初始坐标，同时获得盒子原来的位置

​		② 移动手指`touchmove`：计算手指的滑动距离，并且移动盒子

​		③ 离开手指`touchend`

**注意：手指移动也会触发滚动屏幕所以之类要阻止默认的屏幕滚动`e.preventDefault()`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            position: absolute;
            left: 0;
            width: 100px;
            height: 100px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <div></div>
    <script>
        var div = document.querySelector('div')
        var startX = 0; //获取手指初始坐标
        var startY = 0; 
        var x = 0; //获得盒子原来的位置
        var y = 0;
         div.addEventListener('touchstart', (e) => {
            // 获取手指初始坐标
            startX = e.targetTouches[0].pageX;
            startY = e.targetTouches[0].pageY;
            // 获取盒子原来的位置
            x = div.offsetLeft;
            y = div.offsetTop;
         })

         div.addEventListener('touchmove', (e) => {
            // 计算手指的移动距离：手指移动之后的坐标减去手指初始的坐标
            var moveX = e.targetTouches[0].pageX - startX;
            var moveY = e.targetTouches[0].pageY - startY;
            // 移动盒子
            div.style.left = x + moveX + 'px';
            div.style.top = y + moveY + 'px';
            e.preventDefault() //阻止屏幕滚动的默认行为
         })
    </script>
</body>
</html>
```

#### 15.2 移动端常用开发插件

##### 15.2.1 什么是插件

​	移动端要求的是快速开发，所以我们经常会借助一些插件来帮我们完成操作，那么什么是插件呢？

​	**JS插件是js文件**，它遵循一定规范编写，方便程序展示效果，拥有特定功能且方便实用。如轮播图和瀑布流插件。

​	特点：它一般是为了解决某个问题而专门存在，其功能单一，并且比较小

​	我们以前写的animate.js也算一个最简单的插件

​	`fastclick`插件解决300ms延迟。使用延时

​	GitHub官网地址：https://github.com/ftlabs/fastclick

##### 15.2.2 插件的使用

	1. 引入js插件文件
	1. 测试

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 50px;
            height: 50px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <div></div>
    <script src="./fastclick.js"></script>
    <script>
        if ('addEventListener' in document) {
            document.addEventListener('DOMContentLoaded', () => {
                FastClick.attach(document.body);
            }, false);
        }
        var div = document.querySelector('div');
        div.addEventListener('click', () => {
            alert(11);
        })
    </script>
</body>
</html>
```

##### 15.2.3 Swiper插件的使用

​	中文官网地址：https://www.swiper.com.cn/

1. 引入插件相关文件
2. 按照规定语法使用

##### 15.2.4 其他移动端常见插件

	* superslide：http://www.superslide2.com/
	* Iscroll：http://github.com/cubiq/iscroll

##### 15.3.5 插件的使用总结

	1. 确认插件实现的功能
	1. 去官网查看使用说明
	1. 下载插件
	1. 打开demo实例文件，查看需要引入的文件，并且引入
	1. 复制demo实例文件中的结构html，样式css以及js代码

##### 15.3.6 练习-移动端视频插件 zy.media.js

​	H5给我们提供了`video`标签，但是浏览器的支持情况不同

​	不同的视频格式文件，我们可以通过`source`解决

​	但是外观样式，还有暂停，播放，全屏等功能我们只能自己写代码解决

​	这个时候我们可以使用插件方式来制作

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="zy.media.min.css">
    <script src="zy.media.min.js"></script>
    <style type="text/css">
        #modelView {
            background-color: #DDDDDD;
            z-index: 0;
            opacity: 0.7;
            height: 100%;
            width: 100%;
            position: relative;
        }
        
        .playvideo {
            padding-top: auto;
            z-index: 9999;
            position: relative;
            width: 300px;
            height: 200px;
        }
        
        .zy_media {
            z-index: 999999999
        }
    </style>

</head>

<body>

    <div class="playvideo">
        <div class="zy_media">
            <video data-config='{"mediaTitle": "小蝴蝶"}'>
                    <source src="mov.mp4" type="video/mp4">
                    您的浏览器不支持HTML5视频
                </video>

        </div>
        <div id="modelView">&nbsp;</div>
    </div>
    <script>
        zymedia('video', {
            autoplay: false
        });
    </script>

</body>

</html>
```

#### 15.4 移动端常用开发框架

##### 15.4.1 框架描述

​	框架，顾名思义就是一套架构，它会基于自身的特点向用户提供一套较为完整的解决方案。框架的控制权在框架本身，使用者要按照框架所规定的某种规范进行开发

​	插件一般是为了解决某个问题而专门存在，其功能单一，并且比较小

​	前端常用的框架有**Bootstrap、Vue、Angular、React**等。既能开发PC端，也能开发移动端

​	前端差用的移动端插件有**swiper、superslide、iscroll**等

​	框架：大而全，一整套解决方案

​	插件：小而专一，某个功能的解决方案

bootstrap轮播图：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./bootstrap/css/bootstrap.min.css">
    <script src="./bootstrap/js/jquery.min.js"></script>
    <script src="./bootstrap/js/bootstrap.min.js"></script>
    <style>
        .focus {
            width: 750px;
            height: 366px;
            background-color: red;
            margin: 100px auto;
        }
        .carousel {
            width: 100%;
            height: 366px !important;
        }
    </style>
</head>
<body>
    <div class="focus">
        <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
            <!-- Indicators 小圆点-->
            <ol class="carousel-indicators">
              <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
              <li data-target="#carousel-example-generic" data-slide-to="1"></li>
              <li data-target="#carousel-example-generic" data-slide-to="2"></li>
            </ol>
          
            <!-- Wrapper for slides 轮播图片-->
            <div class="carousel-inner" role="listbox">
              <div class="item active">
                <img src="./upload/banner1.dpg" alt="...">
                <div class="carousel-caption">
                  逊
                </div>
              </div>
              <div class="item">
                <img src="./upload/banner2.dpg" alt="...">
                <div class="carousel-caption">
                  捞
                </div>
              </div>
              <div class="item">
                <img src="./upload/banner3.dpg" alt="...">
                <div class="carousel-caption">
                  逆天
                </div>
              </div>
            </div>
          
            <!-- Controls 左右箭头-->
            <a class="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
              <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
              <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
    </div>
    <script>
        $('.carousel').carousel({
            interval: 2000
        })
    </script>
</body>
</html>
```

##### 15.4.2 Bootstrap

​	Bootstrap是一个简洁、直观、强悍的前端开发框架，它让web开发更加迅速、简单

​	它能开发PC端，也能开发移动端

​	Bootstrap JS插件使用步骤：

	1. 引入相关js文件
	1. 复制HTML结构
	1. 修改对应样式
	1. 修改相应JS参数

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <!-- 引入bootstrap 样式文件 -->
    <link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
    <!-- 引入我们自己的首页样式文件 -->
    <link rel="stylesheet" href="css/index.css">
    <!-- 先引入jQuery js文件 -->
    <script src="./bootstrap/js/jquery.min.js"></script>
    <!-- 再引入bootstrap文件 -->
    <script src="./bootstrap/js/bootstrap.min.js"></script>
</head>

<body>
    <div class="container">
        <div class="row">
            <header class="col-md-2">
                <div class="logo">
                    <a href="#">
                        <img src="images/logo.png" alt="" class="hidden-xs">
                        <span class="visible-xs">阿里百秀</span>
                    </a>
                </div>
                <div class="nav">
                    <ul>
                        <li><a href="#" class="glyphicon glyphicon-camera">生活馆</a></li>
                        <li><a href="#" class="glyphicon glyphicon-picture">自然汇</a></li>
                        <li><a href="#" class="glyphicon glyphicon-phone">科技湖</a></li>
                        <li><a href="#" class="glyphicon glyphicon-gift">奇趣事</a></li>
                        <li><a href="#" class="glyphicon glyphicon-glass">美食杰</a></li>
                    </ul>
                </div>
            </header>
            <article class="col-md-7">
                <!-- 新闻 -->
                <div class="news clearfix">
                    <ul>
                        <li>
                            <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                                <!-- Indicators -->
                                <!-- <ol class="carousel-indicators">
                                    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
                                    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
                                    <li data-target="#carousel-example-generic" data-slide-to="2"></li>
                                </ol> -->

                                <!-- Wrapper for slides -->
                                <div class="carousel-inner" role="listbox">
                                    <div class="item active">
                                        <img src="./upload/banner.dpg" alt="...">
                                        <div class="carousel-caption">
                                            ...
                                        </div>
                                    </div>
                                    <div class="item">
                                        <img src="./upload/banner1.dpg" alt="...">
                                        <div class="carousel-caption">
                                            ...
                                        </div>
                                    </div>
                                    <div class="item active">
                                        <img src="./upload/banner2.dpg" alt="...">
                                        <div class="carousel-caption">
                                            ...
                                        </div>
                                    </div>
                                    <div class="item active">
                                        <img src="./upload/banner3.dpg" alt="...">
                                        <div class="carousel-caption">
                                            ...
                                        </div>
                                    </div>
                                </div>

                                <!-- Controls -->
                                <a class="left carousel-control" href="#carousel-example-generic" role="button"
                                    data-slide="prev">
                                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="right carousel-control" href="#carousel-example-generic" role="button"
                                    data-slide="next">
                                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </li>
                        <li>
                            <a href="#">
                                <img src="upload/1.jpg" alt="">
                                <p>奇了 成都一小区护卫长得像马云 市民纷纷求合影</p>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="upload/2.jpg" alt="">
                                <p>奇了 成都一小区护卫长得像马云 市民纷纷求合影</p>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="upload/3.jpg" alt="">
                                <p>奇了 成都一小区护卫长得像马云 市民纷纷求合影</p>
                            </a>
                        </li>

                        <li>
                            <a href="#">
                                <img src="upload/4.jpg" alt="">
                                <p>奇了 成都一小区护卫长得像马云 市民纷纷求合影</p>
                            </a>
                        </li>

                    </ul>
                </div>
                <!-- 发表 -->
                <div class="publish">
                    <div class="row">
                        <div class="col-sm-9">
                            <h3>生活馆 关于指甲的10个健康知识 你知道几个？</h3>
                            <p class="text-muted hidden-xs">alibaixiu 发布于 2015-11-23</p>
                            <p class="hidden-xs">指甲是经常容易被人们忽略的身体部位， 事实上从指甲的健康状况可以看出一个人的身体健康状况， 快来看看10个暗藏在指甲里知识吧！</p>
                            <p class="text-muted">阅读(2417)评论(1)赞 (18) <span class="hidden-xs">标签：健康 / 感染 / 指甲 / 疾病 / 皮肤
                                    / 营养 / 趣味生活</span>

                            </p>
                        </div>
                        <div class="col-sm-3 pic hidden-xs">
                            <img src="upload/3.jpg" alt="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-9">
                            <h3>生活馆 关于指甲的10个健康知识 你知道几个？</h3>
                            <p class="text-muted hidden-xs">alibaixiu 发布于 2015-11-23</p>
                            <p class="hidden-xs">指甲是经常容易被人们忽略的身体部位， 事实上从指甲的健康状况可以看出一个人的身体健康状况， 快来看看10个暗藏在指甲里知识吧！</p>
                            <p class="text-muted">阅读(2417)评论(1)赞 (18) <span class="hidden-xs">标签：健康 / 感染 / 指甲 / 疾病 / 皮肤
                                    / 营养 / 趣味生活</span>

                            </p>
                        </div>
                        <div class="col-sm-3 pic hidden-xs">
                            <img src="upload/3.jpg" alt="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-9">
                            <h3>生活馆 关于指甲的10个健康知识 你知道几个？</h3>
                            <p class="text-muted hidden-xs">alibaixiu 发布于 2015-11-23</p>
                            <p class="hidden-xs">指甲是经常容易被人们忽略的身体部位， 事实上从指甲的健康状况可以看出一个人的身体健康状况， 快来看看10个暗藏在指甲里知识吧！</p>
                            <p class="text-muted">阅读(2417)评论(1)赞 (18) <span class="hidden-xs">标签：健康 / 感染 / 指甲 / 疾病 / 皮肤
                                    / 营养 / 趣味生活</span>

                            </p>
                        </div>
                        <div class="col-sm-3 pic hidden-xs">
                            <img src="upload/3.jpg" alt="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-9">
                            <h3>生活馆 关于指甲的10个健康知识 你知道几个？</h3>
                            <p class="text-muted hidden-xs">alibaixiu 发布于 2015-11-23</p>
                            <p class="hidden-xs">指甲是经常容易被人们忽略的身体部位， 事实上从指甲的健康状况可以看出一个人的身体健康状况， 快来看看10个暗藏在指甲里知识吧！</p>
                            <p class="text-muted">阅读(2417)评论(1)赞 (18) <span class="hidden-xs">标签：健康 / 感染 / 指甲 / 疾病 / 皮肤
                                    / 营养 / 趣味生活</span>

                            </p>
                        </div>
                        <div class="col-sm-3 pic hidden-xs">
                            <img src="upload/3.jpg" alt="">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-9">
                            <h3>生活馆 关于指甲的10个健康知识 你知道几个？</h3>
                            <p class="text-muted hidden-xs">alibaixiu 发布于 2015-11-23</p>
                            <p class="hidden-xs">指甲是经常容易被人们忽略的身体部位， 事实上从指甲的健康状况可以看出一个人的身体健康状况， 快来看看10个暗藏在指甲里知识吧！</p>
                            <p class="text-muted">阅读(2417)评论(1)赞 (18) <span class="hidden-xs">标签：健康 / 感染 / 指甲 / 疾病 / 皮肤
                                    / 营养 / 趣味生活</span>

                            </p>
                        </div>
                        <div class="col-sm-3 pic hidden-xs">
                            <img src="upload/3.jpg" alt="">
                        </div>
                    </div>
                </div>

            </article>
            <aside class="col-md-3">
                <a href="#" class="banner">
                    <img src="upload/zgboke.jpg" alt="">
                </a>
                <a href="#" class="hot">
                    <span class="btn btn-primary">热搜</span>
                    <h4 class="text-primary">欢迎加入中国博客联盟</h4>
                    <p>这里收录国内各个领域的优秀博客，是一个全人工编辑的开放式博客联盟交流和展示平台......</p>
                </a>
            </aside>
        </div>
    </div>
</body>

</html>
```

### 16. 本地存储

#### 16.1 本地存储

​	随着互联网的快速发展，基于网页的应用越来越普遍，同时也变得越来越复杂，为了满足各种各样的需求，会经常性在本地存储大量的数据，HTML5规范提出了相关解决方案

​	**本地存储特性**

	1. 数据存储在用户浏览器中
	2. 设置、读取方便、甚至刷新不丢失数据
	3. 容量较大，`sessionStorage`约5M，`localStorage`约20M
	4. 只能存储字符串，可以将对象`JSON.stringify()`编码后存储

#### 16.2 window.sessionStorage

	1. 生命周期为关闭浏览器窗口
	2. 在同一个窗口（页面）下数据可以共享
	3. 以键值对的形式存储使用

**存储数据：**

```javascript
sessionStorage.setItem(key, value)
```

**获取数据：**

```javascript
sessionStorage.getItem(key)
```

**删除数据：**

```javascript
sessionStorage.removeItem(key)
```

**删除所有数据：**

```javascript
sessionStorage.clear()
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" name="" id="">
    <button class="set">存储数据</button>
    <button class="get">获取数据</button>
    <button class="remove">删除数据</button>
    <button class="clear">清空所有数据</button>
    <script>
        var ipt = document.querySelector('input')
        var set = document.querySelector('.set')
        set.addEventListener('click', () => {
            // 当我们点击了之后就可以把表单的值存储过来
            // var val = ipt.value
            sessionStorage.setItem('username', ipt.value)
        })
        var get = document.querySelector('.get')
        get.addEventListener('click', () => {
            // 当我们点击了之后就可以把表单里面的值获取过来
            console.log(sessionStorage.getItem('username'))
        })
        var remove = document.querySelector('.remove')
        remove.addEventListener('click', () => {
            // 当我们点击了之后就可以根据键把表单中的数据删除
            sessionStorage.removeItem('username')
        })
        var clear = document.querySelector('.clear')
        clear.addEventListener('click', () => {
            sessionStorage.clear()
        })
    </script>
</body>
</html>
```



#### 16.3 window.localStorage

	1. 生命周期永久生效，除非手动删除，否则关闭页面也会存在
	2. 可以多窗口（页面）共享（同一浏览器可以共享）
	3. 以键值对的形式存储使用

**存储数据：**

```javascript
localStorage.setItem(key, value)
```

**获取数据：**

```javascript
localStorage.getItem(key)
```

**删除数据：**

```javascript
localStorage.removeItem(key)
```

**删除所有数据：**

```
localStorage.clear()
```

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
    <input type="text">
    <button class="set">存储数据</button>
    <button class="get">获取数据</button>
    <button class="remove">删除数据</button>
    <button class="del">清空所有数据</button>
    <script>
        var ipt = document.querySelector('input');
        var set = document.querySelector('.set');
        var get = document.querySelector('.get');
        var remove = document.querySelector('.remove');
        var del = document.querySelector('.del');
        set.addEventListener('click', function() {
            var val = ipt.value;
            localStorage.setItem('username', val);
        })
        get.addEventListener('click', function() {
            console.log(localStorage.getItem('username'));

        })
        remove.addEventListener('click', function() {
            localStorage.removeItem('username');

        })
        del.addEventListener('click', function() {
            localStorage.clear();

        })
    </script>
</body>

</html>
```

**案例：记住用户名**

​	如果勾选记住用户名，下次用户打开浏览器，就在文本框里面自动显示上次登陆的用户名

案例分析：

​	① 先把数据存起来，用到本地存储

​	② 关闭页面，也可以显示用户名，所以要用到`localStorage`

​	③ 打开页面，先判断是否有这个用户名，并且勾选复选框 

​	④ 当复选框发生改变的时候，使用`change事件`

​	⑤ 如果勾选，就存储，否则就删除

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <input type="text" class="input">
    <input type="checkbox" class="ischecked">记住用户名
    <script>
        var ipt = document.querySelector('.input')
        var checkbox = document.querySelector('.ischecked')
        // checkbox.addEventListener('click', () => {
        //     if(checkbox.checked){
        //         localStorage.setItem('username', ipt.value)
        //         ipt.value = localStorage.getItem('username')
        //     }else{
        //         localStorage.clear()
        //         sessionStorage.setItem('username', ipt.value)
        //     }
        // })
        if(localStorage.getItem('username')){
            ipt.value = localStorage.getItem('username')
            checkbox.checked = true;
        }
        checkbox.addEventListener('change', () => {
            if(checkbox.checked){
                localStorage.setItem('username', ipt.value)
            }else{
                localStorage.clear()
            }
        })
    </script>
</body>
</html>
```

### 17. jQuery入门

#### 17.1 jQuery概述

##### 17.1.1 JavaScript库

​	仓库：可以把很多东西放到这个仓库里面，找东西只需要大谱仓库里面查找就可以了

​	**JavaScript库：**即library，是一个**封装**好的特定的**集合**（方法和函数）。从封装一大堆函数的角度理解库，就是在这个库中，封装了很多预先定义好的函数在里面，比如动画animate、hide、show、获取元素等

​	简单理解：就是一个JS文件，里面对我们原生js代码进行了封装，存放到里面。这样我们可以快速高效的使用这些封装好的功能了

​	比如jQuery，就是为了快速方便的操作DOM，里面基本都是函数（方法）

​	**常见的JavaScript库**

	* jQuery
	* Prototype
	* YUI
	* Dojo
	* Ext JS
	* 移动端的zepto

​	这些库都是对原生JavaScript的封装，**内部都是用JavaScript实现的**，我们主要学习的是**jQuery**

##### 17.1.2 jQuery的概念

​	**jQuery**是一个快速、简洁的**JavaScript库**，其设计的宗旨是“write Less，Do More”，即倡导写更少的代码，做更多的事情

​	j就是JavaScript，Query就是查询，意思就是查询js，把js中的DOM操作做了封装，我们可以快速的查询使用里面的功能

​	**jQuery封装了JavaScript常用的功能代码**，优化了DOM操作、事件处理、动画设计和Ajax交互

​	**学习jQuery本质：就是学习调用这些函数（方法）**

​	**jQuery出现的目的是加快前端人员的开发速度，我们可以非常方便的调用和使用它**，从而提高开发效率

​	**优点**

		* 轻量级。核心文件才几十kb，不会影响页面加载速度
		* 跨浏览器兼容。基本兼容了现在主流的浏览器
		* 链式编程、隐式迭代
		* 对事件、样式、动画支持，大大简化了DOM操作
		* 支持插件扩展开发。有着丰富的第三方插件，例如：树形菜单、日期控件、轮播图等
		* 免费、开源

#### 17.2 jQuery的基本使用

##### 17.2.1 jQuery的下载

​	官网地址：https://jquery.com/

​	版本：

		* 1.x：兼容IE678等低版本浏览器，官网不再更新
		* 2.x：不兼容IE678等低版本浏览器，官网不再更新
		* 3.x：不兼容IE678等低版本浏览器，是官方主要更新维护的版本

​	各个版本的下载：https://code.jquery.com/

##### 17.2.2 jQuery的使用步骤

	1. 引入jQuery文件
	1. 使用即可

##### 17.2.3jQuery的入口函数

```javascript
$function(){
	... //此处是页面DOM加载完成的入口
}
```

```javascript
$(document).ready(function(){
	... //此处是页面DOM加载完成的入口
})
```

	1. 等着DOM结构渲染完毕即可执行内部代码，不必等到所有外部资源加载完成，jQuery帮我们完成了封装
	1. 相当于原生js中的`DOMContentLoaded`
	1. 不同于原生js中的load事件是等页面文档、外部的js文件、css文件、图片加载完毕才执行内部代码

```javascript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./jQuery3.6.3.js"></script>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: red;
        }
    </style>
</head>
<body>
    <script>
        // $('div').hide()
        // 1.等着页面DOM加载完毕再去执行js代码
        // $(document).ready(function(){
        //     $('div').hide()
        // })

        // 2. 等着页面DOM加载完毕之后再去执行js代码
        $(function(){
            $('div').hide()
        })
    </script>
    <div></div>
</body>
</html>
```

##### 17.2.4 jQuery的顶级对象`$`

	1. `$`是`jQuery`的别称，在代码中可以使用`jQuery`代替`$`，但一般为了方便，通常都直接使用`$`
	1. `$`是`jQuery`的顶级对象，相当于原生JavaScript中的`window`。把元素利用`$`包装成`jQuery`对象，就可以调用`jQuery`的方法

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./jQuery3.6.3.js"></script>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: red;
        }
    </style>
</head>

<body>
    <div></div>
    <script>
        // 1.$是jQuery的别称
        // 2.$同时也是jQuery的顶级对象
        $(function () {
            alert('11')
        });

        jQuery(() => {
            alert('22')
        })


    </script>
</body>

</html>
```



##### 17.2.5 jQuery对象和DOM对象

	1. 用原生JS获取来的对象就是DOM对象
	1. 用jQuery获取来的对象就是jQuery对象
	1. jQuery对象的本质：利用`$`对DOM对象包装后产生的对象（伪数组形式存储）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./jQuery3.6.3.js"></script>
    <style>
        div {
            width: 100px;
            height: 100px;
            background-color: red;
        }
    </style>
</head>
<body>
    <div></div>
    <span></span>
    <script>
        // 1.DOM对象：用原生JS获取过来的对象就是DOM对象
        var myDiv = document.querySelector('div') //myDiv是DOM对象
        var mySpan = document.querySelector('span') //mySpan是DOM对象
        console.log(myDiv);
        // 2.jQuery对象：用jQuery方式获取过来的对象是jQuery对象 本质：通过$把DOM元素进行了包装
        $('div') //这是一个jQuery对象
        $('span') //这是一个jQuery对象
        console.log($('div'));
        // 3.jQuery对象只能使用jQuery方法，DOM对象则使用原生的JavaScript属性和方法
        // myDiv.style.display = 'none'; //DOM写法
        $('div').hide() // 这个是一个jQuery对象，不能使用原生js的属性和方法
    </script>
</body>
</html>
```

##### 17.2.5 jQuery对象和DOM对象

​	DOM对象与jQuery对象之间是可以相互转换的

​	因为原生js比jQuery更大，原生的一些属性和方法jQuery没有给我们封装，要想使用这些属性恶化方法必须要把jQuery对象转换为DOM对象才能使用

	1. DOM对象转换为jQuery对象：**$(DOM对象)**

```javascript
$('div')
```

2. jQuery对象转换为DOM对象（两种方式）

```javascript
$('div')[index] //index是索引号
```

```javascript
$('div').get(index) //index是索引号
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <video src="../JavaScript/自我练习/105-视频插件/mov.mp4" muted></video>
    <script src="./jQuery3.6.3.js"></script>
    <script>
        // 1.DOM对象转换为jQuery对象
        // （1） 我们直接获取视频，得到就是jQuery对象
        // $('video');

        // (2)我们已经使用原生js获取过来DOM对象
        var myVideo = document.querySelector('video')
        // $(myVideo).play() //jQuery里面没有play这个方法 所以需要转换

        // 2.jQuery对象转换为DOM对象
        // myVideo.play()
        $('video')[0].play()
        $('video').get(0).play()
    </script>
</body>
</html>
```

### 18. jQuery常用API

#### 18.1 jQuery选择器

##### 18.1.1 jQuery基础选择器

​	原生JS获取元素的方式很多很杂，而且兼容性情况不一致，因此jQuery给我们做了封装，使获取元素统一标准

```javascript
$('选择器') //里面选择器直接写CSS选择器即可，但是要加引号
```

|    名称    |       用法        |           描述           |
| :--------: | :---------------: | :----------------------: |
|  ID选择器  |    `$('#id')`     |     获取指定ID的元素     |
| 全选选择器 |     `$('*')`      |       匹配所有元素       |
|  类选择器  |   `$('.class')`   |   获取同一类class元素    |
| 标签选择器 |    `$('div')`     | 获取同一类标签的所有元素 |
| 并集选择器 | `$('div, p, li')` |       获取多个元素       |
| 交集选择器 | `$('li.current')` |       获取交集元素       |

##### 18.1.2 jQuery层级选择器

|    名称    |      用法      |                             描述                             |
| :--------: | :------------: | :----------------------------------------------------------: |
| 子代选择器 | `$('ul > li')` | 使用`>`号，获取亲儿子层级的元素；注意，并不会获取孙子层级的元素 |
| 后代选择器 |  `$('ul li')`  | 使用`空格`，代表后代选择器，获取`ul`下的所有`li`元素，包括孙子等 |

##### 18.1.3 jQuery隐式迭代（重要）

​	**知识铺垫**

​		jQuery设置样式

```javascript
$('div').css('属性', '值')
```

​	遍历内部DOM元素（伪数组形式存储）的过程就叫做**隐式迭代**

​	简单理解：给匹配到的所有元素进行循环遍历，执行相应的方法，而不用我们再进行循环，简化我们的操作，方便我们调用

##### 18.1.4 jQuery筛选选择器

|     语法     |      用法       |                            描述                             |
| :----------: | :-------------: | :---------------------------------------------------------: |
|   `:first`   | `$('li:first')` |                     获取第一个`li`元素                      |
|   `:last`    | `$('li:last')`  |                    获取最后一个`li`元素                     |
| `:eq(index)` | `$('li:eq(2)')` | 获取到的`li`元素中，选择索引号为2的元素，索引号index从0开始 |
|    `:odd`    |  `$('li:odd')`  |         获取到的`li`元素中，选择索引号为奇数的元素          |
|   `:even`    | `$('li:even')`  |         获取到的`li`元素中，选择索引号为偶数的元素          |

##### 18.1.5 jQuery筛选方法（重点）

|         语法         |               用法               |                          说明                          |
| :------------------: | :------------------------------: | :----------------------------------------------------: |
|      `parent()`      |        `$('li').parent()`        |                        查找父级                        |
| `children(selector)` |     `$('ul').children('li')`     |         相当于`$('ul>li')`，最近一级（亲儿子）         |
|   `find(selector)`   |       `$('ul').find('li')`       |              相当于`$(ul li)`，后代选择器              |
| `siblings(selector)` |   `$('.first').siblings('li')`   |              查找兄弟节点，不包括自己本身              |
|  `nextAll([expr])`   |     `$('.first').nextAll()`      |             查找当前元素之后所有的同辈元素             |
|  `prevAll([expr])`   |      `$('.last').prevAll()`      |             查找当前元素之前的所有同辈元素             |
|  `hasClass(class)`   | `$('div').hasClass('protected')` | 检查当前的元素是否含有某个特定的类，如果有则返回`true` |
|     `eq(index)`      |         `$('li').eq(2)`          |          相当于`$('li:eq(2)')`,`index`从0开始          |

​	**重点记住：`parent()` `children()` `find()` `siblings()` `eq()`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./jQuery3.6.3.js"></script>
</head>
<body>
    <ol>
        <li>我是ol的li</li>
        <li>我是ol的li</li>
        <li class="item">我是ol的li</li>
        <li>我是ol的li</li>
        <li>我是ol的li</li>
        <li>我是ol的li</li>
    </ol>
    <ul>
        <li>我是ul的li</li>
        <li>我是ul的li</li>
        <li>我是ul的li</li>
        <li>我是ul的li</li>
        <li>我是ul的li</li>
        <li>我是ul的li</li>
    </ul>
    <div class="current">俺有current</div>
    <div>俺木有current</div>
    <script>
        $(function(){
            // 1.兄弟元素siblings 除了自身元素之外的所有亲兄弟
            $('ol .item').siblings('li').css('color', 'red')
            // 2. 第n个元素
            // (1)我们可以利用选择器的方式选择
            $('ul li:eq(2)').css('color', 'blue')
            // (2)我们可以利用选择方法的方式选择 更推荐
            $('ul li').eq(2).css('color', 'pink')
            // 3. 判断是否有某个类名
            console.log($('div:first').hasClass('current'));
            console.log($('div:last').hasClass('current'));
        })
    </script>
</body>
</html>
```

**案例：新浪下拉菜单（jQuery）**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./jQuery3.6.3.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        li {
            list-style-type: none;
        }
        
        a {
            text-decoration: none;
            font-size: 14px;
        }
        
        .nav {
            margin: 100px;
        }
        
        .nav>li {
            position: relative;
            float: left;
            width: 80px;
            height: 41px;
            text-align: center;
        }
        
        .nav li a {
            display: block;
            width: 100%;
            height: 100%;
            line-height: 41px;
            color: #333;
        }
        
        .nav>li>a:hover {
            background-color: #eee;
        }
        
        .nav ul {
            display: none;
            position: absolute;
            top: 41px;
            left: 0;
            width: 100%;
            border-left: 1px solid #FECC5B;
            border-right: 1px solid #FECC5B;
        }
        
        .nav ul li {
            border-bottom: 1px solid #FECC5B;
        }
        
        .nav ul li a:hover {
            background-color: #FFF5DA;
        }
    </style>
</head>

<body>
    <ul class="nav">
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
    </ul>
    <script>
        $(function(){
            // 鼠标经过
            $('.nav>li').mouseover(function(){
                // $(this) jQuery当前元素 this不要加引号
                // show()显示元素
                $(this).children('ul').show()
            })
            // 鼠标离开
            $('.nav>li').mouseout(function(){
                // hide()隐藏元素
                $(this).children('ul').hide()
            })
        })
    </script>
</body>

</html>
```

##### 18.1.6 jQuery里面的排他思想

​	想要多选一的效果，排他思想：当前元素设置样式，其余的兄弟清除样式

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./jQuery3.6.3.js"></script>
</head>
<body>
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>
    <script>
        $(function(){
            // 1.隐式迭代 给所有的按钮都绑定了点击事件
            $('button').click(function(){
                // 2.当前的元素变化背景颜色
                $(this).css('background', 'red')
                // 3.其余的兄弟去掉背景颜色
                $(this).siblings('button').css('background', '')
            })
        })
    </script>
</body>
</html>
```

​	**利用jQuery排他思想比原生js简单的多**



**案例：淘宝精品服饰案例**

​	① 核心原理：鼠标经过左侧盒子某个小li，就让内容区盒子相对应图片显示，其余的图片隐藏

​	② 需要得到当前小li的索引号，就可以显示对应索引号的图片

​	**③** jQuery得到当前元素索引号**`$(this).index()`**

​	④ 中间对应的图片，可以通过`eq(index)`方法去选择

​	⑤ 显示元素`show()` 隐藏元素`hide()` 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./jQuery3.6.3.js"></script>
    <style>
        * {
            margin: 0;
            top: 0;
            font-size: 12px;
        }
        ul {
            list-style: none;
        }
        a {
            text-decoration: none;
        }
        .wrapper {
            width: 250px;
            height: 248px;
            margin: 100px auto 0;
            border: 1px solid pink;
            border-right: 0;
            overflow: hidden;
        }
        #left, #content {
            float: left;
            padding: 0;
        }
        #left li {
            background: url(./images/lili.jpg) repeat-x
        }
        #left li a {
            display: block;
            width: 48px;
            height: 27px;
            border-bottom: 1px solid pink;
            line-height: 27px;
            text-align: center;
            color: black;
        }
        #left li a:hover {
            background-image: url(./images/abg\(1\).gif);
        }
        #content {
            border-left: 1px solid red;
            border-right: 1px solid red;
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <ul id="left">
            <li><a href="#">女靴</a></li>
            <li><a href="#">雪地靴</a></li>
            <li><a href="#">冬裙</a></li>
            <li><a href="#">呢大衣</a></li>
            <li><a href="#">毛衣</a></li>
            <li><a href="#">棉服</a></li>
            <li><a href="#">女裤</a></li>
            <li><a href="#">羽绒服</a></li>
            <li><a href="#">牛仔裤</a></li>
        </ul>
        <div id="content">
            <div>
                <a href="#"><img src="./images/女靴.jpg" alt="" width="200" height="250"></a>
            </div>
            <div>
                <a href="#"><img src="./images/雪地靴.jpg" alt="" width="200" height="250"></a>
            </div>
            <div>
                <a href="#"><img src="./images/冬裙.jpg" alt="" width="200" height="250"></a>
            </div>
            <div>
                <a href="#"><img src="./images/呢大衣.jpg" alt="" width="200" height="250"></a>
            </div>
            <div>
                <a href="#"><img src="./images/毛衣.jpg" alt="" width="200" height="250"></a>
            </div>
            <div>
                <a href="#"><img src="./images/棉服.jpg" alt="" width="200" height="250"></a>
            </div>
            <div>
                <a href="#"><img src="./images/女裤.jpg" alt="" width="200" height="250"></a>
            </div>
            <div>
                <a href="#"><img src="./images/羽绒服.jpg" alt="" width="200" height="250"></a>
            </div>
            <div>
                <a href="#"><img src="./images/牛仔裤.jpg" alt="" width="200" height="250"></a>
            </div>
        </div>
    </div>
    <script>
        $(function(){
            // 1.鼠标经过左侧的小li 
            $('#left li').mouseover(function(){
                // 2.得到当前小li的索引号
                var leftIndex = $(this).index()
                console.log('您当前选择的标签序列号：' + leftIndex);
                // 3.让我们右侧的盒子相应索引号的图片显示出来
                $('#content div').eq(leftIndex).show();
                // 4.让其它的图片（就是显示图片的其它兄弟）隐藏起来
                $('#content div').eq(leftIndex).siblings('div').hide()
            })
        })
    </script>
</body>
</html>
```

##### 18.1.5 链式编程

​	链式编程是为了节省代码量，看起来更优雅

```javascript
$(this).css('color', 'red').siblings().css('color', '')
```

​	使用链式编程要注意是给哪个对象

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <script src="jquery.min.js"></script>
</head>

<body>
    woshi body 的文字
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>
    <button>快速</button>
    <script>
        $(function() {
            // 1. 隐式迭代 给所有的按钮都绑定了点击事件
            $("button").click(function() {
                // 2. 让当前元素颜色变为红色
                // $(this).css("color", "red");
                // 3. 让其余的兄弟元素不变色 
                // $(this).siblings().css("color", "");
                // 链式编程
                $(this).css("color", "red").siblings().css("color", "");
                // 我的颜色为红色, 我的兄弟的颜色为空
                // $(this).siblings().css('color', 'red');
                // 我的兄弟变为红色  ,我本身不变颜色
                // $(this).siblings().parent().css('color', 'blue');
                // 最后是给我的兄弟的爸爸 body 变化颜色 

            });
        })
    </script>
</body>

</html>
```

#### 18.2 jQuery样式操作

##### 18.2.1 操作css方法

​	jQuery可以使用css方法来修改简单元素样式，也可以操作类，修改多个样式

	1. 参数只写属性名，则是返回属性值

```javascript
$(this).css('color')
```

2. 参数是**属性名，属性值，逗号分隔**，是设置一种样式，属性必须加引号，值如果是数字可以不用单位和符号

```javascript
$(this).css('color', 'red') 
```

3. 参数可以是对象形式，方便设置多组样式。属性名和属性值用冒号隔开，属性可以不用加引号

```javascript
$(this).css('color': 'white', 'font-size': '20px')
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./jQuery3.6.3.js"></script>
    <style>
        div {
            width: 200px;
            height: 200px;
            background-color: pink;
        }
    </style>
</head>
<body>
    <div></div>
    <script>
        // 操作样式之css方法
        $(function(){
            console.log($('div').css('width'))
            $('div').css('height', '300')
            $('div').css('height', '400')
            $('div').css({
                width: 500,
                height: 500,
                backgroundColor: 'blue'
                // 如果是复合属性则必须采取驼峰命名法，如果值不是数字，则必须要加引号
            })
        })
    </script>
</body>
</html>
```

##### 18.2.2 设置类样式方法

​	作用等同于以前的`classList`，可以操作类样式，注意操作类里面的参数不要加点

1. 添加类

```javascript
$('div').addClass('current')
```

2. 删除类

```javascript
$('div').removeClass('current')
```

3. 切换类

```javascript
$('div').toggleClass('current')
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        div {
            width: 150px;
            height: 150px;
            background-color: pink;
            margin: 100px auto;
            /* css变化过渡时间 */
            transition: all 0.5s;
        }
        .current {
            background-color: red;
            /* css旋转效果和角度 */
            transform: rotate(360deg);
        }
    </style>
    <script src="./jQuery3.6.3.js"></script>
</head>
<body>
    <div class="current"></div>
    <script>
        $(function(){
            $('div').click(function(){
                // 1.添加类 addClass
                // $(this).addClass('current')
                // 2.删除类 removeClass
                // $(this).removeClass('current')
                // 3.切换类 toggleClass
                $(this).toggleClass('current')
            })
        })
    </script>
</body>
</html>
```

**tab栏切换案例**

​	① 点击上部的`li`，当前`li`添加current类，其余兄弟移除类

​	② 点击的同时，得到当前`li`的索引号

​	③ 让下部里面相应索引号的item显示，其余item隐藏

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./jQuery3.6.3.js"></script>
    <style>
        * {
            margin: 0;
            top: 0;
        }

        li {
            list-style-type: none;
        }
        .tab_list {
            height: 39px;
            border: 1px solid #ccc;
            background-color: #f1f1f1;
        }
        .tab_list li {
            float: left;
            height: 39px;
            line-height: 39px;
            padding: 0 20px;
            text-align: center;
            cursor: pointer;
        }
        .tab_list .current {
            background-color: red;
            color: #fff;
        }
        .item {
            display: none;
        }
    </style>
</head>

<body>
    <div class="tab">
        <div class="tab_list">
            <ul>
                <li class="current">商品介绍</li>
                <li>规格与包装</li>
                <li>售后保障</li>
                <li>商品评价(50000)</li>
                <li>手机社区</li>
            </ul>
        </div>
        <div class="tab_con">
            <div class="item" style="display: block;">
                商品介绍模块内容
            </div>
            <div class="item">
                规格与包装模块内容
            </div>
            <div class="item">
                售后保障模块内容
            </div>
            <div class="item">
                商品评价模块内容
            </div>
            <div class="item">
                手机社区模块内容
            </div>
        </div>
    </div>
    <script>
        $(function(){
            $('.tab_list li').click(function(){
                $(this).addClass('current').siblings().removeClass('current')
                var topIndex = $(this).index()
                console.log('当前标签的索引号：' + topIndex);
                $('.tab_con div').eq(topIndex).show().siblings().hide()
            })
        })
    </script>
</body>

</html>
```

##### 18.2.3 类操作与className的区别

​	原生JS中className会覆盖元素原先里面的类名

​	jQuery里面类操作只是对指定类进行操作，不影响原先的类名

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./jQuery3.6.3.js"></script>
    <style>
        .one {
            width: 200px;
            height: 200px;
            background-color: pink;
            transition: all 3s;
        }
        .two {
            transform: rotate(720deg);
        }
    </style>
</head>
<body>
    <div class="one"></div>
    <script>
        // var one = document.querySelector('.one')
        // one.className = 'two'
        $('.one').addClass('two') // 这个addClass相当于追加类名，不影响以前的类名
        $('.one').removeClass('two')
    </script>
</body>
</html>
```

#### 18.3 jQuery效果


​	jQuery给我们封装了很多动画效果，最为常见的如下：
<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20230217154902422.png" alt="image-20230217154902422" />

##### 18.3.1 显示隐藏效果

1. 显示语法规范

```javascript
show([speed, [easing], [fn]])
```

显示参数

（1）参数都可以省略，无动画直接显示

（2）`speed`：三种预定速度之一的字符串（`slow`，`normal`以及`fast`）或表示动画时长的毫秒数值（如1000）

（3）`easing`：（Optional）用来指定切换效果，默认是`swing`，可用参数`linear`

（4）`fn`：回调函数，在动画完成时执行的函数，每个元素执行一次

2. 显示语法规范

```javascript
hide([speed, [easing], [fn]])
```

隐藏参数

（1）参数都可以省略，无动画直接显示

（2）`speed`：三种预定速度之一的字符串（`slow`，`normal`以及`fast`）或表示动画时长的毫秒数值（如1000）

（3）`easing`：（Optional）用来指定切换效果，默认是`swing`，可用参数`linear`

（4）`fn`：回调函数，在动画完成时执行的函数，每个元素执行一次

3. 切换语法规范

```
toggle([speed, [easing], [fn]])
```

切换参数

（1）参数都可以省略，无动画直接显示

（2）`speed`：三种预定速度之一的字符串（`slow`，`normal`以及`fast`）或表示动画时长的毫秒数值（如1000）

（3）`easing`：（Optional）用来指定切换效果，默认是`swing`，可用参数`linear`

（4）`fn`：回调函数，在动画完成时执行的函数，每个元素执行一次

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./jQuery3.6.3.js"></script>
    <style>
        div {
            width: 200px;
            height: 300px;
            background-color: red;
        }
    </style>
</head>

<body>
    <div></div>
    <button>显示</button>
    <button>隐藏</button>
    <button>切换</button>
    <script>
        $(function () {
            $('button').eq(1).click(() => {
                $('div').hide(1000, () => {
                    alert(1)
                })
            })
            $('button').eq(0).click(() => {
                $('div').show(2000, () => {
                    alert(2)
                })
            })
            $('button').eq(2).click(() => {
                $('div').toggle(1000, () => {
                    alert(3)
                })
            })

            // 一般情况下我们都不加参数，直接显示隐藏就可以了
        })
    </script>
</body>

</html>
```

##### 18.3.2 滑动效果

	1. 下滑效果语法规范

```javascript
slideDown([speed, [easing], [fn]])
```

下滑效果参数

（1）参数都可以省略

（2）`speed`：三种预定速度之一的字符串（`slow`，`normal`以及`fast`）或表示动画时长的毫秒数值（如1000）

（3）`easing`：（Optional）用来指定切换效果，默认是`swing`，可用参数`linear`

（4）`fn`：回调函数，在动画完成时执行的函数，每个元素执行一次

2. 上滑效果语法规范

   ```javascript
   slideUp([speed, [easing], [fn]])
   ```

下滑效果切换参数

（1）参数都可以省略

（2）`speed`：三种预定速度之一的字符串（`slow`，`normal`以及`fast`）或表示动画时长的毫秒数值（如1000）

（3）`easing`：（Optional）用来指定切换效果，默认是`swing`，可用参数`linear`

（4）`fn`：回调函数，在动画完成时执行的函数，每个元素执行一次

3. 切换效果语法规范

```javascript
slideToggle([speed], [easing], [fn])
```

切换效果语法参数

（1）参数都可以省略

（2）`speed`：三种预定速度之一的字符串（`slow`，`normal`以及`fast`）或表示动画时长的毫秒数值（如1000）

（3）`easing`：（Optional）用来指定切换效果，默认是`swing`，可用参数`linear`

（4）`fn`：回调函数，在动画完成时执行的函数，每个元素执行一次

##### 18.3.3 事件切换

```javascript
hover([over], out) //主要描述的是鼠标放入和移开
```

​	（1）`over`：鼠标移到元素上要触发的函数（相当于`mouseenter`）

​	（2）`out`：鼠标移出元素要触发的函数（相当于`mouseleave`）

​	（3）如果只有一个函数，则鼠标经过和离开会一直触发此函数，下面的案例会引起动画排队

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./jQuery3.6.3.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        
        li {
            list-style-type: none;
        }
        
        a {
            text-decoration: none;
            font-size: 14px;
        }
        
        .nav {
            margin: 100px;
        }
        
        .nav>li {
            position: relative;
            float: left;
            width: 80px;
            height: 41px;
            text-align: center;
        }
        
        .nav li a {
            display: block;
            width: 100%;
            height: 100%;
            line-height: 41px;
            color: #333;
        }
        
        .nav>li>a:hover {
            background-color: #eee;
        }
        
        .nav ul {
            display: none;
            position: absolute;
            top: 41px;
            left: 0;
            width: 100%;
            border-left: 1px solid #FECC5B;
            border-right: 1px solid #FECC5B;
        }
        
        .nav ul li {
            border-bottom: 1px solid #FECC5B;
        }
        
        .nav ul li a:hover {
            background-color: #FFF5DA;
        }
    </style>
</head>

<body>
    <ul class="nav">
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#">微博</a>
            <ul>
                <li>
                    <a href="">私信</a>
                </li>
                <li>
                    <a href="">评论</a>
                </li>
                <li>
                    <a href="">@我</a>
                </li>
            </ul>
        </li>
    </ul>
    <script>
        $(function(){
            // // 鼠标经过
            // $('.nav>li').mouseover(function(){
            //     // $(this) jQuery当前元素 this不要加引号
            //     // show()显示元素
            //     $(this).children('ul').slideDown()
            // })
            // // 鼠标离开
            // $('.nav>li').mouseout(function(){
            //     // hide()隐藏元素
            //     $(this).children('ul').slideUp()
            // })

            // 1.事件切换 hover 就是鼠标经过和离开的复合写法
            // $('.nav>li').hover(function(){
            //     $(this).children('ul').slideDown(200)
            // }, function(){
            //     $(this).children('ul').slideUp(200)
            // })

            // 2.事件切换 hover 如果只写一个函数，那么鼠标经过和鼠标离开都会触发这个函数
            $('.nav>li').hover(function(){
                $(this).children('ul').slideToggle(200)
            })
        })
    </script>
</body>

</html>
```

##### 18.3.4 动画队列极其停止排队方法

 1. 动画或动画队列

    动画或者效果一旦触发就会执行，就会造成多个动画或者效果排队执行

2. 停止排队

```javascript
stop()
```

​	（1）`stop()`方法用于停止动画或效果

​	（2）注意：`stop()`写到动画或者效果的**前面**，**相当于停止结束上一次的动画**

​	接上节案例中的slideToggle：

```javascript
// 2.事件切换 hover 如果只写一个函数，那么鼠标经过和鼠标离开都会触发这个函数
$('.nav>li').hover(function(){
    // stop()必须写到动画的前面
    $(this).children('ul').stop().slideToggle(200)
})
```

##### 18.3.5 淡入淡出效果

	1. 淡入效果语法规范

```javascript
fadeIn([speed, [easing], [fn]])
```

​	淡入效果参数

​		（1）参数都可以省略

​		（2）`speed`：三种预定速度之一的字符串（`slow`，`normal`，以及`fast`）或表示动画时长的毫秒数值（如：1000）

​		（3）`easing`：（Optional）用来指定切换效果，默认是`swing`，可用参数`linear`

​		（4）`fn`：回调函数，在动画完成时执行的函数，每个元素执行一次

2. 淡出效果语法规范

```javascript
fadeOut([speed, [easing], [fn]])
```

​	淡出效果参数

​		（1）参数都可以省略

​		（2）`speed`：三种预定速度之一的字符串（`slow`，`normal`，以及`fast`）或表示动画时长的毫秒数值（如：1000）

​		（3）`easing`：（Optional）用来指定切换效果，默认是`swing`，可用参数`linear`

​		（4）`fn`：回调函数，在动画完成时执行的函数，每个元素执行一次

3. 淡入淡出切换效果语法规范

```javascript
fadeToggle([speed, [easing], [fn]])
```

​	淡入淡出切换效果参数

​		（1）参数都可以省略

​		（2）`speed`：三种预定速度之一的字符串（`slow`，`normal`，以及`fast`）或表示动画时长的毫秒数值（如：1000）

​		（3）`easing`：（Optional）用来指定切换效果，默认是`swing`，可用参数`linear`

​		（4）`fn`：回调函数，在动画完成时执行的函数，每个元素执行一次

4. 渐进方式调整到指定的不透明度

```javascript
fadeTo([speed], opacity, [easing]. [fn])
```

​	效果参数

​		（1）**`opacity`透明度必须写，取值0~1之间**

​		（2）**`speed`**：三种预定速度之一的字符串（`slow`，`normal`以及`fast`）或表示动画时长的毫秒数值（如：1000），**必须写**

​		（3）`easing`：（Optional）用来指定切换效果，默认是`swing`，可用参数`linear`

​		（4）`fn`：回调函数，在动画完成时执行的函数，每个元素执行一次

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./jQuery3.6.3.js"></script>
    <style>
        div {
            width: 400px;
            height: 400px;
            background-color: red;
            display: none;
        }
    </style>
</head>
<body>
    <div></div>
    <button>淡入效果</button>
    <button>淡出效果</button>
    <button>淡入淡出切换</button>
    <button>修改透明度</button>
    <script>
        $(function(){
            $('button').eq(0).click(function() {
                // 淡入 fadeIn()
                $('div').fadeIn(1000);
            })
            $('button').eq(1).click(() => {
                // 淡出fadeOut()
                $('div').fadeOut()
            })
            $('button').eq(2).click(() => {
                // 淡入淡出切换 fadeToggle()
                $('div').fadeToggle()
            })
            $('button').eq(3).click(() => {
                // 修改透明度 这个速度和透明度必须要写
                $('div').fadeTo(1000, 0.5)
            })
        })
    </script>
</body>
</html>
```

**案例：突出显示**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./jQuery3.6.3.js"></script>
    <style>
        * {
            margin: 0;
            top: 0;
        }
        ul {
            list-style: none;
        }
        body {
            background-color: black;
        }
        .wrap {
            margin: 100px auto 0;
            width: 709px;
            height: 394px;
            /* 由此得出结论四个数据是按照顺时针来的 */
            padding: 10px 0 0 10px;
            background-color: #000;
            overflow: hidden;
            border: 1px solid white;
        }
        .wrap li {
            float: left;
            margin: 0 10px 10px 0;
        }
        .wrap img {
            display: block;
            border: 0;
        }
    </style>
</head>
<body>
    <div class="wrap">
        <ul>
            <li>
                <a href="#"><img src="./images/01.jpg" alt=""></a>
            </li>
            <li>
                <a href="#"><img src="./images/02.jpg" alt=""></a>
            </li>
            <li>
                <a href="#"><img src="./images/03.jpg" alt=""></a>
            </li>
            <li>
                <a href="#"><img src="./images/04.jpg" alt=""></a>
            </li>
            <li>
                <a href="#"><img src="./images/05.jpg" alt=""></a>
            </li>
            <li>
                <a href="#"><img src="./images/06.jpg" alt=""></a>
            </li>
        </ul>
    </div>
    <script>
        $(function(){
            $('li').hover(function(){
                $(this).siblings().stop().fadeTo(200, 0.2)
            }, function(){
                $(this).siblings().stop().fadeTo(200, 1)
            })
        })
    </script>
</body>
</html>
```

##### 18.3.6 自定义动画animate

1. 语法

```javascript
animate(params, [speed], [easing], [fn])
```

2. 参数

​	（1）**`params`:想要更改的样式属性，以对象形式传递，必须写。属性名可以不用带引号，如果是复合属性则需要采取驼峰命名法borderLeft。**其余参数都可以省略

​	（2）`speed`：三种预定速度之一的字符串（`slow`，`normal`以及`fast`）或表示动画时长的毫秒数值（如：1000）

​	（3）`easing`：(Optional)用来指定切换效果，默认是`swing`，可用参数`linear`

​	（4）`fn`：回调函数，在动画完成时执行的函数，每个元素执行一次

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./jQuery3.6.3.js"></script>
    <style>
        div {
            position: absolute;
            width: 300px;
            height: 300px;
            background-color: red;
        }
    </style>
</head>
<body>
    <button>动起来</button>
    <div></div>
    <script>
        $(function(){
            $('button').click(() => {
                $('div').animate({
                    left: '500px',
                    top: '300px',
                    opacity: '0.4'
                }, 1000, () => {
                    alert(1)
                })
            })
        })
    </script>
</body>
</html>
```

**案例：王者手风琴**

​	① 鼠标经过某个小li有两步操作：

			1. 当前小li宽度变为244px，同时里面的小图片淡出，大图片淡入

2. 其余兄弟小li宽度变为69px，小图片淡入，大图片淡出

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./jQuery3.6.3.js"></script>
    <style>
        * {
            margin: 0;
            padding: 0;
        }
        img {
            display: block;
        }
        ul {
            list-style: none;
        }
        .king {
            width: 900px;
            margin: 100px auto;
            background: url(images/bg.png) no-repeat;
            overflow: hidden;
            padding: 10px;
        }
        .king ul {
            overflow: hidden;
        }
        .king li {
            position: relative;
            float: left;
            width: 69px;
            height: 69px;
            margin-right: 10px;
        }
        .king li.current {
            width: 224px;
        }
        .king li.current .big {
            display: block;
        }
        .king li.current .small {
            display: none;
        }
        .big {
            width: 224px;
            display: none;
        }
        .small {
            position: absolute;
            top: 0;
            left: 0;
            width: 69px;
            height: 69px;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="king">
        <ul>
            <li>
                <a href="#">
                    <img src="images/m1.jpg" alt="" class="small">
                    <img src="images/m.png" alt="" class="big">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="images/l1.jpg" alt="" class="small">
                    <img src="images/l.png" alt="" class="big">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="images/c1.jpg" alt="" class="small">
                    <img src="images/c.png" alt="" class="big">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="images/w1.jpg" alt="" class="small">
                    <img src="images/w.png" alt="" class="big">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="images/z1.jpg" alt="" class="small">
                    <img src="images/z.png" alt="" class="big">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="images/h1.jpg" alt="" class="small">
                    <img src="images/h.png" alt="" class="big">
                </a>
            </li>
            <li>
                <a href="#">
                    <img src="images/t1.jpg" alt="" class="small">
                    <img src="images/t.png" alt="" class="big">
                </a>
            </li>
        </ul>
    </div>
    <script>
        $(function(){
            $('.king li').hover(function(){
                $(this).stop().animate({
                    width: 224
                }).find('.small').stop().fadeOut().siblings('.big').stop().fadeIn()
            }, function(){
                $(this).stop().animate({
                    width: 69
                }).find('.small').stop().fadeIn().siblings('.big').stop().fadeOut()
            })
        })
    </script>
</body>
</html>
```

#### 18.5 jQuery属性操作

##### 18.5.1 设置或获取元素固有属性值prop()

​	所谓元素固有属性就是元素本身自带的属性，比如`<a>`元素里面的`href`，`<input>`元素里面的`type`

	1. 获取属性语法

```javascript
prop('属性')
```

2. 设置属性语法

```javascript
prop('属性', '属性值')
```

##### 18.5.2 设置或获取元素自定义属性值 attr()

​	用户自己给元素添加的属性，我们称为自定义属性，比如给`div`添加`index='1'`

1. 获取属性语法

```javascript
attr('属性')
```

2. 设置属性语法

```javascript
attr('属性', '属性值') // 类似原生setAttribute()
```

​	该方法也可获取H5自定义属性

##### 18.5.3 数据缓存data()

​	`data()`方法可以在指定的元素上存取数据，并不会修改DOM元素结构。一旦页面刷新，之前存放的数据都将被移除

1. 附加数据语法

```javascript
data('key', 'value') //向被选元素附加数据
```

2. 获取数据语法

```javascript
data('key')
```

​	同时，还可以读取H5自定义属性`data-index`，得到的是数字型

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>Document</title>
    <script src="./jQuery3.6.3.js"></script>
</head>
<body>
    <a href="http://www.baidu.com" title="abc"></a>
    <input type="checkbox" name="" id="" checked>
    <div index="1" data-index="2">我是div</div>
    <span>123</span>
    <script>
        $(function(){
            // 1.element.prop('属性名') 获取元素固有属性值
            console.log($('a').prop('href'));
            $('a').prop('title', 'def')
            $('input').change(() => {
                console.log($('input').prop('checked'));
            })

            // console.log($('div').prop('index'));
            // 2.元素的自定义属性，我们通过attr()
            console.log($('div').attr('index', 4));
            console.log($('div').attr('data-index'));

            // 3.数据缓存 data() 这个里面的数据是存放在元素的内存里面
            $('span').data('username', 'andy')
            console.log($('span').data('username'));
            // 这个方法获取data-index h5自定义属性 第一个不用谢data- 而且返回的是数字型
            console.log($('div').data('index'));
        })
    </script>
</body>
</html>
```

**案例：购物车案例模块-全选**

​	① 全选思路：里面3个小的复选框按钮（checkbox）选中状态（checked）跟着全选按钮（checkall）走

​	② 因为`checked`是复选框的固有属性，我们需要利用`prop()`方法获取和设置该属性

​	③ 把全选按钮状态赋值给3个小复选框就可以了

​	④ 当我们每次点击小的复选框按钮，就来判断：

  		1. 如果小复选框被选中的个数等于所有小复选框的个数，就应该把全选按钮勾上，否则全选按钮不勾
  		2. :checked 选择器     :checked 查找被选中的表单元素

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./jQuery3.6.3.js"></script>
</head>
<body>
    <div>
        <input type="checkbox" class="checkall" name="" id="">全选
        <input type="checkbox" class="checkbox" name="" id="">
        <input type="checkbox" class="checkbox" name="" id="">
        <input type="checkbox" class="checkbox" name="" id="">
        <input type="checkbox" class="checkall" name="" id="">全选
    </div>
    <script>
        $(function(){
            // 全选对单选
            $('.checkall').change(function(){
                $('.checkbox, .checkall').prop('checked', $(this).prop('checked'))
            })

            // 单选对全选
            $('.checkbox').change(function(){
                // if(小复选框被选中的个数 === 所有小复选框的个数){
                //     选中全选按钮
                // }else{
                //     不选中全选按钮
                // }
                if($('.checkbox:checked').length == $('.checkbox').length){
                    $('.checkall').prop('checked', true)
                }else{
                    $('.checkall').prop('checked', false)
                }
            })
        })
    </script>
</body>
</html>
```

**内容文本值**

​	主要针对元素的**内容**还有**表单的值**操作

1. 普通元素内容html()（相当于原生innerHTML）

```javascript
html()
```

```javascript
html('内容')
```

2. 普通元素文本内容text()（相当于原生innerText）

```javascript
text()
```

```javascript
text('内容')
```

3. 表单的值val()（相当于原生value）

```javascript
val()
```

```javascript
val('text')
```

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./jQuery3.6.3.js"></script>
</head>
<body>
    <div>
        <span>我是内容</span>
    </div>
    <input type="text" value="请输入内容">
</body>
<script>
    // 1.获取元素内容 html()
    console.log($('div').html());
    $('div').html('123')
    // 2.获取设置元素文本内容 text()
    console.log($('div').text());
    $('div').text('123')
    // 3.获取设置表单值 val()
    console.log($('input').val());
    $('input').val('abc')
</script>
</html>
```

**加减法案例**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./jQuery3.6.3.js"></script>
    <style>
        button {
            position: relative;
            display: inline-block;
            cursor: pointer;
            outline: none;
            border: 0;
            vertical-align: middle;
            text-decoration: none;
            font-family: inherit;
            font-size: 15px;
        }

        button {
            font-weight: 600;
            color: #382b22;
            text-transform: uppercase;
            padding: 1.25em 2em;
            background: #fff0f0;
            border: 2px solid #b18597;
            border-radius: 0.75em;
            -webkit-transform-style: preserve-3d;
            transform-style: preserve-3d;
            -webkit-transition: background 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
            transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1);
        }

        button::before {
            position: absolute;
            content: '';
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #f9c4d2;
            border-radius: inherit;
            -webkit-box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
            box-shadow: 0 0 0 2px #b18597, 0 0.625em 0 0 #ffe3e2;
            -webkit-transform: translate3d(0, 0.75em, -1em);
            transform: translate3d(0, 0.75em, -1em);
            transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-transform 150ms cubic-bezier(0, 0, 0.58, 1), -webkit-box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
        }

        button:hover {
            background: #ffe9e9;
            -webkit-transform: translate(0, 0.25em);
            transform: translate(0, 0.25em);
        }

        button:hover::before {
            -webkit-box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
            box-shadow: 0 0 0 2px #b18597, 0 0.5em 0 0 #ffe3e2;
            -webkit-transform: translate3d(0, 0.5em, -1em);
            transform: translate3d(0, 0.5em, -1em);
        }

        button:active {
            background: #ffe9e9;
            -webkit-transform: translate(0em, 0.75em);
            transform: translate(0em, 0.75em);
        }

        button:active::before {
            -webkit-box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
            box-shadow: 0 0 0 2px #b18597, 0 0 #ffe3e2;
            -webkit-transform: translate3d(0, 0, -1em);
            transform: translate3d(0, 0, -1em);
        }

        .input-wrapper input {
            background-color: #eee;
            border: none;
            padding: 1rem;
            font-size: 1rem;
            width: 13em;
            border-radius: 1rem;
            color: lightcoral;
            box-shadow: 0 0.4rem #dfd9d9;
            cursor: pointer;
        }

        .input-wrapper input:focus {
            outline-color: lightcoral;
        }

        div {
            margin: 40px;
        }
    </style>
</head>

<body>
    <button class="decrement">-</button>
    <div class="input-wrapper">
        <input class="input" name="text" value='0' type="text">
    </div>
    <button class="increment">+</button>
    <script>
        // 加法
        $('.increment').click(() => {
            // 得到当前兄弟文本框的值
            var addNumber = $('.input').val()
            addNumber++
            $('.input').val(addNumber)
        })
        // 减法
        $('.decrement').click(() => {
            var subNumber = $('.input').val()
            // 扩展：如果在此文本框应用在数字不为0的案例（比如商品的数量）上，则文本框值不能小于1
            // 遇到return则此判断后面的代码不执行
            if(subNumber <= 1){
                return alert('不能再减了')
            }
            subNumber--
            $('.input').val(subNumber) 
        })
    </script>
</body>

</html>
```

#### 18.6 jQuery元素操作

​	主要是**遍历**、创建、添加、删除元素操作

##### 18.6.1 遍历元素

​	jQuery隐式迭代是**对同一类元素做了同样的操作**。如果想要给同一类元素做不同操作，就需要用到遍历

​	**语法1：**

```javascript
$('div').each(function(index, domEle){ xxx; })
```

1. `each()`方法遍历匹配的每一个元素，主要用于DOM处理
2. 里面的回调函数有两个参数：`index`：每个元素的索引号，`domEle`：**每个DOM元素对象，不是jQuery对象**
3. **所以想要使用jQuery方法，需要给这个DOM元素转化为jQuery对象 `$(domEle)`**

​	**语法2：**



# JavaScript中的map方法和filter方法

## filter方法的使用：

```javascript
Array.filter((currentValue, index, arr) => {
  //currentValue:必传。当前元素值
  //index：可选。当前元素索引值
  //arr:可选。当前元素属于的数组对象
  
  //其中，函数 function 为必须，数组中的每个元素都会执行这个函数。且如果返回值为 true，则	该元素被保留；
  //函数的第一个参数 currentValue 也为必须，代表当前元素的值。
})
```



```javascript
var arr1 = ['aa', 'bbb', 'ccc', 'dddd']
var newArr1 = arr1.filter(function(item, index){
    if(index >= 2){
       return item; //返回索引大于2的元素
    }
});
console.log(arr1);
console.log(newArr1);
```

​	输出结果：

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221110141944459.png" alt="image-20221110141944459" />

​	**如果我们尝试对原数组中的元素进行修改，会有什么效果？**

```javascript
var arr2 = ['aa', 'bbb', 'ccc', 'dddd']
var newArr2 = arr2.filter(function(item, index){
  if(index >= 2){
    return item + 'hello!';
  }
});
console.log(arr2);
console.log(newArr2)
```

​	输出结果如下：

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221110142452290.png" alt="image-20221110142452290" />

​	会发现数据是不会发生改变的，也就是说：filter方法是对原数组进行过滤，返回到一个新数组中去，不会影响原始的数组

自我举例：

​	筛选出小于2000的数字

```javascript
        var arr = [1500, 1200, 2000, 5000, 1299, 2855, 1800]
        
        const newArr = arr.filter((e) => {
            if(e < 2000){
                return e
            }
        })
        console.log(newArr); //[1500, 1200, 1299, 1800]
```



## map方法的使用：

```javascript
Array.map((currentValue, index, arr) => {
  //currentValue:必传。当前元素值
  //index：可选。当前元素索引值
  //arr:可选。当前元素属于的数组对象
  
   //其中，函数 function 为必须，数组中的每个元素都会执行这个函数。且如果返回值为 true，则该元素被保留；
  //函数的第一个参数 currentValue 也为必须，代表当前元素的值。
})
```

​	示例：

```javascript
var arr = ['aa', 'bb', 'ccc', 'dddd']
var newArr = arr.map(function(item, index){ //此为匿名函数，也可以用es6的箭头函数
    return item + '小邱要好好背单词' + index
 });
console.log(arr);
console.log(newArr);
```

​	输出结果：

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221109203355340.png" alt="image-20221109203355340" />

​	所以，map方法是对原数组中的元素进行处理、修改等操作，然后返回一个新的数组对象



​	**那如果map方法做过滤的操作是个什么效果？**

```javascript
var arr3 = ['aa', 'bbb', 'ccc', 'dddd']
var newArr3 = arr3.map(function(item){
       return item;
}).filter(function(item1, index){
       if (index >= 2) {
            return item1;
       }
})
console.log(arr3);
console.log(newArr3);
```

​	输出如下：

<img src="/Users/chenzhengqing/Library/Application Support/typora-user-images/image-20221110144055247.png" alt="image-20221110144055247" />

### 最后总结：

	* filter方法是对原数组进行过滤筛选，产生一个新的数组对象
	* map方法对原数组中的元素进行加工处理，产生一个新的数组对象
