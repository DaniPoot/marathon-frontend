import axios from '../config/axios'

export const createAnswer = ({ answer, token }) => {
  console.log({ answer, token })
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

export const verifyAnswer = ({ token, question, answer }) => {
  return axios.post('/answers/verify/',{ question, answer } ,{
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const getAnswersByQuestion = ({ questionId, token }) => {
  return axios.get(`/answers/question/${questionId}`, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}
