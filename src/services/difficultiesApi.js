import axios from '../config/axios'

export const createDifficulty = ({ difficulty, token }) => {
  axios.post('/difficulties', difficulty, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const updateDifficulty = ({ id, token, difficulty }) => {
  axios.put(`/difficulties/${id}`, difficulty, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const deleteDifficulty = ({ id, token }) => {
  axios.delete(`/difficulties/${id}`, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const getDifficultiesByUser = ({ userId, token }) => {
  axios.get('/difficulties', { created_by: userId } ,{
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const getDifficulties = ({ userId, token }) => {
  axios.get('/difficulties', {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}
