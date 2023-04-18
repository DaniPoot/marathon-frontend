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
  console.log({ answer })
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

export const updateAnswerRelation = ({ id, token, relation }) => {
  return axios.post(`/answers/relation/${id}`, relation, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}
