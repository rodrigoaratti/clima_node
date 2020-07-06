const argsv = require('yargs').options({
        direccion: {
            alias: 'd',
            demand: true,
            description: 'Atributo con la direccion de la ciudad a consultar'
        }
    }).help()
    .argv;


module.exports = {
    argsv
}