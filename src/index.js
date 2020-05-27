const express = require('express');
// const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const port = parseInt(process.env.PORT, 10) || 3000;

/** Middleware */
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));

/** Routes */
app.use(require('../routers/index'));

/** Settings */
app.set('json spaces', 4);


/** Start Server */
app.listen(port, () => {
    console.log('Servidor inicialisado en el puerto '+ port);    
});