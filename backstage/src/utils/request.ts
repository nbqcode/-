import axios from "axios";



const instance = axios.create({
    baseURL: "/admin/v1"
})

export default instance;