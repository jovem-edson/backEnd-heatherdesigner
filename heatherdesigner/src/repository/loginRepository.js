import con from "./connection.js"


export async function login(credenciais) {
    const comando = `
        select id_login     as id,
               ds_email     as email
          from tb_login
         where ds_email = ?
           and ds_senha = ?
    `

    const [registros] = await con.query(comando, [credenciais.email, credenciais.senha])
    return registros[0];
}
