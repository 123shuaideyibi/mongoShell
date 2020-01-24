// 验证批量插入的方法

let startTime = (new Date()).getTime();//得到开始时间
let db = connect('log');//链接log数据库

let tempArray = []    //声明一个数组
for (let i = 0; i < 1000; i++) {   //循环向数组中放入值
    tempArray.push({"num":i})
}
db.test.insert(tempArray)          //批量一次插入

let runTime = (new Date()).getTime() - startTime;//计算时间差
print('demo运行：' + runTime + 'ms');//打印出来