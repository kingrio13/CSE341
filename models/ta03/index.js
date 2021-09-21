const fetch = require('node-fetch');

const url = "https://byui-cse.github.io/cse341-course/lesson03/items.json";
let data=[];


let settings = { method: "Get" };


const getData = cb => {
fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        // do something with JSON
        cb(json);
    });
}


module.exports = class Data{

    constructor(){

    }

    static fetchAll(cb) {
        getData(cb);
      }

      static findById(name, cb) {
        getData(data => {
          const product = data.find(p => p.name === name);
          cb(product);
        });
      }

    

}



