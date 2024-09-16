import { Router } from "express";
import { GeneroController } from "../../controllers";

const GeneroRouter = Router();
const _generoController = new GeneroController();

GeneroRouter.get('/', _generoController.getAll);

export { GeneroRouter };
