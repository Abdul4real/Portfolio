var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.home);

router.get('/about', indexController.about);


router.get('/project', indexController.project);
router.get('/aboutP2', indexController.aboutP2);
router.get('/aboutP1', indexController.aboutP1);
router.get('/aboutP', indexController.aboutP);

router.get('/services', indexController.service);
module.exports = router;
