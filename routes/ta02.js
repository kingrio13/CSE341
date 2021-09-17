//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();




const userList= ['rio', 'sam', 'zarry', 'galvez'];


router.post('/addUser', (req, res, next) => {
//console.log(req.body.user);
const users=req.body.user;
userList.push(users);
res.redirect('/ta02');
});

router.post('/removeUser', (req, res, next) => {

  const users=req.body.user;
  const checkindex=userList.indexOf(users);

  if(checkindex >= 0){
      console.log(checkindex);
      console.log(users);
      userList.splice(checkindex, 1);
  }
  else{
    console.log('user not found');
  }


  res.redirect('/ta02');
  });
  
  




router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02 by',
    path: 'ta02', // For pug, EJS
    users:userList,
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});









module.exports = router;
