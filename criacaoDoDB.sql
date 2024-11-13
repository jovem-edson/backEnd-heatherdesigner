-- DROP DATABASE heather;
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

-- Preenchendo Serviços para alimentar o gráfico


-- Janeiro de 2024
INSERT INTO tb_servico (titulo_tarefa, nome_cliente, preco, tag_tarefa, status_andamento, data_entrega)
VALUES ("Desenvolvimento de site", "Cliente A", 1200.00, "Desenvolvimento", "Concluído", '2024-01-15');

-- Fevereiro de 2024
INSERT INTO tb_servico (titulo_tarefa, nome_cliente, preco, tag_tarefa, status_andamento, data_entrega)
VALUES ("Consultoria de marketing", "Cliente B", 800.00, "Consultoria", "Concluído", '2024-02-05');

-- Março de 2024
INSERT INTO tb_servico (titulo_tarefa, nome_cliente, preco, tag_tarefa, status_andamento, data_entrega)
VALUES ("Design gráfico", "Cliente C", 600.00, "Design", "Em andamento", '2024-03-20');

-- Março de 2024
INSERT INTO tb_servico (titulo_tarefa, nome_cliente, preco, tag_tarefa, status_andamento, data_entrega)
VALUES ("Desenvolvimento de e-commerce", "Cliente D", 2500.00, "Desenvolvimento", "Concluído", '2024-03-10');

-- Abril de 2024
INSERT INTO tb_servico (titulo_tarefa, nome_cliente, preco, tag_tarefa, status_andamento, data_entrega)
VALUES ("Criação de logo", "Cliente E", 900.00, "Design", "Concluído", '2024-04-05');

-- Maio de 2024
INSERT INTO tb_servico (titulo_tarefa, nome_cliente, preco, tag_tarefa, status_andamento, data_entrega)
VALUES ("SEO para site", "Cliente F", 1100.00, "Consultoria", "Em andamento", '2024-05-18');

-- Maio de 2024
INSERT INTO tb_servico (titulo_tarefa, nome_cliente, preco, tag_tarefa, status_andamento, data_entrega)
VALUES ("Desenvolvimento de aplicação", "Cliente G", 3200.00, "Desenvolvimento", "Concluído", '2024-05-25');

-- Junho de 2024
INSERT INTO tb_servico (titulo_tarefa, nome_cliente, preco, tag_tarefa, status_andamento, data_entrega)
VALUES ("Manutenção de site", "Cliente H", 1500.00, "Manutenção", "Concluído", '2024-06-12');

-- Julho de 2024
INSERT INTO tb_servico (titulo_tarefa, nome_cliente, preco, tag_tarefa, status_andamento, data_entrega)
VALUES ("Campanha publicitária", "Cliente I", 2000.00, "Consultoria", "Concluído", '2024-07-08');

-- Agosto de 2024
INSERT INTO tb_servico (titulo_tarefa, nome_cliente, preco, tag_tarefa, status_andamento, data_entrega)
VALUES ("Redesign de interface", "Cliente J", 1500.00, "Design", "Em andamento", '2024-08-20');


INSERT INTO tb_login (ds_email, ds_senha) VALUES (
"login@email.com", "senha");

SELECT * FROM tb_login;

