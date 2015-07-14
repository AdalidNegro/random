var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/preguntas', function(req, res) {
    res.send(
        '<html><body>'
        +'<form method="post" action="/respuesta?id=pregunta1">'
        +'¿Quien descubrió América?<br>'
        +'<input type="text" name="descubridor" /><br>'
        +'<input type="submit" value="Enviar" />'
        +'</form>'
        +'<form method="post" action="/respuesta?id=pregunta2">'
        +'¿Capital de Portugal?<br>'
        +'<input type="text" name="capital" /><br>'
        +'<input type="submit" value="Enviar" />'
        +'</form>'
        +'</body></html>'
    );
});

app.post('/respuesta', function(req, res){
    if(req.query.id == 'pregunta1') {
        if(req.body.descubridor == 'Colón') {
            res.send('Su respuesta ' + req.body.descubridor + ' es correcta<br><a href="preguntas">Volver a la página principal</a>');
        } else {
            res.send('Su respuesta ' + req.body.descubridor + ' no es correcta<br> la respuesta correcta es <strong>Colón</strong><br><a href="preguntas">Volver a la página principal</a>');
        }
    }
    else if (req.query.id == 'pregunta2') {
        if(req.body.capital == 'Lisboa') {
            res.send('Su respuesta ' + req.body.capital + ' es correcta<br><a href="preguntas">Volver a la página principal</a>');
        } else {
            res.send('Su respuesta ' + req.body.capital + ' no es correcta<br> la respuesta correcta es <strong>Lisboa</strong><br><a href="preguntas">Volver a la página principal</a>');
        }
    }
});


app.listen(8000);
console.log('Listening on port 8000');
