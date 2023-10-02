var express = require('express');
var router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.home);
router.get('/index.html', indexController.home)
router.get('/about', indexController.about);


router.get('/project', indexController.project);
router.get('/aboutP2', indexController.aboutP2);
router.get('/aboutP1', indexController.aboutP1);
router.get('/aboutP', indexController.aboutP);
router.get('/Details_page1.html', indexController.aboutP);
router.get('/Details_page2.html', indexController.aboutP1);
router.get('/Details_page3.html', indexController.aboutP2);
router.get('/services', indexController.service);
module.exports = router;
