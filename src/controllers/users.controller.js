const usersCtrl = {};
const User = require('../models/Usuario');
const passport = require('passport');

usersCtrl.renderSingUpForm = (req, res) => {
    res.render('users/signup');
};

usersCtrl.signup = async (req, res) => {
    const errors = [];
    const { name, email, password, confirm_password, phone, municipio, procedencia } = req.body;
    console.log(req.body);
    if(password != confirm_password){
        errors.push({text: 'las contraseñas no coinseden'});
    }
    if(password.length < 8){
        errors.push({text: 'ingresa una contraseña con al menos 8 caracteres'});
    }
    if(0 < errors.length){
        res.render('users/signup', {errors, name, email, password, confirm_password, phone, municipio, procedencia});
    } else {
        const emailUser = await User.findOne({email: email});
        if(emailUser){
            req.flash('error_msg', 'El email ya esta en uso');
            res.redirect('/users/signup');
        } else {
            const newUser = new User({
              name,
              email,
              password,
              phone,
              municipio,
              procedencia,
            });
            newUser.password = await newUser.encriptaPassword(password);
            await newUser.save();
            req.flash('success_msg', 'Usuario registrado');
            res.redirect('/users/signin');
        }
    }
};

usersCtrl.renderSingInForm = (req, res) => {
    res.render('users/signin');
};

usersCtrl.signin = passport.authenticate('local', {
    failureRedirect: '/users/signin',
    successRedirect: '/aspirantes',
    failureFlash: true
});

usersCtrl.logout = (req, res) => {
    req.logout();
    req.flash('success_msg', 'Sesion cerrada');
    res.redirect('/users/signin');
};

module.exports = usersCtrl;