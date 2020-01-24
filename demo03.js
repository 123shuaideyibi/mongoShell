// 更新使用的数据


let workmate1 = {
    name: 'JSpang',
    age: 33,
    sex: 1,
    job: '前端',
    skill: {
        skillOne: 'HTML+CSS',
        skillTwo: 'JavaScript',
        skillThree: 'PHP'
    },
    regeditTime: new Date()
}

let workmate2 = {
    name: 'ShengLei',
    age: 30,
    sex: 1,
    job: '后端',
    skill: {
        skillOne: 'HTML+CSS',
        skillTwo: 'J2EE',
        skillThree: 'PPT'
    },
    regeditTime: new Date()
}

let workmate3 = {
    name: 'MinJie',
    age: 20,
    sex: 1,
    job: 'UI设计',
    skill: {
        skillOne: 'PhotoShop',
        skillTwo: 'UI',
        skillThree: 'Word+Excell+PPT'
    },
    regeditTime: new Date()
}

let db = connect('company');
let workmateArray = [workmate1, workmate2, workmate3];

db.workmate.insert(workmateArray);
print('[sucess]:数据插入成功');