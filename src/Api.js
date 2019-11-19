import axios from 'axios';
import * as config from './config';

const ACCESS_KEY = config.ACCESS_KEY;
const API_URL = 'https://api.unsplash.com/';

// Get a random Christmas image
export const getChristmas = () => {
    return axios.get(`${API_URL}photos/random/`, {
        params: { query: 'christmas'},
        headers: { Authorization: `Client-ID ${ACCESS_KEY}` }
    })
    .then(({data}) => {
        console.log(data, 'data');
        return data;
    })
};