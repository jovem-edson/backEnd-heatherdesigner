import { inserir } from '../../repository/portfolioRepository.js'


export default async function inserirService(portfolio) {
    let id = await inserir(portfolio);
    return id;
}