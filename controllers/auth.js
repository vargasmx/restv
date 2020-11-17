const User = require('../models/User');

exports.getLogin = (req, res, next) => {
    res.render('index', { title: 'Login page' });
} ;

exports.getRegistro = (req, res, next) => {
    res.render('registro', { title: 'Registrar nuevo usuario' });
} ;

exports.postRegistro = (req, res, next) => {
    
    var user = new User(req.body.username, req.body.firstname, req.body.lastname, req.body.password);
    user.save()
        .then( result => {
            res.redirect('/auth/login');
        })
        .catch( err => {
            console.log(err);
        });
    

}