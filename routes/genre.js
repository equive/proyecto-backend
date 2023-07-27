const { PrismaClient, Prisma } = require("@prisma/client");
var express = require('express');
var router = express.Router();

const prisma = new PrismaClient();


router.get("/", async function(req, res, next){
  const genre = await prisma.genre.findMany();
  res.status(200).json(genre);
  
});


router.get("/:id", async function (req, res, next) {
    const genre = await prisma.genre.findMany({
     where: {
         id : parseInt(req.params.id),
     },
  
    });
 
     res.status(200).json(genre);
   });
 
   router.patch("/:id", async function (req, res, next) {
     const genre = await prisma.genre.updateMany({
       data: req.body,
       where: {
         // id: +req.params.id
         id: parseInt(req.params.id),
       },
     });
     res.status(200).json(genre);
   });
   
   router.delete("/:id", async function (req, res, next) {
     const genre = await prisma.genre.delete({
       where: {
         // id: +req.params.id
         id: parseInt(req.params.id),
       },
     });
     res.status(202).json(genre);
   });
   
   router.post("/", async function (req, res, next) {
     try {
       const genre = await prisma.genre.create({
         data: req.body,
       });
       res.status(201).json(genre);
     } catch (error) {
       res.status(500).json(error);
     }
   });

module.exports = router;