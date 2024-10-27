import { alterar } from "../../repository/mensagemRepository.js";

export default async function alterarService(id, mensagem) {
    let linhasAfetadas = await alterar(id, mensagem);
    return linhasAfetadas;
}