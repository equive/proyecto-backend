
const { PrismaClient, Prisma } = require("@prisma/client");
var express = require('express');
const { param } = require(".");
var router = express.Router();

const prisma = new PrismaClient();


router.get("/", async function(req, res, next){
  const books = await prisma.book.findMany();
  res.status(200).json(books);
  
});

router.get("/:id", async function (req, res, next) {
   const book = await prisma.book.findMany({
    where: {
        id : parseInt(req.params.id),
    },
 
   });

    res.status(200).json(book);
  });

  router.patch("/:id", async function (req, res, next) {
    const books = await prisma.book.updateMany({
      data: req.body,
      where: {
        // id: +req.params.id
        id: parseInt(req.params.id),
      },
    });
    res.status(200).json(books);
  });
  
  router.delete("/:id", async function (req, res, next) {
    const books = await prisma.book.delete({
      where: {
        // id: +req.params.id
        id: parseInt(req.params.id),
      },
    });
    res.status(202).json(books);
  });
  
  router.post("/", async function (req, res, next) {
    try {
      const books = await prisma.book.create({
        data: req.body,
      });
      res.status(201).json(books);
    } catch (error) {
      res.status(500).json(error);
    }
  });



module.exports = router;
