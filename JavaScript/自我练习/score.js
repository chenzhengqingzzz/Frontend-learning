
    var studentNumber = prompt('请输入学生人数');
    var sumScore = 0;
    for (var i = 1; i <= studentNumber; i++) {
        var inputScore = prompt('请输入第' + i +'个学生的成绩')
        // var scoreData = []
        // scoreData.push(input)
        // console.log(scoreData);

        // 因为从promot中取过来的数据是String类型，记住一定要转化成数字型
        sumScore = sumScore + parseFloat(inputScore);
    }
    // var countAvg = (sumScore, studentNumber) => {
    //     avg = sumScore / studentNumber;

    //     return avg
    // }
    avg = sumScore / studentNumber;
alert('此班级的总成绩为：' + sumScore)
// alert('此班级的平均分为：' + countAvg())
alert('此班级的平均分为：' + avg)
