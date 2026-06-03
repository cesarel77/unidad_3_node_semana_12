
const express = require('express');
const logger = require('./middlewares/logger');
const usersRouter = require('./routes/users');
const personajes_no_peliculasRouter = require('./routes/personajes_de_marvel_que_no_salen_en_peliculas_de_marvel');
const app = express();

//middlewares glovales
app.use(express.json());   //leer JSON del body
app.use(logger);



//rutas
app.use('/usuario', personajes_no_peliculasRouter);

const PORT = 3002;

app.listen(PORT,() => 
    {
        console.log('hola', PORT);
    }
);