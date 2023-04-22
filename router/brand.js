const express =require("express")
     const router = express.Router()

     router.get('/brand' , (req,res)=>{
        res.render("../views/brand")

     })
     module.exports= router;