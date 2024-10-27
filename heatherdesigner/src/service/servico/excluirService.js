import { excluir } from "../../repository/servicoRepository.js";

export default async function excluirService(id) {
    let linhasAfetadas = await excluir(id);
    return linhasAfetadas;
}