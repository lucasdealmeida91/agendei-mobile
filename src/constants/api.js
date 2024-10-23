import axios from "axios";

const api = axios.create({
    
    baseURL: "http://192.168.18.8:3001"
});

api.interceptors.request.use((config) => {
    console.log("config.baseURL", config.baseURL)
    console.log("config.ur", config.url)
    return config
})
export default api