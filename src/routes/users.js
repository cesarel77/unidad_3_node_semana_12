
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

module.exports = router;








