// let db = connect('company')

// let workmate3 = {
//     name: 'MinJie',
//     age: 20,
//     sex: 0,
//     job: 'UI设计',
//     skill: {
//         skillOne: 'PhotoShop',
//         skillTwo: 'UI',
//         skillThree: 'Word+Excell+PPT'
//     },
//     regeditTime: new Date()
// }

// db.workmate.update({ 'name': 'MinJie' }, workmate3)

//--------------------基础update修改器----------------------
// $set修改器
// db.workmate.update({name:'MinJie'},{$set:{sex:2,age:21}})

// 修改嵌套内容
// db.workmate.update({name:'MinJie'},{$set:{'skill.skillThree':'word'}})

// $unset删除key
// db.workmate.update({name:'MinJie'},{$unset:{age:''}})

// $inc对数字进行计算
// db.workmate.update({name:'MinJie'},{$inc:{age:-2}}) 

// multi选项
// db.workmate.update({},{$set:{interest:[]}},{multi:true})

// upsert选项
// db.workmate.update({name:'xiaoWang'},{$set:{age:20}},{upsert:true})
// -------------------------------------------



// --------------------update数组修改器-----------------------
// $push追加数组/内嵌文档值
// db.workmate.update({name:'xiaoWang'},{$push:{interest:'draw'}})
// db.workmate.update({name:'MinJie'},{$push:{'skill.skillFour':'draw'}})

// $ne查找是否存在
// db.workmate.update({name:'xiaoWang',interest:{$ne:'playGame'}},{$push:{interest:'Game'}})

// addToSet升级版$ne
// db.workmate.update({name:'xiaoWang'},{$addToSet:{interest:'readBook'}})

// $each批量追加
// let newInterest = ['Sing','Dance','Code']
// db.workmate.update({name:'xiaoWang'},{$addToSet:{interest:{$each:newInterest}}})

// $pop删除数数组值
// db.workmate.update({name:'xiaoWang'},{$pop:{interest:1}})

// 数组定位修改
// db.workmate.update({name:'xiaoWang'},{$set:{'interest.2':'Code'}})
// --------------------------------------------



// -----------------------状态返回与安全-----------------------
// findAndModify
db.runCommand()
// ----------------------------------------------

print('[update]：数据被成功修改')