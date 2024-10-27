import { buscarPorId } from "../../repository/servicoRepository.js";

export default async function consultarPorIdService(id) {
    let registros = await buscarPorId(id);
    return registros;
}
