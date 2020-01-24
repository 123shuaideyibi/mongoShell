// 验证循环插入的方法

let startTime = (new Date()).getTime();//得到开始时间
let db = connect('log');//链接log数据库
// 开始循环
for (let i = 0; i < 1000; i++) {
    db.test.insert({ "num":i });
}

let runTime = (new Date()).getTime() - startTime;//计算时间差
print('demo运行：' + runTime + 'ms');//打印出来