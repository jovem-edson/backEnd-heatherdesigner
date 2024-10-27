import { login } from "../../repository/loginRepository.js";


export default async function logarService(credenciais) {
    let info = await login(credenciais);
    if (info == undefined) {
        throw new Error('Credenciais inválidas');
    }

    return info;
}

