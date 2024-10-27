import { alterar } from "../../repository/portfolioRepository.js";

export default async function alterarService(id, portfolio) {
    let linhasAfetadas = await alterar(id, portfolio);
    return linhasAfetadas;
}