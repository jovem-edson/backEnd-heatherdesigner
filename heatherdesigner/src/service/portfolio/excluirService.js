import { excluir } from "../../repository/portfolioRepository.js";

export default async function excluirService(id) {
    let linhasAfetadas = await excluir(id);
    return linhasAfetadas;
}