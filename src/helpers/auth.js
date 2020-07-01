const helpers = {};

helpers.isAuthenticate = (req, res, next) => {
    if(req.isAuthenticated()){
        return next();
    }
    req.flash('error_msg', 'Inicia sesion');
    res.redirect('/users/signin');
}

module.exports = helpers;