CREATE DATABASE heather;
USE heather;

CREATE TABLE tb_login (
    id_login INT PRIMARY KEY AUTO_INCREMENT,
    ds_email VARCHAR(255),
    ds_senha VARCHAR(255)
);

CREATE TABLE tb_servico (
    id_servico INT PRIMARY KEY AUTO_INCREMENT,
    titulo_tarefa VARCHAR(255),
    nome_cliente VARCHAR(255),
    preco DECIMAL(10,2),
    tag_tarefa VARCHAR(255),
    status_andamento VARCHAR(255),
    data_entrega DATE
);

CREATE TABLE tb_portfolio (
    id_portfolio INT PRIMARY KEY AUTO_INCREMENT,
    imagem VARCHAR(255),
    titulo VARCHAR(255),
    descricao TEXT,
    data_realizacao DATE
);

CREATE TABLE tb_mensagem (
    id_mensagem INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    email VARCHAR(255),
    assunto VARCHAR(255),
    corpo_mensagem TEXT,
    data_mensagem DATE
);

INSERT INTO tb_login (ds_email, ds_senha) VALUES (
"login@email.com", "senha");

SELECT * FROM tb_login;

