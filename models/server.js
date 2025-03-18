const exp = require('constants');
const express = require('express');

class Server {

    constructor() {

        this.app = express();
        this.port = process.env.PORT;



    };

    middlewares(){
        this.app.use(express.static('public'));
    };

    listen() {
        this.app.listen(this.port, () => {
            console.log(`El servidor esta escuchando el puerto: ${this.port}`);
        });
    };

    routes() {
        this.app.use('/', require('../routes/index'));
    }

}