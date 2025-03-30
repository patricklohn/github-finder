import axios from 'axios'

const gitHub = axios.create({
    baseURL: "https://api.github.com/",
    headers: {
        "Content-Type": "application/json",
    }
});

export default gitHub;