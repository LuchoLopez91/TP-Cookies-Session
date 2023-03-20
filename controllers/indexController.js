const {validationResult} = require("express-validator");

module.exports = {
    index: (req, res) => res.render("login"),

    send: (req, res) => {

        let errors = validationResult(req);

        if(errors.isEmpty()){
            
            const {name, color, email, age, recordar} = req.body
           
           req.session.user = {
                name: name,
                email: email,
                color: color,
                age: age
            }
            if(recordar){

                res.cookie("cookies", req.session.user, {maxAge:60000})
            }
            return res.redirect("/")

        }else{
            res.render("login", {errors: errors.mapped(), old: req.body})
        }
        
    },

    next: (req, res) => {
        return res.render("hola")
    },

    olvidar: (req, res) => {
        req.session.destroy();
        res.cookie("cookies", null, {maxAge: -1})
        return res.redirect("/")
    }
}