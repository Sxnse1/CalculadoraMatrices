const sql = require('mssql');

const config = {
    user: 'chipitastico',
    password: '123456',
    server: 'localhost',
    database: 'matrices',
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