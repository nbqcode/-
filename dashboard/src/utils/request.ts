import axios from "axios";
const request = axios.create({
  timeout: 3000,
  baseURL:"/admin/v1"
})

request.interceptors.request.use((config) => {
   return config
 }) 
request.interceptors.response.use(({data}) => {
  return data['data'];
})
export default request;