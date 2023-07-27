
const { PrismaClient, Prisma } = require("@prisma/client");
var express = require('express');
var router = express.Router();

const prisma = new PrismaClient();


router.get("/", async function(req, res, next){
  const books = await prisma.book.findMany();
  res.status(200).json(books);
  
});

module.exports = router;