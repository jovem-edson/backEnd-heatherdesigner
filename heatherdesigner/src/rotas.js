import login from './controller/loginController.js'
import servico from './controller/servicoController.js'


export default function adicionarRotas(servidor) {
    servidor.use(login);
    servidor.use(servico)
}

