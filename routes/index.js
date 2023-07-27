import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/hola", function(req, res, next){
  res.send("Hello")
  
});

module.exports = router;
