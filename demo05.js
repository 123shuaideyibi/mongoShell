// 应答是写入
// db.workmate.update({sex:1},{$set:{money:1000}},false,true)
// let resultMessage = db.runCommand({getLastError:1})
// printjson(resultMessage)

// findAndModify:查找并修改
let myModify = {
    findAndModify: 'workmate',
    query: { name: 'JSPang' },
    update: { $set: { age: 18 } },
    new: true//更新完成，需要查看结果，如果false不进行查看结果
}
printjson(db.runCommand(myModify))