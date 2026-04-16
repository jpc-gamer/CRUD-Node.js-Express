const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_usuarios"
});

db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Banco conectado!");
    }
});

// GET
app.get("/usuarios", (req, res) => {
    db.query("SELECT * FROM usuarios", (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });
});

// POST
app.post("/usuarios", (req, res) => {
    const { nome, email, telefone, data_nascimento } = req.body;

    const sql = "INSERT INTO usuarios (nome, email, telefone, data_nascimento) VALUES (?, ?, ?, ?)";

    db.query(sql, [nome, email, telefone, data_nascimento], (err) => {
        if (err) return res.json(err);
        res.json({ message: "Usuário criado!" });
    });
});

// PUT
app.put("/usuarios/:id", (req, res) => {
    const { id } = req.params;
    const { nome, email, telefone } = req.body;

    const sql = "UPDATE usuarios SET nome=?, email=?, telefone=? WHERE id=?";

    db.query(sql, [nome, email, telefone, id], (err) => {
        if (err) return res.json(err);
        res.json({ message: "Atualizado!" });
    });
});

// DELETE
app.delete("/usuarios/:id", (req, res) => {
    const { id } = req.params;

    db.query("DELETE FROM usuarios WHERE id=?", [id], (err) => {
        if (err) return res.json(err);
        res.json({ message: "Deletado!" });
    });
});

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
});