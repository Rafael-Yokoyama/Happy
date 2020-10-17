 const orfanato = require('./database/fakedate.js')
 
 
 module.exports = {
     index (req,res){
        return res.render("index");
     },
     orfanato (req,res){
        return res.render("orfanato",{orfanato});

     },
     orfanatos (req,res){
        return res.render("orfanatos");

     },
     criar (req,res){
        return res.render("criar");

     }



 }