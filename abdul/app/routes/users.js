var express = require('express');
var router = express.Router();

let usersController = require('../controllers/users');

/* GET users listing. */
router.get('/', usersController.users);

router.get('/profile', usersController.profile);

router.get('/project', usersController.profile);
router.get('/contact', usersController.contact);
module.exports = router;
