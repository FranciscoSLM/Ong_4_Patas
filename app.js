const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');
const router = require('./routes/items');
app.use(cors());

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
