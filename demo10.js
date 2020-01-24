// 1.hasNext 
// let db = connect('company')
// let result = db.workmate.find()

// while(result.hasNext()){
//     printjson(result.next())
// }

// 2.forEach
let db = connect('company')
let result = db.workmate.find()

result.forEach(function(result){
    printjson(result)
})