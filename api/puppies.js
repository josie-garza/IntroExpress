const express = require('express');
const router = express.Router();
const puppies = require('../puppies');

router.get('/', (req, res) => {
    // res.status(200)
    // res.send('<h1>This is soooo cool!</h1>')
    res.send(puppies);
})

router.post('/', (req, res) => {
    const age = Number(req.body.age) || 0;
    const name = req.body.name || 'Tido';
    puppies.push({
        name,
        age
    })
    res.send(puppies);
})

router.get('/:id', (req, res) => {
    const puppyId = Number(req.params.id) - 1;
    res.send(puppies[puppyId]);
})

router.put('/:id', (req, res) => {
    let puppyToModify = puppies[Number(req.params.id) - 1];
    if(puppyToModify){
        puppyToModify.name = req.body.name || puppyToModify.name;
        puppyToModify.age = req.body.age || puppyToModify.age;
        res.sendStatus(200);
    } else {
        res.sendStatus(403)
    }
})

router.delete('/:id', (req, res) => {
    puppies.splice(Number(req.param.id) - 1, 1);
    res.sendStatus(203);
})

module.exports = router;
