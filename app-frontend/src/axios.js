import axios from 'axios';

const Instance = axios.create({
    baseURL: 'http://localhost:3001'

})

export default Instance;