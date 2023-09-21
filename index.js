const express = require('express');

const dotenv = require('dotenv');
const app = express();

dotenv.config();
const PORT = process.env.PORT || 3000;

app.get('/', (peticion, respuesta) => {

    respuesta.send('Hola mundo, estamos en la clase 4');
    console.log('Macheaste al home');

})

app.get('/main', (peticion, respuesta) => {

    respuesta.send('<h1 style="color:red;">Bienvenido a la aplicacion de Ecommerce</h1>');
    console.log('Cambiamos el texto a rojo y le agregamos un H1');
    console.log(process.env);

})

app.listen(PORT, (err) => {
    if(err) throw err;

    console.log('Servidor corriendo en el puerto http://localhost:${PORT}');
   
});