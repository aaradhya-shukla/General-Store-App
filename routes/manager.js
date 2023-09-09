const express = require('express');

const router = express.Router();

const Admin = require('../controllers/admin');

router.get('/get-items',Admin.getItems);

router.post('/add-item',Admin.addItem);

router.post('/update-item/:itemId',Admin.updateItem);

router.get('/get-item/:itemId',Admin.getItem)

module.exports=router;