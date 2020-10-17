
//importar depedencia
const express =  require('express');
const path =require('path');
const  pages = require('./pages')
//iniciando o express
const  server = express()
server

// utilizadno os arquivos estaticos
.use(express.static('public'))
//configurar templete egine
.set('views', path.join(__dirname,'views'))
.set('view engine', 'hbs')

//rotas da apcação
.get('/', pages.index )
.get('/orfanato', pages.orfanato )
.get('/orfanatos', pages.orfanatos )
.get('/criar', pages.criar )
  

   


//ligar o servidor
server.listen(5500)