// controller/portfolioController.js
import inserirPortfolio from "../service/portfolio/inserirService.js";
import consultarPortfolio from "../service/portfolio/consultarService.js";
import consultarPorIdPortfolio from "../service/portfolio/consultarPorIdService.js";
import alterarPortfolio from "../service/portfolio/alterarService.js";
import excluirPortfolio from "../service/portfolio/excluirService.js";
import alterarCapaPortfolioService from "../service/portfolio/alterarCapaService.js";

import uploadMiddleware from "../middlewares/uploadImages.js";
import { autenticar } from "../utils/jwt.js"; 
import { Router } from "express";

const endpoints = Router();

// CREATE
endpoints.post('/portfolio', autenticar, async (req, resp) => {
    try {
        let portfolio = req.body;
        let id = await inserirPortfolio(portfolio);

        resp.send({ novoId: id });
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

// READ
endpoints.get('/portfolio', autenticar, async (req, resp) => {
    try {
        let portfolios = await consultarPortfolio();
        resp.send(portfolios);
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

// READ BY ID
endpoints.get('/portfolio/:id', autenticar, async (req, resp) => {
    try {
        let idParaConsultar = Number(req.params.id);
        let portfolio = await consultarPorIdPortfolio(idParaConsultar);
        resp.send(portfolio);
    }
    catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

// UPDATE
endpoints.put('/portfolio/:id', autenticar, async (req, resp) => {
    try {
        let corpoParaAlterar = req.body;
        let idParaAlterar = Number(req.params.id);
        
        await alterarPortfolio(idParaAlterar, corpoParaAlterar);
        resp.send({ idAlterar: idParaAlterar });
    }
    catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

// DELETE
endpoints.delete('/portfolio/:id', autenticar, async (req, resp) => {
    try {
        let idParaDeletar = Number(req.params.id);
        await excluirPortfolio(idParaDeletar);
        resp.send({ idDeletado: idParaDeletar });
    }
    catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

// UPDATE IMAGE
endpoints.put('/portfolio/:id/imagem', autenticar, uploadMiddleware.single('imagem'), async (req, resp) => {
    try {
        const id = req.params.id;
        const caminhoImagem = req.file.path;

        await alterarCapaPortfolioService(id, caminhoImagem);
        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({ erro: err.message });
    }
});

export default endpoints;
