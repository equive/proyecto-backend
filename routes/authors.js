const { PrismaClient, Prisma } = require("@prisma/client");
var express = require('express');
var router = express.Router();

const prisma = new PrismaClient();


router.get("/", async function(req, res, next){
  const author = await prisma.author.findMany();
  res.status(200).json(author);
  

});


router.get("/:id", async function (req, res, next) {
    const author = await prisma.author.findMany({
     where: {
         id : parseInt(req.params.id),
     },
  
    });
 
     res.status(200).json(author);
   });
 
   router.patch("/:id", async function (req, res, next) {
     const author = await prisma.author.updateMany({
       data: req.body,
       where: {
         // id: +req.params.id
         id: parseInt(req.params.id),
       },
     });
     res.status(200).json(author);
   });
   
   router.delete("/:id", async function (req, res, next) {
     const author = await prisma.author.delete({
       where: {
         // id: +req.params.id
         id: parseInt(req.params.id),
       },
     });
     res.status(202).json(author);
   });
   
   router.post("/", async function (req, res, next) {
     try {
       const author = await prisma.author.create({
         data: req.body,
       });
       res.status(201).json(author);
     } catch (error) {
       res.status(500).json(error);
     }
   });

module.exports = router;