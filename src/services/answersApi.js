import axios from '../config/axios'

export const createAnswer = ({ answer, token }) => {
  return axios.post('/answers/create', answer, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const updateAnswer = ({ id, token, answer }) => {
  return axios.put(`/answers/${id}`, answer, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const deleteAnswer = ({ id, token }) => {
  return axios.delete(`/answers/${id}`, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const getAnswersByUser = ({ userId, token }) => {
  return axios.get('/answers', { created_by: userId }, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}
