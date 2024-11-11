import { alterarCapaPortfolio } from "../../repository/portfolioRepository.js";

export default async function alterarCapaPortfolioService(id, caminhoImagem) {
    let linhasAfetadas = await alterarCapaPortfolio(id, caminhoImagem);
    if (linhasAfetadas == 0)
        throw new Error('Nenhuma Capa foi alterada');
} 