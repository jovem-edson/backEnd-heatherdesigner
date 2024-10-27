import { excluir } from "../../repository/mensagemRepository.js";

export default async function excluirService(id) {
    let linhasAfetadas = await excluir(id);
    return linhasAfetadas;
}