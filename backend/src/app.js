import express from "express";
import cors from "cors";
import pkg from "@prisma/client";

const app = express();

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// ROTA REGISTER CRIAR USER
app.post("/users", async (req, res) => {
  const user = await prisma.user.create({
    data: {
      email: req.body.email,
      password: req.body.password,
    },
  });

  res.status(201).json(user);
});

//ROTA LOGIN 

app.post("/login", async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      email: req.body.email,
    },
  });

  if (!user) {
    return res.status(404).json({
      message: "User não existe",
    });
  }

  if (user.password !== req.body.password) {
    return res.status(401).json({
      message: "Senha incorreta",
    });
  }

  res.status(200).json({
    message: "Login !!!",
    role: user.role,
  });
});



//SERVIDORR
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});