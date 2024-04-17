const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type,Authorization'
}));

// Conexão com o banco de dados MongoDB
mongoose.connect('mongodb://localhost:27017/4patas');
// Rotas
const itemsRouter = require('./routes/items');
app.use('/items', itemsRouter);

// Configurações adicionais do servidor
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
