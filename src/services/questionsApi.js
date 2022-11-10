import axios from '../config/axios'

export const createQuestion = ({ question, token }) => {
  return axios.post('/questions', question, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const updateQuestion = ({ id, token, question }) => {
  return axios.put(`/questions/${id}`, question, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const deleteQuestion = ({ id, token }) => {
  return axios.delete(`/questions/${id}`, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const getQuestionsByUser = ({ userId, token }) => {
  return axios.get('/questions', { created_by: userId }, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const getQuestionByTopicsAndDifficulties = ({ topics, difficulties, token }) => {
  return axios.post('/questions/random', { topics, difficulties }, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}
