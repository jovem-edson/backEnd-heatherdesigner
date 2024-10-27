import { buscarPorId } from "../../repository/portfolioRepository.js";

export default async function consultarPorIdService(id) {
    let registros = await buscarPorId(id);
    return registros;
}
