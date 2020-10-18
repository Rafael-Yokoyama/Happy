const Database = require("./database/db");
const saveOrphanage = require("./database/saveOrphanage");

module.exports = {
   index(req, res) {
      return res.render("index");
   },

   async orfanato(req, res) {
      try {
         const db = await Database;
         const orfanato = await db.all("SELECT * FROM orphanages");
         return res.render("orfanato", {
            orfanato
         });
      } catch (error) {
         console.log(error);
         return res.send("Erro no banco de dados");
      }
   },

   async orfanatos(req, res) {
      const id = req.query.id;
      try {
         const db = await Database;
         const  results = await db.all(
            `SELECT * FROM orphanages WHERE id = "${id}"`
         );
         const  orfanatos = results[0]

         orfanatos.images =  orfanatos.images.split(",")
         orfanatos.firstImage =  orfanatos.images[0];
         if ( orfanatos.open_on_weekends == "0") {
            orfanatos.open_on_weekends = false;
          } else {
            orfanatos.open_on_weekends = true;
          }
    
       

         return res.render("orfanatos", {  orfanatos    })

      } catch (error) {
         console.log(error);
         return res.send("Erro no banco de dados")
      }
   },
   criar(req, res) {
      return res.render("criar");
   },
   async saveOrphanage(req, res) {
      const fields = req.body;
      // validate all fields are concludes
      if (Object.values(fields).includes("")) {
        return res.send("Todos os campos devem ser preenchidos!");
      }
  
      try {
        // save orphanage
        const db = await Database;
        await saveOrphanage(db, {
          lat: fields.lat,
          lng: fields.lng,
          name: fields.name,
          about: fields.about,
          whatsapp: fields.whatsapp,
          images: fields.images.toString(),
          instructions: fields.instructions,
          opening_hours: fields.opening_hours,
          open_on_weekends: fields.open_on_weekends,
        });
        // redirect
        return res.redirect('/orfanato')
      } catch (error) {
        console.log(error);
        return res.send("Erro no banco de dados");
      }
   },
};