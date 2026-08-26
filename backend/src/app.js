import 'dotenv/config';
import express from "express";
import cors from "cors";
import pkg from "@prisma/client";
import authRoutes from "./routes/auth.js";
import chamadosRoutes from "./routes/chamados.js";
const app = express();

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
app.use("/chamados", chamadosRoutes);

//SERVIDORR
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
