const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const router = require('./routes/items');

// Criar instância do aplicativo Express
const app = express();

// Configurar o Express para servir arquivos estáticos
app.use(express.static('public'));

// Configurar CORS globalmente
app.use(cors({
    origin : '*'
}));

const PORT = process.env.PORT || 3000;

// Analisar solicitações com corpo em formato JSON
app.use(express.json());

// Usar o roteador para todas as solicitações na raiz do aplicativo
app.use('/', router);

// Sincronizar o modelo com o banco de dados e iniciar o servidor
sequelize.sync().then(() => {
    console.log('Sucesso');
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}).catch((err) => {
    console.error('Falha ao sincronizar com o banco de dados:', err);
});