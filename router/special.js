const express =require("express")
     const router = express.Router()

     router.get('/special' , (req,res)=>{
        res.render("../views/special")

     })
     module.exports= router;