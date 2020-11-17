var express = require('express');
var router = express.Router();
const AuthController = require('../controllers/auth');

/* GET login page. */
router.get('/login', AuthController.getLogin);
router.get('/registro', AuthController.getRegistro);
router.post('/registro', AuthController.postRegistro);

module.exports = router;