const axios = require('axios');

const getLugar = async(direccion) => {

    const consulta = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeURI(direccion)}`,
        timeout: 1000,
        headers: { 'X-RapidAPI-Key': '307e20a584mshfa9955abf1f6a4fp1075a9jsn3765bf139f0b' }
    });

    const respuesta = await consulta.get();

    const resultado = {
        direccion: 'New York City, New York',
        latitud: 40.750134,
        longitud: -73.997009
    }

    return resultado;


}

const getClima = async(lat, long) => {




}


module.exports = {
    getLugar
}