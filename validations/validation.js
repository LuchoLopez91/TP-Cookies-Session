const {check} = require("express-validator");

module.exports = [
    check("name").notEmpty().withMessage("Debes completar este campo"),

    check("color").notEmpty().withMessage("Debes elegir un color"),
    
    check("email").isEmail().withMessage("Debes completar con un email valido")
]