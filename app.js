const express = require('express');
const { sequelize } = require('./models');
const router = require('./routes/items');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/', router);

sequelize.sync().then(() => {
    console.log('Sucesso');
    app.listen(PORT, () => {
        console.log(`Servidor rodando na porta ${PORT}`);
    });
}).catch((err) => {
    console.error('Falha ao sincronizar com o banco de dados:', err);
});
