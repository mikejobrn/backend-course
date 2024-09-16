import { Request, Response } from "express";
import { GeneroService } from "../services";

export default class GeneroController {
    private _generoService = new GeneroService();

    public getAll = async (request: Request, response: Response) => {
        return response.send(await this._generoService.getAll());
    }
}