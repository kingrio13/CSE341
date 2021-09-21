const Data = require('../../models/ta03/index');


exports.fetchall=(req, res, next)=>{
  Data.fetchAll(data => {
    res.render('pages/ta03', {
      title: 'Team Activity 03',
      pageTitle: 'Your Cart',
      path: '/ta03',
      data: data
    });
  });
}


exports.getData = (req, res, next) => {
  const name = req.params.name;
  Data.findById(name, data => {
    res.render('pages/ta03-details', {
      data: data,
      path: '/ta03/find',
      title:"Find By Name"
    });
  });
};