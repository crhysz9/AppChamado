import 'dotenv/config';
import express from "express";
import cors from "cors";
import pkg from "@prisma/client";
import router from './routes/auth';

const app = express();

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.use('/auth', router);

app.get('/', (req, res) => {
  res.json({
    message: "Api Funcionando!"
  })
})
//SERVIDORR
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
