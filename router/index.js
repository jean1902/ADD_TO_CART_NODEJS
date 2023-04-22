const express =require("express")

var session = require('express-session') 

const mysql =require('mysql')
     const router = express.Router()
     const db = require('../Public/BD/BD')
     const bodyParser = require("body-parser");
    var urlencodedParser = bodyParser.urlencoded({ extended: false })

 

     router.get('/' , (req,res)=>{
      
      let sql ='SELECT * FROM products'
      db.query(sql, function(err,results){

         if (err) {
            console.log("ERREUR", err); 
            // res.send('bonjour')
          } else {
           if(!req.session.cart){
            req.session.cart = [];
           

           }
         res.render('../views/index',{result :results , cart:req.session.cart} )
         console.log(results,"hello")
      } })
})

router.post('/add_to_cart' ,urlencodedParser,(req,res)=>{  
   const { id, nom ,price ,sale_price,quantity,image}= req.body
   let count =0;
   for( let i =0; i<req.session.cart.length; i++){
      if( req.session.cart[i].id ===id){
         req.session.cart[i].quantity +=1;
         count++;
      }
   }
   if(count === 0){
      const cart_data={
         id :id,
         nom:nom,
         price:price,
         sale_price:parseFloat(sale_price),
         quantity:1,
         image:image
      };
      req.session.cart.push(cart_data)
   }
   res.redirect("/")
})
//Create Route for Remove Item from Shopping Cart
router.get('/remove_item', (request, response) => {

	const id = request.query.id;

	for(let i = 0; i < request.session.cart.length; i++)
	{
		if(request.session.cart[i].id === id)
		{
			request.session.cart.splice(i, 1);
		}
	}

	response.redirect("/");

});





     module.exports= router;