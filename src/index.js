const express = require('express');
const app = express(); // se empezieza a inicializar la app
const morgan = require('morgan'); // morgan es una funcion que procesa datos antes que el servidor los resiva

// settings
app.set('port', process.env.port || 3000); // con ese comando puedo asignarle que puerto local empieza // port funciona como parametro por referencia
// process.env.port sirve para que en caso que no haya asignado un puerto definido, si no que tome el asignado
// app.set('json spaces', 2); // da un espaciado

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// middlewares
app.use(morgan('dev')); // permite ver en consola lo que llega del servidor
// app.use(morgan('combined')); // es mas complejo que dev
app.use(express.urlencoded({extend: false})); //recibe datos de un formulario
app.use(express.json()); // json permite a mi servidor poder recibir formatos json y entenderlos

// routes
app.use(require('./routes/index'));
app.use('/api/posts',require('./routes/posts'));

// crear un archivo que se llame registro.js, luego vincularlo como post y con el json

// starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port${app.get('port')}`); // en vez de poner port3000 se pone una variable y se le asigna un valor antes
});



// para prender el proyecto hay que poner localhost:3000 + npm run dev en consola :D //