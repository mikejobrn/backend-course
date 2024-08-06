import express from "express";
import { UsuarioRouter } from "./routes/usuario/usuario.route";
import { ValidarIdMiddleware } from "./shared/middlewares";

const app = express();

app.use(express.json());
app.use(ValidarIdMiddleware);
app.use('/usuarios', UsuarioRouter);

export default app;