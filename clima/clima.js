const axios = require('axios');

const api_key = '64ede09a314aa84873acf08ef7b187dd';

const getClima = async(lat, long) => {
    const respuesta = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api_key}&units=metric`)

    return respuesta.data.main.temp;

}

module.exports = {
    getClima
}