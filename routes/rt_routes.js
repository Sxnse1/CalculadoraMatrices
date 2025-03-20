const express = require('express');
const router = express.Router();
const sql = require('mssql');

router.post('/save', async (req, res) => {

    const { operacion, matrizJSON } = req.body;
    try {

        // Query de inserción
        const result = await sql.query`INSERT INTO Matriz (operacion, matriz) VALUES (${operacion}, ${matrizJSON})`;

        res.json({ message: 'Matriz insertado con éxito', result });
    } catch (err) {
        console.error('Error al insertar:', err);
        res.status(500).json({ error: 'Error al insertar en la BD' });
    }
});
module.exports = router;
