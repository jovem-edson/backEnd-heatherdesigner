import { inserir } from '../../repository/mensagemRepository.js'


export default async function inserirService(mensagem, dataEnvio) {
    let id = await inserir(mensagem, dataEnvio);
    return id;
}