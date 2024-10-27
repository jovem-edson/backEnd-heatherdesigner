import con from "./connection.js";


export async function inserir(servico) {
    const comando = `
        insert into tb_servico(titulo_tarefa, cliente, tag_tarefa, status_andamento, data_entrega) 
					        values (?, ?, ?, ?, ?)
    `

    let [info] = await con.query(comando, [servico.titulo, servico.cliente, servico.tag_tarefa, servico.status, servico.entrega]);
    return info.insertId;
}



export async function alterar(id, servico) {
    const comando = `
        update tb_servico
           set titulo_tarefa            = ?,
               cliente            = ?,
               tag_tarefa          = ?,
               status_andamento         = ?,
               data_entrega          = ?
          where id_servico = ?
    `

    let [info] = await con.query(comando, [servico.titulo, servico.cliente, servico.tag_tarefa, servico.status, servico.entrega, id]);
    return info.affectedRows;
}




export async function listar() {
    const comando = `
        select id_servico       id,
               titulo_tarefa            titulo_tarefa,
               cliente            cliente,
               tag_tarefa          tag_tarefa,
               status_andamento         status,
               data_entrega          data_entrega
          from tb_servico    `

    let [registros] = await con.query(comando);
    return registros;
}




export async function buscarPorId(id) {
    const comando = `
        select id_servico       id,
               titulo_tarefa            titulo_tarefa,
               cliente            cliente,
               tag_tarefa          tag_tarefa,
               status_andamento         status,
               data_entrega          data_entrega
          from tb_servico         where id_servico = ?
    `

    let [registros] = await con.query(comando, [id]);
    return registros[0];
}





export async function excluir(id) {
    const comando = `
        delete from tb_servico
           where id_servico = ?
    `

    let [info] = await con.query(comando, [id]);
    return info.affectedRows;
}