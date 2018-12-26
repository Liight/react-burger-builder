import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burgerbuilder-d1b0b.firebaseio.com/'
});

export default instance;