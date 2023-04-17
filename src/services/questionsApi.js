import axios from '../config/axios'

export const getQuestionById = ({ id, token }) => {
  return axios.get(`/questions/${id}`, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}

export const createQuestion = ({ question, token }) => {
  console.log({ question, token })
  return axios.post('/questions/create', question, {
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
  return axios.get(`/questions/user/${userId}`, {
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

export const assignAnswersToQuestions = ({ id, token, answers }) => {
  console.log({ id, token, answers })
  return axios.post(`/questions/${id}`, { answers }, {
    headers: {
      authorization: `Bearer ${token}` 
    }
  })
}
