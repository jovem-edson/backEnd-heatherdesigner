import inserirMensagem from "../service/mensagem/inserirService.js";
import consultarMensagem from "../service/mensagem/consultarService.js";
import consultarPorIdMensagem from "../service/mensagem/consultarPorIdService.js";
import alterarMensagem from "../service/mensagem/alterarService.js";
import excluirMensagem from "../service/mensagem/excluirService.js";


import { Router } from "express";
import { autenticar } from "../utils/jwt.js";

const endpoints = Router();


// CREATE
endpoints.post('/mensagem', autenticar, async (req, resp) => {
    try {
        let mensagem = req.body

        let id = await inserirMensagem(mensagem);

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

endpoints.get('/mensagem', autenticar, async (req, resp) => {
    try {
        let mensagens = await consultarMensagem();
        resp.send(mensagens);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }


})

// READ BY ID
endpoints.get('/mensagem/:id', autenticar, async (req, resp) => {
    try {
        let idParaConsultar = Number(req.params.id);

        let mensagem = await consultarPorIdMensagem(idParaConsultar);
        resp.send(mensagem);
    }
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

// UPDATE
endpoints.put('/mensagem/:id', autenticar, async (req, resp) => {
    try {
        let corpoParaAlterar = req.body;

        let idParaAlterar = Number(req.params.id);

        let mensagem = await alterarMensagem(idParaAlterar, corpoParaAlterar);
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
endpoints.delete('/mensagem/:id', async (req, resp) => {
    try {
        let idParaDeletar = Number(req.params.id);
        await excluirMensagem(idParaDeletar);
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