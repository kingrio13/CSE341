const path = require('path');
const express = require('express');
const router = express.Router();

const bodyParser = require('body-parser');



const products =[{}]; 

router.use(bodyParser({ extended: false }));

//http://localhost:5000/prove02/admin/add-product

router.get('/', (req, res, next) => {
  res.render('pages/shop', {
    prods: products,
    pageTitle: 'Shop',
    path: '/proveactivities/prove02',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true
  });
});


router.get('/admin/add-product', (req, res, next) => {
  res.render('pages/p2add-product', {
    pageTitle: 'Add Product',
    path: '/admin/p2add-product',
    activeAddProduct: true
  });
});


router.post('/admin/add-product', (req, res, next) => {


  //products.push({ title: req.body.title });
  const title=req.body.title;
  const price=req.body.price;
  const desc=req.body.description;

  const prodList={'id':Date.now(), 'title':title, 'price':price, 'description':desc};
    products.push(prodList);
  res.redirect('/proveactivities/prove02');


  
});


// /admin/add-product => GET
router.get('/admin/delete-product', (req, res, next) => {

  //console.log(products);
  res.render('pages/p2delete-product', {
    prods: products,
    pageTitle: 'Delete Product',
    path: '/admin/p2delete-product',
    activeAddProduct: true

    
  });
});
router.post('/admin/delete-product', (req, res, next) => {

  const removeIndex=req.body.deleteProd;
  for(prod in products){
    if(removeIndex==products[prod].id){
      // console.log("nahanap ko na on Index", prod);
      
      products.splice(prod,1);
      
    }
  }
  res.redirect('/proveactivities/prove02');

});







module.exports = router;
