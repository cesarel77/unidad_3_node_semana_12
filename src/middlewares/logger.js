
//creamos una constante , a la cual le asignamos una 
// funcion anonima
// req=request = peticion
// res=response = respuesta
const logger = (req, res, next) => {
    // ${variable}
    console.log(`${req.method} ${req.url}`);
    next();
};



module.exports = logger;