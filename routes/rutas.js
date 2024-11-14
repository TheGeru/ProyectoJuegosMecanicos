const express = require("express");
const rutajuegos = express.Router();

rutajuegos.get('/', async(req, res) =>{
    res.render("paginaInicio.ejs");
});

module.exports = rutajuegos;