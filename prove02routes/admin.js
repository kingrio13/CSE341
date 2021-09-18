const path = require('path');

const express = require('express');

const rootDir = require('../proove02util/path');
const { route } = require('../routes/ta02');

const router = express.Router();

//const products = []; //this is for the single array

const products =[{}]; //this is for the objects


// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  
    activeAddProduct: true
  });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  //products.push({ title: req.body.title });
  const title=req.body.title;
  const price=req.body.price;
  const desc=req.body.description;

  const prodList={'id':Date.now(), 'title':title, 'price':price, 'description':desc};

    products.push(prodList);

  res.redirect('/');
});


// /admin/add-product => GET
router.get('/delete-product', (req, res, next) => {
  //console.log(products);
  res.render('delete-product', {
    prods: products,
    pageTitle: 'Delete Product',
    path: '/admin/delete-product',
    activeAddProduct: true

    
  });
});




router.post('/delete-product', (req, res, next) => {
  //console.log(req.body.deleteProd);

  const removeIndex=req.body.deleteProd;
  // console.log("remove Index",removeIndex);
  // console.log(products);


  for(prod in products){
    if(removeIndex==products[prod].id){
      console.log("nahanap ko na on Index", prod);
      
      products.splice(prod,1);
      
    }
  }


  // products.splice(removeIndex, 1);
  //res.redirect('/delete-product');
 res.redirect('/');//this is working, it weird


});







exports.routes = router;
exports.products = products;
