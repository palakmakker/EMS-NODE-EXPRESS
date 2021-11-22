const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


//create find update and delete
router.get('/', userController.view);
router.post('/' , userController.find);

// router.get('/', userController.view);


router.get('/adduser' , userController.form);
router.post('/adduser' , userController.create);

router.get('/edit-user/:id' , userController.edit);
router.post('/edit-user/:id' , userController.update);

router.get('/view-user/:id', userController.viewall);

router.get('/:id' , userController.delete);

module.exports = router;