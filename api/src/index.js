const express = require('express');
const app = express();

// Middelwares

app.use(express.json());
app.use(express.urlencoded({extended: false}));


// RUTAS

app.use(require('./routes/index.js'));


app.listen(7200);
console.log('Listening on port 7200')
