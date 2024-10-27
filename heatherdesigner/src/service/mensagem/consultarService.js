import { listar } from "../../repository/mensagemRepository.js";

export default async function consultarService() {
    let registros = await listar();
    return registros;
}