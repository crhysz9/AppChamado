import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

//ROTA CRIAR CHAMADO

router.post("/", async (req, res) => {
  const chamado = await prisma.chamado.create({
    data: {
      assunto: req.body.assunto,
      descricao: req.body.descricao,
      prioridade: req.body.prioridade,
      usuarioId: req.body.usuarioId
    }
  });

  res.status(201).json(chamado);
});

//ROTA LISTARR CHAMADOS

router.get("/", async (req, res) => {

  const chamados = await prisma.chamado.findMany();

  res.status(200).json(chamados);

});




export default router;