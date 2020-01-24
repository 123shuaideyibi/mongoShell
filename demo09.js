// 查询兴趣看电影的人员信息
db.workmate.find({interest:'看电影'},{
    name:1,interest:1,age:1,_id:0
})

// 查询兴趣是看书和看电影的人员信息
db.workmate.find(
    {interest:{$all:['看电影','看书']}},
    {name:1,interest:1,age:1,_id:0}
)

//查询兴趣是看书或看电影的人员信息
db.workmate.find(
    {interest:{$in:['看电影','看书']}},
    {name:1,interest:1,age:1,_id:0}
) 

// 查询兴趣的数量为5的人员信息
db.workmate.find(
    {interest:{$size:5}},
    {name:1,interest:1,age:1,_id:0}
)

// 显示每个人兴趣的前两项
db.workmate.find(
    {},
    {name:1,interest:{$slice:2},age:1,_id:0}
)

// 显示每个人兴趣最后一项
db.workmate.find(
    {},
    {name:1,interest:{$slice:-1},age:1,_id:0}
)

// ---------------find的参数使用方法---------------------
// 1.分页  每页显示2个  年龄从到大
db.workmate.find(
    {},
    {name:1,age:1,_id:0}
).limit(2).skip(0).sort({age:1})

// 2.$where  查询年龄>30的人
db.workmate.find(
    {$where:'this.age>30'},
    {name:1,age:1,_id:0}
)
