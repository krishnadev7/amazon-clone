import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-86a0f/us-central1/api'
})

export default instance;

//  website live link 👇

// https://clone-86a0f.web.app/