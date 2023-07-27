

var express = require('express');
var router = express.Router();
const { PrismaClient } = require("@prisma/client");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/hola", function(req, res, next){
  res.send("Hello")
  
});

module.exports = router;
