import { listar } from "../../repository/servicoRepository.js";

export default async function consultarService() {
    let registros = await listar();
    return registros;
}