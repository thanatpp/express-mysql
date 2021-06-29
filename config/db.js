const mysql = require("mysql")

const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'Books'
})

//connect to database
db.connect(err => {
    if(err){
        console.log(err)
    }else{
        console.log("Connected to database successfully")
    }
})

module.exports = db