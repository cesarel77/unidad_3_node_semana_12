
// modificar para ,mostrar ,as datos
const express = require('express');
const router = express.Router();

//base de datos temporal en memoria
let users = [
    {id: 1, nombre: 'Cesar', edad: 33 },
    {id: 2, nombre: 'Franco zzz', edad: 3 },
    {id: 3, nombre: 'Salvador', edad: 99 },
];

// get /usuario - obtener 
router.get(
    '/', (req, res) => {
        res.json(users);
    }
);

// get /usuario/:id - obtener uno por id select * from users where id=1
router.get(
    '/:id', (req, res) => {
        const user = users.find(
            u => u.id === parseInt(req.params.id)
        );
        if(!user){
            return res.status(404).json(
                { error: 'Usuario no encontrado' }
            );
        }
        res.json(user);
    }
);

/*
// comillas simples ''
const express = require('express');
const router = express.Router();
//get users  localhost:3000/users
router.get('/' ,
    (req, res) => {
        res.json(
            {users: ['Cesar' , 'Oñate' ]}
        );
    }
);

//GET users whith id localhost:3000/users:id
router.get('/:id', 
    (req, res) => {
        res.json(
            {id: req.params.id}
        );
    }
);
*/
module.exports = router;








