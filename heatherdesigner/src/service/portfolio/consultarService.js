import { listar } from "../../repository/portfolioRepository.js";

export default async function consultarService() {
    let registros = await listar();
    return registros;
}