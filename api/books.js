const expressFunction = require("express")
const router = expressFunction.Router()
const db = require("../config/db")

router.route("/books/get").get((req, res) => {
    let sql = 'SELECT * FROM books'
    db.query(sql, (err, result) =>{
        if(err){
            console.log(err)
        }else{
            res.status(200).send(result[0])
        }
    })
})

router.route("/books/add").post((req, res) => {
    const data ={
        name: req.body.name
    }
    let sql = 'INSERT INTO books SET ?'
    db.query(sql, [data], (err, result) =>{
        if(err){
            console.log(err)
        }else{
            res.status(200).send({messgae: "add book successfully"})
        }
    })
})

router.route("/books/get").get((req, res) => {
    let sql = 'SELECT * FROM books'
    db.query(sql, (err, result) =>{
        if(err){
            console.log(err)
        }else{
            res.status(200).send(result[0])
        }
    })
})

router.route("/books/get/id/:id").get((req, res) => {
    const id = req.params.id
    let sql = 'SELECT * FROM books WHERE id = ?'
    db.query(sql, [id],  (err, result) =>{
        if(err){
            console.log(err)
        }else{
            if(result[0] === undefined){
                res.status(200).send({message: "Cant get book by id", status: false})
            }else{
                res.status(200).send(result[0])
            }
        }
    })
})

module.exports = router