const express = require('express');
const router = express.Router();

let personajes_no_peliculas = [
    {id: 1, nombre: 'Hyperion', poder: 'Visión térmica', edad_relativa: 45 },
    {id: 2, nombre: 'Nova', poder: 'absorber energía', edad_relativa: 80 },
    {id: 3, nombre: 'Black Cat', poder: 'mala suerte', edad_relativa: 28 },
    {id: 4, nombre: 'Annihilus', poder: 'Fuerza Sobrehumana', edad_relativa: 616 },
];

router.get(
    '/', (req, res) => {
        res.json(personajes_no_peliculas);
    }
);

// get /usuario/:id - obtener uno por id select * from users where id=1
router.get(
    '/:id', (req, res) => {
        const per = personajes_no_peliculas.find(
            u => u.id === parseInt(req.params.id)
        );
        if(!per){
            return res.status(404).json(
                { error: 'Usuario no encontrado' }
            );
        }
        res.json(per);
    }
);

module.exports = router;