import axios from 'axios'

const baseUrl = 'https://restcountries.eu/rest/v2/all'

const weatherUrl = 'https://api.weatherstack.com/current'



const getWeather = ({key, query}) => {
    const params = {
        access_key: {key},
        query: {query}
        }
    const request = axios.get(weatherUrl, {params})

    return request.then(response => response.data)
}

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

export default  {getAll, getWeather}