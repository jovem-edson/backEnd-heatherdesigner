import con from "./connection.js";

export async function inserir(mensagem, dataEnvio) {
    const comando = `
        INSERT INTO tb_mensagem (nome, 
                                email, 
                                assunto, 
                                corpo_mensagem, 
                                data_mensagem) 
        VALUES (?, ?, ?, ?, ?)
    `;

    let [info] = await con.query(comando, [
        mensagem.nome, 
        mensagem.email, 
        mensagem.assunto, 
        mensagem.corpoMensagem,
        dataEnvio
    ]);
    return info.insertId;
}

export async function alterar(id, mensagem) {
    const comando = `
        UPDATE tb_mensagem
           SET nome = ?,
               email = ?,
               assunto = ?,
               corpo_mensagem = ?,
         WHERE id_mensagem = ?
    `;

    let [info] = await con.query(comando, [
        mensagem.nome, 
        mensagem.email, 
        mensagem.assunto, 
        mensagem.corpoMensagem,
        id
    ]);
    return info.affectedRows;
}

export async function listar() {
    const comando = `
        SELECT id_mensagem AS id,
               nome,
               email,
               assunto,
               corpo_mensagem AS corpoMensagem,
               data_mensagem AS dataEnvio
          FROM tb_mensagem
    `;

    let [registros] = await con.query(comando);
    return registros;
}

export async function buscarPorId(id) {
    const comando = `
        SELECT id_mensagem AS id,
               nome,
               email,
               assunto,
               corpo_mensagem AS corpoMensagem,
               data_mensagem AS dataEnvio
          FROM tb_mensagem
         WHERE id_mensagem = ?
    `;

    let [registros] = await con.query(comando, [id]);
    return registros[0];
}

export async function excluir(id) {
    const comando = `
        DELETE FROM tb_mensagem
         WHERE id_mensagem = ?
    `;

    let [info] = await con.query(comando, [id]);
    return info.affectedRows;
}
