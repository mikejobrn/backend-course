import { GeneroRepository } from "../repositories";

export class GeneroService {
    private _generoRepository = new GeneroRepository();

    public async getAll() {
        return await this._generoRepository.getAll();
    }
}