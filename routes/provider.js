const express = require('express');
const router = express.Router();
const model = require('../models');
const Provider = model.Provider;

router.get('/', function(req, res) {
    res.send('this is provider page');
})

router.get('/addProvider', function(req, res) {
    res.render('providers/addProvider.ejs')
})

// router.post('/addProvider', function(req, res) {
//     let tempProvider = {

//     }
//     Provider.create(tempProvider)
// })

module.exports = router;