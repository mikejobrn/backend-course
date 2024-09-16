import { Genero } from "../domain";
import { getConexao } from "./conexao";

export class GeneroRepository {
    public async getAll() {
        const conexao = await getConexao();
        const [resultado] = await conexao.query("SELECT id, nome FROM generos ORDER BY nome ASC");
        conexao.end();
        return resultado as Genero[];
    }
}