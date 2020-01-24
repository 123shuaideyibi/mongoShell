// 1.查找技能一为HTML+CSS的所有人
// db.workmate.find({'skill.skillOne':'HTML+CSS'})

// 2.删选字段。只包含姓名
// db.workmate.find(
//     {'skill.skillOne':'HTML+CSS'},
//     {name:true,'skill.skillOne':true}
// )

// db.workmate.find(
//     {'skill.skillOne':'HTML+CSS'},
//     {name:1,'skill.skillOne':1,_id:0}
// )

// 3.日期查询。年龄小于等于30大于等于25的人员
// db.workmate.find(
//     {age:{$lte:30,$gte:25}},
//     {name:1,age:1,'skill.skillOne':1,_id:0}
// )

// 4.注册时间在2018.01.01之后
// let startDate = new Date('01/01/2018')
// db.workmate.find(
//     {regeditTime:{$gt:startDate}},
//     {name:1,age:1,'skill.skillOne':1,_id:0}
// )

// -----------------多条件查询------------------------
// 1.$in 一个key多个value
// db.workmate.find({age:{$in:[25,33,30]}},{
//     name:1,'skill.skillOne':1,age:1,_id:0
// })

// 2.$or 查询多个键值
// db.workmate.find({$or:[
//     {age:{$gte:30}},
//     {'skill.skillOne':'PHP'}
// ]},{
//     name:1,'skill.skillOne':1,age:1,_id:0
// })

// 3.$and 查询满足多个键值
// db.workmate.find({$and:[
//     {age:{$gte:30}},
//     {'skill.skillThree':'PHP'}
// ]},
//     {name:1,'skill.skillThree':1,age:1,_id:0}
// )

// 4.$not 查询除条件之外的值
// db.workmate.find({
//     age:{
//         $not:{$lte:30,$gte:20}
//     }
// },{
//     name:1,'skill.skillOne':1,age:1,_id:false
// })



// ------------------数组查询----------------------










