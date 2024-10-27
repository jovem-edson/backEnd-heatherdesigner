import { alterar } from "../../repository/servicoRepository.js";

export default async function alterarService(id, servico) {
    let linhasAfetadas = await alterar(id, servico);
    return linhasAfetadas;
}