const express = require("express");
const router = express.Router();
const users = require("../../data/users");

//get
router.get("/", (req, res) => res.json(users));
//get with param
router.get("/:id", (req, res) =>
  res.json(users.filter((x) => x.id == req.params.id))
);
//post
router.post("/", (req, res) => {
  users.push({
    id: req.body.id,
    fname: req.body.fname,
    lname: req.body.lname,
  });
  res.json(users);
});

router.put("/:id", (req, res) => {
  var found = users.find((x) => x.id == req.params.id);
  if (found) {
    const updUser = req.body;
    users.forEach((z) => {
      if (z.id == found.id) {
        // if (z.fname != req.body.fname) {
        //   z.fname = req.body.fname;
        // }
        //z.fname != req.body.fname ? z.fname = req.body.fname : z.fname;
        z.fname = updUser.fname ? updUser.fname : z.fname
      }
    });
    res.json(users);
  }
});

router.delete("/:id",(req,res)=>{
    var found = users.find((x) => x.id == req.params.id);
    if(found){
        res.json(users.filter(x => x.id != req.params.id))
    }else{
        res.status(404).json({msg:"there is not id"})
    }
})
module.exports = router;
