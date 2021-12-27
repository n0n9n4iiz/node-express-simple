const express = require("express")
const router = express.Router()
const users = require('../../data/users')

//get
router.get("/",(req,res)=> res.json(users))
//get with param
router.get("/:id",(req,res)=> res.json(users.filter(x=>x.id == req.params.id)))
//post
router.post('/',(req,res)=>{
    users.push({
        id: req.body.id,
        fname: req.body.fname,
        lname:req.body.lname
    })
    res.json(users)
})
module.exports = router;