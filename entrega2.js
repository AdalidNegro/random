var express = require('express');
var app = express();

//	Establecemos la respuesta a las peticiones de tipo GET /preguntas
//	con un formulario para cada una de las preguntas planteadas
app.get('/preguntas', function(req, res) {
	res.send('<html><body>'
			+	'<form method="get" action="/respuesta">'
			+		'¿Quién descubrió América?<br>'
			+		'<input type="text" name="america" /><br>'
			+		'<input type="submit" name="Enviar" /><br>'
			+		'<input type="hidden" name="id1" value="1" />'
			+	'</form>'
			+	'<form method="get" action="/respuesta">'
			+		'¿Capital de Portugal?<br>'
			+		'<input type="text" name="portugal" /><br>'
			+		'<input type="submit" name="Respuesta Portugal" /><br>'
			+		'<input type="hidden" name="id2" value="2" />'
			+	'</form>'
			+	'</body></html>');
});

//	Establecemos la repsuesta a las peticiones de tipo GET /respuesta
//	establenciemdo una petición para cada formulario en función del
//	valor del parámetro oculto que nos llega desde cada formulario
app.get('/respuesta', function(req, res, next) {
	if(req.query.id1 === "1"){
		if(req.query.america === "Cristobal Colón"){
			res.send('Cristobal Colón es la respuesta correcta!!<br>');
		} else {
			next(new Error('Respuesta incorrecta'));
		}
	} else if(req.query.id2 === "2"){
		if(req.query.portugal === "Lisboa"){
			res.send('Lisboa es la respuesta correcta!!<br>');
		} else {
			next(new Error('Respuesta incorrecta'));
		}
	}
});

//	Procesar los errores en las respuestas, una para cada formulario
app.use(function(err, req, res, next) {
	if(req.query.id1 === "1"){
		res.send(err.toString()
				+ '<br>La respuesta correcta es Cristobal Colón<br>'
				+ '<br><a href="preguntas">Volver a la página inicial</a>');
	} else if(req.query.id2 === "2"){
		res.send(err.toString()
				+ '<br>La respuesta correcta es Lisboa<br>'
				+ '<br><a href="preguntas">Volver a la página inicial</a>');
	}
});

//	Indicamos el puerto en el que escucharemos las peticiones
app.listen(8000);