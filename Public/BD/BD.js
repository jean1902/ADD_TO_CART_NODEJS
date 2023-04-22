let mysql = require('mysql')


let db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',

    // host:'localhost',
    // user:'root',
    // password:'',

    database:'ecommerce',
});

db.connect((err)=>{
    if(!err){
        console.log('connection etablie a la BD');

    }else{
        console.log('connection echec ' + JSON.stringify(err , undefined ,2),err);  

    }
})







module.exports = db;
