import { buscarFaturamento } from "../../repository/servicoRepository.js";

export default async function consultarFaturamentoService() {
    let registros = await buscarFaturamento();
    return registros;
}
