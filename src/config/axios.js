import axios from 'axios'

const instance = axios.create({
  //baseURL: 'process.env.VUE_APP_API_URL',
  baseURL: 'http://localhost:3002/api',
  headers: {
    'Content-Type': 'application/json',
  }
})

instance.interceptors.response.use(
  response => response.data || {},
  error => {
    return {
      status: error.response.status,
      error: error.response.data
    }
  }
)

export default instance 
