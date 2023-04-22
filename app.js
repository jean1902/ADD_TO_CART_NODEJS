const express = require('express')
const mysql =require('mysql')
    const app =express();
    const session= require("express-session")
    const Port =5000;
    const bodyParser = require("body-parser");
    var urlencodedParser = bodyParser.urlencoded({ extended: false })
    const routerindex =require('./router/')
    const routerBrand = require("./router/brand")
    const routerContact = require("./router/contact")
    const routerAbout = require("./router/about")
    const routerSpecial = require("./router/special")
    const db = require('./Public/BD/BD')

    app.set('views','./views')
    app.set('view engine' ,'ejs')
    app.use('/Public',express.static('public'))

    app.use(session({
        secret : '1234567890abcdefghijklmnopqrstuvwxyz',
        resave : false,
        saveUninitialized : true,
        cookie : { secure : false }
    }));
    

    // app.get('',function(req,res){
    //     res.render('pages/index')
    // })
   app.use('/' ,routerindex,routerBrand,routerContact ,routerSpecial,routerAbout )
   
    app.listen( Port ,()=>{
        console.log('nodejs conneted sur  port 5000')
    })