import axios from '../config/axios'

export const createDifficulty = ({ difficulty, token }) => {
  return axios.post('/difficulties/create', difficulty, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const getDifficultyById = ({ id, token }) => {
  return axios.get(`/difficulties/${id}`, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const updateDifficulty = ({ id, token, difficulty }) => {
  return axios.put(`/difficulties/${id}`, difficulty, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const deleteDifficulty = ({ id, token }) => {
  return axios.delete(`/difficulties/${id}`, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const getDifficultiesByUser = ({ userId, token }) => {
  return axios.get('/difficulties', { created_by: userId } ,{
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const getDifficulties = ({ token }) => {
  return axios.get('/difficulties', {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}
