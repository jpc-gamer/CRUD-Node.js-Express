CREATE DATABASE crud_usuarios;



USE crud_usuarios;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100),
    telefone VARCHAR(20),
    data_nascimento DATE
);

INSERT INTO usuarios (nome, email, telefone, data_nascimento) VALUES
("Julia", "julia@email.com", "11999999999", "2008-05-08"),
("Bruno", "bruno@email.com", "11888888888", "2000-03-10"),
("Carlos", "carlos@email.com", "11777777777", "1998-07-21"),
("Ana", "ana@email.com", "11666666666", "2002-11-15");

SELECT * FROM usuarios;