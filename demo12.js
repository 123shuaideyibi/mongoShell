let startTime = (new Date()).getTime()//得到程序开始时间
let db = connect('company')   //链接数据库
let rs = db.randomInfo.find({username:'tfruhjy8k',randNum0:565509}).hint({randNum0:1})//根据用户名查找用户
rs.forEach(rs=>{printjson(rs)})   //循环输出
let runTime = (new Date()).getTime()-startTime   //得到程序运行时间
print(`[success]程序运行时间是:${runTime}ms`)   //打印出运行时间
