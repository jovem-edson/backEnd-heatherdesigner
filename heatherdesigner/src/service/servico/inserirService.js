import { inserir } from '../../repository/servicoRepository.js'


export default async function inserirService(servico) {
    let id = await inserir(servico);
    return id;
}