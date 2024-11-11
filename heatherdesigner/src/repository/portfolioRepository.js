import con from "./connection.js";

export async function inserir(portfolio) {
    const comando = `
        INSERT INTO tb_portfolio (imagem, titulo, descricao, data_realizacao) 
        VALUES (?, ?, ?, ?)
    `

    let [info] = await con.query(comando, [
        portfolio.imagem, 
        portfolio.titulo, 
        portfolio.descricao, 
        portfolio.dataRealizacao
    ]);
    return info.insertId;
}

export async function alterar(id, portfolio) {
    const comando = `
        UPDATE tb_portfolio
           SET imagem = ?,
               titulo = ?,
               descricao = ?,
               data_realizacao = ?
         WHERE id_portfolio = ?
    `;

    let [info] = await con.query(comando, [
        portfolio.imagem, 
        portfolio.titulo, 
        portfolio.descricao, 
        portfolio.dataRealizacao,
        id
    ]);
    return info.affectedRows;
}

export async function listar() {
    const comando = `
        SELECT id_portfolio    AS id,
               imagem          ,
               titulo          ,
               descricao      ,
               data_realizacao
          FROM tb_portfolio
    `;

    let [registros] = await con.query(comando);
    return registros;
}

export async function buscarPorId(id) {
    const comando = `
        SELECT id_portfolio    AS id,
               imagem         ,
               titulo          ,
               descricao       ,
               data_realizacao dataRealizacao
          FROM tb_portfolio
         WHERE id_portfolio = ?
    `;

    let [registros] = await con.query(comando, [id]);
    return registros[0];
}

export async function excluir(id) {
    const comando = `
        DELETE FROM tb_portfolio
         WHERE id_portfolio = ?
    `;

    let [info] = await con.query(comando, [id]);
    return info.affectedRows;
}

export async function alterarCapaPortfolio(id, caminho) {
    const comando = `
    UPDATE tb_portfolio
       SET imagem = ?
     WHERE id_portfolio = ?
`

let resposta = await con.query(comando, [caminho, id]);
let info = resposta[0];

let linhasAfetadas = info.affectedRows;
return linhasAfetadas;
}

// No arquivo consultarPortfolio.js (backend)
// export async function consultarPortfolio() {
//     const portfolios = await db.query(`
//         SELECT id_portfolio, titulo, descricao, data_realizacao, imagem
//         FROM tb_portfolio
//     `);
    
//     return portfolios.map(portfolio => ({
//         ...portfolio,
//         imagem: portfolio.imagem ? `/storage/capaPorfolio/${portfolio.imagem}` : null
//     }));
// }

