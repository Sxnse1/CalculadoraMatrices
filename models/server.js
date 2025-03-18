const exp = require('constants');
const express = require('express');
const hbs = require('hbs');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.hbs = hbs;

        this.middlewares();
        this.routes();

    };

    middlewares() {
        this.app.use(express.static('public'));
        this.app.set('view engine', 'hbs');
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`El servidor esta escuchando el puerto: ${this.port}`);
        });
    };

    routes() {
        this.app.use('/', require('../routes/rt_index'));
    }

}

module.exports = Server;