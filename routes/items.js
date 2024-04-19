const express = require('express');
const cors = require('cors');
const router = express.Router();
const { partners } = require('../models/index');

router.use(cors());

// Rota para criar um novo parceiro
router.post('/createPartnears', async (req, res) => {
    try {
        const { nome, email, telefone } = req.body;
        await partners.create({ nome, email, telefone });
        res.send('Partner salvo com sucesso');
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Rota para obter todos os parceiros
router.get('/', async (req, res) => {
    try {
        const allPartners = await partners.findAll();
        res.json(allPartners);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
