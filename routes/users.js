const express = require('express');
const router = express.Router();

//importing controller
const userController = require('../controller/users.js');

// router.get('/all',userController.users);
router.post('/all',userController.users);
router.post('/business',userController.business);
router.post('/products',userController.products);

module.exports = router;