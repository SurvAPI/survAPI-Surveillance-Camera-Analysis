// bcrypt
const bcrypt = require('bcrypt');
const saltRounds = 10;

/**
 * 
 * @param {String} password entered password
 * @param {String} userPassword persisted user password
 * @param {Response} res Response in which the website will be rendered
 * @param {Session} sessionTmp current user session
 */
exports.authenticate = async function(password, userPassword, res, sessionTmp) { 
    
    bcrypt.compare(password, userPassword, function(err, result) {

        console.log([password, userPassword].join(','));

        if(!err && result) {
        res.render("login.ejs", {username: sessionTmp.username, error: ""});
        } else {
        res.render("login.ejs", {username: 0, error: "This password is wrong."});
        sessionTmp.destroy();
        return;
    }
})};