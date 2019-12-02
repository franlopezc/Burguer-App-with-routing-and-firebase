import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burguer-4f354.firebaseio.com/'
});

export default instance;