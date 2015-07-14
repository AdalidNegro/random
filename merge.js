var file = require('fs');

if (process.argv.length < 4) {
    console.log('ERROR!!\n Debe escribirlo con la sintaxis node merge <destino> <origen1> ... <origen n>');
    process.exit();
}

for (var i = 3; i < process.argv.length; i++) {
    file.readFile (process.argv[i], function(err, data) {
        file.appendFile(process.argv[2], data, function(err){
            if(err) {
                throw err; 
            }
            console.log('Archivos agregados');
        });
    });
}
