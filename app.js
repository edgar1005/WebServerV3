const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express()
const port = process.env.PORT;

//TODO: require('hbs')
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials'); 

// Servir contenido estatico
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Edgar Rojas',
        titulo: 'Curso de Node'
    })
});

app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Edgar Rojas',
        titulo: 'Curso de Node'
    })
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Edgar Rojas',
        titulo: 'Curso de Node'
    })
});

app.get('/hola-mundo', (req, res) => {
    res.send('hola mundo en su respectiva ruta')
});


app.get('/generic', (req, res) => {
    res.sendFile(__dirname + '/public/generic.html')
});

app.get('/elements', (req, res) => {
    res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/back/404.html')
});

app.listen(port,() => {
    console.log(`Example app listening at http://localhost:${port}`)
});