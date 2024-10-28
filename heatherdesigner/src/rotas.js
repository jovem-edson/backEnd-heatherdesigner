import login from './controller/loginController.js'


export default function adicionarRotas(servidor) {
    servidor.use(login);
}

