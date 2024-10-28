import inserirService from "../service/servico/inserirService.js";
import consultarService from "../service/servico/consultarService.js";
import consultarPorIdService from "../service/servico/consultarPorIdService.js";
import alterarService from "../service/servico/alterarService.js";
import excluirService from "../service/servico/excluirService.js";


import { Router } from "express";
const endpoints = Router();


// CREATE
endpoints.post('/servico', async (req, resp) => {
    try {
        let servico = req.body

        let id = await inserirService(servico);

        resp.send({
            novoId: id
        })
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }


})

// READ

endpoints.get('/servico', async (req, resp) => {
    try {
        let servicos = await consultarService();
        resp.send(servicos);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }


})

// READ BY ID
endpoints.get('/servico/:id', async (req, resp) => {
    try {
        let idParaConsultar = Number(req.params.id);

        let servico = await consultarPorIdService(idParaConsultar);
        resp.send(servico);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

// UPDATE
endpoints.put('/servico/:id', async (req, resp) => {
    try {
        let corpoParaAlterar = req.body;

        let idParaAlterar = Number(req.params.id);

        let servico = await alterarService(idParaAlterar, corpoParaAlterar);
        resp.send({
            idAlterar: idParaAlterar
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

// DELETE
endpoints.delete('/servico/:id', async (req, resp) => {
    try {
        let idParaDeletar = Number(req.params.id);
        await excluirService(idParaDeletar);
        resp.send({
            idDeletado: idParaDeletar
        })
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})


export default endpoints;