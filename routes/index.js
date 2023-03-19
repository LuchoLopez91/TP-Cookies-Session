const express = require('express');
const router = express.Router();
const {index, send, next, olvidar} = require("../controllers/indexController")
const validation = require("../validations/validation")
/* GET home page. */
router.get('/', index)
router.post('/', validation, send)
router.get("/hola", next)
router.post("/hola", olvidar);

module.exports = router;

