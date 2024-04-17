const express = require('express');
const cors = require('cors');
const router = express.Router();
const Item = require('../models/Item');

// Rota para criar um novo item
router.post('/', async (req, res) => {
    try {
        const newItem = new Item(req.body);
        const savedItem = await newItem.save();
        res.json(savedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Rota para obter todos os itens
router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Rota para atualizar um item existente
router.put('/:id', async (req, res) => {
    try {
        const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedItem);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Rota para excluir um item
router.delete('/:id', async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.json({ message: 'Item excluído com sucesso!' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;