const Data = require('../../models/prove08/index');
const ITEMS_PER_PAGE = 12;





exports.fetchall=(req, res, next)=>{
  let page = req.query.page || 1; 
  const indexStart = (page - 1) * ITEMS_PER_PAGE; 
  const indexEnd = page * ITEMS_PER_PAGE;

  Data.fetchAll(data => {
    res.render('pages/prove08', {
      title: 'Prove 08',
      pageTitle: 'Your Cart',
      path: '/prove08',
      page: page,
      data: data.slice(indexStart,indexEnd),
      numPages: Math.ceil(data.length / ITEMS_PER_PAGE)
    });
  });
}


exports.getData = (req, res, next) => {
  const name = req.params.name;
  Data.findById(name, data => {
    res.render('pages/prove08-details', {
      data: data,
      path: '/prove08/find',
      title:"Find By Name"
    });
  });
};