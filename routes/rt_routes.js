const express = require('express');
const router = express.Router();
const sql = require('mssql');

router.post('/save', async (req, res) => {
    const { operacion, matrizJSON } = req.body;

    try {
        // Inserción en la base de datos
        await sql.query`INSERT INTO Matriz (operacion, matriz) VALUES (${operacion}, ${matrizJSON})`;

        // Obtener los resultados actualizados
        const actualizacion = await sql.query("SELECT * FROM Matriz ORDER BY id DESC");   

        // Renderizar los resultados y devolver el HTML
        res.render('partials/resultados', { resultados: actualizacion.recordset }, (err, html) => {
            if (err) {
                console.error('Error al renderizar resultados:', err);
                return res.status(500).json({ error: 'Error al generar los resultados' });
            }

            res.json({
                ok: true,
                html // Devuelve el HTML generado
            });
        });
    } catch (err) {
        console.error('Error al insertar:', err);
        res.status(500).json({ error: 'Error al insertar en la BD' });
    }
});

router.get("/resultados", async (req, res) => {
    try {

        const result = await sql.query("SELECT * FROM Matriz ORDER BY id DESC");
        console.log(result.recordset);
        res.render("resultados", { resultados: result.recordset });
    } catch (err) {
        console.error("Error al obtener los resultados:", err);
        res.status(500).send("Error al obtener resultados");
    }
});



module.exports = router;
