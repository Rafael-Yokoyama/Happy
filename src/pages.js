 module.exports = {
     index (req,res){
        return res.render("index");
     },
     orfanato (req,res){
        return res.render("orfanato");

     },
     orfanatos (req,res){
        return res.render("orfanatos");

     },
     criar (req,res){
        return res.render("criar");

     }



 }