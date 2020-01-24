db.createUser({
    user:'jspang',
    pwd:'123456',
    customData:{
        name:'技术胖',
        email:'123456@qq.com',
        age:22,
    },
    roles:['read']
})

// 查找用户
db.system.users.find()

// 删除用户
db.system.users.remove({user:'jspang'})

// 建权：验证用户的用户名和密码是否正确
db.auth('jspang','123456')

// mongod
// mongo -u jspang -p 123456 127.0.0.1:27017/admin