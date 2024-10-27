import { inserir } from '../../repository/mensagemRepository.js'


export default async function inserirService(mensagem) {
    let id = await inserir(mensagem);
    return id;
}