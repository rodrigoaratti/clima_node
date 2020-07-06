const argsv = require('./config/yargs').argsv;
const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');
const { getLugar } = require('./lugar/lugar.js');
const { getClima } = require('./clima/clima.js');

let lugar_resp = lugar.getLugar(argsv.direccion).then(respuesta => {
        //console.log(respuesta);
    })
    .catch(err => {
        console.log('ERROR !!!! ', err);
    });

//let temperatura = clima.getClima(40.750134, -73.997009).then(respuesta => console.log(respuesta)).catch(err => console.log(err));

let getInfo = async(direccion) => {

    try {
        coords = await getLugar(direccion);
        console.log(coords.lat);
        temp = await getClima(coords.latitud, coords.longitud)
        return `La temperatura de ${direccion} es de ${temp}`
    } catch (e) {
        return `No se pudo establecer el clima de ${direccion}`
    }

    //  coords = await lugar.getLugar(direccion);
}

getInfo(argsv.direccion).then(console.log).catch(console.log)