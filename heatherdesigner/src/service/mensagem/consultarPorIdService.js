import { buscarPorId } from "../../repository/mensagemRepository.js";

export default async function consultarPorIdService(id) {
    let registros = await buscarPorId(id);
    return registros;
}
