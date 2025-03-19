const express = require('express');
const router = express.Router();

router.post('/save', async (req, res) => {
    let matrizRes = req.body;
    const { operacion, matrizResultado } = matrizRes;
    try {

        // Query de inserción
        const result = await sql.query`INSERT INTO Matriz (operacion, matriz) VALUES (${operacion}, ${matrizResultado})`;

        res.json({ message: 'Matriz insertado con éxito', result });
    } catch (err) {
        console.error('Error al insertar:', err);
        res.status(500).json({ error: 'Error al insertar en la BD' });
    } finally {
        // Cerrar la conexión a la base de datos
        await sql.close();
    }
});
module.exports = router;
