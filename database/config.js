const sql = require('mssql');
require('dotenv').config();

const config = {
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    server: process.env.SERVER_DB,
    database: process.env.DATABASE_DB,
    options: {
        encrypt: false, // Usa TLS, es importante para conexiones seguras.
        trustServerCertificate: true }
};

async function connect(){
    try {
        await sql.connect(config);
        console.log('Conectado a la base de datos');
    }
    catch (error) {
        console.log('Error en la conexión a la base de datos:', error);
    }

};

module.exports = {connect};