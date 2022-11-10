import axios from '../config/axios'

export const login = async ({ email, password }) => {
  return axios.post('/login', { email, password })
}

export const verifyUserToken = ({ userId, authToken }) => {
  return axios.post('/verify', { token: authToken, userId })
}

export const signIng = async (user) => {
  return axios.post('/sigin', user)
}

