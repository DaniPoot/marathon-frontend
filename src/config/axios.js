import axios from 'axios'

const instance = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
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
