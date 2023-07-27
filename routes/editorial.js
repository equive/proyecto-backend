const { PrismaClient, Prisma } = require("@prisma/client");
var express = require('express');
var router = express.Router();

const prisma = new PrismaClient();


router.get("/", async function(req, res, next){
  const editorial = await prisma.editorial.findMany();
  res.status(200).json(editorial);
  
});


router.get("/:id", async function (req, res, next) {
    const editorial = await prisma.editorial.findMany({
     where: {
         id : parseInt(req.params.id),
     },
  
    });
 
     res.status(200).json(editorial);
   });
 
   router.patch("/:id", async function (req, res, next) {
     const editorial = await prisma.editorial.updateMany({
       data: req.body,
       where: {
         // id: +req.params.id
         id: parseInt(req.params.id),
       },
     });
     res.status(200).json(editorial);
   });
   
   router.delete("/:id", async function (req, res, next) {
     const editorial = await prisma.editorial.delete({
       where: {
         // id: +req.params.id
         id: parseInt(req.params.id),
       },
     });
     res.status(202).json(editorial);
   });
   
   router.post("/", async function (req, res, next) {
     try {
       const editorial = await prisma.editorial.create({
         data: req.body,
       });
       res.status(201).json(editorial);
     } catch (error) {
       res.status(500).json(error);
     }
   });

module.exports = router;