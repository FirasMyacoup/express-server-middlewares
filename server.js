'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
const validNum = require('./middlewares/validate-number');
const errorHandler = require('./error-handlers/500');

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;


app.get('/', (req, res) => {
    res.status(200).send('Hello from HomePage')
})

app.get('/square', validNum(), (req, res) => {
   
    const num = req.query.num
    const data = num * num;
    res.status(200).json( {num: data} )
})

app.use(errorHandler);

function start(port){
    app.listen(PORT, () => console.log(`Server Starting on ${PORT}`));
}

module.exports = {
    app: app,
    start: start,
}