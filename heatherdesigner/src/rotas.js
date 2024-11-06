import login from './controller/loginController.js'
import servico from './controller/servicoController.js'
import portfolio from './controller/portfolioController.js'
import mensagem from './controller/mensagemController.js'


export default function adicionarRotas(servidor) {
    servidor.use(login);
    servidor.use(servico);
    servidor.use(portfolio);
    servidor.use(mensagem)
}

