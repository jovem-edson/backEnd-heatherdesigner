import { gerarToken } from '../utils/jwt.js';
import logarService from '../service/login/logarService.js';

import { Router } from 'express';
const endpoints = Router();


endpoints.post('/login', async (req, resp) => {
    try {    
        let credenciais = req.body;

        let info = await logarService(credenciais);

        let token = gerarToken(info)

        resp.send({ token });
            
    } catch (err) {
        resp.status(401).send({ erro: err.message });
    }
})




export default endpoints;