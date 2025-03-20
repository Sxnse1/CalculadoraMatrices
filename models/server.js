const exp = require('constants');
const express = require('express');
const hbs = require('hbs');
const { connect } = require('../database/config.js');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;
        this.hbs = hbs;

        this.middlewares();
        this.routes();
        connect();

    };

    middlewares() {
        this.app.use(express.static('public'));
        this.app.set('view engine', 'hbs');
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));

    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`El servidor esta escuchando el puerto: http://localhost:${this.port}`);
        });
    };

    routes() {
        this.app.use('/', require('../routes/rt_index'));
    }

}

module.exports = Server;