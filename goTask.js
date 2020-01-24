let userName = "jspang";//声明一个登录名
let timeStamp = Date.parse(new Date());//声明登录时的时间戳
let jsonDatabase = {
    "loginUser": userName,
    "loginTime": timeStamp
}//组成json字符串
let db = connect('log');//链接数据库
db.login.insert(jsonDatabase);//插入数据

print('[demo] log print success');//没有错误显示成功